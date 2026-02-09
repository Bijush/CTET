/* =====================================
   🤖 OFFLINE AI TEACHER (LEVEL–5 MASTER)
   Pedagogy + Psychology Auto Intelligence
===================================== */

import { detectTraps } from "./trap_detector.js";

export function offlineAIExplain(q, chosenIndex, langMode = "BOTH") {

  const concept = q.concept || "this concept";
  const correct = q.ans;

  const mix = (en, bn) =>
    langMode === "EN" ? en :
    langMode === "BN" ? bn :
    en + "<br>" + bn;

  /* =====================================================
     🧠 BLOOM’S TAXONOMY AUTO TAG
  ===================================================== */

  function detectBloomLevel(text = "") {

    text = text.toLowerCase();

    if (text.match(/analyze|compare|distinguish|differentiate/))
      return "Analyzing";

    if (text.match(/apply|classroom|situation|example/))
      return "Applying";

    if (text.match(/evaluate|judge|best|most appropriate/))
      return "Evaluating";

    if (text.match(/create|design|develop/))
      return "Creating";

    if (text.match(/understand|explain|concept/))
      return "Understanding";

    return "Remembering";
  }

  const bloomLevel = detectBloomLevel(
    q.q_en + " " + q.options_en.join(" ")
  );

  /* =====================================================
     👶 PIAGET STAGE DETECTION
  ===================================================== */

  function detectPiaget() {

    const text = (q.q_en + q.options_en.join(" ")).toLowerCase();

    if (text.includes("abstract") || text.includes("hypothetical"))
      return "Formal Operational Stage";

    if (text.includes("logic") || text.includes("classification"))
      return "Concrete Operational Stage";

    if (text.includes("symbol") || text.includes("language"))
      return "Pre-Operational Stage";

    return "General Development Stage";
  }

  const piagetStage = detectPiaget();

  /* =====================================================
     👥 VYGOTSKY LINK DETECTION
  ===================================================== */

  function detectVygotsky() {

    const text = (q.q_en + q.options_en.join(" ")).toLowerCase();

    if (text.includes("peer") || text.includes("collaborative"))
      return "Peer Learning (ZPD Support)";

    if (text.includes("teacher support") || text.includes("guidance"))
      return "Scaffolding";

    if (text.includes("interaction") || text.includes("discussion"))
      return "Social Constructivism";

    return "General Social Learning";
  }

  const vygotskyLink = detectVygotsky();

  /* =====================================================
     🧱 CONSTRUCTIVISM DETECTION
  ===================================================== */

  function detectConstructivism() {

    const text = (q.q_en + q.options_en.join(" ")).toLowerCase();

    if (
      text.includes("explore") ||
      text.includes("discover") ||
      text.includes("construct") ||
      text.includes("activity based")
    ) {
      return {
        en: "This question reflects Constructivist Pedagogy — learners actively construct knowledge.",
        bn: "এই প্রশ্নটি Constructivist পদ্ধতির উদাহরণ — শিক্ষার্থীরা নিজেরাই জ্ঞান গঠন করে।"
      };
    }

    return {
      en: "This question is not purely constructivist but still involves guided learning.",
      bn: "এই প্রশ্নটি সম্পূর্ণ Constructivist নয়, তবে নির্দেশিত শিক্ষণ যুক্ত।"
    };
  }

  const constructivism = detectConstructivism();

  /* =====================================================
     🔬 DEEP OPTION EXPLANATION
  ===================================================== */

  const elimination = q.options_en.map((op, i) => {

    const label = String.fromCharCode(65 + i);
    const traps = detectTraps(
      op + " " + (q.options_bn?.[i] || ""),
      q.subject
    );

    if (i === correct) {

      const en = `
✔ Option ${label} is correct.

It reflects ${concept} through real classroom practice.
Students actively engage and construct learning.
`;

      const bn = `
✔ Option ${label} সঠিক।

এটি বাস্তব শ্রেণিকক্ষে ${concept} ধারণার সঠিক প্রয়োগ।
শিক্ষার্থীরা সক্রিয়ভাবে শেখায় অংশ নেয়।
`;

      return mix(en, bn);
    }

    let trapLineEN = "";
    let trapLineBN = "";

    if (traps.length) {
      trapLineEN =
        `Trap keyword(s): ${traps.join(", ")}`;
      trapLineBN =
        `Trap শব্দ: ${traps.join(", ")}`;
    }

    const en = `
❌ Option ${label} incorrect.

Fails to apply ${concept} in classroom learning.

${trapLineEN}
`;

    const bn = `
❌ Option ${label} ভুল।

শ্রেণিকক্ষে ${concept} প্রয়োগ করতে ব্যর্থ।

${trapLineBN}
`;

    return mix(en, bn);
  });

  /* =====================================================
     🏫 CLASSROOM EXAMPLE
  ===================================================== */

  const classEN = `
In classroom, ${concept} appears when students
discuss, collaborate, and build understanding.
`;

  const classBN = `
শ্রেণিকক্ষে ${concept} দেখা যায় যখন শিক্ষার্থীরা
আলোচনা ও সহযোগিতার মাধ্যমে শেখে।
`;

  /* =====================================================
     📘 NCERT LINK
  ===================================================== */

  const ncertEN =
    `Refer NCERT CDP chapters explaining ${concept}.`;

  const ncertBN =
    `${concept} সম্পর্কিত NCERT অধ্যায় পড়ো।`;

  /* =====================================================
     🎯 PERSONAL FEEDBACK
  ===================================================== */

  let personalEN = "";
  let personalBN = "";

  if (chosenIndex !== correct) {

    personalEN =
      `Focus more on classroom application instead of keywords.`;

    personalBN =
      `Keyword নয়, শ্রেণিকক্ষ প্রয়োগে বেশি গুরুত্ব দাও।`;
  }
  else {

    personalEN =
      `Excellent pedagogical understanding!`;

    personalBN =
      `চমৎকার শিক্ষণগত বোঝাপড়া!`;
  }

  /* =====================================================
     RETURN LEVEL-5 DATA
  ===================================================== */

  return {

    concept: mix(
      `Concept focus: ${concept}`,
      `ধারণা ফোকাস: ${concept}`
    ),

    elimination,

    classroom: mix(classEN, classBN),

    ncert: mix(ncertEN, ncertBN),

    personal: mix(personalEN, personalBN),

    /* 🧠 NEW PEDAGOGY TAGS */

    pedagogy: {

      bloom: bloomLevel,

      piaget: piagetStage,

      vygotsky: vygotskyLink,

      constructivism: mix(
        constructivism.en,
        constructivism.bn
      )
    }
  };
}