// utils/boost_detector.js

import { examBoosts } from "../data/exam_boosts.js";

/* ===================================
   🧠 Detect Positive Examiner Signals
   ✔ Single word safe
   ✔ Multi-word safe
   ✔ Bengali + English
   ✔ Substring protected
=================================== */
export function detectBoosts(text = "", subject = "") {

  /* ==============================
     🚫 Safety Check
  ============================== */
  if (!text) return [];

  /* ==============================
     1️⃣ Normalize Input Text
  ============================== */
  const normalizedText =
    normalizeText(text);

  /* ==============================
     2️⃣ Collect Boost Lists
  ============================== */
  const globalBoosts =
    examBoosts.GLOBAL || [];

  const subjectBoosts =
    examBoosts[subject] || [];

  const allBoosts = [
    ...globalBoosts,
    ...subjectBoosts
  ];

  /* ==============================
     3️⃣ Detection Engine
  ============================== */
  const foundSet = new Set();

  for (const rawWord of allBoosts) {

    if (!rawWord) continue;

    const boostWord =
      normalizeText(rawWord);

    const escaped =
      escapeRegex(boostWord);

    // Word / Phrase Boundary Regex
    const regex =
      new RegExp(`\\b${escaped}\\b`, "i");

    if (regex.test(normalizedText)) {
      foundSet.add(rawWord);
    }

  }

  /* ==============================
     4️⃣ Return Unique Matches
  ============================== */
  return Array.from(foundSet);
}



/* ===================================
   🔧 HELPER FUNCTIONS
   (Same File — Option 1)
=================================== */

/* Normalize Text */
function normalizeText(text) {

  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}


/* Escape Regex Special Characters */
function escapeRegex(text) {

  return text.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}