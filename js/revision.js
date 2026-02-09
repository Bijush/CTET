/* ======================
   IMPORTS
====================== */

import { offlineAIExplain }
  from "../utils/ai_explainer.js";

import { getPedagogyProfile }
  from "../utils/pedagogy_ai.js";

import { detectTraps }
  from "../utils/trap_detector.js";


/* ======================
   LOAD REVISION DATA
====================== */

const data =
  JSON.parse(
    localStorage.getItem("revisionSet")
  ) || [];

const box =
  document.getElementById("revisionBox");


/* ======================
   🔥 TRAP HIGHLIGHT
====================== */

function highlightTraps(
  text = "",
  subject = ""
){

  if(!text) return "";

  const traps =
    detectTraps(text, subject);

  let highlighted = text;

  traps.forEach(word => {

    const reg =
      new RegExp(`\\b(${word})\\b`, "gi");

    highlighted =
      highlighted.replace(
        reg,
        `<span class="trap-red">$1</span>`
      );

  });

  return highlighted;
}


/* ======================
   NO DATA
====================== */

if (!data.length) {

  box.innerHTML = `
    <div class="card">
      No revision data found.
    </div>
  `;

}


/* ======================
   RENDER QUESTIONS
====================== */

else {

  box.innerHTML = data.map((q, index) => {

    const labels = ["A","B","C","D"];

    /* AI Explain load */
    let ai = {};

    try {

      ai =
        offlineAIExplain(
          q,
          q.ans,
          "EN"
        ) || {};

    } catch(e){

      ai = {
        elimination:[]
      };

    }

    /* Pedagogy */
    let pedagogy = {};

    try {

      pedagogy =
        getPedagogyProfile({
          concept: q.concept,
          subject: q.subject
        }) || {};

    } catch(e){}

    return `

      <div class="card">

        <!-- ======================
             QUESTION
        ====================== -->

        <h3>
          Q${index + 1}.
          ${q.q_en}
        </h3>

        ${
          q.q_bn
          ? `<div class="q-bn">
               ${q.q_bn}
             </div>`
          : ""
        }

        <hr>


        <!-- ======================
             OPTIONS + AI
        ====================== -->

        <div class="revision-options">

          ${(ai.elimination || [])
            .map((text,i)=>{

              const isCorrect =
                i === q.ans;

              return `

                <div class="
                  rev-option
                  ${isCorrect
                    ? "correct"
                    : "wrong"}
                ">

                  <!-- Option Text -->
                  <div class="rev-title">
                    <b>${labels[i]}.</b>

                    ${highlightTraps(
                      q.options_en[i],
                      q.subject
                    )}
                  </div>

                  ${
                    q.options_bn?.[i]
                    ? `<div class="option-bn">
                         ${q.options_bn[i]}
                       </div>`
                    : ""
                  }

                  <!-- Status -->
                  <div class="rev-status">
                    ${
                      isCorrect
                      ? "✔ Correct Answer"
                      : "❌ Incorrect Option"
                    }
                  </div>

                  <!-- AI Explanation -->
                  <div class="rev-ai">
                    🤖 ${
                      highlightTraps(
                        text || "",
                        q.subject
                      )
                    }
                  </div>

                </div>

              `;

          }).join("")}

        </div>


        <hr>


        <!-- ======================
             CONCEPT
        ====================== -->

        <div class="rev-concept">
          📌 Concept:
          <b>${q.concept || "—"}</b>
        </div>


        <!-- ======================
             PEDAGOGY
        ====================== -->

        <div class="rev-pedagogy">

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

      </div>

    `;

  }).join("");

}