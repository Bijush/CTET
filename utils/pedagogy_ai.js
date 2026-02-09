import { PEDAGOGY_MAP } from "../data/pedagogy_map.js";
import { detectTraps } from "./trap_detector.js";

/* =====================================
   🧠 PEDAGOGY AI ENGINE
===================================== */
export function getPedagogyProfile(q = {}) {

  /* ======================
     SAFE NORMALIZATION
  ====================== */

  const concept =
    typeof q.concept === "string"
      ? q.concept.trim()
      : "";

  /* ======================
     DIRECT MAP MATCH
  ====================== */

  if (concept && PEDAGOGY_MAP?.[concept]) {
    return PEDAGOGY_MAP[concept];
  }

  /* ======================
     SAFE TEXT BUILD
  ====================== */

  const enOptions =
    Array.isArray(q.options_en)
      ? q.options_en
      : [];

  const bnOptions =
    Array.isArray(q.options_bn)
      ? q.options_bn
      : [];

  const text =
    enOptions.join(" ") +
    " " +
    bnOptions.join(" ");

  /* ======================
     SAFE TRAP DETECTION
  ====================== */

  let traps = [];

  try {
    traps = detectTraps(
      text,
      q.subject || ""
    ) || [];
  } catch (e) {
    traps = [];
  }

  /* ======================
     HEURISTIC FALLBACK
  ====================== */

  return {
    bloom:
      typeof detectBloom === "function"
        ? detectBloom(text)
        : "Understanding",

    piaget:
      typeof detectPiaget === "function"
        ? detectPiaget(text)
        : "Pre-operational",

    vygotsky:
      typeof detectVygotsky === "function"
        ? detectVygotsky(text)
        : "ZPD",

    constructivism:
      typeof detectConstructivism === "function"
        ? detectConstructivism(text, traps)
        : "Active Learning"
  };
}

/* ======================
   BLOOM DETECTOR
====================== */
function detectBloom(text) {

  if (/analyze|reason|compare/i.test(text))
    return "Analyzing";

  if (/apply|classroom|situation/i.test(text))
    return "Applying";

  if (/evaluate|judge|opinion/i.test(text))
    return "Evaluating";

  return "Understanding";
}

/* ======================
   PIAGET DETECTOR
====================== */
function detectPiaget(text) {

  if (/abstract|hypothesis/i.test(text))
    return "Formal Operational";

  if (/logic|object/i.test(text))
    return "Concrete Operational";

  return "General Development";
}

/* ======================
   VYGOTSKY DETECTOR
====================== */
function detectVygotsky(text) {

  if (/peer|group|discussion/i.test(text))
    return "Collaborative Learning";

  if (/teacher support|guidance/i.test(text))
    return "Scaffolding";

  return "Social Interaction Learning";
}

/* ======================
   CONSTRUCTIVISM DETECTOR
====================== */
function detectConstructivism(text, traps) {

  if (/self learning|discovery|construct/i.test(text))
    return "Strong Constructivist";

  if (traps.includes("rote") || traps.includes("memorization"))
    return "Non-Constructivist";

  return "Guided Constructivism";
}