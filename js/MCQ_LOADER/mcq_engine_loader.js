
import { startMCQ } from "../../engine/mcq_engine.js";
import { piagetMcq } from "../../data/piaget_mcq_question.js";
import { VygotskyMcq } from "../../data/vygotskyMcq.js";
import { mcqQuestion } from "../../data/mcq_question.js";
import { mockQuestion } from "../../data/mock_question.js";
import { eriksonMcq } from "../../data/eriksonDataMcq.js";
import { kohlbargMcq } from "../../data/kohlbarg-mcq.js";
import { TAptitude } from "../../data/scert/teaching-aptitude.js";
//import { GK } from "../../data/scert/gk.js";
//import { reasoning } from "../../data/scert/reasoning.js";
//import { currentAffairs } from "../../data/scert/current-affairs.js";
/*
const SCERT_COMBINED = [

...TAptitude,
...GK,
...reasoning,
...currentAffairs

];
*/


/* ======================
   📦 TEST DATA MAP
====================== */

const TEST_DATA = {

  piaget: piagetMcq,

  vygotsky: VygotskyMcq,

  mcq: mcqQuestion,

  mock: mockQuestion,
  erikson: eriksonMcq,
  kohlbarg: kohlbargMcq,
  scert: TAptitude

};


/* ======================
   🔎 URL PARAM
====================== */

const params = new URLSearchParams(location.search);

//const test = params.get("test") || "piaget";
let test = params.get("test")?.toLowerCase();

/* restart bug fix */
if(test && test.includes("?")){
test = test.split("?")[0];
}

if(!test){
throw new Error("MCQ TEST PARAM MISSING");
}
/* ======================
   📊 LOAD DATA
====================== */

const data = TEST_DATA[test];


/* ======================
   🐞 DEBUG (optional)
====================== */
//console.log("MCQ TEST:", test);
//console.log("MCQ DATA:", data);


/* ======================
   🧾 PAGE TITLE
====================== */

const titleEl = document.getElementById("pageTitle");

if(titleEl){

titleEl.textContent = "📝 " + test.toUpperCase() + " MCQ";

}


/* ======================
   🚫 DATA NOT FOUND
====================== */

if(!data || !Array.isArray(data) || data.length === 0){

console.error("MCQ data not found for:", test);

const qBox = document.getElementById("qBox");

if(qBox){

qBox.innerHTML = `
<div class="no-question">
🚫 No MCQ data found for <b>${test}</b>
<br><br>
Please check data file or URL parameter.
</div>
`;

}

throw new Error("MCQ DATA EMPTY");

}




/* ======================
   🚀 START ENGINE
====================== */

startMCQ({

data: data,

subjectKey: test+"_subject",

limitKey: test+"_limit",

langKey: test+"_lang",

indexKey: test+"_q_index",

orderKey: test+"_q_order",

attemptKey: test+"_attempt",

resultKey: test+"_result"

});