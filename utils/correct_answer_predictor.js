// utils/correct_answer_predictor.js

import { detectTraps } from "./trap_detector.js";
import { detectBoosts } from "./boost_detector.js";

/* =========================================
   🧠 Predict Correct Answer
   Based on Examiner Psychology
========================================= */

export function predictCorrectAnswer(options = [], subject = "") {

  if (!options.length) return null;

  const results = [];

  /* ==============================
     Analyze Each Option
  ============================== */
  options.forEach((text, index) => {

    const traps =
      detectTraps(text, subject);

    const boosts =
      detectBoosts(text, subject);

    /* ==============================
       Scoring Logic
    ============================== */

    const trapScore =
      traps.length * -2;   // negative weight

    const boostScore =
      boosts.length * 3;   // positive weight

    const finalScore =
      trapScore + boostScore;

    results.push({
      index,
      text,
      traps,
      boosts,
      trapScore,
      boostScore,
      finalScore
    });

  });

  /* ==============================
     Sort by Highest Score
  ============================== */
  results.sort(
    (a, b) => b.finalScore - a.finalScore
  );

  /* ==============================
     Return Best Prediction
  ============================== */
  return {
    predictedIndex: results[0].index,
    analysis: results
  };
}