export const conceptCDP = [
  {
    id: "constructivism",
    title: "Constructivism (গঠনবাদ)",

    definition: {
      en: "Constructivism states that learners actively construct knowledge through experience and interaction.",
      bn: "গঠনবাদ অনুযায়ী শিক্ষার্থী অভিজ্ঞতা ও পারস্পরিক ক্রিয়ার মাধ্যমে নিজেই জ্ঞান গঠন করে।"
    },

    // 🔥 OPTION ELIMINATION RULES (CTET BIO-LANGUAGE)
    eliminationRules: [
      {
        trigger: [
          "always", "never", "must",
          "সবসময়", "কখনোই না", "অবশ্যই"
        ],
        reason:
          "Constructivist approach does not support absolute or rigid statements. (গঠনবাদে চূড়ান্ত বা কঠোর বক্তব্য গ্রহণযোগ্য নয়)"
      },
      {
        trigger: [
          "punishment", "corporal punishment",
          "শাস্তি", "দণ্ড"
        ],
        reason:
          "Learning should be fear-free and supportive, not punishment-based. (শিক্ষা শাস্তিভিত্তিক নয়, সহায়ক হওয়া উচিত)"
      },
      {
        trigger: [
          "rote learning", "memorization",
          "মুখস্থ", "যান্ত্রিক শিক্ষা"
        ],
        reason:
          "Constructivism emphasizes active learning, not rote memorization. (গঠনবাদ সক্রিয় শিক্ষাকে গুরুত্ব দেয়, মুখস্থকে নয়)"
      },
      {
        trigger: [
          "teacher-centred", "teacher controlled",
          "শিক্ষক-কেন্দ্রিক"
        ],
        reason:
          "Learner is the central figure, teacher acts as facilitator. (শিক্ষার্থী কেন্দ্রীয়, শিক্ষক সহায়ক)"
      },
      {
        trigger: [
          "passive learner", "inactive learner",
          "নিষ্ক্রিয় শিক্ষার্থী"
        ],
        reason:
          "Learners are active participants in knowledge construction. (শিক্ষার্থী সক্রিয় অংশগ্রহণকারী)"
      }
    ],

    keywords: [
      "Active learning (সক্রিয় শিক্ষা)",
      "Learner-centred (শিক্ষার্থী-কেন্দ্রিক)",
      "Experience-based learning (অভিজ্ঞতাভিত্তিক শিক্ষা)",
      "Knowledge construction (জ্ঞান গঠন)"
    ]
  }
];