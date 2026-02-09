// utils/trap_detector.js
import { examTraps } from "../data/exam_traps.js";

/* ===================================
   Detect CTET Exam Traps
=================================== */
export function detectTraps(text = "", subject = "") {
  if (!text) return [];

  const lower = text.toLowerCase();

  const global = examTraps.GLOBAL || [];
  const subjectTraps = examTraps[subject] || [];

  const all = [...global, ...subjectTraps];

  const found = all.filter(t =>
    lower.includes(t.toLowerCase())
  );

  // remove duplicates
  return [...new Set(found)];
}