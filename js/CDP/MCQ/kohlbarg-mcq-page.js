import { kohlbargMcq } from "../../../data/kohlbarg-mcq.js";
import { detectTraps } from "../../../utils/trap_detector.js";
import { offlineAIExplain } from "../../../utils/ai_explainer.js";
import { getPedagogyProfile } from "../../../utils/pedagogy_ai.js";
import { detectBoosts } from "../../../utils/boost_detector.js";


/* ======================
   GLOBAL STATE (NO TIMER)
====================== */

// 🔥 Subject first
let selectedSubject =
  localStorage.getItem("kohlbarg_subject") || "ALL";
  let selectedLimit =
  localStorage.getItem("kohlbarg_limit") || "30";

// 🔥 Dynamic index key
function getIndexKey(){
  return `kohlbarg_q_index_${selectedSubject}`;
}

function getOrderKey(){
  return `kohlbarg_q_order_${selectedSubject}`;
}
function getAttemptKey(){
  return `kohlbarg_attempt_map_${selectedSubject}`;
}

// new line function
function nl2br(text = "") {
  return text.replace(/\n/g, "<br>");
}


// 🔥 Load subject-wise index
let index =
  parseInt(localStorage.getItem(getIndexKey())) || 0;

let answered = false;
let correctCount = 0;
let wrongCount = 0;
let skippedCount = 0; 
let langMode =
  localStorage.getItem("kohlbarg_lang") || "BOTH";

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
  return arr.sort(() => Math.random() - 0.5);
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
    `Resume ${selectedSubject} kohlbarg test?\n\n` +
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
  
  // FORCE reset if limit changed
const savedLimit =
  localStorage.getItem("kohlbarg_limit_saved");

if (savedLimit !== selectedLimit) {
  localStorage.removeItem(getIndexKey());
  localStorage.removeItem(getOrderKey());
  localStorage.removeItem(getAttemptKey());
}

localStorage.setItem(
  "kohlbarg_limit_saved",
  selectedLimit
);

  /* 🔎 Filter by subject */
  if(selectedSubject === "ALL"){
    filteredQuestions = [...kohlbargMcq];
  } else {
    filteredQuestions =
      kohlbargMcq.filter(
        q => q.subject === selectedSubject
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
    savedOrder.length === totalToTake
  ){

    questionOrder = savedOrder;

    filteredQuestions =
      filteredQuestions.slice(0, totalToTake);

  } else {

    /* 🔀 Fresh New Test */
    filteredQuestions =
      shuffleArray(filteredQuestions)
        .slice(0, totalToTake);

    questionOrder =
      filteredQuestions.map((_, i) => i);

    // 🔥 RESET UPSC ATTEMPT TRACKER
    attemptMap = {};

localStorage.removeItem(getAttemptKey());

localStorage.setItem(
  getOrderKey(),
  JSON.stringify(questionOrder)
);
  }
}
/* ======================
  

/* ======================
   🌐 LANGUAGE SWITCH (STRICT)
====================== */
window.toggleLangView = () => {
  if (langMode === "BOTH") langMode = "EN";
  else if (langMode === "EN") langMode = "BN";
  else langMode = "BOTH";

  localStorage.setItem("kohlbarg_lang", langMode);

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
if (!filteredQuestions || !filteredQuestions.length) {

    console.warn("MCQ data not ready → retrying");

    setTimeout(loadQ, 100);
    return;
  }
  
  const currentQIndex = questionOrder[index];
  const q = filteredQuestions[currentQIndex];
  if (!q) return;

  localStorage.setItem(getIndexKey(), index);

  answered = false;
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
((index + 1) / filteredQuestions.length) * 100 + "%";
const progressInfo =
  document.getElementById("progressInfo");

if (progressInfo) {
  progressInfo.innerText =
    `${index + 1} / ${filteredQuestions.length}`;
}

  /* ⭐ bookmark state */
  const isBookmarked = getBookmarks()
    .some(b => b.type === "MCQ" && b.id === q.id);

  /* ======================
     QUESTION TEXT (STRICT)
  ====================== */
  let qText = "";

  if (langMode === "BOTH") {

  qText = nl2br(q.q_en);

  if (q.q_bn && q.q_bn.trim() !== "") {
    qText += `<div class="q-bn">${nl2br(q.q_bn)}</div>`;
  }

}
else if (langMode === "EN") {

  qText = nl2br(q.q_en);

}
else if (langMode === "BN") {

  qText = (q.q_bn && q.q_bn.trim() !== "")
    ? nl2br(q.q_bn)
    : nl2br(q.q_en);

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
  q.options_en.forEach((_, i) => {
    const btn = document.createElement("button");

    const en = q.options_en[i];
    const bn = q.options_bn?.[i] || "";

    let optText = "";

    if (langMode === "BOTH") {
      optText = en;
      if (bn && bn.trim() !== "") {
        optText += `<div class="option-bn">${bn}</div>`;
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
             ${en}
           </div>`
        : ""
    }

    ${
      langMode !== "EN" && bn && bn.trim() !== ""
        ? `<div class="opt-bn">
             <span class="option-label">(${bnLabels[i]})</span>
             ${bn}
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

  if (answered) return;
  answered = true;

  /* 🔒 Disable options */
  document
    .querySelectorAll("#options button")
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
    <h4>📘 Question Explanation</h4>

    <div style="margin-bottom:10px;">
      <b>Question:</b><br>
      ${q.q_en}
      ${q.q_bn
        ? `<div class="q-bn">${q.q_bn}</div>`
        : ""}
    </div>

    <hr>

    <div style="margin-bottom:10px;">
      <b>✔ Correct Answer:</b><br>
      <span class="kw">
        ${q.options_en[correctIndex]}
      </span>

      ${
        q.options_bn?.[correctIndex]
        ? `<div class="option-bn">
            ${q.options_bn[correctIndex]}
           </div>`
        : ""
      }
    </div>

    ${
      q.ans_reason_en || q.ans_reason_bn
      ? `
      <hr>
      <b>Why correct?</b><br>
      ${nl2br(q.ans_reason_en || "")}
      ${
        q.ans_reason_bn
        ? `<div class="q-bn">
            ${nl2br(q.ans_reason_bn || "")}
           </div>`
        : ""
      }
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
      <b>Why other options are wrong?</b>

      <ul class="elim-list">

        ${elimList.map((e, i) => {

          let cls = "elim-wrong";
          let icon = "❌";

          if (i === correctIndex) {
            cls = "elim-correct";
            icon = "✔";
          }
          else if (i === userWrongIndex) {
            cls = "elim-your";
          }

          return `
            <li class="${cls}">
              <b>${icon} Option ${String.fromCharCode(65 + i)}:</b>
              ${e}
            </li>
          `;

        }).join("")}

      </ul>
    `;
  })()
}
${
      (() => {

        const fullText =
          q.q_en +
          " " +
          (q.options_en?.join(" ") || "");

        const boostSignals =
          detectBoosts(fullText, q.subject);

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

    <div style="font-size:13px;color:#374151;">

      📌 <b>Concept:</b>

      <span class="concept-link"
            data-concept="${q.concept || ""}">
        ${q.concept || "—"}
      </span>

      ${
        isWeakConcept(q.concept)
        ? `
        <div class="weak-tag">
          ⚠️ Weak Concept Detected
        </div>
        `
        : ""
      }

      <br>

      📝 <b>Exam:</b>
      ${q.exam || "—"}
      ${q.year ? `(${q.year})` : ""}<br>

      ⚡ <b>Difficulty:</b>
      ${q.difficulty || "—"}

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
      ncert:"",
      personal:"",
      intent:"",
      prediction:"",
      micro:""
    };
  }

  /* ======================
     🤖 AI PANEL
  ====================== */
  explainBox.innerHTML += `
  <hr>

  <div class="ai-toggle"
       onclick="toggleAIExplain(this)">
    🤖 AI Teacher Explanation
    <span class="ai-arrow">▲</span>
  </div>

  <div class="ai-content"
       style="display:block;">

    <!-- 🧠 CONCEPT -->
    <div class="ai-block">
      <h4>🧠 Concept Intelligence</h4>
      ${highlightTraps(
        ai.concept || "",
        q.subject,
        "ai"
      )}
    </div>

    ${
      (ai.elimination || []).length
      ? `
      <hr>
      <h4>❓ Why Options (Deep AI View)</h4>

      <div class="ai-options">

        ${(ai.elimination || [])
          .map((text,idx)=>{

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
                  ${labels[idx]}. ${tag}
                </div>

                <div class="ai-option-text">
                  ${highlightTraps(
                    text || "",
                    q.subject,
                    "ai"
                  )}
                </div>

              </div>
            `;
        }).join("")}

      </div>
      `
      : ""
    }

    <hr>
    <div class="classroom">
      🏫 <b>Classroom Example:</b><br>
      ${highlightTraps(
        ai.classroom || "",
        q.subject,
        "ai"
      )}
    </div>

    <hr>
    <div class="ncert">
      📘 <b>NCERT Reference:</b><br>
      ${highlightTraps(
        ai.ncert || "",
        q.subject,
        "ai"
      )}
    </div>

    <!-- 🧠 PEDAGOGY -->
    <hr>
    <h4>🧠 Pedagogy Intelligence</h4>

    <div class="ai-pedagogy">

      <div class="ped-card concept-link"
           data-concept="${q.concept}">
        🧠 Bloom’s Level<br>
        ${pedagogy.bloom || "—"}
      </div>

      <div class="ped-card concept-link"
           data-concept="${q.concept}">
        👶 Piaget Stage<br>
        ${pedagogy.piaget || "—"}
      </div>

      <div class="ped-card concept-link"
           data-concept="${q.concept}">
        👥 Vygotsky Link<br>
        ${pedagogy.vygotsky || "—"}
      </div>

      <div class="ped-card concept-link"
           data-concept="${q.concept}">
        🧱 Constructivism<br>
        ${pedagogy.constructivism || "—"}
      </div>

    </div>

    ${
      isWeakConcept(q.concept)
      ? `
      <hr>
      <div class="personal">
        🎯 You are weak in
        <b>${q.concept}</b>.
        Revise again.
      </div>
      `
      : ""
    }

  </div>
  `;
};

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
  mode = "static"   // default blue
) {

  if (!text) return "";

  /* detect trap words */
  const traps = detectTraps(text, subject);

  let highlighted = text;

  traps.forEach(word => {

    const reg =
      new RegExp(`\\b(${word})\\b`, "gi");

    highlighted = highlighted.replace(
      reg,

      mode === "ai"
        /* 🔴 AI EXPLANATION */
        ? `<span class="trap-red">$1</span>`

        /* 🔵 STATIC / NORMAL */
        : `<span class="kw">$1</span>`
    );

  });

  return highlighted;
}

function highlightBoosts(
  text = "",
  subject = ""
) {

  if (!text) return "";

  const boosts = detectBoosts(text, subject);

  let highlighted = text;

  boosts.forEach(word => {

    const reg =
      new RegExp(`\\b(${word})\\b`, "gi");

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
function toggleBookmark() {

  const currentQIndex = questionOrder[index];
  const q = filteredQuestions[currentQIndex];

  let b = getBookmarks();
  const pos = b.findIndex(x => x.type === "MCQ" && x.id === q.id);

  const btn = document.getElementById("bookmarkBtn");

  if (!btn) return;

  if (pos > -1) {

    // 🔄 REMOVE BOOKMARK WITH ANIMATION
    btn.classList.add("removing");

    setTimeout(() => {
      b.splice(pos, 1);
      saveBookmarks(b);

      btn.classList.remove("active", "removing");

      showSnack("❌ Bookmark removed");
    }, 300);

  } else {

    // ⭐ ADD BOOKMARK
    b.push({
  type: "MCQ",
  id: q.id,
  subject: q.subject || "General",
  date: Date.now()   // 🔥 IMPORTANT for Latest Sort
});

saveBookmarks(b);

    btn.classList.remove("removing");
    btn.classList.add("active");

    showSnack("⭐ Bookmark saved");
  }
}

window.toggleAIExplain = function (el) {

  const content = el.nextElementSibling;
  const arrow = el.querySelector(".ai-arrow");

  const open = content.style.display === "block";

  content.style.display = open ? "none" : "block";
  arrow.innerText = open ? "▼" : "▲";
};
/* ======================
   NAVIGATION
====================== */
window.nextQ = () => {

  const currentQIndex = questionOrder[index];
  const q = filteredQuestions[currentQIndex];

  if (!q) return;

  /* =====================================
     🔥 If question not answered → mark skipped
  ===================================== */

  const attempt = attemptMap[q.id];

  if (!attempt || attempt.answered !== true) {

    attemptMap[q.id] = {
      visited: true,
      answered: false,
      correct: false,
      selected: null
    };

    localStorage.setItem(
      getAttemptKey(),
      JSON.stringify(attemptMap)
    );
  }

  /* =====================================
     ➡ Move Forward
  ===================================== */

  if (index < filteredQuestions.length - 1) {

    index++;

    localStorage.setItem(
      getIndexKey(),
      index
    );

    loadQ();

  } else {

    saveResultAndGo();

  }
};

window.prevQ = () => {
  if (index > 0) {
    index--;
    loadQ();
  }
};

function saveResultAndGo(){

  const total = filteredQuestions.length;

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  const detailedReview = [];

  for (let i = 0; i < total; i++) {

    const qIndex = questionOrder[i];
    const q = filteredQuestions[qIndex];
    const attempt = attemptMap[q.id];

    let status = "skipped";

    /* ======================================
       🔥 CORRECT SKIPPED LOGIC FIX
    ====================================== */

    if (!attempt || attempt.answered === false) {

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

  const resultData = {
    subject: selectedSubject,
    total,
    correct,
    wrong,
    skipped,
    percentage: total > 0
      ? ((correct / total) * 100).toFixed(1)
      : "0.0",
    date: new Date().toLocaleString(),
    review: detailedReview
  };

  /* 🔥 Save latest result */
  localStorage.setItem(
    "last_kohlbarg_result",
    JSON.stringify(resultData)
  );

  /* 🔥 Push to history */
  let history =
    JSON.parse(localStorage.getItem("kohlbarg_test_history")) || [];

  history.unshift(resultData);

  localStorage.setItem(
    "kohlbarg_test_history",
    JSON.stringify(history)
  );

  /* 🔥 Clean resume keys */
  localStorage.removeItem(getIndexKey());
  localStorage.removeItem(getOrderKey());
  localStorage.removeItem(getAttemptKey());

  location.href = "../../result.html";
}


/* ======================
   🧠 WEAK PAGE NAV
====================== */

window.goWeakPage = () => {

  location.href =
    "../../weak.html";

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

    location.href = "../kohlbarg.html";

  }

};

/* ======================
   🧠 TRACK WEAK CONCEPT
====================== */

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

document
  .getElementById("subjectSelect")
  .addEventListener("change", function(){

    selectedSubject = this.value;

    localStorage.setItem(
      "kohlbarg_subject",
      selectedSubject
    );

    // 🔥 Reset previous subject resume
    localStorage.removeItem(getIndexKey());
    localStorage.removeItem(getOrderKey());
    localStorage.removeItem(getAttemptKey());

    index = 0;

    prepareQuestions();
    loadQ();
});

document
  .getElementById("questionLimit")
  .addEventListener("change", function(){

    selectedLimit = this.value;

    localStorage.setItem(
      "kohlbarg_limit",
      selectedLimit
    );

    // reset test
    localStorage.removeItem(getIndexKey());
    localStorage.removeItem(getOrderKey());
    localStorage.removeItem(getAttemptKey());

    index = 0;

    prepareQuestions();
    loadQ();
});
/* ======================
   INIT
====================== */

window.addEventListener("DOMContentLoaded", () => {

  try {

    prepareQuestions();      // Step 1
    checkResumePractice();   // Step 2
    loadQ();                 // 🔥 Step 3 (MUST)

  } catch (e) {

    console.error("MCQ Init Error:", e);

    // Safe fallback
    prepareQuestions();
    loadQ();
  }

});