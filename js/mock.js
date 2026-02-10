import { mockQuestion } from "../data/mock_question.js";
import { detectTraps } from "../utils/trap_detector.js";
import { offlineAIExplain } from "../utils/ai_explainer.js";
import {
  initSpinner,
  showSpinner,
  hideSpinner
} from "../js/spinner.js";


/* Init spinner HTML */

await initSpinner();

/* Page start → show */

showSpinner();

/* ======================
   GLOBAL STATE (RESUME SAFE)
====================== */
let index = parseInt(localStorage.getItem("mock_q_index")) || 0;
let time = parseInt(localStorage.getItem("mock_time_left")) || (10 * 60);
let answered = false;
let langMode = "BOTH"; // BOTH | EN | BN

/* ======================
   RANDOM QUESTION ORDER (PERSISTENT)
====================== */
let questionOrder =
  JSON.parse(localStorage.getItem("mock_q_order")) ||
  mockQuestion.map((_, i) => i).sort(() => Math.random() - 0.5);

localStorage.setItem("mock_q_order", JSON.stringify(questionOrder));

/* ======================
   DOM ELEMENTS
====================== */
const qBox = document.getElementById("qBox");
const optBox = document.getElementById("options");
const timerBox = document.getElementById("timer");
const progressBar = document.getElementById("progressBar");
const hintBox = document.getElementById("hintBox");
const correctBox = document.getElementById("correctBox");

let lastScroll = 0;

const bottomNav =
  document.querySelector(".bottom-tabs");

window.addEventListener("scroll", ()=>{

  const currentScroll =
    window.pageYOffset;

  if(currentScroll > lastScroll){

    /* Scroll Down → Hide */

    bottomNav.style.transform =
      "translate(-50%, 120px)";

    bottomNav.style.opacity = "0";

  }else{

    /* Scroll Up → Show */

    bottomNav.style.transform =
      "translate(-50%, 0)";

    bottomNav.style.opacity = "1";
  }

  lastScroll = currentScroll;

});

/* ======================
   🔔 RESUME ALERT
====================== */
function checkResumeTest() {
  const hasProgress =
    localStorage.getItem("mock_q_index") !== null ||
    localStorage.getItem("mock_time_left") !== null;

  if (hasProgress && index > 0) {
    const resume = confirm(
      "You have an unfinished test.\nDo you want to continue?"
    );

    if (!resume) {
      // ❌ Fresh start
      localStorage.removeItem("mock_q_index");
      localStorage.removeItem("mock_time_left");
      localStorage.removeItem("mock_q_order");

      index = 0;
      time = 10 * 60;

      questionOrder = mockQuestion
        .map((_, i) => i)
        .sort(() => Math.random() - 0.5);

      localStorage.setItem("mock_q_order", JSON.stringify(questionOrder));
    }
  }
}

/* ======================
   🌐 LANGUAGE SWITCH
====================== */
window.toggleLangView = () => {
  if (langMode === "BOTH") langMode = "EN";
  else if (langMode === "EN") langMode = "BN";
  else langMode = "BOTH";
  loadQ();
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
   BOOKMARK STORAGE
====================== */
function getBookmarks() {
  let b = JSON.parse(localStorage.getItem("bookmarks")) || [];
  b = b.map(x => (typeof x === "string" ? { type: "MOCK", id: x } : x));
  localStorage.setItem("bookmarks", JSON.stringify(b));
  return b;
}
function saveBookmarks(b) {
  localStorage.setItem("bookmarks", JSON.stringify(b));
}

/* ======================
   SNACKBAR
====================== */
function showSnack(msg) {
  const sb = document.getElementById("snackbar");
  if (!sb) return;
  sb.innerText = msg;
  sb.className = "show";
  setTimeout(() => sb.classList.remove("show"), 2500);
}

/* ======================
   LOAD QUESTION
====================== */
function loadQ() {
  const currentQIndex = questionOrder[index];
  const q = mockQuestion[currentQIndex];
  if (!q) return;

  localStorage.setItem("mock_q_index", index);

  answered = false;
  optBox.innerHTML = "";
  if (correctBox) correctBox.style.display = "none";

  /* 🌐 language switch label */
  const switchBtn = document.querySelector(".lang-switch");
  if (switchBtn) {
    switchBtn.innerText =
      langMode === "BOTH" ? "🌐 EN+BN" :
      langMode === "EN" ? "🌐 EN" : "🌐 BN";
  }

  /* ⭐ bookmark state */
  const isBookmarked = getBookmarks()
    .some(b => b.type === "MOCK" && b.id === q.id);

  /* ❓ QUESTION TEXT */
  let qText =
    langMode === "BOTH"
      ? `${q.q_en}<div class="q-bn">(${q.q_bn || ""})</div>`
      : langMode === "EN"
        ? q.q_en
        : (q.q_bn || q.q_en);

qBox.innerHTML = `

  <div class="q-wrap">

    <!-- Question -->
    <h3 class="q-text">
      Q${index + 1}. ${qText}
    </h3>

    <!-- Bookmark -->
    <div class="bookmark ${isBookmarked ? "active" : ""}"
         id="bookmarkBtn"
         title="Save Bookmark">

      ${bookmarkSVG()}

    </div>

  </div>

`;

/* ======================
BOOKMARK CLICK BIND
====================== */

const bmBtn =
  document.getElementById("bookmarkBtn");

if(bmBtn){

  bmBtn.addEventListener(
    "click",
    toggleBookmark
  );

}

  /* 🔘 OPTIONS */
  q.options_en.forEach((_, i) => {
    const btn = document.createElement("button");

    const en = q.options_en[i];
    const bn = q.options_bn?.[i] || "";

    let optText =
      langMode === "BOTH"
        ? `${en}<div class="option-bn">${bn}</div>`
        : langMode === "EN"
          ? en
          : (bn || en);

    const labels = ["A", "B", "C", "D"];

btn.innerHTML = `
  <div class="option-text">
    <span class="option-label">${labels[i]}.</span>
    ${optText}
  </div>

  <span class="trap-badge" style="display:none;">TRAP</span>
  <div class="trap-hint" style="display:none;"></div>
`;

    btn.onclick = () => {
  if (answered) return;
  answered = true;

  /* 🔒 Disable all options */
  document.querySelectorAll("#options button")
    .forEach(b => b.disabled = true);

  const correctIndex = q.ans;
  const userWrongIndex = i !== correctIndex ? i : null;

  /* ======================
     ✅ / ❌ OPTION COLOR
  ====================== */
  if (i === correctIndex) {
    btn.classList.add("correct");
    showSnack("✅ Correct Answer");
  } else {
    btn.classList.add("wrong");
    optBox.children[correctIndex]?.classList.add("correct");
    showSnack("❌ Wrong Answer");
  }

  /* ======================
     🔥 TRAP HIGHLIGHT (ALL OPTIONS)
  ====================== */
  document.querySelectorAll("#options button")
    .forEach((b, idx) => {
      const traps = detectTraps(
        q.options_en[idx] + " " + (q.options_bn?.[idx] || ""),
        q.subject
      );

      if (traps.length) {
        b.classList.add("trap-active");
        b.querySelector(".trap-badge").style.display = "inline-block";
        b.querySelector(".trap-hint").innerHTML =
          `⚠️ Trap words: ${traps.join(", ")}`;
        b.querySelector(".trap-hint").style.display = "block";
      }
    });

  /* ======================
     📘 STATIC EXPLANATION
  ====================== */
  if (!correctBox) return;

  correctBox.style.display = "block";

  /* 🔹 Option-wise explanation block */
  const optionExplainHTML = q.options_en.map((opt, idx) => {
    let cls = "neutral";
    if (idx === correctIndex) cls = "correct";
    else if (idx === userWrongIndex) cls = "wrong";

    return `
      <div class="ex-opt ${cls}">
        <b>Option ${String.fromCharCode(65 + idx)}:</b>
        ${opt}
        ${
          q.options_bn?.[idx]
            ? `<div class="option-bn">${q.options_bn[idx]}</div>`
            : ""
        }
      </div>
    `;
  }).join("");

  correctBox.innerHTML = `
    <div class="correct-title">✔ Correct Answer</div>

    <b>${q.options_en[correctIndex]}</b>
    <div>${q.options_bn?.[correctIndex] || ""}</div>

    ${
      q.ans_reason_en || q.ans_reason_bn
        ? `
        <hr>
        <b>Why correct?</b><br>
        ${q.ans_reason_en || ""}
        ${q.ans_reason_bn ? `<div class="q-bn">${q.ans_reason_bn}</div>` : ""}
        `
        : ""
    }

    <hr>
    <b>🧠 Option-wise Explanation:</b>
    ${optionExplainHTML}
  `;

  /* ======================
     🤖 AI TEACHER EXPLANATION
  ====================== */
  /* ======================
   🤖 AI TEACHER EXPLANATION
====================== */
const ai = offlineAIExplain(q, i, langMode) || {
  concept: "",
  elimination: [],
  classroom: "",
  ncert: "",
  personal: ""
};

/* option-wise AI explanation with divider */
const aiOptionHTML = ai.elimination.map((text, idx) => {
  let cls = "neutral";

  if (idx === q.ans) cls = "correct";
  else if (idx === i) cls = "wrong";

  return `
    <div class="ex-opt ${cls}">
      <b>Option ${String.fromCharCode(65 + idx)}:</b>
      <div>${text}</div>
    </div>
  `;
}).join("");

correctBox.innerHTML += `
  <hr>

  <h4>🤖 AI Teacher Explanation</h4>

  <!-- 🧠 Concept -->
  <div class="ai-block">
    ${ai.concept}
  </div>

  ${
    ai.elimination.length
      ? `
      <hr>
      <b>🧠 Why options (AI view):</b>
      ${aiOptionHTML}
      `
      : ""
  }

  ${
    ai.classroom
      ? `
      <hr>
      <div class="classroom">
        🏫 <b>Real-life Classroom Example:</b><br>
        ${ai.classroom}
      </div>
      `
      : ""
  }

  ${
    ai.ncert
      ? `
      <hr>
      <div class="ncert">
        📘 <b>NCERT Reference:</b><br>
        ${ai.ncert}
      </div>
      `
      : ""
  }

  ${
    ai.personal
      ? `
      <hr>
      <div class="personal">
        🎯 <b>Personal Tip for You:</b><br>
        ${ai.personal}
      </div>
      `
      : ""
  }
`;
};

    optBox.appendChild(btn);
  });

  progressBar.style.width =
    ((index + 1) / mockQuestion.length) * 100 + "%";
/* ======================
DATA READY → HIDE SPINNER
====================== */

hideSpinner();
  hintBox.style.display = "none";
}

/* ======================
   BOOKMARK TOGGLE
====================== */
window.toggleBookmark = () => {
  const q = mockQuestion[questionOrder[index]];
  let b = getBookmarks();

  const pos = b.findIndex(x => x.type === "MOCK" && x.id === q.id);
  if (pos > -1) {
    b.splice(pos, 1);
    showSnack("❌ Bookmark removed");
  } else {
    b.push({ type: "MOCK", id: q.id, subject: q.subject });
    showSnack("⭐ Bookmark saved");
  }

  saveBookmarks(b);
  loadQ();
};

/* ======================
   NAV
====================== */
window.nextQ = () => {
  if (index < mockQuestion.length - 1) {
    index++;
    loadQ();
  }
};
window.prevQ = () => {
  if (index > 0) {
    index--;
    loadQ();
  }
};
window.goBack = function(){

  if(history.length > 1){

    history.back();

  }else{

    location.href = "dashboard.html";

  }

};

/* ======================
   TIMER (RESUME SAFE)
====================== */
setInterval(() => {
  if (time <= 0) return;
  time--;
  localStorage.setItem("mock_time_left", time);
  timerBox.innerText =
    `Time Left: ${Math.floor(time / 60)}:${(time % 60)
      .toString()
      .padStart(2, "0")}`;
}, 1000);

/* ======================
   INIT
====================== */
checkResumeTest();
loadQ();