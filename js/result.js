import { loadResultHistory }
from "../engine/result_engine.js";

const TEST_HEADERS = {

MCQ:"🎯 MCQ Practice Completed",
SCERT:"🎓 SCERT Practice Completed",
PIAGET:"🧠 Piaget Practice Completed",
VYGOTSKY:"📘 Vygotsky Practice Completed",
KOHLBARG:"⚖️ Kohlbarg Practice Completed",
MOCK:"🚀 Mock Test Completed"

};

function getPerformanceText(percent){

percent = parseFloat(percent);

if(percent >= 90)
return "🏆 Topper Level Performance";

if(percent >= 80)
return "🔥 Excellent Performance";

if(percent >= 70)
return "💪 Very Good Attempt";

if(percent >= 60)
return "👍 Good Attempt";

if(percent >= 50)
return "⚠ Average Performance";

if(percent >= 40)
return "📚 Needs Revision";

return "🚨 Serious Improvement Needed";

}

document.addEventListener("DOMContentLoaded", () => {
  
const lastPage =
localStorage.getItem("last_test_page") || "";
const lastType =
localStorage.getItem("last_test_type") || "";

  let history = loadResultHistory();

  const box = document.getElementById("resultBox");
  const reviewBox = document.getElementById("reviewSection");

  if (!box) return;

  if (history.length === 0) {
    box.innerHTML = `
      <div class="result-card">
        <h2>No Result Found</h2>
      </div>
    `;
    return;
  }

  box.innerHTML = "";

  history.forEach((result, index) => {
    const percent =
parseFloat(result.percentage) || 0;

    const isLatest = index === 0;

    const card = document.createElement("div");
    card.className = "result-card history-card";
    card.id = "historyCard" + index;

    card.innerHTML = `
      <div class="history-header"
           onclick="toggleHistory(${index})">

        <div>
<div class="result-header">
  ${TEST_HEADERS[result.testType] || 
`🎉 ${result.testType} Practice Completed`}
</div>

          <div class="result-subject">
            Subject: <b>${result.subject || "General"}</b>
          </div>

          <div style="font-size:12px;color:#6b7280;">
            ${result.date || ""}
          </div>
        </div>

        <div style="font-weight:700;">
          ${percent}%
        </div>

      </div>

      <div class="history-body ${isLatest ? "open" : ""}"
           id="historyBody${index}">

        <!-- 🔥 Animated Circle -->
        <div class="score-circle"
             id="circle${index}">
          <div class="circle-inner">
            <div class="score-percent">
              ${percent}%
            </div>
            <div class="score-label">Score</div>
          </div>
        </div>

        <div class="score-grid">

          <div class="score-box score-total">
            Total <b>${result.total || 0}</b>
          </div>

          <div class="score-box score-correct">
            Correct <b>${result.correct || 0}</b>
          </div>

          <div class="score-box score-wrong">
            Wrong <b>${result.wrong || 0}</b>
          </div>

          <div class="score-box score-skipped">
            Skipped <b>${result.skipped || 0}</b>
          </div>

        </div>

        <div class="performance-text">
          ${getPerformanceText(percent)}
        </div>

        <!-- 🔥 REVIEW SECTION (ONLY FOR LATEST) -->
        ${
          isLatest && Array.isArray(result.review)
          ? `
            <div class="review-title" style="margin-top:30px;">
              📋 Question Review
            </div>
            <div id="reviewSection${index}"></div>
          `
          : ""
        }

      </div>
    `;

    box.appendChild(card);

    /* 🔥 Animate only latest circle */
    if (isLatest) {

      setTimeout(() => {

        const circle =
          document.getElementById("circle" + index);

        if (!circle) return;

        let start = 0;
        const end = percent;
        const duration = 1200;
        const stepTime = 10;
        const increment = end / (duration / stepTime);

        const counter = setInterval(() => {

          start += increment;

          if (start >= end) {
            start = end;
            clearInterval(counter);
          }

          circle.style.setProperty(
"--score",
Math.min(start,100)
);

        }, stepTime);

      }, 300);

      /* 🔥 Render Review for Latest */
      if(Array.isArray(result.review)){
renderReview(result.review, index);
}
    }

  });

});

function renderReview(reviewData, parentIndex){

  const container =
    document.getElementById("reviewSection" + parentIndex);

  if (!container) return;

  const labels = ["A", "B", "C", "D"];

  reviewData.forEach((item, index) => {

    const card = document.createElement("div");
    card.className = "review-card";
    card.id = `card_${parentIndex}_${index}`;

    const statusBadge =
      item.status === "correct"
        ? `<span class="badge correct">CORRECT</span>`
        : item.status === "wrong"
          ? `<span class="badge wrong">WRONG</span>`
          : `<span class="badge skipped">SKIPPED</span>`;

    card.innerHTML = `

      <div class="review-right">
        ${statusBadge}
      </div>

      <div class="review-question">
        <b>Q${index + 1}.</b>
        ${item.question_en}
      </div>

      <div class="review-body"
           id="reviewBody_${parentIndex}_${index}">

        <div class="review-ans">
          ${
            item.selected !== null
              ? `Your Answer: <b>${labels[item.selected]}</b>`
              : `Your Answer: <b>Not Attempted</b>`
          }
        </div>

        <div class="review-correct">
          Correct Answer:
          <b>${labels[item.correctAnswer]}</b>
        </div>

        <hr>

        <div class="review-explanation">
          <b>Explanation:</b><br>
          ${item.explanation_en || "No explanation available."}
        </div>

        <hr>

        <div class="review-meta">
          Concept: ${item.concept || "—"}<br>
          Exam: ${item.exam || "—"}
          ${item.year ? `(${item.year})` : ""}
        </div>

      </div>
    `;

    /* 🔥 FULL CARD CLICK TO TOGGLE */
    card.addEventListener("click", () => {

      card.classList.toggle("open");

      const body =
        document.getElementById(
          `reviewBody_${parentIndex}_${index}`
        );

      if(body){
        body.classList.toggle("open");
      }

    });

    container.appendChild(card);
  });
}
/* ==============================
   TOGGLE EXPAND
============================== */



window.toggleHistory = function(index){

  const body =
    document.getElementById("historyBody" + index);

  if (!body) return;

  body.classList.toggle("open");
};

/* ==============================
   ACTION BUTTONS
============================== */

window.restartTest = function(){

  /* 🔍 Detect last test page */
  let page =
    localStorage.getItem("last_test_page") || "mcq.html";

  /* 🔥 Clear resume / attempt data */
  Object.keys(localStorage).forEach(key => {

    if(/_q_index_|_q_order_|_attempt_map_/.test(key)){
      localStorage.removeItem(key);
    }

  });

  /* clear session cache */
  sessionStorage.clear();

  /* 🔄 Cache-safe restart */
  location.replace(
    page + "?restart=" + Date.now()
  );
};



window.goDashboard = function(){
  location.href = "dashboard.html";
};