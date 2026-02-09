/* ======================
   🧠 EXAM PROBABILITY
====================== */

import { mcqQuestion }
  from "../data/mcq_question.js";

/* ======================
   📚 SUBJECT MAP
   (Fallback if missing)
====================== */

const SUBJECT_MAP = {

  "Inclusive Education": "CDP",
  "Constructivism": "CDP",
  "Motivation": "CDP",
  "Insight Learning": "CDP",
  "Gender Stereotyping": "CDP",
  "Assessment & Anxiety": "CDP",
  "Multiple Intelligence – Gardner": "CDP",

  "Number System": "Math",
  "Algebra": "Math",
  "Geometry": "Math",

  "Environment": "EVS",
  "Food & Nutrition": "EVS",
  "Family & Friends": "EVS"

};

/* ======================
   PREDICT FUNCTION
====================== */

export function predictExamProbability(){

  const map = {};

  mcqQuestion.forEach(q => {

    const concept =
      q.concept || "Unknown";

    /* ✅ SUBJECT DETECT */
    const subject =
      q.subject ||
      SUBJECT_MAP[concept] ||
      "CDP";   // default fallback

    if(!map[concept]){

      map[concept] = {
        count: 0,
        recent: 0,
        exams: new Set(),
        subject   // store subject
      };

    }

    /* ======================
       📊 Frequency
    ====================== */
    map[concept].count++;

    /* ======================
       🗓 Recent Weight
    ====================== */
    if(q.year >= 2020){
      map[concept].recent++;
    }

    /* ======================
       📝 Exam Diversity
    ====================== */
    if(q.exam){
      map[concept]
        .exams
        .add(q.exam);
    }

  });


  /* ======================
     🧮 SCORE CALCULATION
  ====================== */

  const result =
    Object.entries(map)
      .map(([concept,data]) => {

        const score =

          data.count * 2 +      // frequency
          data.recent * 3 +     // recent weight
          data.exams.size * 2;  // diversity

        return {

          concept,

          /* 📚 SUBJECT ADDED */
          subject:
            data.subject || "CDP",

          frequency:
            data.count,

          recent:
            data.recent,

          examCount:
            data.exams.size,

          score

        };

      })

      .sort(
        (a,b)=>b.score-a.score
      );

  return result;
}