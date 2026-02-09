
import { piagetHighProbMCQ }
from "./piaget_mcq.js";

export const mcqQuestion = [

  {
    id: "mcq_cdp_01",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "While participating in a sports competition in class, Tanuj says that he will do javelin throw and his sister should do jump rope because she is a girl. This depicts:",
    q_bn:
      "শ্রেণিতে ক্রীড়া প্রতিযোগিতার সময় তনুজ বলে যে সে জ্যাভলিন নিক্ষেপ করবে আর তার বোন দড়ি লাফ দেবে কারণ সে মেয়ে। এটি কোনটি নির্দেশ করে?",
    options_en: [
      "Gender constancy",
      "Gender equality",
      "Gender equity",
      "Gender stereotyping"
    ],
    options_bn: [
      "লিঙ্গ স্থায়িত্ব",
      "লিঙ্গ সমতা",
      "লিঙ্গ ন্যায়",
      "লিঙ্গভিত্তিক ধ্যানধারণা"
    ],
    ans: 3,
    ans_reason_en:
      "Assigning activities based on gender reflects gender stereotyping.",
    ans_reason_bn:
      "লিঙ্গের ভিত্তিতে কাজ নির্ধারণ করা লিঙ্গভিত্তিক ধ্যানধারণা প্রকাশ করে।",
    elimination: [
      "❌ Gender constancy",
      "❌ Gender equality",
      "❌ Gender equity",
      "✅ Gender stereotyping"
    ],
    difficulty: "easy",
    concept: "Gender Stereotyping",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_02",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "While divergent thinking __________ convergent thinking __________.",
    q_bn:
      "বিস্তারমূলক চিন্তন __________ আর অভিসারী চিন্তন __________।",
    options_en: [
      "encourages multiple answers; is fixed on one correct solution",
      "is fixed on one correct solution; encourages multiple answers",
      "promotes mathematical abilities; promotes verbal abilities",
      "promotes verbal abilities; promotes mathematical abilities"
    ],
    options_bn: [
      "একাধিক উত্তরকে উৎসাহিত করে; একটি সঠিক উত্তরে স্থির থাকে",
      "একটি সঠিক উত্তরে স্থির থাকে; একাধিক উত্তরকে উৎসাহিত করে",
      "গাণিতিক দক্ষতা বাড়ায়; ভাষাগত দক্ষতা বাড়ায়",
      "ভাষাগত দক্ষতা বাড়ায়; গাণিতিক দক্ষতা বাড়ায়"
    ],
    ans: 0,
    ans_reason_en:
      "Divergent thinking generates multiple ideas, while convergent thinking focuses on one correct answer.",
    ans_reason_bn:
      "বিস্তারমূলক চিন্তনে একাধিক ধারণা তৈরি হয়।",
    elimination: [
      "✅ Correct definition",
      "❌ Reversed",
      "❌ Incorrect",
      "❌ Incorrect"
    ],
    difficulty: "easy",
    concept: "Thinking",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_03",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following statements about inclusive education is NOT correct?",
    q_bn:
      "নিম্নলিখিত কোনটি অন্তর্ভুক্তিমূলক শিক্ষার ক্ষেত্রে সঠিক নয়?",
    options_en: [
      "Teaching in ways that do not exclude",
      "Adopting pedagogies that support all learners",
      "Accommodating language differences",
      "Centred around fixed curriculum"
    ],
    options_bn: [
      "বর্জনহীন শিক্ষণ",
      "সব শিক্ষার্থীর জন্য উপযোগী",
      "ভাষাগত পার্থক্য মেনে নেওয়া",
      "স্থির পাঠ্যক্রমভিত্তিক"
    ],
    ans: 3,
    ans_reason_en:
      "Inclusive education is flexible, not rigid.",
    ans_reason_bn:
      "অন্তর্ভুক্তিমূলক শিক্ষা নমনীয়।",
    elimination: [
      "❌ Correct",
      "❌ Correct",
      "❌ Correct",
      "✅ Incorrect"
    ],
    difficulty: "medium",
    concept: "Inclusive Education",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_04",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Assertion (A): Learners construct their own knowledge.\nReason (R): Linking prior knowledge leads to meaningful learning.",
    q_bn:
      "উক্তি (A): শিক্ষার্থীরা নিজে জ্ঞান গঠন করে।\nকারণ (R): পূর্বজ্ঞান যুক্ত করলে অর্থপূর্ণ শেখা হয়।",
    options_en: [
      "Both A and R are true and R explains A",
      "Both true but R does not explain A",
      "A true R false",
      "Both false"
    ],
    options_bn: [
      "A ও R সত্য এবং R ব্যাখ্যা করে",
      "উভয় সত্য কিন্তু ব্যাখ্যা করে না",
      "A সত্য R মিথ্যা",
      "উভয় মিথ্যা"
    ],
    ans: 0,
    ans_reason_en: "This reflects constructivism.",
    ans_reason_bn: "এটি নির্মাণবাদ।",
    elimination: [
      "✅ Correct",
      "❌ Incorrect",
      "❌ Incorrect",
      "❌ Incorrect"
    ],
    difficulty: "medium",
    concept: "Constructivism",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_05",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "According to attribution theory, which attribution leads to persistent effort?",
    q_bn:
      "আরোপণ তত্ত্ব অনুযায়ী কোনটি স্থায়ী প্রচেষ্টা সৃষ্টি করে?",
    options_en: [
      "Internal success, external failure",
      "External success, internal failure",
      "Internal for both",
      "External for both"
    ],
    options_bn: [
      "সফলতায় অন্তর্গত",
      "ব্যর্থতায় অন্তর্গত",
      "উভয় অন্তর্গত",
      "উভয় বাহ্যিক"
    ],
    ans: 0,
    ans_reason_en:
      "Internal success increases motivation.",
    ans_reason_bn:
      "অন্তর্গত কারণ প্রেরণা বাড়ায়।",
    elimination: [
      "✅ Correct",
      "❌ Incorrect",
      "❌ Discouraging",
      "❌ No control"
    ],
    difficulty: "medium",
    concept: "Attribution Theory",
    exam: "CTET",
    year: 2024
  },
  {
    id: "mcq_cdp_06",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following practices is most appropriate for promoting motivation among learners?",
    q_bn:
      "নিম্নলিখিত কোন অনুশীলনটি শিক্ষার্থীদের মধ্যে প্রেরণা বাড়ানোর জন্য সবচেয়ে উপযুক্ত?",
    options_en: [
      "Frequent punishment for mistakes",
      "Comparison among students",
      "Providing meaningful feedback",
      "Strict control over learning"
    ],
    options_bn: [
      "ভুলের জন্য ঘন ঘন শাস্তি",
      "শিক্ষার্থীদের মধ্যে তুলনা",
      "অর্থবহ প্রতিক্রিয়া প্রদান",
      "শেখার উপর কঠোর নিয়ন্ত্রণ"
    ],
    ans: 2,
    ans_reason_en:
      "Meaningful feedback enhances intrinsic motivation and learning.",
    ans_reason_bn:
      "অর্থবহ প্রতিক্রিয়া শিক্ষার্থীদের অন্তঃপ্রেরণা ও শেখার আগ্রহ বাড়ায়।",
    elimination: [
      "❌ Punishment → fear-based",
      "❌ Comparison → demotivating",
      "✅ Feedback → motivating",
      "❌ Strict control → reduces autonomy"
    ],
    difficulty: "easy",
    concept: "Motivation",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_07",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "A teacher who encourages questioning, discussion and exploration is following which approach?",
    q_bn:
      "যে শিক্ষক প্রশ্ন, আলোচনা ও অনুসন্ধানকে উৎসাহিত করেন তিনি কোন পদ্ধতি অনুসরণ করছেন?",
    options_en: [
      "Behaviourist approach",
      "Constructivist approach",
      "Authoritarian approach",
      "Lecture method"
    ],
    options_bn: [
      "ব্যবহারবাদী পদ্ধতি",
      "নির্মাণবাদী পদ্ধতি",
      "কর্তৃত্ববাদী পদ্ধতি",
      "লেকচার পদ্ধতি"
    ],
    ans: 1,
    ans_reason_en:
      "Constructivism emphasizes active learning through interaction and exploration.",
    ans_reason_bn:
      "নির্মাণবাদে শিক্ষার্থী সক্রিয়ভাবে অনুসন্ধান ও আলোচনার মাধ্যমে শেখে।",
    elimination: [
      "❌ Behaviourist → stimulus-response",
      "✅ Constructivist → active learning",
      "❌ Authoritarian → teacher-dominated",
      "❌ Lecture → passive learning"
    ],
    difficulty: "easy",
    concept: "Constructivism",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_08",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following is a characteristic of children at the concrete operational stage?",
    q_bn:
      "নিম্নলিখিত কোনটি কংক্রিট অপারেশনাল স্তরের শিশুদের বৈশিষ্ট্য?",
    options_en: [
      "Abstract reasoning",
      "Egocentric thinking",
      "Logical thinking about concrete objects",
      "Trial and error learning"
    ],
    options_bn: [
      "অমূর্ত যুক্তি",
      "আত্মকেন্দ্রিক চিন্তন",
      "বাস্তব বস্তু নিয়ে যুক্তিসংগত চিন্তন",
      "ট্রায়াল অ্যান্ড এরর শেখা"
    ],
    ans: 2,
    ans_reason_en:
      "At this stage children think logically about concrete objects.",
    ans_reason_bn:
      "এই স্তরে শিশুরা বাস্তব বস্তু নিয়ে যুক্তিসংগতভাবে চিন্তা করতে পারে।",
    elimination: [
      "❌ Abstract reasoning → formal stage",
      "❌ Egocentrism → pre-operational",
      "✅ Logical concrete thinking",
      "❌ Trial and error → early stage"
    ],
    difficulty: "medium",
    concept: "Piaget – Concrete Operational Stage",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_09",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best supports emotional development in children?",
    q_bn:
      "নিম্নলিখিত কোনটি শিশুদের আবেগীয় বিকাশে সবচেয়ে বেশি সহায়তা করে?",
    options_en: [
      "Strict discipline",
      "Fear of punishment",
      "Supportive and secure environment",
      "Constant comparison"
    ],
    options_bn: [
      "কঠোর শাসন",
      "শাস্তির ভয়",
      "সহায়ক ও নিরাপদ পরিবেশ",
      "নিরবচ্ছিন্ন তুলনা"
    ],
    ans: 2,
    ans_reason_en:
      "A secure and supportive environment fosters emotional well-being.",
    ans_reason_bn:
      "নিরাপদ ও সহায়ক পরিবেশ আবেগীয় সুস্থতা বাড়ায়।",
    elimination: [
      "❌ Strict discipline → fear",
      "❌ Punishment → anxiety",
      "✅ Supportive environment",
      "❌ Comparison → emotional harm"
    ],
    difficulty: "easy",
    concept: "Emotional Development",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_10",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following is the most suitable assessment practice in an inclusive classroom?",
    q_bn:
      "অন্তর্ভুক্তিমূলক শ্রেণিকক্ষে নিম্নলিখিত কোন মূল্যায়ন পদ্ধতিটি সবচেয়ে উপযুক্ত?",
    options_en: [
      "Standardised test for all learners",
      "Comparison-based grading",
      "Flexible and continuous assessment",
      "One-time final examination"
    ],
    options_bn: [
      "সব শিক্ষার্থীর জন্য একই মানক পরীক্ষা",
      "তুলনাভিত্তিক গ্রেডিং",
      "নমনীয় ও ধারাবাহিক মূল্যায়ন",
      "একবারের চূড়ান্ত পরীক্ষা"
    ],
    ans: 2,
    ans_reason_en:
      "Inclusive classrooms require flexible and continuous assessment.",
    ans_reason_bn:
      "অন্তর্ভুক্তিমূলক শ্রেণিকক্ষে নমনীয় ও ধারাবাহিক মূল্যায়ন প্রয়োজন।",
    elimination: [
      "❌ Standardised test → ignores diversity",
      "❌ Comparison → demotivating",
      "✅ Flexible assessment",
      "❌ One-time exam → rigid"
    ],
    difficulty: "medium",
    concept: "Inclusive Assessment",
    exam: "CTET",
    year: 2024
  },
  {
    id: "mcq_cdp_11",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following is a key principle of child-centred education?",
    q_bn:
      "শিশু-কেন্দ্রিক শিক্ষার একটি মূল নীতি কোনটি?",
    options_en: [
      "Strict discipline",
      "Uniform teaching method",
      "Active participation of learners",
      "Teacher domination"
    ],
    options_bn: [
      "কঠোর শাসন",
      "একই শিক্ষণ পদ্ধতি",
      "শিক্ষার্থীদের সক্রিয় অংশগ্রহণ",
      "শিক্ষকের আধিপত্য"
    ],
    ans: 2,
    ans_reason_en:
      "Child-centred education focuses on active participation of learners.",
    ans_reason_bn:
      "শিশু-কেন্দ্রিক শিক্ষায় শিক্ষার্থীদের সক্রিয় অংশগ্রহণের উপর জোর দেওয়া হয়।",
    elimination: [
      "❌ Strict discipline",
      "❌ Uniform method",
      "✅ Active participation",
      "❌ Teacher domination"
    ],
    difficulty: "easy",
    concept: "Child-centred Education",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_12",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "According to Vygotsky, learning occurs most effectively in the",
    q_bn:
      "ভাইগটস্কির মতে শেখা সবচেয়ে কার্যকরভাবে ঘটে—",
    options_en: [
      "Zone of proximal development",
      "Zone of actual development",
      "Zone of maturation",
      "Zone of intelligence"
    ],
    options_bn: [
      "নিকটবর্তী বিকাশ ক্ষেত্র",
      "বাস্তব বিকাশ ক্ষেত্র",
      "পরিপক্বতার ক্ষেত্র",
      "বুদ্ধিমত্তার ক্ষেত্র"
    ],
    ans: 0,
    ans_reason_en:
      "Learning is maximized in the Zone of Proximal Development (ZPD).",
    ans_reason_bn:
      "নিকটবর্তী বিকাশ ক্ষেত্রেই শেখা সর্বাধিক হয়।",
    elimination: [
      "✅ ZPD",
      "❌ Actual development",
      "❌ Maturation",
      "❌ Intelligence"
    ],
    difficulty: "medium",
    concept: "Vygotsky – ZPD",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_13",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best represents formative assessment?",
    q_bn:
      "নিম্নলিখিত কোনটি গঠনমূলক মূল্যায়নের উদাহরণ?",
    options_en: [
      "Final examination",
      "Unit-end test",
      "Continuous feedback during learning",
      "Annual examination"
    ],
    options_bn: [
      "চূড়ান্ত পরীক্ষা",
      "ইউনিট শেষে পরীক্ষা",
      "শেখার সময় ধারাবাহিক প্রতিক্রিয়া",
      "বার্ষিক পরীক্ষা"
    ],
    ans: 2,
    ans_reason_en:
      "Formative assessment provides ongoing feedback to improve learning.",
    ans_reason_bn:
      "গঠনমূলক মূল্যায়নে শেখার সময় ধারাবাহিক প্রতিক্রিয়া দেওয়া হয়।",
    elimination: [
      "❌ Final exam",
      "❌ Unit-end test",
      "✅ Continuous feedback",
      "❌ Annual exam"
    ],
    difficulty: "easy",
    concept: "Formative Assessment",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_14",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which factor plays the most important role in the social development of a child?",
    q_bn:
      "শিশুর সামাজিক বিকাশে কোন উপাদানটি সবচেয়ে গুরুত্বপূর্ণ ভূমিকা পালন করে?",
    options_en: [
      "Heredity",
      "Peer interaction",
      "Physical growth",
      "Intelligence quotient"
    ],
    options_bn: [
      "বংশগতি",
      "সমবয়সীদের সাথে মিথস্ক্রিয়া",
      "শারীরিক বৃদ্ধি",
      "বুদ্ধ্যাঙ্ক"
    ],
    ans: 1,
    ans_reason_en:
      "Interaction with peers significantly contributes to social development.",
    ans_reason_bn:
      "সমবয়সীদের সাথে মিথস্ক্রিয়া সামাজিক বিকাশে গুরুত্বপূর্ণ।",
    elimination: [
      "❌ Heredity",
      "✅ Peer interaction",
      "❌ Physical growth",
      "❌ IQ"
    ],
    difficulty: "easy",
    concept: "Social Development",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_15",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following is a characteristic of intrinsic motivation?",
    q_bn:
      "নিম্নলিখিত কোনটি অন্তঃপ্রেরণার বৈশিষ্ট্য?",
    options_en: [
      "Learning for rewards",
      "Learning due to fear",
      "Learning for personal satisfaction",
      "Learning due to pressure"
    ],
    options_bn: [
      "পুরস্কারের জন্য শেখা",
      "ভয়ের কারণে শেখা",
      "ব্যক্তিগত তৃপ্তির জন্য শেখা",
      "চাপের কারণে শেখা"
    ],
    ans: 2,
    ans_reason_en:
      "Intrinsic motivation arises from internal satisfaction.",
    ans_reason_bn:
      "অন্তঃপ্রেরণা ব্যক্তিগত তৃপ্তি থেকে উদ্ভূত হয়।",
    elimination: [
      "❌ Rewards",
      "❌ Fear",
      "✅ Personal satisfaction",
      "❌ Pressure"
    ],
    difficulty: "easy",
    concept: "Motivation",
    exam: "CTET",
    year: 2024
  },
  {
    id: "mcq_cdp_16",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best describes moral development in children?",
    q_bn:
      "নিম্নলিখিত কোনটি শিশুদের নৈতিক বিকাশকে সবচেয়ে ভালোভাবে ব্যাখ্যা করে?",
    options_en: [
      "Blind obedience to rules",
      "Learning through punishment",
      "Understanding right and wrong through reasoning",
      "Imitation only"
    ],
    options_bn: [
      "নিয়ম অন্ধভাবে মানা",
      "শাস্তির মাধ্যমে শেখা",
      "যুক্তির মাধ্যমে সঠিক ও ভুল বোঝা",
      "শুধু অনুকরণ"
    ],
    ans: 2,
    ans_reason_en:
      "Moral development involves reasoning about right and wrong.",
    ans_reason_bn:
      "নৈতিক বিকাশে যুক্তির মাধ্যমে সঠিক ও ভুল বোঝা অন্তর্ভুক্ত।",
    elimination: [
      "❌ Blind obedience",
      "❌ Punishment",
      "✅ Reasoning",
      "❌ Imitation"
    ],
    difficulty: "medium",
    concept: "Moral Development",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_17",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which teaching strategy best supports learners with diverse needs?",
    q_bn:
      "বিভিন্ন প্রয়োজনসম্পন্ন শিক্ষার্থীদের জন্য কোন শিক্ষণ কৌশলটি সবচেয়ে উপযোগী?",
    options_en: [
      "Same instruction for all",
      "Flexible teaching methods",
      "Strict curriculum",
      "Competition-based learning"
    ],
    options_bn: [
      "সবার জন্য একই নির্দেশনা",
      "নমনীয় শিক্ষণ পদ্ধতি",
      "কঠোর পাঠ্যক্রম",
      "প্রতিযোগিতাভিত্তিক শিক্ষা"
    ],
    ans: 1,
    ans_reason_en:
      "Flexible teaching methods address diverse learner needs.",
    ans_reason_bn:
      "নমনীয় শিক্ষণ পদ্ধতি বিভিন্ন শিক্ষার্থীর প্রয়োজন পূরণ করে।",
    elimination: [
      "❌ Same instruction",
      "✅ Flexible methods",
      "❌ Strict curriculum",
      "❌ Competition"
    ],
    difficulty: "easy",
    concept: "Inclusive Teaching",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_18",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following enhances creativity among children?",
    q_bn:
      "নিম্নলিখিত কোনটি শিশুদের মধ্যে সৃজনশীলতা বৃদ্ধি করে?",
    options_en: [
      "Rote learning",
      "Freedom to explore",
      "Strict rules",
      "Fixed answers"
    ],
    options_bn: [
      "মুখস্থ শিক্ষা",
      "অনুসন্ধানের স্বাধীনতা",
      "কঠোর নিয়ম",
      "স্থির উত্তর"
    ],
    ans: 1,
    ans_reason_en:
      "Creativity grows when learners have freedom to explore.",
    ans_reason_bn:
      "অনুসন্ধানের স্বাধীনতায় সৃজনশীলতা বৃদ্ধি পায়।",
    elimination: [
      "❌ Rote learning",
      "✅ Freedom",
      "❌ Strict rules",
      "❌ Fixed answers"
    ],
    difficulty: "easy",
    concept: "Creativity",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_19",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best reflects democratic classroom practices?",
    q_bn:
      "নিম্নলিখিত কোনটি গণতান্ত্রিক শ্রেণিকক্ষের অনুশীলনকে প্রতিফলিত করে?",
    options_en: [
      "Teacher makes all decisions",
      "Students follow instructions silently",
      "Encouraging student voice and participation",
      "Strict punishment for mistakes"
    ],
    options_bn: [
      "শিক্ষক সব সিদ্ধান্ত নেন",
      "শিক্ষার্থীরা নীরবে নির্দেশ মানে",
      "শিক্ষার্থীর মতামত ও অংশগ্রহণ উৎসাহিত করা",
      "ভুলের জন্য কঠোর শাস্তি"
    ],
    ans: 2,
    ans_reason_en:
      "Democratic classrooms encourage student voice and participation.",
    ans_reason_bn:
      "গণতান্ত্রিক শ্রেণিকক্ষে শিক্ষার্থীর মতামত ও অংশগ্রহণ উৎসাহিত করা হয়।",
    elimination: [
      "❌ Teacher control",
      "❌ Silent obedience",
      "✅ Student voice",
      "❌ Punishment"
    ],
    difficulty: "easy",
    concept: "Democratic Classroom",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_20",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following assessment practices reduces learner anxiety?",
    q_bn:
      "নিম্নলিখিত কোন মূল্যায়ন পদ্ধতিটি শিক্ষার্থীদের উদ্বেগ কমায়?",
    options_en: [
      "High-stakes examination",
      "Comparison-based grading",
      "Continuous and supportive assessment",
      "Surprise tests"
    ],
    options_bn: [
      "উচ্চ ঝুঁকিপূর্ণ পরীক্ষা",
      "তুলনাভিত্তিক গ্রেডিং",
      "ধারাবাহিক ও সহায়ক মূল্যায়ন",
      "হঠাৎ পরীক্ষা"
    ],
    ans: 2,
    ans_reason_en:
      "Supportive and continuous assessment reduces stress and anxiety.",
    ans_reason_bn:
      "সহায়ক ও ধারাবাহিক মূল্যায়ন শিক্ষার্থীদের উদ্বেগ কমায়।",
    elimination: [
      "❌ High-stakes exam",
      "❌ Comparison",
      "✅ Supportive assessment",
      "❌ Surprise tests"
    ],
    difficulty: "easy",
    concept: "Assessment & Anxiety",
    exam: "CTET",
    year: 2024
  },
  {
    id: "mcq_cdp_21",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best describes learning by insight?",
    q_bn:
      "নিম্নলিখিত কোনটি অন্তর্দৃষ্টির মাধ্যমে শেখাকে সবচেয়ে ভালোভাবে ব্যাখ্যা করে?",
    options_en: [
      "Learning through repetition",
      "Learning through trial and error",
      "Sudden understanding of a problem",
      "Learning through punishment"
    ],
    options_bn: [
      "পুনরাবৃত্তির মাধ্যমে শেখা",
      "ট্রায়াল অ্যান্ড এররের মাধ্যমে শেখা",
      "সমস্যার হঠাৎ সমাধান বোঝা",
      "শাস্তির মাধ্যমে শেখা"
    ],
    ans: 2,
    ans_reason_en:
      "Insight learning involves sudden understanding of relationships in a problem.",
    ans_reason_bn:
      "অন্তর্দৃষ্টি শেখায় সমস্যার মধ্যে সম্পর্ক হঠাৎ বোঝা যায়।",
    elimination: [
      "❌ Repetition",
      "❌ Trial and error",
      "✅ Sudden understanding",
      "❌ Punishment"
    ],
    difficulty: "medium",
    concept: "Insight Learning",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_22",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "According to Erikson, the stage of 'Industry vs Inferiority' occurs during",
    q_bn:
      "এরিকসনের মতে ‘শ্রমনিষ্ঠা বনাম হীনমন্যতা’ স্তরটি ঘটে—",
    options_en: [
      "Early childhood",
      "Middle childhood",
      "Adolescence",
      "Adulthood"
    ],
    options_bn: [
      "প্রারম্ভিক শৈশব",
      "মধ্য শৈশব",
      "কৈশোর",
      "প্রাপ্তবয়স্কতা"
    ],
    ans: 1,
    ans_reason_en:
      "Industry vs Inferiority is associated with middle childhood.",
    ans_reason_bn:
      "এই স্তরটি মধ্য শৈশবে দেখা যায়।",
    elimination: [
      "❌ Early childhood",
      "✅ Middle childhood",
      "❌ Adolescence",
      "❌ Adulthood"
    ],
    difficulty: "medium",
    concept: "Erikson – Psychosocial Development",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_23",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following factors most strongly influences language development in children?",
    q_bn:
      "শিশুদের ভাষা বিকাশে কোন উপাদানটি সবচেয়ে বেশি প্রভাব ফেলে?",
    options_en: [
      "Heredity alone",
      "Social interaction",
      "Physical growth",
      "Motor development"
    ],
    options_bn: [
      "শুধু বংশগতি",
      "সামাজিক মিথস্ক্রিয়া",
      "শারীরিক বৃদ্ধি",
      "চালন দক্ষতা"
    ],
    ans: 1,
    ans_reason_en:
      "Language develops primarily through social interaction.",
    ans_reason_bn:
      "ভাষা বিকাশ প্রধানত সামাজিক মিথস্ক্রিয়ার মাধ্যমে ঘটে।",
    elimination: [
      "❌ Heredity alone",
      "✅ Social interaction",
      "❌ Physical growth",
      "❌ Motor development"
    ],
    difficulty: "easy",
    concept: "Language Development",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_24",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best supports the development of self-concept in children?",
    q_bn:
      "নিম্নলিখিত কোনটি শিশুদের আত্ম-ধারণার বিকাশে সবচেয়ে সহায়ক?",
    options_en: [
      "Constant criticism",
      "Comparison with peers",
      "Positive feedback and acceptance",
      "Strict punishment"
    ],
    options_bn: [
      "নিরবচ্ছিন্ন সমালোচনা",
      "সমবয়সীদের সাথে তুলনা",
      "ইতিবাচক প্রতিক্রিয়া ও গ্রহণযোগ্যতা",
      "কঠোর শাস্তি"
    ],
    ans: 2,
    ans_reason_en:
      "Positive feedback and acceptance help build a healthy self-concept.",
    ans_reason_bn:
      "ইতিবাচক প্রতিক্রিয়া ও গ্রহণযোগ্যতা সুস্থ আত্ম-ধারণা গঠনে সাহায্য করে।",
    elimination: [
      "❌ Constant criticism",
      "❌ Comparison",
      "✅ Positive feedback",
      "❌ Punishment"
    ],
    difficulty: "easy",
    concept: "Self-concept",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_25",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which teaching method best promotes critical thinking among learners?",
    q_bn:
      "নিম্নলিখিত কোন শিক্ষণ পদ্ধতিটি শিক্ষার্থীদের সমালোচনামূলক চিন্তনকে সবচেয়ে বেশি উন্নত করে?",
    options_en: [
      "Lecture method",
      "Problem-solving method",
      "Rote memorization",
      "Dictation"
    ],
    options_bn: [
      "লেকচার পদ্ধতি",
      "সমস্যা সমাধান পদ্ধতি",
      "মুখস্থ শিক্ষা",
      "ডিকটেশন"
    ],
    ans: 1,
    ans_reason_en:
      "Problem-solving encourages analysis and critical thinking.",
    ans_reason_bn:
      "সমস্যা সমাধান পদ্ধতি বিশ্লেষণ ও সমালোচনামূলক চিন্তন বাড়ায়।",
    elimination: [
      "❌ Lecture",
      "✅ Problem-solving",
      "❌ Rote memorization",
      "❌ Dictation"
    ],
    difficulty: "easy",
    concept: "Critical Thinking",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_26",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following practices best supports inclusive education?",
    q_bn:
      "নিম্নলিখিত কোন অনুশীলনটি অন্তর্ভুক্তিমূলক শিক্ষাকে সবচেয়ে ভালোভাবে সমর্থন করে?",
    options_en: [
      "Same curriculum for all learners",
      "Flexible teaching strategies",
      "Segregation of learners",
      "Competition-based learning"
    ],
    options_bn: [
      "সবার জন্য একই পাঠ্যক্রম",
      "নমনীয় শিক্ষণ কৌশল",
      "শিক্ষার্থীদের আলাদা করা",
      "প্রতিযোগিতাভিত্তিক শিক্ষা"
    ],
    ans: 1,
    ans_reason_en:
      "Flexible strategies help address diverse learning needs.",
    ans_reason_bn:
      "নমনীয় কৌশল বিভিন্ন শিক্ষার্থীর প্রয়োজন মেটাতে সাহায্য করে।",
    elimination: [
      "❌ Same curriculum",
      "✅ Flexible strategies",
      "❌ Segregation",
      "❌ Competition"
    ],
    difficulty: "easy",
    concept: "Inclusive Education",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_27",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following enhances memory retention?",
    q_bn:
      "নিম্নলিখিত কোনটি স্মৃতিধারণ বৃদ্ধি করে?",
    options_en: [
      "Rote repetition",
      "Meaningful association",
      "Cramming",
      "Fear of punishment"
    ],
    options_bn: [
      "মুখস্থ পুনরাবৃত্তি",
      "অর্থপূর্ণ সংযোগ",
      "ঠেসে পড়া",
      "শাস্তির ভয়"
    ],
    ans: 1,
    ans_reason_en:
      "Meaningful association leads to better memory retention.",
    ans_reason_bn:
      "অর্থপূর্ণ সংযোগ স্মৃতিধারণ উন্নত করে।",
    elimination: [
      "❌ Rote repetition",
      "✅ Meaningful association",
      "❌ Cramming",
      "❌ Fear"
    ],
    difficulty: "easy",
    concept: "Memory",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_28",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best describes emotional intelligence?",
    q_bn:
      "নিম্নলিখিত কোনটি আবেগীয় বুদ্ধিমত্তাকে সবচেয়ে ভালোভাবে ব্যাখ্যা করে?",
    options_en: [
      "High IQ score",
      "Ability to control and understand emotions",
      "Strong memory",
      "Fast problem-solving"
    ],
    options_bn: [
      "উচ্চ আইকিউ",
      "আবেগ বোঝা ও নিয়ন্ত্রণের ক্ষমতা",
      "শক্তিশালী স্মৃতি",
      "দ্রুত সমস্যা সমাধান"
    ],
    ans: 1,
    ans_reason_en:
      "Emotional intelligence involves understanding and managing emotions.",
    ans_reason_bn:
      "আবেগীয় বুদ্ধিমত্তা মানে আবেগ বোঝা ও নিয়ন্ত্রণ করা।",
    elimination: [
      "❌ High IQ",
      "✅ Emotional control",
      "❌ Memory",
      "❌ Speed"
    ],
    difficulty: "easy",
    concept: "Emotional Intelligence",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_29",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following classroom practices encourages cooperation among students?",
    q_bn:
      "নিম্নলিখিত কোন শ্রেণিকক্ষ অনুশীলনটি শিক্ষার্থীদের মধ্যে সহযোগিতা উৎসাহিত করে?",
    options_en: [
      "Individual competition",
      "Group activities",
      "Comparison-based grading",
      "Strict silence"
    ],
    options_bn: [
      "ব্যক্তিগত প্রতিযোগিতা",
      "দলগত কার্যকলাপ",
      "তুলনাভিত্তিক গ্রেডিং",
      "কঠোর নীরবতা"
    ],
    ans: 1,
    ans_reason_en:
      "Group activities promote cooperation and social learning.",
    ans_reason_bn:
      "দলগত কার্যকলাপ সহযোগিতা ও সামাজিক শেখাকে উৎসাহিত করে।",
    elimination: [
      "❌ Competition",
      "✅ Group activities",
      "❌ Comparison",
      "❌ Silence"
    ],
    difficulty: "easy",
    concept: "Cooperative Learning",
    exam: "CTET",
    year: 2024
  },

  {
    id: "mcq_cdp_30",
    type: "MCQ",
    subject: "CDP",
    q_en:
      "Which of the following best reduces stress among learners?",
    q_bn:
      "নিম্নলিখিত কোনটি শিক্ষার্থীদের মানসিক চাপ কমাতে সবচেয়ে কার্যকর?",
    options_en: [
      "Fear of failure",
      "High expectations",
      "Supportive teacher-student relationship",
      "Frequent testing"
    ],
    options_bn: [
      "ব্যর্থতার ভয়",
      "অতিরিক্ত প্রত্যাশা",
      "সহায়ক শিক্ষক-শিক্ষার্থী সম্পর্ক",
      "ঘন ঘন পরীক্ষা"
    ],
    ans: 2,
    ans_reason_en:
      "Supportive relationships create a safe learning environment.",
    ans_reason_bn:
      "সহায়ক সম্পর্ক নিরাপদ শেখার পরিবেশ তৈরি করে।",
    elimination: [
      "❌ Fear",
      "❌ Pressure",
      "✅ Supportive relationship",
      "❌ Frequent tests"
    ],
    difficulty: "easy",
    concept: "Stress & Learning",
    exam: "CTET",
    year: 2024
  },
  
  /* ======================
     PIAGET MCQ (ADD HERE)
  ====================== */

  ...piagetHighProbMCQ
];