/* ======================
📦 GLOBAL DATA HOLDER
====================== */

let piagetMcq = [];
let questionOrder = [];

let domReady = false;
let dataReady = false;

/* ======================
🛟 SAFE UTILS FALLBACK
====================== */

let detectTraps = () => [];
let offlineAIExplain = () => ({});
let getPedagogyProfile = () => ({});

/* ======================
📦 LOAD UTILS SAFE
(ABSOLUTE PATH)
====================== */

(async () => {

  try {
    const trap =
      await import(
        "/CTET_APP/utils/trap_detector.js"
      );
    detectTraps =
      trap.detectTraps || detectTraps;
  } catch(e){
    alert("Trap utils load hoi nai ❌");
  }

  try {
    const ai =
      await import(
        "/CTET_APP/utils/ai_explainer.js"
      );
    offlineAIExplain =
      ai.offlineAIExplain ||
      offlineAIExplain;
  } catch(e){
    alert("AI utils load hoi nai ❌");
  }

  try {
    const ped =
      await import(
        "/CTET_APP/utils/pedagogy_ai.js"
      );
    getPedagogyProfile =
      ped.getPedagogyProfile ||
      getPedagogyProfile;
  } catch(e){
    alert("Pedagogy utils load hoi nai ❌");
  }

})();

/* ======================
📦 LOAD MCQ DATA SAFE
====================== */

(async ()=>{

  try{

    const mod =
      await import(
        "/CTET_APP/data/piaget_mcq_question.js"
      );

    piagetMcq =
      mod.piagetMcq || [];

    if(!piagetMcq.length){

      alert("MCQ Data empty ❌");
      return;
    }

    console.log(
      "MCQ Loaded:",
      piagetMcq.length
    );

    dataReady = true;

    if(domReady)
      initMCQ();

  }catch(e){

    alert(
      "MCQ Data load hoi nai ❌\nPath check koro"
    );

    console.error(e);

  }

})();

/* ======================
🧠 DOM READY
====================== */

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    domReady = true;

    if(dataReady)
      initMCQ();
  }
);

/* ======================
🧠 GLOBAL STATE
====================== */

let index =
  parseInt(
    localStorage.getItem("mcq_q_index")
  ) || 0;

let answered = false;

let langMode =
  localStorage.getItem("mcq_lang")
  || "BOTH";

/* ======================
📊 SAFE ORDER SYSTEM
====================== */

function getSafeOrder(){

  let saved =
    JSON.parse(
      localStorage.getItem("mcq_q_order")
    );

  if(
    !saved ||
    saved.length !== piagetMcq.length
  ){

    alert(
      "Question order reset ⚠️"
    );

    saved =
      piagetMcq
        .map((_,i)=>i)
        .sort(()=>Math.random()-0.5);

    localStorage.setItem(
      "mcq_q_order",
      JSON.stringify(saved)
    );
  }

  return saved;
}

/* ======================
📦 DOM ELEMENTS
====================== */

const qBox =
  document.getElementById("qBox");

const optBox =
  document.getElementById("options");

const explainBox =
  document.getElementById("explainBox");

const progressBar =
  document.getElementById("progressBar");

/* ======================
🚀 INIT MCQ
====================== */

function initMCQ(){

  if(!qBox || !optBox){

    alert(
      "MCQ Container load hoi nai ❌"
    );

    return;
  }

  questionOrder =
    getSafeOrder();

  loadQ();
}

/* ======================
❓ LOAD QUESTION
====================== */

function loadQ(){

  if(!piagetMcq.length){

    alert("MCQ Data missing ❌");
    return;
  }

  if(index >= piagetMcq.length)
    index = 0;

  const q =
    piagetMcq[
      questionOrder[index]
    ];

  if(!q){

    alert("Question load error ❌");
    return;
  }

  answered = false;

  localStorage.setItem(
    "mcq_q_index",
    index
  );

  /* Progress */
  if(progressBar){
    progressBar.style.width =
      ((index+1) /
      piagetMcq.length)*100 + "%";
  }

  /* Question */
  let qText =
    q.q_en || "No Question";

  if(
    langMode==="BOTH" &&
    q.q_bn
  ){
    qText +=
      `<div class="q-bn">
        (${q.q_bn})
      </div>`;
  }

  qBox.innerHTML =
    `<h3>
      Q${index+1}. ${qText}
    </h3>`;

  /* Options */
  optBox.innerHTML="";

  (q.options_en||[])
  .forEach((opt,i)=>{

    const btn =
      document.createElement("button");

    btn.innerText = opt;

    btn.onclick=()=>{

      if(answered) return;
      answered=true;

      const correct =
        q.ans ?? -1;

      if(i===correct){

        btn.style.background="#16a34a";
        btn.style.color="#fff";

      }else{

        btn.style.background="#dc2626";
        btn.style.color="#fff";

        optBox.children[
          correct
        ]?.style.background="#16a34a";
      }

      loadExplain(q);

    };

    optBox.appendChild(btn);

  });

}

/* ======================
📘 EXPLANATION
====================== */

function loadExplain(q){

  if(!explainBox) return;

  explainBox.style.display="block";

  explainBox.innerHTML=`
    <h4>Explanation</h4>
    ${
      q.ans_reason_en ||
      q.explanation ||
      "No explanation"
    }
  `;
}

/* ======================
➡ NAVIGATION
====================== */

window.nextQ=()=>{

  index++;

  if(index>=piagetMcq.length)
    index=0;

  loadQ();
};

window.prevQ=()=>{

  index--;

  if(index<0)
    index=piagetMcq.length-1;

  loadQ();
};

window.goBack=()=>history.back();