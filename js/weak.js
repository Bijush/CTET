import {
  getWeakConceptList
} from "../utils/weak_concept.js";
import {
  mcqQuestion
} from "../data/mcq_question.js";


/* ======================
   LOAD WEAK CONCEPTS
====================== */

const box =
  document.getElementById("weakList");

const list =
  getWeakConceptList();

/* ======================
   NO WEAK
====================== */

if(!list.length){

  box.innerHTML =
    "🎉 No weak concepts";

}

/* ======================
   SHOW LIST
====================== */

else{

  box.innerHTML =
    list.map(c=>`

      <div style="
        background:#fff;
        padding:14px;
        margin:12px;
        border-radius:14px;
        box-shadow:0 4px 12px rgba(0,0,0,.08);
      ">

        <b>${c.concept}</b><br>

        Accuracy:
        ${c.accuracy}%<br><br>

        <button
          onclick="
            reviseConcept(
              '${c.concept}'
            )
          ">
          Revise Now
        </button>

      </div>

    `).join("");

}
/* ======================
   REVISE FILTER
====================== */
window.reviseConcept =
function(concept){

  const filtered =
    mcqQuestion.filter(
      q => q.concept === concept
    );

  localStorage.setItem(
    "revisionSet",
    JSON.stringify(filtered)
  );

  location.href =
    "revision.html";
};