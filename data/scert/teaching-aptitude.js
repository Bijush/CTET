
import { GK }
from "./gk.js";
import { currentAffairs }
from "./current-affairs.js";
import { reasoning }
from "./reasoning.js";
export const TAptitude = [
  
  /* ================= TEACHING APTITUDE SET ================= */

{
  id: "tea_apt_01",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "Practice Set",
  source: "D.El.Ed Entrance Model",
  is_exam_question: false,

  q_en:
    "A teacher notices that some students are unable to understand a concept during the lesson. What should the teacher do first?",

  q_bn:
    "একজন শিক্ষক লক্ষ্য করলেন যে কিছু শিক্ষার্থী পাঠের সময় একটি ধারণা বুঝতে পারছে না। প্রথমে শিক্ষকের কী করা উচিত?",

  options_en: [
    "Ignore them and continue the lesson",
    "Scold the students for not paying attention",
    "Re-explain the concept using a different method",
    "Give them punishment"
  ],

  options_bn: [
    "তাদের উপেক্ষা করে পাঠ চালিয়ে যাওয়া",
    "মনোযোগ না দেওয়ার জন্য বকাঝকা করা",
    "ভিন্ন পদ্ধতিতে পুনরায় ব্যাখ্যা করা",
    "শাস্তি দেওয়া"
  ],

  ans: 2,

  ans_reason_en:
    "Effective teaching requires flexibility. If students fail to understand, the teacher should modify the teaching strategy.",

  ans_reason_bn:
    "কার্যকর শিক্ষাদানের জন্য নমনীয়তা প্রয়োজন। শিক্ষার্থীরা না বুঝলে শিক্ষককে পদ্ধতি পরিবর্তন করতে হবে।",

  elimination_en: [
    "Option (0) ❌ Ignoring weak learners contradicts inclusive teaching.",
    "Option (1) ❌ Scolding reduces motivation.",
    "Option (2) ✅ Correct: Adapting method improves understanding.",
    "Option (3) ❌ Punishment creates fear, not learning."
  ],

  elimination_bn: [
    "Option (0) ❌ উপেক্ষা করা অন্তর্ভুক্তিমূলক শিক্ষার বিরোধী।",
    "Option (1) ❌ বকাঝকা প্রেরণা কমায়।",
    "Option (2) ✅ সঠিক: পদ্ধতি পরিবর্তন শেখা উন্নত করে।",
    "Option (3) ❌ শাস্তি ভয় তৈরি করে, শেখা নয়।"
  ],

  difficulty: "easy",
  concept: "Flexible Teaching",
  exam: "D.El.Ed",
  year: 2026
},

{
  id: "tea_apt_02",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "Practice Set",
  source: "D.El.Ed Entrance Model",
  is_exam_question: false,

  q_en:
    "Which of the following best reflects a learner-centered classroom?",

  q_bn:
    "নিচের কোনটি শিক্ষার্থী-কেন্দ্রিক শ্রেণিকক্ষ নির্দেশ করে?",

  options_en: [
    "Teacher speaks throughout the class",
    "Students actively participate in discussion",
    "Strict discipline without interaction",
    "Only textbook reading"
  ],

  options_bn: [
    "শিক্ষক পুরো সময় কথা বলেন",
    "শিক্ষার্থীরা আলোচনায় সক্রিয় অংশগ্রহণ করে",
    "কঠোর শৃঙ্খলা কিন্তু কোনো মিথস্ক্রিয়া নেই",
    "শুধু পাঠ্যপুস্তক পড়া"
  ],

  ans: 1,

  ans_reason_en:
    "Learner-centered classrooms promote active participation and interaction.",

  ans_reason_bn:
    "শিক্ষার্থী-কেন্দ্রিক শ্রেণিকক্ষে সক্রিয় অংশগ্রহণ ও মিথস্ক্রিয়া থাকে।",

  elimination_en: [
    "Option (0) ❌ Teacher-centered approach.",
    "Option (1) ✅ Correct: Active participation defines learner-centered classroom.",
    "Option (2) ❌ Discipline without interaction limits learning.",
    "Option (3) ❌ Textbook-only approach is traditional."
  ],

  elimination_bn: [
    "Option (0) ❌ শিক্ষক-কেন্দ্রিক পদ্ধতি।",
    "Option (1) ✅ সঠিক: সক্রিয় অংশগ্রহণই শিক্ষার্থী-কেন্দ্রিক বৈশিষ্ট্য।",
    "Option (2) ❌ মিথস্ক্রিয়া ছাড়া শৃঙ্খলা শেখা সীমিত করে।",
    "Option (3) ❌ শুধু বইভিত্তিক শিক্ষা প্রথাগত।"
  ],

  difficulty: "easy",
  concept: "Learner-Centered Teaching",
  exam: "D.El.Ed",
  year: 2026
},

{
  id: "tea_apt_03",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "Practice Set",
  source: "D.El.Ed Entrance Model",
  is_exam_question: false,

  q_en:
    "A good teacher encourages questions because it helps to:",

  q_bn:
    "একজন ভালো শিক্ষক প্রশ্ন করতে উৎসাহিত করেন কারণ এটি সাহায্য করে—",

  options_en: [
    "Control the classroom",
    "Develop critical thinking",
    "Finish syllabus quickly",
    "Maintain silence"
  ],

  options_bn: [
    "শ্রেণিকক্ষ নিয়ন্ত্রণ করতে",
    "সমালোচনামূলক চিন্তা বিকাশ করতে",
    "দ্রুত পাঠ্যক্রম শেষ করতে",
    "নীরবতা বজায় রাখতে"
  ],

  ans: 1,

  ans_reason_en:
    "Encouraging questions enhances curiosity and critical thinking skills.",

  ans_reason_bn:
    "প্রশ্ন করা কৌতূহল ও সমালোচনামূলক চিন্তা বাড়ায়।",

  elimination_en: [
    "Option (0) ❌ Questions are for learning, not control.",
    "Option (1) ✅ Correct: Promotes critical thinking.",
    "Option (2) ❌ Speed is not the goal of good teaching.",
    "Option (3) ❌ Silence does not ensure understanding."
  ],

  elimination_bn: [
    "Option (0) ❌ প্রশ্ন নিয়ন্ত্রণের জন্য নয়।",
    "Option (1) ✅ সঠিক: সমালোচনামূলক চিন্তা বাড়ায়।",
    "Option (2) ❌ দ্রুত শেষ করাই লক্ষ্য নয়।",
    "Option (3) ❌ নীরবতা মানেই বোঝা নয়।"
  ],

  difficulty: "easy",
  concept: "Questioning Technique",
  exam: "D.El.Ed",
  year: 2026
},

{
  id: "tea_apt_04",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "Practice Set",
  source: "D.El.Ed Entrance Model",
  is_exam_question: false,

  q_en:
    "Remedial teaching is mainly meant for:",

  q_bn:
    "পুনরুদ্ধারমূলক শিক্ষা মূলত কাদের জন্য?",

  options_en: [
    "High achievers",
    "Students with learning gaps",
    "Only discipline cases",
    "Teachers"
  ],

  options_bn: [
    "মেধাবী শিক্ষার্থী",
    "শেখার ঘাটতি থাকা শিক্ষার্থী",
    "শৃঙ্খলাজনিত সমস্যা",
    "শিক্ষক"
  ],

  ans: 1,

  ans_reason_en:
    "Remedial teaching helps students overcome learning deficiencies.",

  ans_reason_bn:
    "পুনরুদ্ধারমূলক শিক্ষা শেখার ঘাটতি পূরণে সাহায্য করে।",

  elimination_en: [
    "Option (0) ❌ High achievers need enrichment, not remedial.",
    "Option (1) ✅ Correct: Supports weak learners.",
    "Option (2) ❌ Discipline is not the purpose.",
    "Option (3) ❌ Not meant for teachers."
  ],

  elimination_bn: [
    "Option (0) ❌ মেধাবীদের জন্য সমৃদ্ধি দরকার।",
    "Option (1) ✅ সঠিক: দুর্বল শিক্ষার্থীদের সহায়তা করে।",
    "Option (2) ❌ শৃঙ্খলা নয় মূল উদ্দেশ্য।",
    "Option (3) ❌ শিক্ষকদের জন্য নয়।"
  ],

  difficulty: "easy",
  concept: "Remedial Teaching",
  exam: "D.El.Ed",
  year: 2026
},
/* ================= SCERT ASSAM – TEACHING APTITUDE SET ================= */

{
  id: "scert_ta_01",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Assam Pattern",
  source: "D.El.Ed Entrance Practice",
  is_exam_question: false,

  q_en:
    "In a rural government school in Assam, some students hesitate to speak in class due to language differences. What should the teacher do?",

  q_bn:
    "অসমের একটি গ্রামীণ বিদ্যালয়ে কিছু শিক্ষার্থী ভাষাগত পার্থক্যের কারণে শ্রেণিতে কথা বলতে দ্বিধা করে। শিক্ষক কী করবেন?",

  options_en: [
    "Force them to speak only in English",
    "Ignore their hesitation",
    "Encourage use of mother tongue and gradually support transition",
    "Punish them for not speaking"
  ],

  options_bn: [
    "শুধু ইংরেজিতে কথা বলতে বাধ্য করা",
    "তাদের দ্বিধা উপেক্ষা করা",
    "মাতৃভাষা ব্যবহারে উৎসাহ দিয়ে ধীরে ধীরে রূপান্তরে সহায়তা করা",
    "কথা না বলার জন্য শাস্তি দেওয়া"
  ],

  ans: 2,

  ans_reason_en:
    "SCERT emphasizes inclusive and multilingual approach. Supporting mother tongue builds confidence and learning.",

  ans_reason_bn:
    "SCERT অন্তর্ভুক্তিমূলক ও বহুভাষিক শিক্ষাকে গুরুত্ব দেয়। মাতৃভাষা আত্মবিশ্বাস বাড়ায়।",

  elimination_en: [
    "Option (0) ❌ Forcing language creates fear.",
    "Option (1) ❌ Ignoring problem reduces participation.",
    "Option (2) ✅ Correct: Inclusive multilingual approach.",
    "Option (3) ❌ Punishment discourages learning."
  ],

  elimination_bn: [
    "Option (0) ❌ জোর করলে ভয় তৈরি হয়।",
    "Option (1) ❌ উপেক্ষা করলে অংশগ্রহণ কমে।",
    "Option (2) ✅ সঠিক: অন্তর্ভুক্তিমূলক বহুভাষিক পদ্ধতি।",
    "Option (3) ❌ শাস্তি শেখা নিরুৎসাহিত করে।"
  ],

  difficulty: "easy",
  concept: "Inclusive & Multilingual Teaching",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_02",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Assam Pattern",
  source: "D.El.Ed Entrance Practice",
  is_exam_question: false,

  q_en:
    "If a student from tea garden community shows irregular attendance, teacher should first:",

  q_bn:
    "চা-বাগান এলাকার একজন শিক্ষার্থীর উপস্থিতি অনিয়মিত হলে শিক্ষক প্রথমে কী করবেন?",

  options_en: [
    "Remove the student from class",
    "Complain publicly",
    "Understand the socio-economic background and counsel",
    "Ignore the issue"
  ],

  options_bn: [
    "শ্রেণি থেকে বাদ দেওয়া",
    "সবার সামনে অভিযোগ করা",
    "সামাজিক-অর্থনৈতিক প্রেক্ষাপট বুঝে পরামর্শ দেওয়া",
    "বিষয়টি উপেক্ষা করা"
  ],

  ans: 2,

  ans_reason_en:
    "SCERT pattern focuses on child-centered and socio-cultural understanding.",

  ans_reason_bn:
    "SCERT শিশুকেন্দ্রিক ও সামাজিক প্রেক্ষাপট বোঝাকে গুরুত্ব দেয়।",

  elimination_en: [
    "Option (0) ❌ Exclusion is against RTE principles.",
    "Option (1) ❌ Public complaint hurts dignity.",
    "Option (2) ✅ Correct: Understand context first.",
    "Option (3) ❌ Ignoring worsens situation."
  ],

  elimination_bn: [
    "Option (0) ❌ বাদ দেওয়া RTE নীতির বিরোধী।",
    "Option (1) ❌ প্রকাশ্যে অভিযোগ সম্মানহানি করে।",
    "Option (2) ✅ সঠিক: প্রেক্ষাপট বোঝা জরুরি।",
    "Option (3) ❌ উপেক্ষা করলে সমস্যা বাড়ে।"
  ],

  difficulty: "medium",
  concept: "Child-Centered Approach",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_03",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Assam Pattern",
  source: "D.El.Ed Entrance Practice",
  is_exam_question: false,

  q_en:
    "Which practice best reflects activity-based learning in primary classes?",

  q_bn:
    "প্রাথমিক শ্রেণিতে কার্যভিত্তিক শিক্ষার সেরা উদাহরণ কোনটি?",

  options_en: [
    "Teacher dictating notes",
    "Students memorizing answers",
    "Group project using local materials",
    "Silent reading only"
  ],

  options_bn: [
    "শিক্ষক নোট ডিকটেশন দেন",
    "শিক্ষার্থীরা মুখস্থ করে",
    "স্থানীয় উপকরণ দিয়ে দলগত প্রকল্প",
    "শুধু নীরব পাঠ"
  ],

  ans: 2,

  ans_reason_en:
    "Activity-based learning connects classroom learning with real-life context.",

  ans_reason_bn:
    "কার্যভিত্তিক শিক্ষা বাস্তব জীবনের সাথে পাঠ যুক্ত করে।",

  elimination_en: [
    "Option (0) ❌ Traditional lecture method.",
    "Option (1) ❌ Rote learning.",
    "Option (2) ✅ Correct: Experiential learning.",
    "Option (3) ❌ Limited engagement."
  ],

  elimination_bn: [
    "Option (0) ❌ প্রথাগত পদ্ধতি।",
    "Option (1) ❌ মুখস্থভিত্তিক শিক্ষা।",
    "Option (2) ✅ সঠিক: অভিজ্ঞতাভিত্তিক শিক্ষা।",
    "Option (3) ❌ সীমিত অংশগ্রহণ।"
  ],

  difficulty: "easy",
  concept: "Activity-Based Learning",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_04",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Assam Pattern",
  source: "D.El.Ed Entrance Practice",
  is_exam_question: false,

  q_en:
    "Continuous and Comprehensive Evaluation (CCE) mainly focuses on:",

  q_bn:
    "নিরবচ্ছিন্ন ও সামগ্রিক মূল্যায়ন (CCE) মূলত গুরুত্ব দেয়—",

  options_en: [
    "Final exam marks only",
    "Overall development of the child",
    "Ranking students",
    "Punishment for failure"
  ],

  options_bn: [
    "শুধু চূড়ান্ত পরীক্ষার নম্বর",
    "শিশুর সামগ্রিক বিকাশ",
    "শিক্ষার্থীদের র‍্যাঙ্কিং",
    "ব্যর্থতার জন্য শাস্তি"
  ],

  ans: 1,

  ans_reason_en:
    "CCE evaluates scholastic and co-scholastic development continuously.",

  ans_reason_bn:
    "CCE শিক্ষার্থীর পাঠ্য ও সহ-পাঠ্য উভয় বিকাশকে মূল্যায়ন করে।",

  elimination_en: [
    "Option (0) ❌ Not limited to final exam.",
    "Option (1) ✅ Correct: Holistic development.",
    "Option (2) ❌ Ranking is not main aim.",
    "Option (3) ❌ Not punishment-based."
  ],

  elimination_bn: [
    "Option (0) ❌ শুধু চূড়ান্ত পরীক্ষা নয়।",
    "Option (1) ✅ সঠিক: সামগ্রিক বিকাশ।",
    "Option (2) ❌ র‍্যাঙ্কিং প্রধান উদ্দেশ্য নয়।",
    "Option (3) ❌ শাস্তিমূলক নয়।"
  ],

  difficulty: "easy",
  concept: "CCE & Holistic Education",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},
/* ================= SCERT ASSAM – PREVIOUS YEAR STYLE MOCK SET ================= */

{
  id: "scert_mock_01",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "Previous Year Style",
  source: "SCERT Assam Pattern Analysis",
  is_exam_question: false,

  q_en:
    "A teacher finds that a child from a flood-affected area in Assam is emotionally disturbed in class. What should the teacher do?",

  q_bn:
    "অসমের বন্যাপীড়িত অঞ্চল থেকে আসা একজন শিক্ষার্থী শ্রেণিতে মানসিকভাবে অস্থির। শিক্ষক কী করবেন?",

  options_en: [
    "Ignore the behaviour",
    "Scold the child for not concentrating",
    "Provide emotional support and create a safe environment",
    "Send the child out of class"
  ],

  options_bn: [
    "আচরণ উপেক্ষা করা",
    "মনোযোগ না দেওয়ার জন্য বকাঝকা করা",
    "মানসিক সহায়তা দিয়ে নিরাপদ পরিবেশ তৈরি করা",
    "শ্রেণির বাইরে পাঠানো"
  ],

  ans: 2,

  ans_reason_en:
    "SCERT emphasizes socio-emotional learning and supportive classroom climate.",

  ans_reason_bn:
    "SCERT সামাজিক-মানসিক বিকাশ ও সহায়ক পরিবেশকে গুরুত্ব দেয়।",

  difficulty: "medium",
  concept: "Socio-Emotional Learning",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_mock_02",
  type: "MOCK",
  subject: "Child Development",
  exam_session: "Previous Year Style",
  source: "SCERT Assam Pattern Analysis",
  is_exam_question: false,

  q_en:
    "Learning becomes meaningful when the teacher connects new knowledge with:",

  q_bn:
    "শেখা অর্থবহ হয় যখন শিক্ষক নতুন জ্ঞানকে যুক্ত করেন—",

  options_en: [
    "Students’ prior knowledge",
    "Only textbook content",
    "Punishment",
    "Strict discipline"
  ],

  options_bn: [
    "শিক্ষার্থীর পূর্ব জ্ঞান",
    "শুধু পাঠ্যবইয়ের বিষয়বস্তু",
    "শাস্তি",
    "কঠোর শৃঙ্খলা"
  ],

  ans: 0,

  ans_reason_en:
    "Constructivist approach states that learning builds on prior knowledge.",

  ans_reason_bn:
    "নির্মাণবাদী তত্ত্ব অনুযায়ী শেখা পূর্ব জ্ঞানের উপর ভিত্তি করে গড়ে ওঠে।",

  difficulty: "easy",
  concept: "Constructivist Learning",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_mock_03",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "Previous Year Style",
  source: "SCERT Assam Pattern Analysis",
  is_exam_question: false,

  q_en:
    "Inclusive classroom mainly promotes:",

  q_bn:
    "অন্তর্ভুক্তিমূলক শ্রেণিকক্ষ মূলত কী উন্নীত করে?",

  options_en: [
    "Separation of weak learners",
    "Equal opportunity for all learners",
    "Only merit-based grouping",
    "Fear-based discipline"
  ],

  options_bn: [
    "দুর্বল শিক্ষার্থীদের আলাদা করা",
    "সকল শিক্ষার্থীর জন্য সমান সুযোগ",
    "শুধু মেধাভিত্তিক দল",
    "ভয়ভিত্তিক শৃঙ্খলা"
  ],

  ans: 1,

  ans_reason_en:
    "Inclusive education ensures equal participation and opportunity for all children.",

  ans_reason_bn:
    "অন্তর্ভুক্তিমূলক শিক্ষা সকল শিক্ষার্থীর সমান অংশগ্রহণ নিশ্চিত করে।",

  difficulty: "easy",
  concept: "Inclusive Education",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_mock_04",
  type: "MOCK",
  subject: "General Knowledge (Assam)",
  exam_session: "Previous Year Style",
  source: "SCERT Assam Pattern Analysis",
  is_exam_question: false,

  q_en:
    "The official language of Assam is:",

  q_bn:
    "অসমের সরকারি ভাষা কোনটি?",

  options_en: [
    "Hindi",
    "Bengali",
    "Assamese",
    "English"
  ],

  options_bn: [
    "হিন্দি",
    "বাংলা",
    "অসমীয়া",
    "ইংরেজি"
  ],

  ans: 2,

  ans_reason_en:
    "Assamese is the official language of the state of Assam.",

  ans_reason_bn:
    "অসমীয়া অসম রাজ্যের সরকারি ভাষা।",

  difficulty: "easy",
  concept: "Assam Polity & Culture",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_mock_05",
  type: "MOCK",
  subject: "Child Development",
  exam_session: "Previous Year Style",
  source: "SCERT Assam Pattern Analysis",
  is_exam_question: false,

  q_en:
    "A child learns best when the teacher provides:",

  q_bn:
    "একজন শিক্ষার্থী সবচেয়ে ভালো শেখে যখন শিক্ষক প্রদান করেন—",

  options_en: [
    "Fear and strict control",
    "Support and encouragement",
    "Punishment",
    "Comparison with others"
  ],

  options_bn: [
    "ভয় ও কঠোর নিয়ন্ত্রণ",
    "সহায়তা ও উৎসাহ",
    "শাস্তি",
    "অন্যের সাথে তুলনা"
  ],

  ans: 1,

  ans_reason_en:
    "Positive reinforcement and encouragement improve learning outcomes.",

  ans_reason_bn:
    "ইতিবাচক উৎসাহ শেখার ফল উন্নত করে।",

  difficulty: "easy",
  concept: "Motivation in Learning",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},
/* ================= ULTRA IMPORTANT ADDITION (HIGH PROBABILITY) ================= */

{
  id: "scert_ta_05",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Prediction",
  is_exam_question: false,

  q_en:
    "A teacher compares students publicly based on marks. This practice may lead to:",

  q_bn:
    "একজন শিক্ষক নম্বরের ভিত্তিতে শিক্ষার্থীদের প্রকাশ্যে তুলনা করেন। এর ফল হতে পারে—",

  options_en: [
    "Healthy competition",
    "Improved confidence",
    "Low self-esteem among some students",
    "Better classroom discipline"
  ],

  options_bn: [
    "স্বাস্থ্যকর প্রতিযোগিতা",
    "আত্মবিশ্বাস বৃদ্ধি",
    "কিছু শিক্ষার্থীর আত্মসম্মান হ্রাস",
    "উন্নত শৃঙ্খলা"
  ],

  ans: 2,

  ans_reason_en:
    "Public comparison often reduces confidence and harms emotional well-being.",

  ans_reason_bn:
    "প্রকাশ্যে তুলনা আত্মসম্মান কমায় ও মানসিক ক্ষতি করে।",

  difficulty: "medium",
  concept: "Child Psychology & Motivation",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_06",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Prediction",
  is_exam_question: false,

  q_en:
    "The best way to handle a slow learner in class is to:",

  q_bn:
    "শ্রেণিতে ধীর শিক্ষার্থীকে সামলানোর সেরা উপায়—",

  options_en: [
    "Ignore the student",
    "Give extra support and individual attention",
    "Seat them separately permanently",
    "Reduce their syllabus"
  ],

  options_bn: [
    "উপেক্ষা করা",
    "অতিরিক্ত সহায়তা ও ব্যক্তিগত মনোযোগ দেওয়া",
    "স্থায়ীভাবে আলাদা বসানো",
    "পাঠ্যক্রম কমানো"
  ],

  ans: 1,

  ans_reason_en:
    "Individual support improves learning without discrimination.",

  ans_reason_bn:
    "ব্যক্তিগত সহায়তা বৈষম্য ছাড়াই শেখা উন্নত করে।",

  difficulty: "easy",
  concept: "Individual Differences",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_07",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Prediction",
  is_exam_question: false,

  q_en:
    "Which assessment method gives immediate feedback to improve learning?",

  q_bn:
    "কোন মূল্যায়ন পদ্ধতি তাৎক্ষণিক প্রতিক্রিয়া দেয়?",

  options_en: [
    "Summative assessment",
    "Formative assessment",
    "Board examination",
    "Annual ranking"
  ],

  options_bn: [
    "সামষ্টিক মূল্যায়ন",
    "গঠনমূলক মূল্যায়ন",
    "বোর্ড পরীক্ষা",
    "বার্ষিক র‍্যাঙ্কিং"
  ],

  ans: 1,

  ans_reason_en:
    "Formative assessment provides continuous feedback during learning.",

  ans_reason_bn:
    "গঠনমূলক মূল্যায়ন শেখার সময় ধারাবাহিক প্রতিক্রিয়া দেয়।",

  difficulty: "easy",
  concept: "Assessment for Learning",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_08",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Prediction",
  is_exam_question: false,

  q_en:
    "A teacher should maintain discipline mainly through:",

  q_bn:
    "শিক্ষকের শৃঙ্খলা বজায় রাখা উচিত প্রধানত—",

  options_en: [
    "Fear and punishment",
    "Strict rules only",
    "Positive relationship and clear expectations",
    "Public scolding"
  ],

  options_bn: [
    "ভয় ও শাস্তি",
    "কঠোর নিয়ম",
    "ইতিবাচক সম্পর্ক ও স্পষ্ট প্রত্যাশা",
    "প্রকাশ্যে বকাঝকা"
  ],

  ans: 2,

  ans_reason_en:
    "Positive discipline builds respect and long-term behavioral change.",

  ans_reason_bn:
    "ইতিবাচক শৃঙ্খলা সম্মান ও দীর্ঘমেয়াদি আচরণ উন্নতি আনে।",

  difficulty: "easy",
  concept: "Positive Discipline",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},
/* ================= CHILD DEVELOPMENT (UNDER TeachingAptitude SUBJECT) ================= */

{
  id: "scert_ta_09",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Child Development",
  is_exam_question: false,

  q_en:
    "According to Piaget, children in the primary stage learn best through:",

  q_bn:
    "পিয়াজের মতে প্রাথমিক স্তরের শিশুরা সবচেয়ে ভালো শেখে—",

  options_en: [
    "Abstract lectures",
    "Hands-on activities",
    "Memorization",
    "Punishment"
  ],

  options_bn: [
    "অমূর্ত বক্তৃতা",
    "হাতেকলমে কার্যক্রম",
    "মুখস্থবিদ্যা",
    "শাস্তি"
  ],

  ans: 1,

  ans_reason_en:
    "Piaget emphasized concrete operational learning where children learn through activities and experiences.",

  ans_reason_bn:
    "পিয়াজে কংক্রিট অপারেশনাল পর্যায়ে অভিজ্ঞতা ও কার্যভিত্তিক শেখাকে গুরুত্ব দিয়েছেন।",

  difficulty: "medium",
  concept: "Piaget’s Theory",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_10",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Child Development",
  is_exam_question: false,

  q_en:
    "Positive reinforcement in classroom helps to:",

  q_bn:
    "শ্রেণিকক্ষে ইতিবাচক উৎসাহ সাহায্য করে—",

  options_en: [
    "Create fear",
    "Increase motivation",
    "Reduce curiosity",
    "Control students strictly"
  ],

  options_bn: [
    "ভয় সৃষ্টি করতে",
    "প্রেরণা বৃদ্ধি করতে",
    "কৌতূহল কমাতে",
    "কঠোর নিয়ন্ত্রণ করতে"
  ],

  ans: 1,

  ans_reason_en:
    "Positive reinforcement strengthens desired behavior and improves motivation.",

  ans_reason_bn:
    "ইতিবাচক উৎসাহ কাঙ্ক্ষিত আচরণ শক্তিশালী করে ও প্রেরণা বাড়ায়।",

  difficulty: "easy",
  concept: "Behaviorism",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_11",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Child Development",
  is_exam_question: false,

  q_en:
    "Which factor influences learning most in early childhood?",

  q_bn:
    "শৈশবকালে শেখার উপর সবচেয়ে বেশি প্রভাব ফেলে—",

  options_en: [
    "Home environment",
    "Punishment",
    "Strict syllabus",
    "Competition"
  ],

  options_bn: [
    "পারিবারিক পরিবেশ",
    "শাস্তি",
    "কঠোর পাঠ্যক্রম",
    "প্রতিযোগিতা"
  ],

  ans: 0,

  ans_reason_en:
    "Family environment plays a crucial role in early childhood development.",

  ans_reason_bn:
    "শৈশব বিকাশে পারিবারিক পরিবেশ গুরুত্বপূর্ণ ভূমিকা রাখে।",

  difficulty: "easy",
  concept: "Early Childhood Development",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_12",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Child Development",
  is_exam_question: false,

  q_en:
    "Individual differences among learners mean that teachers should:",

  q_bn:
    "শিক্ষার্থীদের ব্যক্তিগত পার্থক্য মানে শিক্ষককে—",

  options_en: [
    "Teach in the same way to all",
    "Provide differentiated instruction",
    "Ignore weaker students",
    "Focus only on toppers"
  ],

  options_bn: [
    "সবার জন্য একই পদ্ধতি ব্যবহার করা",
    "ভিন্নধর্মী শিক্ষণ পদ্ধতি প্রয়োগ করা",
    "দুর্বল শিক্ষার্থী উপেক্ষা করা",
    "শুধু মেধাবীদের উপর গুরুত্ব দেওয়া"
  ],

  ans: 1,

  ans_reason_en:
    "Differentiated instruction helps address diverse learning needs.",

  ans_reason_bn:
    "ভিন্নধর্মী শিক্ষণ শিক্ষার্থীদের বিভিন্ন প্রয়োজন মেটায়।",

  difficulty: "medium",
  concept: "Individual Differences",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},
/* ================= ADVANCED CHILD DEVELOPMENT (UNDER TeachingAptitude) ================= */

{
  id: "scert_ta_13",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Theory Based",
  is_exam_question: false,

  q_en:
    "According to Vygotsky, learning occurs best in the:",

  q_bn:
    "ভাইগটস্কির মতে শেখা সর্বোত্তম হয়—",

  options_en: [
    "Zone of Proximal Development",
    "Concrete operational stage",
    "Punishment zone",
    "Memory stage"
  ],

  options_bn: [
    "নিকটবর্তী বিকাশ ক্ষেত্র (ZPD)",
    "কংক্রিট অপারেশনাল স্তর",
    "শাস্তির ক্ষেত্র",
    "স্মৃতি স্তর"
  ],

  ans: 0,

  ans_reason_en:
    "Vygotsky stated that learning is most effective in the Zone of Proximal Development with proper guidance.",

  ans_reason_bn:
    "ভাইগটস্কি বলেছেন, যথাযথ সহায়তায় নিকটবর্তী বিকাশ ক্ষেত্রে শেখা সবচেয়ে কার্যকর।",

  difficulty: "medium",
  concept: "Vygotsky’s Theory",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_14",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Theory Based",
  is_exam_question: false,

  q_en:
    "Howard Gardner proposed the theory of:",

  q_bn:
    "হাওয়ার্ড গার্ডনার প্রস্তাব করেন—",

  options_en: [
    "Classical conditioning",
    "Multiple Intelligences",
    "Cognitive conflict",
    "Moral punishment"
  ],

  options_bn: [
    "ক্লাসিকাল কন্ডিশনিং",
    "বহুবিধ বুদ্ধিমত্তা তত্ত্ব",
    "জ্ঞানীয় সংঘর্ষ",
    "নৈতিক শাস্তি"
  ],

  ans: 1,

  ans_reason_en:
    "Gardner introduced the theory of Multiple Intelligences emphasizing diverse abilities.",

  ans_reason_bn:
    "গার্ডনার বহুবিধ বুদ্ধিমত্তা তত্ত্ব প্রস্তাব করেন, যা বিভিন্ন সক্ষমতাকে গুরুত্ব দেয়।",

  difficulty: "easy",
  concept: "Multiple Intelligence Theory",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_15",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Theory Based",
  is_exam_question: false,

  q_en:
    "Kohlberg’s theory is related to development of:",

  q_bn:
    "কোলবার্গের তত্ত্ব সম্পর্কিত—",

  options_en: [
    "Language development",
    "Moral development",
    "Physical growth",
    "Emotional fear"
  ],

  options_bn: [
    "ভাষা বিকাশ",
    "নৈতিক বিকাশ",
    "শারীরিক বৃদ্ধি",
    "ভয়ভিত্তিক আবেগ"
  ],

  ans: 1,

  ans_reason_en:
    "Kohlberg explained stages of moral development in children.",

  ans_reason_bn:
    "কোলবার্গ শিশুদের নৈতিক বিকাশের স্তর ব্যাখ্যা করেছেন।",

  difficulty: "easy",
  concept: "Moral Development",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

{
  id: "scert_ta_16",
  type: "MOCK",
  subject: "TeachingAptitude",
  exam_session: "SCERT Final Focus",
  source: "High Probability Theory Based",
  is_exam_question: false,

  q_en:
    "Erikson’s theory mainly focuses on:",

  q_bn:
    "এরিকসনের তত্ত্ব মূলত গুরুত্ব দেয়—",

  options_en: [
    "Cognitive stages",
    "Psychosocial development",
    "Conditioned learning",
    "Intelligence testing"
  ],

  options_bn: [
    "জ্ঞানীয় স্তর",
    "মনোসামাজিক বিকাশ",
    "শর্তাধীন শিক্ষা",
    "বুদ্ধিমত্তা পরীক্ষা"
  ],

  ans: 1,

  ans_reason_en:
    "Erikson described psychosocial stages of human development.",

  ans_reason_bn:
    "এরিকসন মানুষের মনোসামাজিক বিকাশের স্তর বর্ণনা করেছেন।",

  difficulty: "medium",
  concept: "Erikson’s Psychosocial Theory",
  exam: "SCERT Assam D.El.Ed",
  year: 2026
},

...GK,
    ...currentAffairs,
              ...reasoning
  
  
  ];