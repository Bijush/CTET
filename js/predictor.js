import {
  predictExamProbability
} from "../utils/exam_predictor.js";

/* ======================
   LOAD DATA
====================== */

const box =
  document.getElementById("predictBox");

const data =
  predictExamProbability();

/* ======================
   🎯 FILTER STATE
====================== */

let currentProb = "ALL";
let currentSubject = "ALL";

/* ======================
   PROBABILITY LOGIC
====================== */

function getProbability(score){

  let level = "Low";
  let cls = "low";
  let percent = Math.min(score * 2, 100);

  if(score >= 25){
    level = "Very High";
    cls = "very-high";
  }
  else if(score >= 18){
    level = "High";
    cls = "high";
  }
  else if(score >= 10){
    level = "Medium";
    cls = "medium";
  }

  return { level, cls, percent };
}

/* ======================
   🧠 FILTER FUNCTION
====================== */

function getFilteredData(){

  let filtered = [...data];

  /* 🎯 Probability Filter */
  if(currentProb !== "ALL"){

    filtered = filtered.filter(c=>{

      if(currentProb==="VERY_HIGH")
        return c.score >= 25;

      if(currentProb==="HIGH")
        return c.score >= 18 &&
               c.score < 25;

      if(currentProb==="MEDIUM")
        return c.score >= 10 &&
               c.score < 18;

      if(currentProb==="LOW")
        return c.score < 10;

    });

  }

  /* 📚 Subject Filter */
  if(currentSubject !== "ALL"){

    filtered =
      filtered.filter(
        c => c.subject === currentSubject
      );

  }

  return filtered;
}

/* ======================
   RENDER
====================== */

function render(){

  const filtered =
    getFilteredData();

  box.innerHTML =
    filtered.map((c,i)=>{

      const prob =
        getProbability(c.score);

      return `

        <div class="
          predict-card
          rank-${i+1}
        ">

          <!-- Rank -->
          <div class="rank">
            Rank #${i+1}
          </div>

          <!-- Topic -->
          <div class="topic">
            ${c.concept}
          </div>

          <!-- Stats -->
          <div class="stats">

            <div>
              📊 Frequency:
              ${c.frequency}
            </div>

            <div>
              🗓 Recent:
              ${c.recent}
            </div>

            <div>
              📝 Exams:
              ${c.examCount}
            </div>

            <div>
              📚 Subject:
              ${c.subject || "—"}
            </div>

          </div>

          <!-- Probability Badge -->
          <div class="
            badge
            ${prob.cls}
          ">
            🔥 ${prob.level}
            Probability
          </div>

          <!-- Progress Bar -->
          <div class="progress">

            <div class="bar"
                 style="
                 width:${prob.percent}%
                 ">
            </div>

          </div>

        </div>

      `;

    }).join("");

}

/* ======================
   🎯 FILTER EVENTS
====================== */

/* Probability dropdown */
const probSelect =
  document.getElementById("probFilter");

if(probSelect){

  probSelect.onchange = e => {

    currentProb = e.target.value;
    render();

  };

}

/* Subject tabs */
const tabs =
  document.querySelectorAll(".tab");

tabs.forEach(tab=>{

  tab.onclick = ()=>{

    tabs.forEach(
      t=>t.classList.remove("active")
    );

    tab.classList.add("active");

    currentSubject =
      tab.dataset.subject;

    render();

  };

});

/* ======================
   🔙 GO DASHBOARD
====================== */

window.goDashboard = function(){

  location.href =
    "dashboard.html";

};
/* ======================
   🔝 BACK TO TOP
====================== */

/* Show / Hide button */
window.onscroll = function(){

  const btn =
    document.getElementById("backTopBtn");

  if(!btn) return;

  if(document.body.scrollTop > 200 ||
     document.documentElement.scrollTop > 200){

    btn.style.display = "flex";

  } else {

    btn.style.display = "none";

  }

};

/* Scroll function */
window.scrollToTop = function(){

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};
/* ======================
   INIT RENDER
====================== */

render();