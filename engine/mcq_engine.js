import { detectTraps } from "../utils/trap_detector.js";
import { offlineAIExplain } from "../utils/ai_explainer.js";
import { getPedagogyProfile } from "../utils/pedagogy_ai.js";
import { detectBoosts } from "../utils/boost_detector.js";



export function startMCQ(config){
  
  /* ======================
⚙️ FEATURE TOGGLES
====================== */

const FEATURES = {

AI_EXPLANATION:true,   // 🤖 AI panel
TRAP_DETECT:true,       // ⚠ Trap detector
BOOST_DETECT:true       // 🚀 Concept booster

};
  
  const {
data,
subjectKey,
limitKey,
langKey,
indexKey,
orderKey,
attemptKey,
resultKey
} = config;
  
  
  /* ======================
   DATA VALIDATION
====================== */

function validateMCQData(data){

if(!Array.isArray(data)){
console.error("MCQ Data is not an array");
return false;
}

let valid = true;

data.forEach((q,i)=>{

if(!q){
console.warn(`Question ${i} is null`);
valid = false;
return;
}

/* ID FIX */
if(!q.id){
q.id = "q_" + i;
}

/* QUESTION TEXT FIX */
if(!q.q_en){
console.warn(`Question ${q.id} missing q_en`);
q.q_en = "Question text missing";
}

/* OPTIONS FIX */
if(!Array.isArray(q.options_en)){

if(typeof q.options_en === "string"){
q.options_en = [q.options_en];
}
else{
q.options_en = [];
}

}

/* BN OPTIONS SAFE */
if(!Array.isArray(q.options_bn)){
q.options_bn = [];
}

/* ANSWER FIX */
if(typeof q.ans === "string"){
q.ans = parseInt(q.ans);
}

if(typeof q.ans !== "number" || isNaN(q.ans)){
console.warn(`Question ${q.id} invalid ans`);
q.ans = 0;
}

/* ELIMINATION SAFE */
if(!Array.isArray(q.elimination_en)){
q.elimination_en = [];
}

if(!Array.isArray(q.elimination_bn)){
q.elimination_bn = [];
}

});

return valid;

}

window.addEventListener("pageshow", e => {

  if (e.persisted) {
    console.log("Page restored from cache");

    // optional reload guard
    if(!sessionStorage.getItem("pageRestored")){
      sessionStorage.setItem("pageRestored","1");
      location.reload();
    }

  }

});
/* ======================
   GLOBAL STATE (NO TIMER)
====================== */

// 🔥 Subject first
let selectedSubject =
  localStorage.getItem(subjectKey) || "ALL";
  let selectedLimit =
  localStorage.getItem(limitKey) || "30";

// 🔥 Dynamic index key
function getIndexKey(){
  return `${indexKey}_${selectedSubject}`;
}

function getOrderKey(){
  return `${orderKey}_${selectedSubject}`;
}

function getAttemptKey(){
  return `${attemptKey}_${selectedSubject}`;
}

// new line function
function nl2br(text = "") {
  return text.replace(/\n/g, "<br>");
}


// 🔥 Load subject-wise index
let index =
  parseInt(localStorage.getItem(getIndexKey())) || 0;

let answered = false;
let answerLock = false;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0; 
let langMode =
  localStorage.getItem(langKey) || "BOTH";

let questionOrder = [];
let filteredQuestions = [];

let attemptMap =
  JSON.parse(localStorage.getItem(getAttemptKey())) || {};



/* ======================
   DOM ELEMENTS
====================== */
const qBox = document.getElementById("qBox");
const optBox = document.getElementById("options");
const explainBox = document.getElementById("explainBox");
const progressBar = document.getElementById("progressBar");

let lastScroll = 0;

const bottomNav =
  document.querySelector(".bottom-tabs");

function shuffleArray(arr){

const a = [...arr];

for(let i = a.length - 1; i > 0; i--){

const j = Math.floor(Math.random() * (i + 1));

[a[i], a[j]] = [a[j], a[i]];

}

return a;

}


function checkResumePractice() {

  let savedIndex = 0;
  let savedOrder = null;

  try {
    savedIndex =
      parseInt(localStorage.getItem(getIndexKey())) || 0;

    savedOrder =
      JSON.parse(localStorage.getItem(getOrderKey()));
  } catch (e) {
    console.warn("Resume data corrupted. Resetting...");
    localStorage.removeItem(getIndexKey());
    localStorage.removeItem(getOrderKey());
    index = 0;
    return;
  }

  /* ❌ No previous session */
  if (!savedOrder || !Array.isArray(savedOrder) || savedOrder.length === 0) {
    index = 0;
    return;
  }

  /* ❌ Invalid index (safety guard) */
  if (savedIndex < 0 || savedIndex >= savedOrder.length) {

    console.warn("Invalid resume index. Resetting session...");

    localStorage.removeItem(getIndexKey());
localStorage.removeItem(getOrderKey());
localStorage.removeItem(getAttemptKey());

    index = 0;
    return;
  }

  /* ❌ First question → no need to ask resume */
  if (savedIndex === 0) {
    index = 0;
    return;
  }

  /* 🔔 Show resume alert only if user actually progressed */
  const resume = confirm(
    `Resume ${selectedSubject} mcq test?\n\n` +
    `You were at Question ${savedIndex + 1} of ${savedOrder.length}.`
  );

  if (resume) {

    /* ✅ Continue from saved position */
    index = savedIndex;

} else {

  /* 🔄 Start fresh test */
  localStorage.removeItem(getIndexKey());
  localStorage.removeItem(getOrderKey());
  localStorage.removeItem(getAttemptKey()); // 🔥 ADD THIS

  index = 0;
  attemptMap = {}; // memory reset

  prepareQuestions();
}
}


function prepareQuestions(){
  
  questionOrder = [];

  /* 🔎 Filter by subject */
if(selectedSubject === "ALL"){
  filteredQuestions = [...data];
}
else{

  filteredQuestions = data.filter(q =>
selectedSubject === "ALL" ||
(q.subject || "").trim().toLowerCase() === selectedSubject.trim().toLowerCase()
);

}

  /* 🚫 If no question found */
  if(filteredQuestions.length === 0){

    qBox.innerHTML = `
      <div class="no-question">
        🚫 No questions available for
        <b>${selectedSubject}</b>.
        <br><br>
        Please select another subject.
      </div>
    `;

    optBox.innerHTML = "";
    explainBox.style.display = "none";
    progressBar.style.width = "0%";

    document
      .querySelectorAll(".btab")
      .forEach(btn => btn.disabled = true);

    return;
  }

  /* ===================================
     🔥 Resume-Safe Smart Order System
  =================================== */

  let savedOrder = null;
  
  /* 🔥 LIMIT CHANGE FIX */

const savedLimit = localStorage.getItem(limitKey);

if(savedLimit && savedLimit !== selectedLimit){

localStorage.removeItem(getOrderKey());
localStorage.removeItem(getAttemptKey());
localStorage.removeItem(getIndexKey());

savedOrder = null;

}
  

  try {
    savedOrder =
      JSON.parse(localStorage.getItem(getOrderKey()));
  } catch(e){
    console.warn("Saved order corrupted. Resetting...");
    localStorage.removeItem(getOrderKey());
    savedOrder = null;
  }

  let totalToTake;

if (selectedLimit === "ALL") {
  totalToTake = filteredQuestions.length;
} else {
  totalToTake = Math.min(
    parseInt(selectedLimit),
    filteredQuestions.length
  );
}

  /* ✅ Resume Existing Test */
if (
  Array.isArray(savedOrder) &&
  savedOrder.length === totalToTake &&
  selectedSubject !== "ALL"
){
    questionOrder = savedOrder;

  } else {

    /* 🔀 Fresh New Test */
    const shuffled =
shuffleArray(filteredQuestions);

const selected =
shuffled.slice(0, totalToTake);

questionOrder =
selected.map(q =>
filteredQuestions.indexOf(q)
);

    // 🔥 RESET UPSC ATTEMPT TRACKER
    attemptMap = {};

localStorage.removeItem(getAttemptKey());

localStorage.setItem(
  getOrderKey(),
  JSON.stringify(questionOrder)
);

if(index >= questionOrder.length){
index = 0;
localStorage.setItem(getIndexKey(),0);
}
/* 🔒 SAFETY GUARD */

if(!Array.isArray(questionOrder) || questionOrder.length === 0){

console.error("Question order empty");

qBox.innerHTML = `
<div class="no-question">
⚠️ No questions prepared for this test.
</div>
`;

optBox.innerHTML = "";
explainBox.style.display = "none";

return;
}


  }
}
/* ======================*/
  

/* ======================
   🌐 LANGUAGE SWITCH (STRICT)
====================== */
window.toggleLangView = () => {
  if (langMode === "BOTH") langMode = "EN";
  else if (langMode === "EN") langMode = "BN";
  else langMode = "BOTH";

  localStorage.setItem(langKey, langMode);

  answered = false;      // reset state
  loadQ();               // full re-render
};

/* ======================
   ⭐ BOOKMARK SVG
====================== */
function bookmarkSVG() {
  return `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 2h12a1 1 0 0 1 1 1v19l-7-4-7 4V3a1 1 0 0 1 1-1z"/>
    </svg>`;
}

/* ======================
   📦 BOOKMARK STORAGE
====================== */
function getBookmarks() {
  let b = JSON.parse(localStorage.getItem("bookmarks")) || [];

  b = b.map(x => {

    // Old string format fix
    if (typeof x === "string") {
      return {
        type: "MCQ",
        id: x,
        subject: "General",
        date: Date.now()
      };
    }

    // Missing date fix
    if (!x.date) {
      x.date = Date.now();
    }

    // Missing subject fix
    if (!x.subject) {
      x.subject = "General";
    }

    return x;
  });

  localStorage.setItem("bookmarks", JSON.stringify(b));

  return b;
}

function saveBookmarks(b) {
  localStorage.setItem("bookmarks", JSON.stringify(b));
}

/* ======================
   🔔 SNACKBAR
====================== */
function showSnack(msg) {

  const sb = document.getElementById("snackbar");
  const bookmarkBtn = document.getElementById("bookmarkBtn");

  if (!sb) return;

  /* Reset */
  sb.classList.remove(
    "show",
    "snack-success",
    "snack-error",
    "snack-info"
  );

  sb.innerText = msg;

  const text = msg.toLowerCase();

  if (
    text.includes("correct") ||
    text.includes("saved") ||
    text.includes("bookmarked")
  ) {
    sb.classList.add("snack-success");
  }
  else if (
    text.includes("wrong") ||
    text.includes("removed") ||
    text.includes("error")
  ) {
    sb.classList.add("snack-error");
  }
  else {
    sb.classList.add("snack-info");
  }

  /* Default center first (for width calc) */
  sb.style.position = "fixed";
  sb.style.left = "50%";
  sb.style.bottom = "110px";
  sb.style.top = "auto";
  sb.style.transform = "translateX(-50%)";

  /* 📍 If bookmark exists → reposition */
  if (bookmarkBtn) {

    const rect = bookmarkBtn.getBoundingClientRect();

    const snackWidth = sb.offsetWidth || 220;
    const screenWidth = window.innerWidth;

    let left =
      rect.left +
      rect.width / 2;

    /* 🧠 Edge protection */
    const margin = 12;

    if (left - snackWidth / 2 < margin) {
      left = snackWidth / 2 + margin;
    }

    if (left + snackWidth / 2 > screenWidth - margin) {
      left =
        screenWidth -
        snackWidth / 2 -
        margin;
    }

    sb.style.left = left + "px";
    sb.style.top =
      rect.bottom + 10 + "px";
    sb.style.bottom = "auto";
  }

  /* Show */
  sb.classList.add("show");

  setTimeout(() => {
    sb.classList.remove("show");
  }, 1600);
}

/* ======================
   ❓ LOAD QUESTION (FULL REBUILD)
====================== */
function loadQ() {
  
  
  // 🔥 Re-enable nav buttons
  document
    .querySelectorAll(".btab")
    .forEach(btn => btn.disabled = false);
  // Data not loaded yet
if (!Array.isArray(filteredQuestions) || filteredQuestions.length === 0) {

console.error("No questions found → ending test");

saveResultAndGo();
return;

}
  /* ⭐ GUARD ADD HERE (BEFORE currentQIndex) */
  if(index >= questionOrder.length){

    console.warn("Index exceeded question order → submitting test");

    saveResultAndGo();
    return;
  }
  
  
  const currentQIndex = questionOrder[index];

if(currentQIndex === undefined){
console.error("Invalid question index");
saveResultAndGo();
return;
}

const q = filteredQuestions[currentQIndex];

if(!q){
console.error("Question not found → submitting test");



saveResultAndGo();
return;
}
/* 🔒 SAFE DATA GUARD */
q.elimination_en = q.elimination_en || [];
q.elimination_bn = q.elimination_bn || [];
q.options_en = q.options_en || [];
q.options_bn = q.options_bn || [];
q.ans_reason_en = q.ans_reason_en || "";
q.ans_reason_bn = q.ans_reason_bn || "";

  localStorage.setItem(getIndexKey(), index);

  answered = false;
  answerLock = false;
  optBox.innerHTML = "";
  explainBox.style.display = "none";
  explainBox.innerHTML = "";
  /* RESET ANSWER STATUS */
const statusBox =
  document.getElementById("answerStatus");

if (statusBox) {
  statusBox.innerHTML = "";
}

  /* 🌐 update language button label */
  const langBtn = document.querySelector(".lang-switch");
  if (langBtn) {
    langBtn.innerText =
      langMode === "BOTH" ? "🌐 EN+BN" :
      langMode === "EN" ? "🌐 EN" :
      "🌐 BN";
  }

  /* 📊 progress */
  progressBar.style.width =
((index + 1) / questionOrder.length) * 100 + "%";
const progressInfo =
  document.getElementById("progressInfo");

if (progressInfo) {
  progressInfo.innerText =
    `${index + 1} / ${questionOrder.length}`;
}

  /* ⭐ bookmark state */
 const isBookmarked = getBookmarks()
  .some(b => b.id === q.id);

  /* ======================
     QUESTION TEXT (STRICT)
  ====================== */
  let qText = "";

if (langMode === "BOTH") {

  qText = nl2br(q.q_en);

  if (q.q_bn && q.q_bn.trim() !== "") {
    qText += `<div class="q-bn">
${nl2br(q.q_bn)}
</div>`;
  }

}
else if (langMode === "EN") {

  qText = nl2br(q.q_en);

}
else if (langMode === "BN") {

  const bnText =
    (q.q_bn && q.q_bn.trim() !== "")
      ? q.q_bn
      : q.q_en;

  qText = nl2br(bnText);

}

  qBox.innerHTML = `
  <div class="q-title-row">

    <div class="q-left">
      <span class="q-number">Q${index + 1}.</span>
      <h3>${qText}</h3>
    </div>

    <div class="bookmark ${isBookmarked ? "active" : ""}" id="bookmarkBtn">
      ${bookmarkSVG()}
    </div>

  </div>
`;

  document.getElementById("bookmarkBtn").onclick = toggleBookmark;

  /* ======================
     OPTIONS (STRICT)
  ====================== */
  (q.options_en || []).forEach((_, i) => {
    const btn = document.createElement("button");

    const en = q.options_en[i];
    const bn = q.options_bn?.[i] || "";

    let optText = "";

if (langMode === "BOTH") {

  optText = nl2br(en);

  if (bn && bn.trim() !== "") {

    optText += `<div class="option-bn">
      ${nl2br(bn)}
    </div>`;

  }

}
else if (langMode === "EN") {
  optText = en;                 // ✅ ONLY EN
}
else if (langMode === "BN") {
  optText = (bn && bn.trim() !== "") ? bn : en; // BN fallback
}

const labels = ["A", "B", "C", "D"];

let engLabels = ["A", "B", "C", "D"];
let bnLabels  = ["ক", "খ", "গ", "ঘ"];

btn.innerHTML = `
  <div class="option-text">

    ${
langMode !== "BN"
? `<div class="opt-en">
<span class="option-label">${engLabels[i]}.</span>
${
answered
? highlightBoosts(
    highlightTraps(
      nl2br(en),
      q.subject
    ),
    q.subject
  )
: nl2br(en)
}
</div>`
: ""
}

    ${
  langMode !== "EN" && bn && bn.trim() !== ""
    ? `<div class="opt-bn">
         <span class="option-label">(${bnLabels[i]})</span>
         ${
answered
? highlightBoosts(
    highlightTraps(
      nl2br(bn),
      q.subject
    ),
    q.subject
  )
: nl2br(bn)
}
       </div>`
    : ""
}

  </div>

  <span class="trap-badge" style="display:none;">TRAP</span>
  <div class="trap-hint" style="display:none;"></div>

  <span class="boost-badge" style="display:none;">BOOST</span>
  <div class="boost-hint" style="display:none;"></div>
`;

    btn.onclick = () => {

  if(answerLock) return;

     answerLock = true;
     answered = true;

  /* 🔒 Disable options */
  document .querySelectorAll("#options button")
    .forEach(b => (b.disabled = true));

  const labels = ["A","B","C","D"];
  const clickedIndex = i;
  const correctIndex = q.ans;
  const userWrongIndex =
  clickedIndex !== correctIndex
    ? clickedIndex
    : null;

  /* ======================
     ✅ CORRECT / WRONG
  ====================== */
if (clickedIndex === correctIndex) {

  attemptMap[q.id] = {
    visited: true,
    answered: true,
    correct: true,
    selected: clickedIndex
  };

  btn.classList.add("correct");

  // ✅ GREEN SNACKBAR
  showSnack("✅ Correct Answer");

} else {

  attemptMap[q.id] = {
    visited: true,
    answered: true,
    correct: false,
    selected: clickedIndex
  };

  btn.classList.add("wrong");
  optBox.children[correctIndex]?.classList.add("correct");

  // 🔴 RED SNACKBAR
  showSnack("❌ Wrong Answer");
}
/* 🔥 SAVE ATTEMPT MAP */
localStorage.setItem(
  getAttemptKey(),
  JSON.stringify(attemptMap)
);
  /* ======================
   📊 ANSWER STATUS BAR
====================== */

const statusBox =
  document.getElementById("answerStatus");

if (statusBox) {

  statusBox.innerHTML = `
    <div class="ans ${
      clickedIndex === correctIndex
        ? "correct"
        : "wrong"
    }">
      ${
        clickedIndex === correctIndex
          ? "✅ Correct Answer"
          : "❌ Wrong Answer"
      }
    </div>
  `;

  /* Auto focus */
  setTimeout(() => {
  statusBox.scrollIntoView({
    behavior: "smooth",
    block: "nearest"
  });
}, 200);
}

  /* ======================
     🧠 WEAK TRACK CALL
  ====================== */
  try {

    trackWeakConcept(
      q.concept,
      clickedIndex !== correctIndex
    );

  } catch(e){
    console.warn("Weak Track Error:", e);
  }

  /* ======================
     🔥 TRAP HIGHLIGHT
  ====================== */
  document
    .querySelectorAll("#options button")
    .forEach((b, idx) => {

      const traps = detectTraps(
        (q.options_en[idx] || "") +
        " " +
        (q.options_bn?.[idx] || ""),
        q.subject
      );

      if (traps.length) {

        b.classList.add("trap-active");

        const badge =
          b.querySelector(".trap-badge");

        const hint =
          b.querySelector(".trap-hint");

        if (badge)
          badge.style.display="inline-block";

        if (hint) {

          hint.innerHTML =
            `⚠️ Trap words: ${traps.join(", ")}`;

          hint.style.display="block";
        }
      }
    });
    
    /* ======================
   🚀 BOOST HIGHLIGHT
====================== */
document
  .querySelectorAll("#options button")
  .forEach((b, idx) => {

    const boosts = detectBoosts(
      (q.options_en[idx] || "") +
      " " +
      (q.options_bn?.[idx] || ""),
      q.subject
    );

    if (boosts.length) {

      const badge =
        b.querySelector(".boost-badge");

      const hint =
        b.querySelector(".boost-hint");

      if (badge)
        badge.style.display = "inline-block";

      if (hint) {

        hint.innerHTML =
          `🚀 Boost words: ${boosts.join(", ")}`;

        hint.style.display = "block";
      }
    }
  });

  /* ======================
     📘 STATIC EXPLANATION
  ====================== */
  explainBox.style.display="block";

  explainBox.innerHTML = `
<h4 class="explain-title">📘 Question Explanation</h4>

<div class="explain-question-card">

<div class="question-label">
❓ Question
</div>

<div class="question-text">

<div class="question-en">
${q.q_en}
</div>

${
q.q_bn
? `<div class="question-bn">
${q.q_bn}
</div>`
: ""
}

</div>

</div>

    <hr>

<div class="correct-answer-card">

<div class="answer-label">
✔ Correct Answer
</div>

<div class="answer-text">

<div class="answer-en">
${q.options_en?.[correctIndex] || ""}
</div>

${
q.options_bn?.[correctIndex]
? `<div class="answer-bn">
${q.options_bn[correctIndex]}
</div>`
: ""
}

</div>

</div>

${
q.ans_reason_en || q.ans_reason_bn
? `

<hr>

<div class="why-card">

<div class="why-label">
💡 Why Correct?
</div>

<div class="why-text">

<div class="why-en">
${nl2br(q.ans_reason_en || "")}
</div>

${
q.ans_reason_bn
? `<div class="why-bn">
${nl2br(q.ans_reason_bn)}
</div>`
: ""
}

</div>

</div>

`
: ""
}

${
  (() => {

    let elimList = [];

    // 🌐 Language based selection
    if (langMode === "EN") {

      elimList = q.elimination_en || [];

    } 
    else if (langMode === "BN") {

      elimList = q.elimination_bn || [];

    } 
    else { // BOTH MODE

      // Combine EN + BN properly
      if (q.elimination_en && q.elimination_bn) {

        elimList = q.elimination_en.map((enText, i) => {

          const bnText = q.elimination_bn[i] || "";

          return `
            <div>${enText}</div>
            <div class="q-bn">${bnText}</div>
          `;

        });

      } else {

        elimList = q.elimination_en || q.elimination_bn || [];

      }

    }

    if (!Array.isArray(elimList) || !elimList.length) {
      return "";
    }

    return `
<hr>

<div class="option-analysis-card">

<div class="analysis-title">
❌ Option Wise Analysis
</div>

<div class="elim-options">

${elimList.map((e,i)=>{

let state="";
let tag="";
let icon="❌";

if(i===correctIndex){
state="elim-correct";
tag="✔ Correct";
icon="✔";
}
else if(i===userWrongIndex){
state="elim-your";
tag="❌ Your Choice";
}

return `

<div class="elim-option ${state}">

<div class="elim-head">

<span class="elim-label">
${icon} Option ${String.fromCharCode(65+i)}
</span>

${tag ? `<span class="elim-tag">${tag}</span>` : ""}

</div>

<div class="elim-body">
${(e || "").replace(/[❌✔]/g,"")}
</div>

</div>

`;

}).join("")}

</div>

</div>
`;
  })()
}
${
      (() => {

        const fullText =
          q.q_en +
          " " +
          (q.options_en?.join(" ") || "");

        let boostSignals = [];

try{

boostSignals =
detectBoosts(fullText, q.subject) || [];

}catch(e){

console.warn("Boost detect error:",e);
boostSignals=[];

}

        if (!boostSignals.length) return "";

        return `
          <hr>
          <div class="boost-box">
            🚀 <b>Exam Booster Signals:</b><br>
            ${boostSignals
              .map(b =>
                `<span class="boost-green">${b}</span>`
              )
              .join(", ")}
          </div>
        `;

      })()
    }
<hr>

<div class="meta-box">

  <div class="meta-item concept">

    <div class="meta-label">
      📌 Concept
    </div>

    <div class="meta-value">

      <span class="concept-link"
            data-concept="${q.concept || ""}">
        ${q.concept || "—"}
      </span>

      ${
        isWeakConcept(q.concept)
        ? `<span class="weak-badge">⚠ Weak</span>`
        : ""
      }

    </div>

  </div>

  <div class="meta-item exam">

    <div class="meta-label">
      📝 Exam
    </div>

    <div class="meta-value">
      ${q.exam || "—"}
      ${q.year ? `<span class="exam-year">(${q.year})</span>` : ""}
    </div>

  </div>

  <div class="meta-item difficulty">

    <div class="meta-label">
      ⚡ Difficulty
    </div>

    <div class="meta-value difficulty-${(q.difficulty || "low").toLowerCase()}">
      ${q.difficulty || "—"}
    </div>

  </div>

</div>
  `;

  /* ======================
     🧠 PEDAGOGY PROFILE
  ====================== */
  let pedagogy = {};

  try {

    pedagogy =
      getPedagogyProfile({
        concept: q.concept,
        subject: q.subject
      }) || {};

  } catch(e){
    console.warn("Pedagogy Error:", e);
  }

  /* ======================
     🤖 AI SAFE LOAD
  ====================== */
  let ai = {};

try {

  ai =
    offlineAIExplain(
      q,
      clickedIndex,
      langMode
    ) || {};

} catch(e){

  console.warn("AI Error:", e);

  ai = {
    concept:"",
    elimination:[],
    classroom:"",
    ncert:""
  };
}

/* ======================
🤖 AI PANEL
====================== */

if(FEATURES.AI_EXPLANATION){

const labels = ["A","B","C","D"];

let eliminationHTML = "";

if(Array.isArray(ai.elimination) && ai.elimination.length){

eliminationHTML = `
<div class="ai-card">

<div class="ai-card-title">
❓ Why Options
</div>

<div class="ai-options">

${ai.elimination.map((text,idx)=>{

let state="";
let tag="";

if(idx===correctIndex){
state="correct";
tag="✔ Correct";
}
else if(idx===clickedIndex){
state="wrong";
tag="❌ Your Choice";
}

return `
<div class="ai-option ${state}">

<div class="ai-option-title">
Option ${labels[idx]}
<span class="ai-tag">${tag}</span>
</div>

<div class="ai-option-text">
${highlightTraps(text || "", q.subject,"ai")}
</div>

</div>
`;

}).join("")}

</div>
</div>
`;

}

explainBox.innerHTML += `
<hr>

<div class="ai-panel">

<div class="ai-header" onclick="toggleAIExplain(this)">

<div class="ai-title">
🤖 AI Teacher Explanation
</div>

<div class="ai-toggle-icon">
▲
</div>

</div>

<div class="ai-content" style="display:none;">

<div class="ai-card ai-concept">

<div class="ai-card-title">
🧠 Concept Intelligence
</div>

<div class="ai-card-body">
${highlightTraps(ai.concept || "", q.subject,"ai")}
</div>

</div>

${eliminationHTML}

<div class="ai-card">

<div class="ai-card-title">
🏫 Classroom Example
</div>

<div class="ai-card-body">
${highlightTraps(ai.classroom || "", q.subject,"ai")}
</div>

</div>

<div class="ai-card">

<div class="ai-card-title">
📘 NCERT Reference
</div>

<div class="ai-card-body">
${highlightTraps(ai.ncert || "", q.subject,"ai")}
</div>

</div>

<div class="ai-card pedagogy-card">

<div class="ai-card-title">
🧠 Pedagogy Intelligence
</div>

<div class="ai-pedagogy">

<div class="ped-card concept-link"
data-concept="${q.concept}">
🧠 Bloom’s Level
<span>${pedagogy.bloom || "—"}</span>
</div>

<div class="ped-card concept-link"
data-concept="${q.concept}">
👶 Piaget Stage
<span>${pedagogy.piaget || "—"}</span>
</div>

<div class="ped-card concept-link"
data-concept="${q.concept}">
👥 Vygotsky Link
<span>${pedagogy.vygotsky || "—"}</span>
</div>

<div class="ped-card concept-link"
data-concept="${q.concept}">
🧱 Constructivism
<span>${pedagogy.constructivism || "—"}</span>
</div>

</div>

</div>

${
isWeakConcept(q.concept)
? `<div class="ai-warning">
⚠ You are weak in <b>${q.concept}</b>
</div>`
: ""
}

</div>
</div>
`;

}
}
    optBox.appendChild(btn);
  });
}


/* ======================
   🔥 TRAP WORD HIGHLIGHT
   mode = "static" | "ai"
====================== */
function highlightTraps(
  text = "",
  subject = "",
  mode = "static"
){

if(!FEATURES.TRAP_DETECT) return text;

let traps = [];

try{

traps = detectTraps(text, subject) || [];

}catch(e){

console.warn("Trap detect error:",e);
traps = [];

}

let highlighted = text;

traps.forEach(word => {

const reg =
new RegExp(`\\b(${word})\\b`, "gi");

highlighted = highlighted.replace(
reg,

mode === "ai"
? `<span class="trap-red">$1</span>`
: `<span class="kw">$1</span>`

);

});

return highlighted;

}

function highlightBoosts(text="", subject=""){

if(!FEATURES.BOOST_DETECT) return text;

let boosts=[];

try{

boosts = detectBoosts(text,subject) || [];

}catch(e){

console.warn("Boost detect error:",e);
boosts=[];

}

let highlighted=text;

boosts.forEach(word=>{

const reg=
new RegExp(`\\b(${word})\\b`,"gi");

highlighted = highlighted.replace(
reg,
`<span class="boost-green">$1</span>`
);

});

return highlighted;

}

/* ======================
   ⭐ BOOKMARK TOGGLE
====================== */
function toggleBookmark(){

const currentQIndex = questionOrder[index];
const q = filteredQuestions[currentQIndex];

if(!q){
console.warn("Bookmark: question not found");
return;
}

let b = getBookmarks() || [];

const pos = b.findIndex(
x => x.id === q.id
);

const btn =
document.getElementById("bookmarkBtn");

if(!btn) return;


/* ======================
REMOVE BOOKMARK
====================== */

if(pos > -1){

btn.classList.add("removing");

setTimeout(()=>{

b.splice(pos,1);

saveBookmarks(b);

btn.classList.remove(
"active",
"removing"
);

showSnack("❌ Bookmark removed");

},300);

}


/* ======================
ADD BOOKMARK
====================== */

else{

/* duplicate protection */
if(!b.some(x => x.id === q.id)){

b.push({
type:q.type || "MCQ",
id:q.id,
subject:q.subject || "General",
date:Date.now()
});

}

saveBookmarks(b);

btn.classList.remove("removing");
btn.classList.add("active");

showSnack("⭐ Bookmark saved");

}

}

window.toggleAIExplain = function(el){

const panel = el.closest(".ai-panel");
if(!panel) return;

const content = panel.querySelector(".ai-content");
const arrow = el.querySelector(".ai-toggle-icon");

if(!content) return;

const open = content.style.display === "block";

content.style.display = open ? "none" : "block";

if(arrow){
arrow.style.transform = open
? "rotate(0deg)"
: "rotate(180deg)";
}

};
/* ======================
   NAVIGATION
====================== */
window.nextQ = () => {

const currentQIndex = questionOrder[index];
const q = filteredQuestions[currentQIndex];

if(!q){
saveResultAndGo();
return;
}

const attempt = attemptMap[q.id];

if(!attempt || attempt.answered !== true){

attemptMap[q.id] = {
visited:true,
answered:false,
correct:false,
selected:null
};

localStorage.setItem(
getAttemptKey(),
JSON.stringify(attemptMap)
);

}

/* 🔥 LAST QUESTION FIX */
if(index >= questionOrder.length - 1){
saveResultAndGo();
return;
}

index++;

localStorage.setItem(
getIndexKey(),
index
);

loadQ();

};

window.prevQ = () => {
  if (index > 0) {
    index--;
    loadQ();
  }
};

function saveResultAndGo(){

  /* 🔥 USE ORDER LENGTH (FIX FOR ALL SUBJECT MODE) */
  const total = questionOrder.length;

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  const detailedReview = [];

  for (let i = 0; i < total; i++) {

    const qIndex = questionOrder[i];
    const q = filteredQuestions[qIndex];

    if(!q) continue;

    const attempt = attemptMap[q.id];

    let status = "skipped";

    /* ==============================
       ANSWER STATUS CHECK
    ============================== */

    if (!attempt || attempt.answered !== true) {

      skipped++;
      status = "skipped";

    }
    else if (attempt.correct === true) {

      correct++;
      status = "correct";

    }
    else {

      wrong++;
      status = "wrong";

    }

    detailedReview.push({
      id: q.id,
      question_en: q.q_en,
      question_bn: q.q_bn,
      options_en: q.options_en,
      options_bn: q.options_bn,
      correctAnswer: q.ans,
      selected: attempt?.selected ?? null,
      status: status,
      explanation_en: q.ans_reason_en || "",
      explanation_bn: q.ans_reason_bn || "",
      concept: q.concept || "",
      exam: q.exam || "",
      year: q.year || ""
    });

  }

  /* ==============================
     RESULT DATA
  ============================== */

  const resultData = {
    subject: selectedSubject,
    total: total,
    correct: correct,
    wrong: wrong,
    skipped: skipped,
    percentage:
      total > 0
        ? ((correct / total) * 100).toFixed(1)
        : "0.0",
    date: new Date().toLocaleString(),
    review: detailedReview
  };

  /* ==============================
     SAVE LAST TEST PAGE
  ============================== */

  localStorage.setItem(
    "last_test_page",
    location.href
  );

  localStorage.setItem(
    "last_test_type",
    resultKey || "MCQ"
  );

  /* ==============================
     SAVE LATEST RESULT
  ============================== */

  localStorage.setItem(
    resultKey,
    JSON.stringify(resultData)
  );

  /* ==============================
     SAVE RESULT HISTORY
  ============================== */

  let history =
    JSON.parse(
      localStorage.getItem(
        resultKey.replace("result","history")
      )
    ) || [];

  history.unshift(resultData);

  if(history.length > 50){
    history = history.slice(0,50);
  }

  localStorage.setItem(
    resultKey.replace("result","history"),
    JSON.stringify(history)
  );

  /* ==============================
     CLEAR SESSION
  ============================== */

  localStorage.removeItem(getIndexKey());
  localStorage.removeItem(getOrderKey());
  localStorage.removeItem(getAttemptKey());

  /* ==============================
     GO RESULT PAGE
  ============================== */

  window.location.href = "../result.html";

}


/* ======================
   🧠 WEAK PAGE NAV
====================== */

window.goWeakPage = () => {

  location.href =
    "weak.html";

};

/* ======================
   🧠 CONCEPT → PEDAGOGY POPUP
====================== */
window.showConceptPedagogy = function (concept) {

  const pedagogy = getPedagogyProfile({
    concept: concept
  }) || {};

  const box = document.createElement("div");
  box.className = "concept-popup";

  box.innerHTML = `
    <div class="concept-card">

      <h3>🧠 Pedagogy Intelligence</h3>

      <div class="ped-grid">

        <div class="ped-card">
          🧠 Bloom’s Level<br>
          ${pedagogy.bloom || "—"}
        </div>

        <div class="ped-card">
          👶 Piaget Stage<br>
          ${pedagogy.piaget || "—"}
        </div>

        <div class="ped-card">
          👥 Vygotsky Link<br>
          ${pedagogy.vygotsky || "—"}
        </div>

        <div class="ped-card">
          🧱 Constructivism<br>
          ${pedagogy.constructivism || "—"}
        </div>

      </div>

      <button onclick="this.closest('.concept-popup').remove()">
        Close
      </button>

    </div>
  `;

  document.body.appendChild(box);
};

window.goBack = function(){

  if(history.length > 1){

    history.back();

  }else{

    location.href = "dashboard.html";

  }

};




function trackWeakConcept(concept, isWrong){

  // Concept na thakle skip
  if(!concept) return;

  // Local data load
  let data =
    JSON.parse(
      localStorage.getItem("weakConcepts")
    ) || {};

  // First time concept
  if(!data[concept]){
    data[concept] = {
      total: 0,
      wrong: 0
    };
  }

  // Attempt count
  data[concept].total++;

  // Wrong hole increase
  if(isWrong){
    data[concept].wrong++;
  }

  // Save
  localStorage.setItem(
    "weakConcepts",
    JSON.stringify(data)
  );
}

/* ======================
   🧠 CHECK WEAK CONCEPT
====================== */

function isWeakConcept(concept){

  let data =
    JSON.parse(
      localStorage.getItem("weakConcepts")
    ) || {};

  // Data nai → weak na
  if(!data[concept]) return false;

  const total =
    data[concept].total;

  const wrong =
    data[concept].wrong;

  // Accuracy %
  const accuracy =
    ((total - wrong) / total) * 100;

  return accuracy < 60; // Threshold
}


/* CONCEPT CLICK GLOBAL */
document.addEventListener("click", e => {

  const link =
    e.target.closest(".concept-link");

  if (!link) return;

  e.preventDefault();
  e.stopPropagation();

  const concept =
    link.dataset.concept;

  if (concept) {
    showConceptPedagogy(concept);
  }

});


/* ======================
   🔥 AUTO SUBJECT LOADER
====================== */

function autoLoadSubjects(){

const subjectSelect =
document.getElementById("subjectSelect");

if(!subjectSelect) return;

/* keep ALL option */
subjectSelect.innerHTML =
`<option value="ALL">All Subjects</option>`;

/* detect subjects from data */
const subjects =
[...new Set(data.map(q => q.subject || "General"))];

subjects.forEach(sub => {

const opt =
document.createElement("option");

opt.value = sub;
opt.textContent = sub;

subjectSelect.appendChild(opt);

});

}

/* ======================
   SUBJECT SELECT ENGINE
====================== */

function initSubjectSelector(){

const subjectSelect =
document.getElementById("subjectSelect");

/* ELEMENT NOT FOUND → SAFE EXIT */
if(!subjectSelect){
console.warn("subjectSelect not found");
return;
}

/* AUTO SYNC SELECT VALUE */
try{

const savedSubject =
localStorage.getItem(subjectKey) || "ALL";

if(subjectSelect.value !== savedSubject){
subjectSelect.value = savedSubject;
}

selectedSubject = savedSubject;

}catch(e){
console.warn("Subject sync error",e);
}

/* PREVENT DOUBLE BIND */
if(subjectSelect.dataset.bound === "true") return;
subjectSelect.dataset.bound = "true";

/* SUBJECT CHANGE HANDLER */

let changeTimer = null;

subjectSelect.addEventListener("change",function(){

const newSubject = this.value;

/* SAME SUBJECT → IGNORE */
if(newSubject === selectedSubject) return;

/* DEBOUNCE FAST CHANGES */
clearTimeout(changeTimer);

changeTimer = setTimeout(()=>{

try{

selectedSubject = newSubject;

/* SAVE SUBJECT */
localStorage.setItem(
subjectKey,
selectedSubject
);

/* RESET SESSION STORAGE */

localStorage.removeItem(getIndexKey());
localStorage.removeItem(getOrderKey());
localStorage.removeItem(getAttemptKey());

/* RESET ENGINE STATE */

index = 0;
attemptMap = {};
questionOrder = [];
filteredQuestions = [];

/* LOAD NEW TEST */

prepareQuestions();
checkResumePractice();
loadQ();

/* SMALL UX FEEDBACK */

console.info(
`MCQ Subject switched → ${selectedSubject}`
);

}catch(e){

console.error("Subject change error",e);

index = 0;
prepareQuestions();
loadQ();

}

},120);

});

}

/* ======================
   INIT CALL
====================== */



/* ======================
   QUESTION LIMIT SELECT
====================== */

const limitSelect =
document.getElementById("questionLimit");

/* element not found → safe exit */
if(!limitSelect){
  console.warn("questionLimit element not found");
}
else{

  /* prevent double binding */
  if(limitSelect.dataset.bound !== "true"){

    limitSelect.dataset.bound = "true";

    /* auto sync saved value */
    const savedLimit =
    localStorage.getItem(limitKey);

    if(savedLimit){
      limitSelect.value = savedLimit;
      selectedLimit = savedLimit;
    }

    /* change handler */
    limitSelect.addEventListener("change",function(){

      const newLimit = this.value;

      /* same limit → ignore */
      if(newLimit === selectedLimit) return;

      selectedLimit = newLimit;

      /* save limit */
      localStorage.setItem(
        limitKey,
        selectedLimit
      );

      /* reset session */
      localStorage.removeItem(getIndexKey());
      localStorage.removeItem(getOrderKey());
      localStorage.removeItem(getAttemptKey());

      /* reset engine state */
      index = 0;
      attemptMap = {};
      questionOrder = [];
      filteredQuestions = [];

      /* reload questions */
      prepareQuestions();
      loadQ();

    });

  }

}
/* ======================
   INIT
====================== */
window.addEventListener("DOMContentLoaded", () => {
  
  if(!validateMCQData(data)){
console.error("MCQ DATA INVALID");
return;
}

/* 🔥 AUTO SUBJECT LOAD */
autoLoadSubjects();
initSubjectSelector();

  try {
    // 🔥 Prepare subject-wise 30 random questions
    prepareQuestions();

    // Resume check
    checkResumePractice();
    
    // Small delay → ensure module data ready
    setTimeout(() => {
      loadQ();
    }, 50);

  } catch (e) {

    console.error("MCQ Init Error:", e);

    // Retry fallback
    setTimeout(loadQ, 200);

  }

});


/* ======================
   GLOBAL ERROR GUARD
====================== */

window.addEventListener("error",e=>{

console.error("MCQ Engine Error:",e);

const sb=document.getElementById("snackbar");

if(sb){
sb.innerText="⚠️ Engine error occurred";
sb.classList.add("show");

setTimeout(()=>{
sb.classList.remove("show");
},1500);
}
  
});

}