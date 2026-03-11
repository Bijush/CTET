
import { findItem }
from "../engine/bookmark_engine.js";
import "../data/mcq_question.js";
import "../data/mock_question.js";
import "../data/piaget_mcq_question.js";
import "../data/scert/teaching-aptitude.js";
import "../data/vygotskyMcq.js";
import "../data/kohlbarg-mcq.js";
import "../data/eriksonDataMcq.js";
import { detectTraps }
from "../utils/trap_detector.js";

import { offlineAIExplain }
from "../utils/ai_explainer.js";

/* ======================
📦 INIT
====================== */

const box =
document.getElementById("viewBox");

if(!box){
  console.error("viewBox not found");
  throw new Error("Container missing");
}


/* ======================
🔎 READ PARAMS
====================== */

const params =
new URLSearchParams(location.search);

const type =
params.get("type");

const id =
params.get("id");

if(!type || !id){

  box.innerHTML =
  "<p>Invalid bookmark</p>";

  throw new Error("Invalid params");
}


/* ======================
📦 FIND DATA
====================== */

const item = findItem(type, id);
if(!item){

  box.innerHTML =
"<p>⚠️ Question not found</p>";

  throw new Error("Not found");
}


/* ======================
🧠 TRAP SUMMARY
====================== */

const trapWords =
detectTraps(
  (item.q_en || "") + " " + (item.q_bn || ""),
  item.subject
);


/* ======================
🤖 AI EXPLAIN
====================== */

const ai =
offlineAIExplain(
  item,
  null,
  "BOTH"
) || {};


/* ======================
📦 HTML START
====================== */

let html = `
<div class="card">

<h3 class="q-en">
${item.q_en || ""}
</h3>

${item.q_bn ? `<p class="q-bn">${item.q_bn}</p>` : ""}
`;


/* ======================
📌 OPTIONS
====================== */

if(item.options_en?.length){

html += `<ul class="option-list">`;

item.options_en.forEach((op,i)=>{

const traps =
detectTraps(
  op +
  " " +
  (item.options_bn?.[i]||""),
  item.subject
);

html += `

<li class="
option-item
${i===item.ans?"correct":""}
${traps.length?" trap-active":""}
">

<b>${String.fromCharCode(65+i)}.</b>

${op}
${item.options_bn?.[i]
? " / " + item.options_bn[i]
: ""}

${
traps.length
?`
<div class="trap-hint">
⚠️ ${traps.join(", ")}
</div>
`
:""
}

</li>

`;
});

html += "</ul>";
}


/* ======================
✅ CORRECT ANSWER
====================== */

if(item.ans !== undefined){

html += `
<div class="card correct-box">

<h4>✔ Correct Answer</h4>

${item.options_en?.[item.ans] || ""}
<br>
${item.options_bn?.[item.ans] || ""}

</div>`;
}


/* ======================
📝 STATIC EXPLANATION
====================== */

if(
item.ans_reason_en ||
item.ans_reason_bn
){

html += `
<div class="card explain-card">

<h4>📝 Explanation</h4>

<div>
${item.ans_reason_en || ""}
</div>

<div>
${item.ans_reason_bn || ""}
</div>

</div>`;
}


/* ======================
🤖 AI TEACHER
====================== */

html += `
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


${
ai.elimination?.length
?`

<hr>
<b>Option-wise AI View:</b>

${ai.elimination.map((t,i)=>{

let cls="ai-neutral";
let icon="➖";

if(i===item.ans){
  cls="ai-correct";
  icon="✔️";
}
else{
  cls="ai-wrong";
  icon="❌";
}

const traps=
detectTraps(
  item.options_en[i] +
  " " +
  (item.options_bn?.[i]||""),
  item.subject
);

return `

<div class="ai-option ${cls}">

  <div class="ai-head">

    <span>
    ${String.fromCharCode(65+i)}
    </span>

    <span>
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
    ⚠️ ${traps.join(", ")}
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



${
ai.classroom
?`
<div class="ai-extra">

🏫 <b>Classroom Example:</b><br>
${ai.classroom}

</div>
`
:""
}




${
ai.ncert
?`
<div class="ai-extra">

📘 <b>NCERT Reference:</b><br>
${ai.ncert}

</div>
`
:""
}




${
ai.personal
?`
<div class="ai-extra">

🎯 <b>Personal Tip:</b><br>
${ai.personal}

</div>
`
:""
}

</div>
`;


/* ======================
⚠️ TRAP SUMMARY
====================== */

if(trapWords.length){

html += `
<div class="card trap-summary">

<h4>⚠️ Trap Summary</h4>

${trapWords.join(", ")}

</div>`;
}


/* ======================
END
====================== */

html += "</div>";

box.innerHTML = html;