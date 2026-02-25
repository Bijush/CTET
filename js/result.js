
function getPerformanceText(percent){

  percent = parseFloat(percent);

  if(percent >= 80)
    return "🔥 Excellent Performance! UPSC Ready Level.";

  if(percent >= 60)
    return "💪 Good Attempt. Keep polishing weak areas.";

  if(percent >= 40)
    return "⚠ Average. Revise concepts again.";

  return "🚨 Needs Serious Revision. Focus on weak topics.";
}

document.addEventListener("DOMContentLoaded", () => {

  const mockHistory =
  JSON.parse(localStorage.getItem("mock_test_history")) || [];

const mcqHistory =
  JSON.parse(localStorage.getItem("mcq_test_history")) || [];

const scertHistory =
  JSON.parse(localStorage.getItem("scert_test_history")) || [];
  
  const piagetHistory =
  JSON.parse(localStorage.getItem("piaget_test_history")) || [];
  
  const vygotskyHistory =
  JSON.parse(localStorage.getItem("vygotsky_test_history")) || [];

/* 🔥 Add type flag */
const taggedMock = mockHistory.map(x => ({
  ...x,
  testType: "MOCK"
}));

const taggedMcq = mcqHistory.map(x => ({
  ...x,
  testType: "MCQ"
}));

const taggedScert = scertHistory.map(x => ({
  ...x,
  testType: "SCERT"
}));

const taggedPiaget = piagetHistory.map(x => ({
  ...x,
  testType: "PIAGET"
}));

const taggedVygotsky = vygotskyHistory.map(x => ({
  ...x,
  testType: "VYGOTSKY"
}));

const history =
  [...taggedMock, ...taggedMcq, ...taggedScert, ...taggedPiaget, ...taggedVygotsky]
  .sort((a,b) =>
    new Date(b.date) - new Date(a.date)
  );

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

    const isLatest = index === 0;

    const card = document.createElement("div");
    card.className = "result-card history-card";
    card.id = "historyCard" + index;

    card.innerHTML = `
      <div class="history-header"
           onclick="toggleHistory(${index})">

        <div>
<div class="result-header">
  ${
    result.testType === "MCQ"
    ? "🎉 MCQ Practice Completed"
    : result.testType === "SCERT"
      ? "🎓 SCERT Practice Completed"
      : result.testType === "PIAGET"
        ? "🧠 Piaget Practice Completed"
            : result.testType === "VYGOTSKY"
      ? "🎓 Vygotsky Practice Completed"
        : "🎉 Mock Test Completed"
  }
</div>

          <div class="result-subject">
            Subject: <b>${result.subject}</b>
          </div>

          <div style="font-size:12px;color:#6b7280;">
            ${result.date || ""}
          </div>
        </div>

        <div style="font-weight:700;">
          ${result.percentage}%
        </div>

      </div>

      <div class="history-body ${isLatest ? "open" : ""}"
           id="historyBody${index}">

        <!-- 🔥 Animated Circle -->
        <div class="score-circle"
             id="circle${index}">
          <div class="circle-inner">
            <div class="score-percent">
              ${result.percentage}%
            </div>
            <div class="score-label">Score</div>
          </div>
        </div>

        <div class="score-grid">

          <div class="score-box score-total">
            Total <b>${result.total}</b>
          </div>

          <div class="score-box score-correct">
            Correct <b>${result.correct}</b>
          </div>

          <div class="score-box score-wrong">
            Wrong <b>${result.wrong}</b>
          </div>

          <div class="score-box score-skipped">
            Skipped <b>${result.skipped}</b>
          </div>

        </div>

        <div class="performance-text">
          ${getPerformanceText(result.percentage)}
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
        const end = parseFloat(result.percentage);
        const duration = 1200;
        const stepTime = 10;
        const increment = end / (duration / stepTime);

        const counter = setInterval(() => {

          start += increment;

          if (start >= end) {
            start = end;
            clearInterval(counter);
          }

          circle.style.setProperty("--score", start);

        }, stepTime);

      }, 300);

      /* 🔥 Render Review for Latest */
      renderReview(result.review, index);
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

  /* 🔍 Detect last test type */
  const lastResults = {
    VYGOTSKY: JSON.parse(localStorage.getItem("last_vygotsky_result")),
    PIAGET:   JSON.parse(localStorage.getItem("last_piaget_result")),
    SCERT:    JSON.parse(localStorage.getItem("last_scert_result")),
    MCQ:      JSON.parse(localStorage.getItem("last_mcq_result")),
    MOCK:     JSON.parse(localStorage.getItem("last_mock_result"))
  };

  /* 🔥 Priority order (Top → Bottom) */
  const pageMap = {
    VYGOTSKY: "vygotsky-mcq.html",
    PIAGET:   "piaget-mcq.html",
    SCERT:    "scert.html",
    MCQ:      "mcq.html",
    MOCK:     "mock.html"
  };

  let page = "mock.html"; // default fallback

  for (const type in lastResults) {
    if (lastResults[type]) {
      page = pageMap[type];
      break; // stop at first match
    }
  }

  /* 🔥 Clear last results */
  Object.keys(lastResults).forEach(type => {
    localStorage.removeItem(
      "last_" + type.toLowerCase() + "_result"
    );
  });

  /* 🔥 Clear resume / attempt data */
  Object.keys(localStorage).forEach(key => {

    if (
      key.includes("_q_index_") ||
      key.includes("_q_order_") ||
      key.includes("_attempt_map_")
    ){
      localStorage.removeItem(key);
    }

  });

  /* 🔄 Cache-safe restart */
  location.replace(
    page + "?restart=" + Date.now()
  );
};



window.goDashboard = function(){
  location.href = "dashboard.html";
};