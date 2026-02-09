/* ======================
📦 IMPORT DATA + AI
====================== */

import { mockQuestion }
from "../data/mock_question.js";

import { detectTraps }
from "../utils/trap_detector.js";

import { offlineAIExplain }
from "../utils/ai_explainer.js";


/* ======================
📦 INIT
====================== */

const box =
document.getElementById("viewBox");

const params =
new URLSearchParams(location.search);

const id =
params.get("id");

if(!id){
  box.innerHTML =
  "<p>Invalid bookmark</p>";
  throw new Error("No ID");
}


/* ======================
🔎 FIND QUESTION
====================== */

const q =
mockQuestion.find(
x => x.id === id
);

if(!q){
  box.innerHTML =
  "<p>Question not found</p>";
  throw new Error("Not found");
}


/* ======================
🧠 TRAP DETECT
====================== */

const trapWords =
detectTraps(
  q.q_en +
  (q.q_bn || ""),
  q.subject
);


/* ======================
🤖 AI EXPLAIN
====================== */

const ai =
offlineAIExplain(q,null,"BOTH")
|| {};


/* ======================
📦 HTML START
====================== */

let html = `
<div class="card">

<h3>
${q.q_en}
</h3>

<p>
${q.q_bn || ""}
</p>
`;


/* ======================
OPTIONS
====================== */

html += "<ul>";

q.options_en.forEach((op,i)=>{

const traps =
detectTraps(
  op + " " +
  (q.options_bn?.[i]||""),
  q.subject
);

html+=`
<li class="
${i===q.ans?"correct":""}
${traps.length?" trap-active":""}
">

<b>${String.fromCharCode(65+i)}.</b>

${op}
${q.options_bn?.[i]?" / "+q.options_bn[i]:""}

${
traps.length
? `<div class="trap-hint">
⚠️ ${traps.join(", ")}
</div>`
:""
}

</li>`;
});

html+="</ul>";


/* ======================
ANSWER
====================== */

html+=`
<div class="card"
style="background:#e8f7e8">

<h4>✔ Correct Answer</h4>

${q.options_en[q.ans]}
<br>
${q.options_bn?.[q.ans]||""}

</div>`;
  

/* ======================
STATIC EXPLANATION
====================== */

/* ======================
📝 STATIC EXPLANATION
====================== */

if(
  q.ans_reason_en ||
  q.ans_reason_bn
){

html+=`
<div class="card explain-card">

<h4>📝 Explanation</h4>

<div class="explain-text">
  ${q.ans_reason_en || ""}
</div>

<div class="explain-text bn">
  ${q.ans_reason_bn || ""}
</div>

</div>`;
}


/* ======================
🤖 AI TEACHER
====================== */

html+=`
<div class="card ai-card">

<h4>🤖 AI Teacher Explanation</h4>

${
ai.concept
?`
<div class="ai-concept">
  ${ai.concept}
</div>
`
:""
}


/* ======================
  OPTION-WISE AI
====================== */

${
ai.elimination?.length
?`

<hr>
<b>Option-wise AI View:</b>

${ai.elimination.map((t,i)=>{

let cls="ai-neutral";
let icon="➖";

/* Correct / Wrong */

if(i===q.ans){
  cls="ai-correct";
  icon="✔️";
}
else{
  cls="ai-wrong";
  icon="❌";
}

/* Trap detect */

const traps=
detectTraps(
  q.options_en[i] +
  " " +
  (q.options_bn?.[i]||""),
  q.subject
);

return `

<div class="ai-option ${cls}">

  <div class="ai-head">

    <span class="ai-label">
      ${String.fromCharCode(65+i)}
    </span>

    <span class="ai-icon">
      ${icon}
    </span>

  </div>

  <div class="ai-text">
    ${t}
  </div>

  ${
    traps.length
    ?`
    <div class="ai-trap">
      ⚠️ Trap:
      ${traps.join(", ")}
    </div>
    `
    :""
  }

</div>

<div class="ai-divider"></div>

`;

}).join("")}

`
:""
}


/*  ======================
/* CLASSROOM */
======================  */

${
ai.classroom
?`
<div class="ai-extra classroom">

🏫 <b>Classroom Example:</b><br>
${ai.classroom}

</div>
`
:""
}


/* 
======================
NCERT
======================
*/

${
ai.ncert
?`
<div class="ai-extra ncert">

📘 <b>NCERT Reference:</b><br>
${ai.ncert}

</div>
`
:""
}


/*
======================
PERSONAL TIP
======================
*/

${
ai.personal
?`
<div class="ai-extra personal">

🎯 <b>Personal Tip:</b><br>
${ai.personal}

</div>
`
:""
}

</div>`;
  


/*
======================
⚠️ TRAP SUMMARY
====================== 
*/

if(trapWords.length){

html+=`
<div class="card trap-summary">

<h4>⚠️ Trap Summary</h4>

${trapWords.join(", ")}

</div>`;
}


/* 
======================
END
====================== 
*/

html+="</div>";

box.innerHTML = html;