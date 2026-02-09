export const conceptMath = [
  {
    id: "number_system",
    title: "Number System",

    definition: {
      bn: "সংখ্যা পদ্ধতি প্রাকৃতিক, পূর্ণসংখ্যা ও ভগ্নাংশ নিয়ে গঠিত।"
    },

    eliminate: [
      { word: "Always even", reason: "সব সংখ্যা জোড় নয়" },
      { word: "Never zero", reason: "শূন্য একটি সংখ্যা" }
    ],

    keywords: [
      "Natural numbers",
      "Whole numbers",
      "Integers"
    ]
  },

  {
    id: "fraction",
    title: "Fractions",

    definition: {
      bn: "ভগ্নাংশ একটি সম্পূর্ণ অংশের ভাগ নির্দেশ করে।"
    },

    eliminate: [
      { word: "Always smaller than 1", reason: "Improper fraction থাকতে পারে" },
      { word: "Cannot be equal", reason: "Equivalent fraction সম্ভব" }
    ],

    keywords: [
      "Numerator",
      "Denominator",
      "Equivalent fraction"
    ]
  },

  {
    id: "percentage",
    title: "Percentage",

    definition: {
      bn: "শতকরা মানে ১০০-এর মধ্যে অংশ।"
    },

    eliminate: [
      { word: "Always increase", reason: "Percentage কমতেও পারে" },
      { word: "Never negative", reason: "Loss percentage হতে পারে" }
    ],

    keywords: [
      "Percent",
      "Ratio",
      "Proportion"
    ]
  }
];