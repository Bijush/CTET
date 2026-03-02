/* ======================
LOAD BOX
====================== */


let box;

window.openTab = function(tab, ev){
    // Remove old active
document.querySelectorAll(".btab")
.forEach(btn => btn.classList.remove("active"));

// Add active to clicked button
if(event){
  event.currentTarget.classList.add("active");

  // 🔥 Auto scroll to center active tab
  event.currentTarget.scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
}

  /* ----------------------
  1️⃣ BOX SAFETY CHECK
  ---------------------- */
  if (!box) {

    console.warn(
      "Theory box not ready"
    );

    return;
  }

  /* ----------------------
  2️⃣ PREVENT SAME TAB RELOAD
  ---------------------- */
  const currentTab =
    box.getAttribute("data-tab");

  if (currentTab === tab) {
    return; // already open
  }

  box.setAttribute("data-tab", tab);

  /* ----------------------
  3️⃣ ACTIVE BUTTON SWITCH
  ---------------------- */
  document
    .querySelectorAll(".btab")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  if (ev && ev.currentTarget) {
    ev.currentTarget
      .classList.add("active");
  }

  /* ----------------------
  4️⃣ FADE OUT ANIMATION
  ---------------------- */
  box.classList.remove("fade-in");
  box.classList.add("fade-out");

  /* ----------------------
  5️⃣ LOAD CONTENT
  ---------------------- */
  setTimeout(()=>{

    try {

      loadTabContent(tab);

    } catch(err){

      console.error(
        "Tab load error:",
        err
      );

      box.innerHTML = `
        <div class="card">
          ❌ Content failed to load
        </div>
      `;
    }

    /* ----------------------
    6️⃣ FADE IN ANIMATION
    ---------------------- */
    box.classList.remove("fade-out");
    box.classList.add("fade-in");

  }, 180);

};


/* ======================
LOAD TAB CONTENT
====================== */

function loadTabContent(tab){

/* ======================
DEFINITION
====================== */
if (!box) {

    console.warn(
      "Box not ready → retry"
    );

    setTimeout(() => {
      loadTabContent(tab);
    }, 100);

    return;
  }
  
if(tab === "definition"){

box.innerHTML = `
<div class="card">

<h3>📘 Definition (সংজ্ঞা)</h3>

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">📘</span>
Theory Definition
</div>

<div class="feature-en">
Jean Piaget’s Cognitive Development Theory explains how children actively construct knowledge through interaction with environment.
</div>

<div class="feature-bn">
জ্যঁ পিয়াজের জ্ঞানীয় বিকাশ তত্ত্ব অনুযায়ী শিশুরা পরিবেশের সাথে মিথস্ক্রিয়ার মাধ্যমে নিজেরাই জ্ঞান গঠন করে।
</div>

<!-- ======================
CTET KEYWORDS
====================== -->

<div class="feature-example">

<b>🧠 CTET Keywords:</b><br>

• Constructivism<br>
• Child-centered learning<br>
• Active learner<br>
• Knowledge construction<br>
• Schema development

<br><br>

<b>বাংলা:</b><br>

গঠনমূলক শিক্ষা, শিশুকেন্দ্রিক শিক্ষা, সক্রিয় শিক্ষার্থী, জ্ঞান গঠন।

</div>

<!-- ======================
EXAMINER TRAP LINE
====================== -->

<div class="feature-example">

<b>⚠️ Examiner Trap Line:</b><br>

“Children are passive receivers of knowledge.”

<br><br>

<b>Why Wrong?</b><br>

Piaget says children are <b>active constructors</b>, not passive learners.

<br><br>

<b>বাংলা:</b><br>

শিশুরা জ্ঞান গ্রহণকারী নয় — নিজেরাই জ্ঞান গঠন করে।

</div>

<!-- ======================
CTET QUESTION TYPE
====================== -->

<div class="feature-ctet">

CTET asks:  
• Who gave constructivism?  
• Child role in learning?  
• Knowledge formation process?

</div>

</div>

</div>
<!-- ======================
🧠 KEY CONCEPTS — PIAGET
====================== -->
<div class="card">

<h3>🧠 Key Concepts (মূল ধারণা)</h3>

<!-- ======================
SCHEMA
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Schema (স্কিমা)
</div>

<div class="feature-en">
Schema means mental framework or cognitive structure that helps child organize knowledge.
</div>

<div class="feature-bn">
স্কিমা হলো মানসিক গঠন বা জ্ঞান সংগঠনের কাঠামো যার মাধ্যমে শিশু তথ্য বোঝে।
</div>

<div class="feature-example">
<b>Example:</b><br>
Child knows dog = 4 legs animal.
</div>

<div class="feature-ctet">
CTET Focus: Knowledge framework concept.
</div>

</div>

<!-- ======================
ASSIMILATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Assimilation (অভিশোষণ)
</div>

<div class="feature-en">
Assimilation is the process of adding new information into existing schema.
</div>

<div class="feature-bn">
নতুন তথ্যকে পুরনো স্কিমার সাথে মিলিয়ে নেওয়াকে অভিশোষণ বলে।
</div>

<div class="feature-example">
<b>Example:</b><br>
Child calls zebra = dog (fits into old schema).
</div>

<div class="feature-ctet">
Trap: No schema change here.
</div>

</div>

<!-- ======================
ACCOMMODATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Accommodation (সমন্বয়)
</div>

<div class="feature-en">
Accommodation means modifying existing schema when new information doesn’t fit.
</div>

<div class="feature-bn">
নতুন তথ্য পুরনো স্কিমায় না মিললে স্কিমা পরিবর্তন করাকে সমন্বয় বলে।
</div>

<div class="feature-example">
<b>Example:</b><br>
Child learns zebra ≠ dog → new schema forms.
</div>

<div class="feature-ctet">
CTET Most Asked: Schema change concept.
</div>

</div>

<!-- ======================
EQUILIBRATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Equilibration (সাম্যাবস্থা)
</div>

<div class="feature-en">
Equilibration is the balance between assimilation and accommodation.
</div>

<div class="feature-bn">
অভিশোষণ ও সমন্বয়ের মধ্যে ভারসাম্য স্থাপনকে সাম্যাবস্থা বলে।
</div>

<div class="feature-example">
<b>Process:</b><br>
Confusion → Adjustment → Learning.
</div>

<div class="feature-ctet">
Keyword: Cognitive balance.
</div>

</div>

<!-- ======================
ADAPTATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Adaptation (অভিযোজন)
</div>

<div class="feature-en">
Adaptation is the overall process of adjusting to environment using assimilation and accommodation.
</div>

<div class="feature-bn">
পরিবেশের সাথে মানিয়ে নেওয়ার সামগ্রিক প্রক্রিয়াকে অভিযোজন বলে।
</div>

<div class="feature-example">
<b>Formula:</b><br>
Adaptation = Assimilation + Accommodation
</div>

<div class="feature-ctet">
Very Important Concept Link Question.
</div>

</div>

<!-- ======================
MEMORY TRICK
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧠</span>
Memory Trick
</div>

<div class="feature-example">

<b>S-A-A-E-A</b><br><br>

Schema → Assimilation → Accommodation → Equilibration → Adaptation

<br><br>

Line:<br>
<i>Smart Active Agents Equalize Adjustment</i>

<br><br>

<b>বাংলা:</b><br>
স্কিমা → অভিশোষণ → সমন্বয় → সাম্যাবস্থা → অভিযোজন

</div>

</div>

</div>
<!-- ======================
🧠 CONSTRUCTIVISM CARD
====================== -->
<div class="card">

<h3>🧠 Constructivism Theory (গঠনবাদ তত্ত্ব)</h3>

<!-- ======================
DEFINITION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">📘</span>
Definition (সংজ্ঞা)
</div>

<div class="feature-en">
Constructivism states that learners actively construct their own knowledge through experience and interaction with environment.
</div>

<div class="feature-bn">
গঠনবাদ অনুযায়ী শিক্ষার্থীরা পরিবেশের সাথে অভিজ্ঞতা ও মিথস্ক্রিয়ার মাধ্যমে নিজেরাই জ্ঞান গঠন করে।
</div>

<div class="feature-ctet">
CTET Keyword: Active learner.
</div>

</div>

<!-- ======================
KEY IDEA
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Core Idea (মূল ধারণা)
</div>

<div class="feature-en">
Learning is an active, constructive and meaningful process — not passive memorization.
</div>

<div class="feature-bn">
শেখা একটি সক্রিয় ও অর্থবহ প্রক্রিয়া — শুধু মুখস্থ করা নয়।
</div>

<div class="feature-example">
Teacher guides → Student discovers.
</div>

</div>

<!-- ======================
TYPES
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Types of Constructivism
</div>

<div class="feature-en">

<b>1. Cognitive Constructivism →</b> Jean Piaget<br>
Focus: Individual thinking.

<br><br>

<b>2. Social Constructivism →</b> Lev Vygotsky<br>
Focus: Social interaction.

</div>

<div class="feature-bn">

১. জ্ঞানীয় গঠনবাদ — পিয়াজে<br>
২. সামাজিক গঠনবাদ — ভায়গটস্কি

</div>

<div class="feature-ctet">
Match theorist question very common.
</div>

</div>

<!-- ======================
ROLE OF LEARNER
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Role of Learner
</div>

<div class="feature-en">
Learner is active explorer, problem solver and knowledge creator.
</div>

<div class="feature-bn">
শিক্ষার্থী সক্রিয় অনুসন্ধানকারী, সমস্যা সমাধানকারী ও জ্ঞান নির্মাতা।
</div>

<div class="feature-example">
Learning by doing.
</div>

</div>

<!-- ======================
ROLE OF TEACHER
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Role of Teacher
</div>

<div class="feature-en">
Teacher acts as facilitator, guide and learning supporter — not knowledge transmitter.
</div>

<div class="feature-bn">
শিক্ষক জ্ঞানদাতা নয় — পথপ্রদর্শক ও সহায়ক।
</div>

<div class="feature-example">
Activity-based teaching.
</div>

<div class="feature-ctet">
Keyword: Facilitator teacher.
</div>

</div>

<!-- ======================
CLASSROOM FEATURES
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Constructivist Classroom Features
</div>

<div class="feature-en">

• Activity based learning<br>
• Group discussion<br>
• Problem solving tasks<br>
• Real life examples<br>
• Project work

</div>

<div class="feature-bn">

• কার্যভিত্তিক শিক্ষা<br>
• দলগত আলোচনা<br>
• সমস্যা সমাধান<br>
• বাস্তব উদাহরণ<br>
• প্রকল্প কাজ

</div>

</div>

<!-- ======================
ADVANTAGES
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">6</span>
Advantages (সুবিধা)
</div>

<div class="feature-en">

• Deep understanding<br>
• Critical thinking<br>
• Long term learning<br>
• Creativity develops

</div>

<div class="feature-bn">

• গভীর অনুধাবন<br>
• সমালোচনামূলক চিন্তা<br>
• দীর্ঘস্থায়ী শিক্ষা<br>
• সৃজনশীলতা বৃদ্ধি

</div>

</div>

<!-- ======================
LIMITATIONS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">7</span>
Limitations (সীমাবদ্ধতা)
</div>

<div class="feature-en">

• Time consuming<br>
• Difficult in large class<br>
• Needs trained teacher

</div>

<div class="feature-bn">

• সময়সাপেক্ষ<br>
• বড় শ্রেণিতে কঠিন<br>
• দক্ষ শিক্ষক প্রয়োজন

</div>

</div>

<!-- ======================
CTET FOCUS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🎯</span>
CTET Exam Focus
</div>

<div class="feature-en">

• Child centered learning<br>
• Learning by doing<br>
• Teacher as facilitator<br>
• Knowledge construction

</div>

<div class="feature-ctet">
Most repeated pedagogy concept.
</div>

</div>

<!-- ======================
MEMORY TRICK
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧠</span>
Memory Trick
</div>

<div class="feature-example">

<b>C-A-S-T</b><br><br>

C → Child centered<br>
A → Active learning<br>
S → Social interaction<br>
T → Teacher facilitator

<br><br>

Line:<br>
<i>Children Actively Shape Thinking</i>

</div>

</div>

</div>

`;
}


/* ======================
STAGES
====================== */

if(tab === "stage"){

box.innerHTML = `

<div class="card">

<h3>🧭 Stage Visual Diagram</h3>

<div id="diagramContainer">
Loading diagram...
</div>

</div>


<!-- ======================
📊 STAGES OVERVIEW
====================== -->
<div class="card">

<h3>📊 4 Stages Overview</h3>

<!-- Stage 1 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Sensorimotor (0–2 yrs)
</div>

<div class="feature-en">
Key Feature: Object permanence
</div>

<div class="feature-ctet">
CTET Keyword Stage
</div>

</div>

<!-- Stage 2 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Pre-operational (2–7 yrs)
</div>

<div class="feature-en">
Key Feature: Egocentrism
</div>

<div class="feature-ctet">
Perspective limitation stage
</div>

</div>

<!-- Stage 3 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Concrete operational (7–11 yrs)
</div>

<div class="feature-en">
Key Feature: Conservation & logical thinking
</div>

<div class="feature-ctet">
Most asked CTET stage
</div>

</div>

<!-- Stage 4 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Formal operational (11+ yrs)
</div>

<div class="feature-en">
Key Feature: Abstract thinking
</div>

<div class="feature-ctet">
Higher order reasoning
</div>

</div>

<!-- CTET TIP -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🎯</span>
CTET Tip
</div>

<div class="feature-en">
Age + feature matching is most asked.
</div>

</div>

</div>


<!-- ======================
🔬 SENSORIMOTOR SUB-STAGES
====================== -->
<div class="card">

<h3>🧠 Sensorimotor Stage (ইন্দ্রিয়-চালনা ধাপ)</h3>

<b>Age:</b> 0 – 2 years (০ – ২ বছর)

<br><br>

<!-- DEFINITION -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">📘</span>
Definition (সংজ্ঞা)
</div>

<div class="feature-en">
Infants learn through senses and motor activities like seeing, touching, sucking and moving.
</div>

<div class="feature-bn">
শিশুরা ইন্দ্রিয় ও শারীরিক নড়াচড়ার মাধ্যমে শেখে — যেমন দেখা, ছোঁয়া, ধরা, চোষা।
</div>

</div>

<hr>

<!-- KEY FEATURES -->

<b>🔑 Key Features:</b>

<!-- Object Permanence -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Object Permanence (বস্তু স্থায়িত্ব)
</div>

<div class="feature-en">
Object exists even if unseen.
</div>

<div class="feature-bn">
বস্তু দেখা না গেলেও তার অস্তিত্ব থাকে।
</div>

<div class="feature-example">
Example: Hidden toy search.
</div>

<div class="feature-ctet">
CTET Most Asked
</div>

</div>

<!-- Goal-directed -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Goal-directed behaviour
</div>

<div class="feature-en">
Purposeful actions begin.
</div>

<div class="feature-bn">
লক্ষ্যভিত্তিক কাজ শুরু হয়।
</div>

</div>

<!-- Imitation -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Imitation (অনুকরণ)
</div>

<div class="feature-en">
Copies others’ actions.
</div>

<div class="feature-bn">
অন্যের কাজ অনুকরণ করে।
</div>

</div>

<hr>

<!-- SUB-STAGES -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧩</span>
Sub-Stages (উপধাপ)
</div>

<div class="feature-en">

• Reflex Stage (0–1m): Sucking, grasping reflex<br>
• Primary Circular Reaction: Body centered actions<br>
• Secondary Circular Reaction: Object actions repeat<br>
• Coordination Stage: Goal-directed behaviour<br>
• Tertiary Circular Reaction: Trial & error exploration<br>
• Mental Representation: Internal thinking begins

</div>

</div>

<hr>

<!-- LIMITATIONS -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">⚠️</span>
Limitations
</div>

<div class="feature-en">
• No symbolic thinking<br>
• No language development<br>
• No logical reasoning
</div>

<div class="feature-bn">
• প্রতীকী চিন্তা নেই<br>
• ভাষা বিকাশ সীমিত<br>
• যৌক্তিক চিন্তা নেই
</div>

</div>

<hr>

<!-- CTET FOCUS -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">📚</span>
CTET Focus
</div>

<div class="feature-en">
• Object permanence<br>
• Hidden toy experiment<br>
• Sub-stage identification
</div>

</div>

<hr>

<!-- MEMORY TRICK -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧠</span>
Memory Trick
</div>

<div class="feature-en">
R-P-S-C-T-M → Reflex → Primary → Secondary → Coordination → Tertiary → Mental
</div>

</div>

<hr>

<!-- MCQ -->

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
Baby searches hidden toy — concept?
</div>

<div class="mcq-opt">A. Conservation</div>
<div class="mcq-opt">B. Egocentrism</div>
<div class="mcq-opt correct">C. Object permanence</div>
<div class="mcq-opt">D. Reversibility</div>

<div class="mcq-answer" style="display:none;">
✔ Sensorimotor key feature.
</div>

</div>

</div>


<!-- ======================
⚠️ PRE-OPERATIONAL LIMITATIONS
====================== -->
<div class="card">

<h3>🎭 Pre-Operational Stage (পূর্ব-সংক্রিয় ধাপ)</h3>

<b>Age:</b> 2 – 7 years (২ – ৭ বছর)

<br><br>

<!-- DEFINITION -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">📘</span>
Definition
</div>

<div class="feature-en">
Children develop symbolic thinking and language but lack logical reasoning.
</div>

<div class="feature-bn">
শিশুরা প্রতীকী চিন্তা ও ভাষা ব্যবহার শিখে, কিন্তু যৌক্তিক চিন্তা দুর্বল থাকে।
</div>

</div>

<hr>

<!-- KEY FEATURES -->

<b>🔑 Key Features:</b>

<!-- Symbolic Thinking -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Symbolic Thinking
</div>

<div class="feature-en">
Uses symbols & images.
</div>

<div class="feature-bn">
প্রতীক ব্যবহার করে চিন্তা।
</div>

<div class="feature-example">
Example: Stick = horse.
</div>

</div>

<!-- Egocentrism -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Egocentrism (আত্মকেন্দ্রিকতা)
</div>

<div class="feature-en">
Cannot see others’ perspective.
</div>

<div class="feature-bn">
অন্যের দৃষ্টিভঙ্গি বুঝতে পারে না।
</div>

<div class="feature-example">
Example: Moon follows me.
</div>

<div class="feature-ctet">
CTET Most Asked
</div>

</div>

<!-- Animism -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Animism
</div>

<div class="feature-en">
Gives life to objects.
</div>

<div class="feature-bn">
জড় বস্তু জীবন্ত মনে করে।
</div>

</div>

<!-- Centration -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Centration
</div>

<div class="feature-en">
Focus on one aspect only.
</div>

<div class="feature-bn">
একটি দিকেই মনোযোগ।
</div>

</div>

<hr>

<!-- LIMITATIONS -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">⚠️</span>
Limitations
</div>

<div class="feature-en">
• Irreversibility  
• Lack of conservation  
• Transductive reasoning
</div>

<div class="feature-bn">
• উল্টানো যুক্তি নেই  
• সংরক্ষণ ধারণা নেই  
• ট্রান্সডাক্টিভ যুক্তি
</div>

</div>

<hr>

<!-- PIAGET TASK -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧪</span>
Classic Task
</div>

<div class="feature-en">
Conservation failure.  
Tall glass = more water (wrong judgment).
</div>

</div>

<hr>

<!-- CTET FOCUS -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">📚</span>
CTET Focus
</div>

<div class="feature-en">
• Egocentrism examples  
• Three mountain task  
• Conservation failure
</div>

</div>

<hr>

<!-- MEMORY TRICK -->

<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧠</span>
Memory Trick
</div>

<div class="feature-en">
SEA-C → Symbolic, Egocentrism, Animism, Centration
</div>

</div>

<hr>

<!-- MCQ -->

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
Child thinks sun follows him — concept?
</div>

<div class="mcq-opt">A. Conservation</div>
<div class="mcq-opt correct">B. Egocentrism</div>
<div class="mcq-opt">C. Reversibility</div>
<div class="mcq-opt">D. Classification</div>

<div class="mcq-answer" style="display:none;">
✔ Pre-operational limitation.
</div>

</div>

</div>


<!-- ======================
🏆 CONCRETE ACHIEVEMENTS
====================== -->
<div class="card">

<h3>🧠 Concrete Operational Stage (কংক্রিট অপারেশনাল ধাপ)</h3>

<div class="feature-card">

<b class="feature-title">Age:</b>
<span class="feature-en">7 – 11 years</span>
<span class="feature-bn">(৭ – ১১ বছর)</span>

</div>

<br><br>

<!-- ======================
DEFINITION
====================== -->

<div class="feature-card">

<b class="feature-title">📘 Definition (সংজ্ঞা):</b><br>

<div class="feature-en">
At this stage children develop logical thinking, but only about concrete (real) objects and situations.
</div>

<br>

<div class="feature-bn">
এই ধাপে শিশুরা যৌক্তিকভাবে চিন্তা করতে পারে, কিন্তু তা শুধুমাত্র বাস্তব (কংক্রিট) বস্তু ও পরিস্থিতি নিয়ে সীমাবদ্ধ।
</div>

</div>

<hr>

<!-- ======================
KEY FEATURES
====================== -->

<b class="feature-title">🔑 Key Features (মূল বৈশিষ্ট্য):</b>

<ul>

<li class="feature-card">

<b class="feature-title">
Logical Thinking (যৌক্তিক চিন্তা)
</b><br>

<div class="feature-en">
Children can think logically about real objects.
</div>

<div class="feature-bn">
শিশুরা বাস্তব বস্তু নিয়ে যৌক্তিকভাবে চিন্তা করতে পারে।
</div>

<div class="feature-example">
Example: Bigger glass ≠ more water.
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Conservation (সংরক্ষণ ধারণা)
</b><br>

<div class="feature-en">
Understanding that quantity remains same despite shape change.
</div>

<div class="feature-bn">
আকৃতি পরিবর্তন হলেও পরিমাণ অপরিবর্তিত থাকে।
</div>

<div class="feature-example">
Example: Water in tall vs flat glass.
</div>

<span class="feature-ctet">
CTET Most Asked
</span>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Decentration (কেন্দ্রবিমুখতা)
</b><br>

<div class="feature-en">
Child considers multiple aspects at once.
</div>

<div class="feature-bn">
একাধিক দিক বিবেচনা করতে পারে।
</div>

<div class="feature-example">
Example: Height + width both judged.
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Reversibility (উল্টানো যুক্তি)
</b><br>

<div class="feature-en">
Can mentally reverse actions.
</div>

<div class="feature-bn">
মানসিকভাবে কাজ উল্টো কল্পনা করতে পারে।
</div>

<div class="feature-example">
Example: 5+3=8 → 8−3=5.
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Classification (শ্রেণিবিন্যাস)
</b><br>

<div class="feature-en">
Grouping objects logically.
</div>

<div class="feature-bn">
বস্তু শ্রেণিবদ্ধ করতে পারে।
</div>

<div class="feature-example">
Example: Animals → mammals/birds.
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Seriation (ক্রমবিন্যাস)
</b><br>

<div class="feature-en">
Arranging objects in order.
</div>

<div class="feature-bn">
বস্তুকে ক্রমানুসারে সাজানো।
</div>

<div class="feature-example">
Example: Small → big sticks.
</div>

</li>

</ul>

<hr>

<!-- ======================
PIAGET TASKS
====================== -->

<div class="feature-card">

<b class="feature-title">🧪 Piaget Classic Tasks:</b>

<ul class="feature-en">

<li>Conservation of liquid</li>
<li>Conservation of number</li>
<li>Conservation of mass</li>
<li>Stick length ordering</li>

</ul>

<div class="feature-bn">
জল, সংখ্যা, ভর সংরক্ষণ পরীক্ষা।
</div>

</div>

<hr>

<!-- ======================
LIMITATIONS
====================== -->

<div class="feature-card">

<b class="feature-title">⚠️ Limitations (সীমাবদ্ধতা):</b>

<ul>

<li class="feature-en">
No abstract thinking
</li>

<li class="feature-bn">
বিমূর্ত চিন্তা নেই
</li>

<li class="feature-en">
Depends on real objects
</li>

<li class="feature-bn">
বাস্তব বস্তু নির্ভর
</li>

<li class="feature-en">
Hypothetical reasoning absent
</li>

<li class="feature-bn">
কাল্পনিক যুক্তি দুর্বল
</li>

</ul>

</div>

<hr>

<!-- ======================
CTET FOCUS
====================== -->

<div class="feature-card">

<b class="feature-title">📚 CTET Exam Focus:</b>

<ul class="feature-en">

<li>Conservation tasks identification</li>
<li>Stage vs feature match</li>
<li>Logical reasoning examples</li>
<li>Egocentrism absence</li>

</ul>

<div class="feature-bn">
সংরক্ষণ, যৌক্তিক চিন্তা, শ্রেণিবিন্যাস — খুব গুরুত্বপূর্ণ।
</div>

</div>

<hr>

<!-- ======================
MEMORY TRICK
====================== -->

<div class="feature-card">

<b class="feature-title">🧠 Memory Trick:</b>

<br>

<b class="feature-en">CLRS = Concrete Stage</b>

<ul class="feature-en">

<li>C → Conservation</li>
<li>L → Logical thinking</li>
<li>R → Reversibility</li>
<li>S → Seriation</li>

</ul>

<div class="feature-example">
Concrete Learner Reasons Systematically
</div>

</div>

<hr>

<!-- ======================
MCQ
====================== -->

<div class="mcq-box"
     onclick="toggleMCQ(this)">

<div class="mcq-q">
CTET: A child says water quantity is same in tall & flat glass. Stage?
</div>

<div class="mcq-opt">
A. Sensorimotor
</div>

<div class="mcq-opt">
B. Pre-operational
</div>

<div class="mcq-opt correct">
C. Concrete operational
</div>

<div class="mcq-opt">
D. Formal operational
</div>

<div class="mcq-answer"
     style="display:none;">

✔ Correct: C<br>
Conservation ability develops here.

</div>

</div>

</div>


<div class="card">

<h3>🧠 Formal Operational Stage (ঔপচারিক জ্ঞানীয় ধাপ)</h3>

<div class="feature-card">

<b class="feature-title">Age:</b>
<span class="feature-en">11+ years</span>
<span class="feature-bn">(১১ বছর থেকে ঊর্ধ্বে)</span>

</div>

<br><br>

<!-- ======================
DEFINITION
====================== -->

<div class="feature-card">

<b class="feature-title">📘 Definition:</b><br>

<div class="feature-en">
This is the highest stage of Piaget’s cognitive development where adolescents develop the ability to think abstractly, logically, and hypothetically.
</div>

<br>

<div class="feature-bn">
এটি পিয়াজের জ্ঞানীয় বিকাশের সর্বোচ্চ ধাপ যেখানে কিশোররা বিমূর্ত, যৌক্তিক ও কাল্পনিকভাবে চিন্তা করতে সক্ষম হয়।
</div>

</div>

<hr>

<!-- ======================
KEY FEATURES
====================== -->

<b class="feature-title">🔑 Key Features (মূল বৈশিষ্ট্য):</b>

<ul>

<li class="feature-card">

<b class="feature-title">
Abstract Thinking (বিমূর্ত চিন্তা)
</b><br>

<div class="feature-en">
Thinking about ideas not physically present.
</div>

<div class="feature-bn">
দৃশ্যমান নয় এমন ধারণা নিয়ে চিন্তা।
</div>

<div class="feature-example">
Example: Justice, democracy, algebra.
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Hypothetical Thinking (সম্ভাব্য চিন্তা)
</b><br>

<div class="feature-en">
Thinking about “What if…” situations.
</div>

<div class="feature-bn">
“যদি এমন হতো…” ধরনের চিন্তা।
</div>

<div class="feature-example">
Example: If gravity disappears?
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Deductive Reasoning (নির্ণায়ক যুক্তি)
</b><br>

<div class="feature-en">
General → specific logic.
</div>

<div class="feature-bn">
সাধারণ নিয়ম থেকে নির্দিষ্ট সিদ্ধান্ত।
</div>

<div class="feature-example">
Example:<br>
All humans are mortal → Ram mortal.
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Scientific Thinking (বৈজ্ঞানিক চিন্তা)
</b><br>

<div class="feature-en">
Testing hypothesis logically.
</div>

<div class="feature-bn">
অনুমান পরীক্ষা করে সিদ্ধান্তে পৌঁছানো।
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Problem Solving Ability (সমস্যা সমাধান)
</b><br>

<div class="feature-en">
Solves complex problems systematically.
</div>

<div class="feature-bn">
জটিল সমস্যা ধাপে ধাপে সমাধান।
</div>

</li>

<br>

<li class="feature-card">

<b class="feature-title">
Metacognition (মেটাকগনিশন)
</b><br>

<div class="feature-en">
Thinking about own thinking.
</div>

<div class="feature-bn">
নিজের চিন্তা সম্পর্কে চিন্তা করা।
</div>

</li>

</ul>

<hr>

<!-- ======================
CLASSIC TASK
====================== -->

<div class="feature-card">

<b class="feature-title">
🧪 Piaget Experiment — Pendulum Task:
</b><br>

<div class="feature-en">
Child predicts which factor affects pendulum speed and tests variables scientifically.
</div>

<br>

<div class="feature-bn">
দোলকের গতি কোন উপাদানে নির্ভর করে তা অনুমান করে বৈজ্ঞানিকভাবে পরীক্ষা করা।
</div>

</div>

<hr>

<!-- ======================
CTET FOCUS
====================== -->

<div class="feature-card">

<b class="feature-title">📚 CTET Exam Focus:</b>

<ul class="feature-en">

<li>Abstract reasoning questions</li>
<li>Algebra / hypothesis examples</li>
<li>Scientific thinking ability</li>
<li>Stage identification</li>

</ul>

<div class="feature-bn">
বিমূর্ত চিন্তা, বৈজ্ঞানিক যুক্তি, কল্পনামূলক চিন্তা — প্রধান প্রশ্নভিত্তিক বিষয়।
</div>

</div>

<hr>

<!-- ======================
CRITICISM
====================== -->

<div class="feature-card">

<b class="feature-title">
⚠️ Criticism (সমালোচনা):
</b>

<ul>

<li class="feature-en">
Not all adolescents reach this stage
</li>

<li class="feature-bn">
সব কিশোর এই ধাপে পৌঁছায় না
</li>

<li class="feature-en">
Depends on education & culture
</li>

<li class="feature-bn">
শিক্ষা ও সংস্কৃতির উপর নির্ভরশীল
</li>

<li class="feature-en">
Abstract thinking varies by subject
</li>

<li class="feature-bn">
সব বিষয়ে সমান নয়
</li>

</ul>

</div>

<hr>

<!-- ======================
MEMORY TRICK
====================== -->

<div class="feature-card">

<b class="feature-title">🧠 Memory Trick:</b>

<br>

<b class="feature-en">HA → Formal Stage</b>

<ul class="feature-en">

<li>H = Hypothetical thinking</li>
<li>A = Abstract thinking</li>

</ul>

<div class="feature-example">
Higher Age → Higher Abstraction
</div>

</div>

<hr>

<!-- ======================
MCQ
====================== -->

<div class="mcq-box"
     onclick="toggleMCQ(this)">

<div class="mcq-q">
CTET: An adolescent solving algebra and testing hypothesis shows:
</div>

<div class="mcq-opt">
A. Sensorimotor thinking
</div>

<div class="mcq-opt">
B. Pre-operational thought
</div>

<div class="mcq-opt">
C. Concrete reasoning
</div>

<div class="mcq-opt correct">
D. Formal operational thinking
</div>

<div class="mcq-answer"
     style="display:none;">

✔ Correct: D<br>
Abstract + hypothetical reasoning = Formal stage.

</div>

</div>

</div>



<div class="card">

<h3>📊 Piaget Stage Comparison Mega Table</h3>

<!-- SCROLL WRAPPER -->
<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Stage</th>
<th>Age</th>
<th>Thinking</th>
<th>Key Feature</th>
<th>Limitation</th>
<th>Example</th>
</tr>

<tr class="feature-card">

<td class="feature-title">
Sensorimotor
</td>

<td class="feature-en">
0–2
</td>

<td class="feature-en">
Sense based
</td>

<td class="feature-bn">
Object permanence
</td>

<td class="feature-en">
No symbols
</td>

<td class="feature-example">
Search hidden toy
</td>

</tr>

<tr class="feature-card">

<td class="feature-title">
Pre-Operational
</td>

<td class="feature-en">
2–7
</td>

<td class="feature-en">
Symbolic
</td>

<td class="feature-bn">
Egocentrism
</td>

<td class="feature-en">
No conservation
</td>

<td class="feature-example">
Moon follows child
</td>

</tr>

<tr class="feature-card">

<td class="feature-title">
Concrete Operational
</td>

<td class="feature-en">
7–11
</td>

<td class="feature-en">
Logical (concrete)
</td>

<td class="feature-bn">
Conservation
</td>

<td class="feature-en">
No abstract thinking
</td>

<td class="feature-example">
Glass water equal
</td>

</tr>

<tr class="feature-card">

<td class="feature-title">
Formal Operational
</td>

<td class="feature-en">
11+
</td>

<td class="feature-en">
Abstract
</td>

<td class="feature-bn">
Hypothetical reasoning
</td>

<td class="feature-en">
—
</td>

<td class="feature-example">
Solve algebra
</td>

</tr>

</table>

</div> <!-- END SCROLL -->

<hr>

<div class="feature-card">

<b class="feature-title">🧠 Memory Trick:</b><br><br>

<b class="feature-en">
S-P-C-F
</b><br>

<div class="feature-en">
Sensorimotor → Pre → Concrete → Formal
</div>

<br>

<div class="feature-example">
Small People Can Fly
</div>

</div>

</div>
<!-- ======================
🧠 KEY FEATURES DEFINITION
====================== -->
<div class="card">

<h3>🧠 Key Features Definition + Example</h3>

<!-- 1️⃣ Object Permanence -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Object Permanence
</div>

<div class="feature-en">
English: Object exists even if unseen.
</div>

<div class="feature-bn">
Bengali: বস্তু দেখা না গেলেও থাকে।
</div>

<div class="feature-example">
Example: Baby searches hidden toy.
</div>

<div class="feature-ctet">
CTET: Sensorimotor keyword
</div>

</div>

<!-- 2️⃣ Egocentrism -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Egocentrism
</div>

<div class="feature-en">
English: Cannot see others’ perspective.
</div>

<div class="feature-bn">
Bengali: অন্যের দৃষ্টিভঙ্গি বোঝে না।
</div>

<div class="feature-example">
Example: Thinks everyone sees same view.
</div>

<div class="feature-ctet">
CTET: Three mountain task
</div>

</div>

<!-- 3️⃣ Conservation -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Conservation
</div>

<div class="feature-en">
English: Quantity remains same despite shape change.
</div>

<div class="feature-bn">
Bengali: আকার বদলালেও পরিমাণ একই থাকে।
</div>

<div class="feature-example">
Example: Water in different glass.
</div>

<div class="feature-ctet">
CTET: Concrete stage most asked
</div>

</div>

<!-- 4️⃣ Reversibility -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Reversibility
</div>

<div class="feature-en">
English: Ability to reverse thinking.
</div>

<div class="feature-bn">
Bengali: চিন্তা উল্টে ভাবার ক্ষমতা।
</div>

<div class="feature-example">
Example: 4+2 = 6 → 6−2 = 4.
</div>

</div>

<!-- 5️⃣ Animism -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Animism
</div>

<div class="feature-en">
English: Objects are alive.
</div>

<div class="feature-bn">
Bengali: জড় বস্তুকে জীবন্ত ভাবা।
</div>

<div class="feature-example">
Example: “Sun is smiling.”
</div>

</div>

<!-- 6️⃣ Seriation -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">6</span>
Seriation
</div>

<div class="feature-en">
English: Arranging logically.
</div>

<div class="feature-bn">
Bengali: ক্রমানুসারে সাজানো।
</div>

<div class="feature-example">
Example: Small → big sticks.
</div>

</div>

</div>

`;

loadDiagram();

}


/* ======================
CRITICISM
====================== */

else if(tab === "criticism"){

box.innerHTML = `

<div class="card">

<h3>⚠️ Criticism of Piaget’s Cognitive Development Theory</h3>

<!-- ======================
1️⃣ SOCIAL FACTOR IGNORED
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Ignored Social & Cultural Factors
</div>

<div class="feature-en">
Piaget focused mainly on individual discovery and ignored the role of society, language and culture.
</div>

<div class="feature-bn">
পিয়াজে ব্যক্তিগত আবিষ্কারের উপর বেশি গুরুত্ব দেন — সমাজ, ভাষা ও সংস্কৃতির প্রভাব কম গুরুত্ব দেন।
</div>

<div class="feature-ctet">
Major Critic: <b>Vygotsky</b>
</div>

<div class="feature-example">
Keyword: Social constructivism vs cognitive constructivism
</div>

</div>

<!-- ======================
2️⃣ RIGID STAGE THEORY
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Rigid Stage Division
</div>

<div class="feature-en">
Piaget proposed fixed age stages, but development is more flexible in reality.
</div>

<div class="feature-bn">
পিয়াজে নির্দিষ্ট বয়সভিত্তিক ধাপ দেন, কিন্তু বাস্তবে বিকাশ এতটা কঠোর নয়।
</div>

<div class="feature-ctet">
Children may show abilities earlier or later.
</div>

</div>

<!-- ======================
3️⃣ UNDERESTIMATED CHILDREN
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Underestimated Children’s Ability
</div>

<div class="feature-en">
Research shows children can perform tasks earlier than Piaget suggested.
</div>

<div class="feature-bn">
গবেষণায় দেখা যায় শিশুরা পিয়াজের ধারণার আগেই অনেক দক্ষতা দেখায়।
</div>

<div class="feature-example">
Conservation may appear before 7 yrs.
</div>

</div>

<!-- ======================
4️⃣ LIMITED SAMPLE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Limited Research Sample
</div>

<div class="feature-en">
Piaget studied mostly his own children.
</div>

<div class="feature-bn">
পিয়াজে মূলত নিজের সন্তানদের উপর গবেষণা করেন।
</div>

<div class="feature-ctet">
Hence results lack generalization.
</div>

</div>

<!-- ======================
5️⃣ LANGUAGE ROLE IGNORED
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Ignored Role of Language
</div>

<div class="feature-en">
Language plays major role in thinking but Piaget gave it less importance.
</div>

<div class="feature-bn">
চিন্তন বিকাশে ভাষার ভূমিকা গুরুত্বপূর্ণ হলেও পিয়াজে কম গুরুত্ব দেন।
</div>

<div class="feature-ctet">
Major Critic: <b>Vygotsky</b>
</div>

</div>

<!-- ======================
6️⃣ CULTURAL BIAS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">6</span>
Cultural Bias
</div>

<div class="feature-en">
Theory based on Western children; may not apply universally.
</div>

<div class="feature-bn">
তত্ত্বটি পাশ্চাত্য শিশুদের উপর ভিত্তি করে — সব সংস্কৃতিতে সমান প্রযোজ্য নাও হতে পারে।
</div>

</div>

<!-- ======================
7️⃣ ADULT THINKING VARIES
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">7</span>
Formal Stage Not Universal
</div>

<div class="feature-en">
Not all adults reach formal operational thinking.
</div>

<div class="feature-bn">
সব প্রাপ্তবয়স্ক Formal stage এ পৌঁছায় না।
</div>

<div class="feature-example">
Depends on education & exposure.
</div>

</div>

<!-- ======================
8️⃣ TASK BASED ERROR
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">8</span>
Task Method Criticism
</div>

<div class="feature-en">
Children failed tasks due to confusing instructions, not lack of ability.
</div>

<div class="feature-bn">
শিশুরা অনেক সময় কাজ বুঝতে না পেরে ভুল করে — সক্ষমতার অভাবে নয়।
</div>

</div>

<!-- ======================
9️⃣ CONTINUOUS DEVELOPMENT
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">9</span>
Development is Continuous
</div>

<div class="feature-en">
Modern psychologists believe development is gradual, not stage-wise.
</div>

<div class="feature-bn">
আধুনিক মনোবিজ্ঞানীরা মনে করেন বিকাশ ধাপে নয় — ধীরে ধীরে হয়।
</div>

</div>

<!-- ======================
🔟 BIOLOGY OVEREMPHASIS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">10</span>
Overemphasis on Maturation
</div>

<div class="feature-en">
Piaget stressed biological maturation more than learning environment.
</div>

<div class="feature-bn">
পিয়াজে জৈবিক পরিপক্বতার উপর বেশি গুরুত্ব দেন — পরিবেশের ভূমিকা কম।
</div>

</div>

<!-- ======================
CTET EXAM FOCUS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🎯</span>
CTET Exam Focus
</div>

<div class="feature-en">

Most asked criticisms:<br><br>

• Ignored social interaction<br>
• Rigid stage theory<br>
• Underestimation of children<br>
• Language role ignored<br>
• Limited sample research

</div>

</div>

<!-- ======================
WHO CRITICIZED MOST
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">👨‍🏫</span>
Major Critics
</div>

<div class="feature-en">

<b>Lev Vygotsky →</b> Social & language role criticism<br>
<b>Jerome Bruner →</b> Learning flexibility criticism<br>
<b>Information Processing theorists →</b> Continuous development view

</div>

<div class="feature-bn">

ভাইগটস্কি সবচেয়ে বেশি সমালোচনা করেন — বিশেষ করে সামাজিক মিথস্ক্রিয়া বিষয়ে।

</div>

</div>

<!-- ======================
MEMORY TRICK
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🧠</span>
Memory Trick
</div>

<div class="feature-example">

<b>S-R-U-L-C-F-T-B</b><br><br>

S → Social ignored<br>
R → Rigid stages<br>
U → Underestimated child<br>
L → Language ignored<br>
C → Cultural bias<br>
F → Formal not universal<br>
T → Task error<br>
B → Biological overfocus

</div>

</div>

</div>

`;

}


/* ======================
COMPARE
====================== */

else if(tab === "compare"){

box.innerHTML = `

<div class="card">

<h3>🆚 Piaget vs Other Theories (CTET Comparison)</h3>

</div>

<!-- ======================
PIAGET vs VYGOTSKY
====================== -->
<div class="card">

<h3>Piaget vs Vygotsky</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Vygotsky</th>
</tr>

<tr>
<td>Learning Type</td>
<td>Self discovery</td>
<td>Social interaction</td>
</tr>

<tr>
<td>Development</td>
<td>Stage based</td>
<td>Continuous</td>
</tr>

<tr>
<td>Language Role</td>
<td>Secondary</td>
<td>Primary</td>
</tr>

<tr>
<td>Key Concept</td>
<td>Constructivism</td>
<td>ZPD & Scaffolding</td>
</tr>

<tr>
<td>Teacher Role</td>
<td>Facilitator</td>
<td>Guide + Support</td>
</tr>

</table>

</div>

<div class="feature-ctet">
CTET Most Asked Comparison
</div>

</div>

<!-- ======================
PIAGET vs BRUNER
====================== -->
<div class="card">

<h3>Piaget vs Bruner</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Bruner</th>
</tr>

<tr>
<td>Development</td>
<td>Fixed stages</td>
<td>Flexible stages</td>
</tr>

<tr>
<td>Stages</td>
<td>4 stages</td>
<td>3 modes</td>
</tr>

<tr>
<td>Learning</td>
<td>Readiness based</td>
<td>Any subject any age</td>
</tr>

<tr>
<td>Concept</td>
<td>Cognitive stages</td>
<td>Spiral curriculum</td>
</tr>

<tr>
<td>Discovery</td>
<td>Yes</td>
<td>Strongly supported</td>
</tr>

</table>

</div>

<div class="feature-example">
Bruner Modes → Enactive, Iconic, Symbolic
</div>

</div>

<!-- ======================
PIAGET vs KOHLBERG
====================== -->
<div class="card">

<h3>Piaget vs Kohlberg</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Kohlberg</th>
</tr>

<tr>
<td>Development Type</td>
<td>Cognitive</td>
<td>Moral</td>
</tr>

<tr>
<td>Focus</td>
<td>Thinking</td>
<td>Judgment of right/wrong</td>
</tr>

<tr>
<td>Stages</td>
<td>4 stages</td>
<td>3 levels / 6 stages</td>
</tr>

<tr>
<td>Age Link</td>
<td>Yes</td>
<td>Yes</td>
</tr>

<tr>
<td>Basis</td>
<td>Logic development</td>
<td>Moral reasoning</td>
</tr>

</table>

</div>

</div>

<!-- ======================
PIAGET vs SKINNER
====================== -->
<div class="card">

<h3>Piaget vs Skinner</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Skinner</th>
</tr>

<tr>
<td>Theory Type</td>
<td>Cognitive</td>
<td>Behaviorism</td>
</tr>

<tr>
<td>Learning</td>
<td>Mental construction</td>
<td>Conditioning</td>
</tr>

<tr>
<td>Method</td>
<td>Discovery</td>
<td>Reinforcement</td>
</tr>

<tr>
<td>Learner Role</td>
<td>Active</td>
<td>Passive</td>
</tr>

<tr>
<td>Focus</td>
<td>Thinking process</td>
<td>Observable behavior</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Trap: Piaget ≠ Reinforcement theory
</div>

</div>

<!-- ======================
PIAGET vs BANDURA
====================== -->
<div class="card">

<h3>Piaget vs Bandura</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Bandura</th>
</tr>

<tr>
<td>Learning Type</td>
<td>Cognitive construction</td>
<td>Observational learning</td>
</tr>

<tr>
<td>Method</td>
<td>Self discovery</td>
<td>Model imitation</td>
</tr>

<tr>
<td>Key Concept</td>
<td>Schema</td>
<td>Modeling</td>
</tr>

<tr>
<td>Experiment</td>
<td>Stage tasks</td>
<td>Bobo Doll</td>
</tr>

<tr>
<td>Focus</td>
<td>Thinking</td>
<td>Behavior imitation</td>
</tr>

</table>

</div>

</div>

<!-- ======================
MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Memory Trick — Theorist Link</h3>

<div class="feature-card">

<b>P-V-B-K-S-B</b><br><br>

P → Piaget → Cognitive stages<br>
V → Vygotsky → Social learning<br>
B → Bruner → Spiral curriculum<br>
K → Kohlberg → Moral stages<br>
S → Skinner → Reinforcement<br>
B → Bandura → Modeling

</div>

</div>

<!-- ======================
CTET EXAM TIPS
====================== -->
<div class="card">

<h3>🎯 CTET Exam Tips</h3>

<div class="feature-card">

• “Discovery learning” → Piaget / Bruner<br>
• “ZPD” → Vygotsky<br>
• “Reinforcement” → Skinner<br>
• “Moral dilemma” → Kohlberg<br>
• “Bobo doll” → Bandura

</div>

</div>
/* ======================
PIAGET vs MONTESSORI
====================== */
<div class="card">

<h3>Piaget vs Montessori</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Montessori</th>
</tr>

<tr>
<td>Development</td>
<td>Cognitive stages</td>
<td>Holistic development</td>
</tr>

<tr>
<td>Learning</td>
<td>Self discovery</td>
<td>Self-directed learning</td>
</tr>

<tr>
<td>Classroom</td>
<td>Activity based</td>
<td>Prepared environment</td>
</tr>

<tr>
<td>Teacher Role</td>
<td>Facilitator</td>
<td>Directress / Guide</td>
</tr>

<tr>
<td>Material</td>
<td>General materials</td>
<td>Special didactic apparatus</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Montessori → Learning through senses
</div>

</div>

<!-- ======================
PIAGET vs DEWEY
====================== -->
<div class="card">

<h3>Piaget vs John Dewey</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Dewey</th>
</tr>

<tr>
<td>Theory Type</td>
<td>Cognitive constructivism</td>
<td>Pragmatism</td>
</tr>

<tr>
<td>Learning</td>
<td>Knowledge construction</td>
<td>Learning by doing</td>
</tr>

<tr>
<td>Focus</td>
<td>Mental development</td>
<td>Experience based learning</td>
</tr>

<tr>
<td>School View</td>
<td>Development space</td>
<td>Mini society</td>
</tr>

<tr>
<td>Method</td>
<td>Discovery</td>
<td>Project method</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Dewey → Father of Progressive Education
</div>

</div>

<!-- ======================
PIAGET vs GARDNER
====================== -->
<div class="card">

<h3>Piaget vs Gardner (Multiple Intelligence)</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Gardner</th>
</tr>

<tr>
<td>Development</td>
<td>Universal stages</td>
<td>Different intelligences</td>
</tr>

<tr>
<td>Focus</td>
<td>Cognitive thinking</td>
<td>Talent diversity</td>
</tr>

<tr>
<td>Concept</td>
<td>Schema & stages</td>
<td>MI Theory</td>
</tr>

<tr>
<td>Intelligence View</td>
<td>Single cognitive growth</td>
<td>Multiple types</td>
</tr>

<tr>
<td>Example</td>
<td>Logic development</td>
<td>Music, language, spatial</td>
</tr>

</table>

</div>

<div class="feature-example">

Gardner 8 Intelligence:<br>
Linguistic, Logical, Musical, Bodily,<br>
Spatial, Interpersonal, Intrapersonal, Naturalistic

</div>

</div>

<!-- ======================
PIAGET vs ERIKSON
====================== -->
<div class="card">

<h3>Piaget vs Erikson</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Piaget</th>
<th>Erikson</th>
</tr>

<tr>
<td>Development Type</td>
<td>Cognitive</td>
<td>Psychosocial</td>
</tr>

<tr>
<td>Focus</td>
<td>Thinking</td>
<td>Personality</td>
</tr>

<tr>
<td>Stages</td>
<td>4 stages</td>
<td>8 stages</td>
</tr>

<tr>
<td>Age Span</td>
<td>Childhood focus</td>
<td>Lifespan</td>
</tr>

<tr>
<td>Conflict</td>
<td>Cognitive conflict</td>
<td>Social crisis</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Example: Trust vs Mistrust → Erikson
</div>

</div>

<!-- ======================
FINAL MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Mega Memory Trick</h3>

<div class="feature-card">

<b>P-V-B-K-S-B-M-D-G-E</b><br><br>

P → Piaget → Cognitive<br>
V → Vygotsky → Social<br>
B → Bruner → Spiral<br>
K → Kohlberg → Moral<br>
S → Skinner → Reinforcement<br>
B → Bandura → Modeling<br>
M → Montessori → Prepared env.<br>
D → Dewey → Learning by doing<br>
G → Gardner → MI theory<br>
E → Erikson → Psychosocial

</div>

</div>

`;

}


/* ======================
TEACHING
====================== */

else if(tab === "teaching"){

box.innerHTML = `

<div class="card">

<h3>👩‍🏫 Teaching Implications of Piaget’s Theory</h3>

<!-- ======================
CORE IDEA
====================== -->
<div class="feature-card">
<b>📘 Core Idea</b><br>
Teaching should be planned according to child’s cognitive stage — not only age or syllabus.
<br><br>
<b>CTET Keyword:</b> Stage appropriate teaching.
</div>

<!-- ======================
1 CHILD CENTRED
====================== -->
<div class="feature-card">
<b>1. Child-Centred Education</b><br>
Focus on learner’s needs, interests and developmental level.
<br>
শিক্ষার্থীকেন্দ্রিক শিক্ষণ পদ্ধতি।
</div>

<!-- ======================
2 LEARNING BY DOING
====================== -->
<div class="feature-card">
<b>2. Learning by Doing</b><br>
Children learn better through activity and experience.
<br>
Example: प्रयोग, math blocks.
</div>

<!-- ======================
3 READINESS
====================== -->
<div class="feature-card">
<b>3. Readiness Principle</b><br>
Do not teach concepts beyond child’s mental readiness.
<br>
Example: Algebra before concrete stage ❌
</div>

<!-- ======================
4 USE OF TLM
====================== -->
<div class="feature-card">
<b>4. Use of Teaching-Learning Materials (TLM)</b><br>
Concrete materials help children understand better.
<br>
Example: Charts, models, maps, cubes.
</div>

<!-- ======================
5 DISCOVERY LEARNING
====================== -->
<div class="feature-card">
<b>5. Discovery Learning</b><br>
Teacher creates situations where child discovers knowledge.
<br>
Opposite of rote learning.
</div>

<!-- ======================
6 FACILITATOR
====================== -->
<div class="feature-card">
<b>6. Teacher as Facilitator</b><br>
Teacher guides, supports and scaffolds learning.
<br>
Teacher ≠ dictator.
</div>

<!-- ======================
7 ACTIVE LEARNER
====================== -->
<div class="feature-card">
<b>7. Active Learner Concept</b><br>
Child actively constructs knowledge — not passive receiver.
</div>

<!-- ======================
8 STAGE BASED STRATEGY
====================== -->
<div class="feature-card">
<b>8. Stage-Wise Teaching Strategy</b><br><br>

Sensorimotor → Sensory play<br>
Pre-operational → Pictures & stories<br>
Concrete → Models & experiments<br>
Formal → Abstract discussion

</div>

<!-- ======================
9 SOCIAL INTERACTION
====================== -->
<div class="feature-card">
<b>9. Peer Interaction</b><br>
Children learn through discussion & cooperation.
<br>
Example: Group work.
</div>

<!-- ======================
10 ASSESSMENT
====================== -->
<div class="feature-card">
<b>10. Diagnostic Assessment</b><br>
Use observation, portfolio, activity test.
<br>
Not only written exam.
</div>

<!-- ======================
11 INDIVIDUAL DIFFERENCE
====================== -->
<div class="feature-card">
<b>11. Respect Individual Differences</b><br>
Each child develops at different pace.
</div>

<!-- ======================
12 ERROR FRIENDLY LEARNING
====================== -->
<div class="feature-card">
<b>12. Learning through Mistakes</b><br>
Errors are part of cognitive development.
</div>

<!-- ======================
CTET TRAP LINES
====================== -->
<div class="feature-card">

<b>⚠️ CTET Examiner Trap Lines</b><br><br>

• Teacher should dominate class ❌<br>
• Child is passive learner ❌<br>
• Memorization is best method ❌<br><br>

✔ Correct → Activity + discovery + child centred.

</div>

<!-- ======================
MCQ PRACTICE
====================== -->
<div class="feature-card">

<b>📝 CTET Practice MCQ</b><br><br>

Which method is most suitable according to Piaget?<br><br>

A. Lecture method<br>
B. Rote memorization<br>
C. Discovery learning ✔<br>
D. Drill practice

</div>

<!-- ======================
MEMORY TRICK
====================== -->
<div class="feature-card">

<b>🧠 Memory Trick</b><br><br>

C-L-R-D-F<br><br>

C → Child centred<br>
L → Learning by doing<br>
R → Readiness<br>
D → Discovery<br>
F → Facilitator<br><br>

Line:<br>
<i>Children Learn Ready Discoveries Fast</i>

</div>

</div>

`;

}

else if(tab === "criticism-mcq"){

box.innerHTML = `

<div class="card">

<h3>📝 Piaget Theory — Criticism MCQ Set</h3>

<!-- MCQ 1 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
1️⃣ Who criticized Piaget for ignoring social interaction?
</div>

<div class="mcq-opt">A. Skinner</div>
<div class="mcq-opt correct">B. Vygotsky</div>
<div class="mcq-opt">C. Thorndike</div>
<div class="mcq-opt">D. Pavlov</div>

<div class="mcq-answer">
✔ Vygotsky emphasized social constructivism.
</div>
</div>

<!-- MCQ 2 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
2️⃣ Piaget’s stages are criticized as:
</div>

<div class="mcq-opt">A. Flexible</div>
<div class="mcq-opt correct">B. Too rigid</div>
<div class="mcq-opt">C. Scientific</div>
<div class="mcq-opt">D. Universal</div>

<div class="mcq-answer">
✔ Development is continuous, not fixed.
</div>
</div>

<!-- MCQ 3 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
3️⃣ Major limitation of Piaget’s research sample:
</div>

<div class="mcq-opt">A. Large size</div>
<div class="mcq-opt">B. Random sampling</div>
<div class="mcq-opt correct">C. Own children studied</div>
<div class="mcq-opt">D. Cross-cultural</div>

<div class="mcq-answer">
✔ Limited generalization.
</div>
</div>

<!-- MCQ 4 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
4️⃣ Which factor Piaget underestimated?
</div>

<div class="mcq-opt">A. Maturation</div>
<div class="mcq-opt correct">B. Language</div>
<div class="mcq-opt">C. Reflex</div>
<div class="mcq-opt">D. Heredity</div>

<div class="mcq-answer">
✔ Language role highlighted by Vygotsky.
</div>
</div>

<!-- MCQ 5 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
5️⃣ Conservation may develop earlier than Piaget said — criticism of:
</div>

<div class="mcq-opt correct">A. Underestimation</div>
<div class="mcq-opt">B. Overestimation</div>
<div class="mcq-opt">C. Maturation</div>
<div class="mcq-opt">D. Schema</div>

<div class="mcq-answer">
✔ Children’s ability underestimated.
</div>
</div>

<!-- MCQ 6 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
6️⃣ Formal operational stage criticism:
</div>

<div class="mcq-opt">A. Everyone reaches</div>
<div class="mcq-opt correct">B. Not universal</div>
<div class="mcq-opt">C. Begins at birth</div>
<div class="mcq-opt">D. Culture free</div>

<div class="mcq-answer">
✔ Depends on education.
</div>
</div>

<!-- MCQ 7 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
7️⃣ Development is continuous — supported by:
</div>

<div class="mcq-opt">A. Piaget</div>
<div class="mcq-opt correct">B. Information processing theorists</div>
<div class="mcq-opt">C. Pavlov</div>
<div class="mcq-opt">D. Watson</div>

<div class="mcq-answer">
✔ Opposes stage rigidity.
</div>
</div>

<!-- MCQ 8 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
8️⃣ Cultural bias criticism means:
</div>

<div class="mcq-opt">A. Universal theory</div>
<div class="mcq-opt correct">B. Western child based</div>
<div class="mcq-opt">C. Language free</div>
<div class="mcq-opt">D. Biological only</div>

<div class="mcq-answer">
✔ Not globally applicable.
</div>
</div>

<!-- MCQ 9 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
9️⃣ Children fail tasks due to confusing instruction — criticism of:
</div>

<div class="mcq-opt">A. Stage</div>
<div class="mcq-opt correct">B. Methodology</div>
<div class="mcq-opt">C. Maturation</div>
<div class="mcq-opt">D. Schema</div>

<div class="mcq-answer">
✔ Task design flaw.
</div>
</div>

<!-- MCQ 10 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
🔟 Who emphasized language in cognitive development?
</div>

<div class="mcq-opt">A. Bruner</div>
<div class="mcq-opt correct">B. Vygotsky</div>
<div class="mcq-opt">C. Freud</div>
<div class="mcq-opt">D. Erikson</div>

<div class="mcq-answer">
✔ Social speech → Thought.
</div>
</div>

</div>

`;

}
else if(tab === "revision"){

box.innerHTML = `

<div class="card">

<h3>⚡ Piaget One-Liner Revision (CTET Rapid Review)</h3>

<div class="feature-card">Piaget → Cognitive constructivist</div>

<div class="feature-card">Learning = Active knowledge construction</div>

<div class="feature-card">Child = Active learner</div>

<div class="feature-card">Development before learning</div>

<div class="feature-card">4 fixed stages</div>

<div class="feature-card">Sensorimotor → Object permanence</div>

<div class="feature-card">Pre-operational → Egocentrism</div>

<div class="feature-card">Concrete → Conservation</div>

<div class="feature-card">Formal → Abstract thinking</div>

<div class="feature-card">Schema = Mental framework</div>

<div class="feature-card">Assimilation = Add info</div>

<div class="feature-card">Accommodation = Modify schema</div>

<div class="feature-card">Equilibration = Balance</div>

<div class="feature-card">Adaptation = Adjustment process</div>

<div class="feature-card">Discovery learning supported</div>

<div class="feature-card">Teacher = Facilitator</div>

<div class="feature-card">Learning by doing important</div>

<div class="feature-card">Readiness principle</div>

<div class="feature-card">Stage appropriate teaching</div>

<div class="feature-card">Opposes rote learning</div>

<hr>

<h3>⚠️ Criticism One-Liners</h3>

<div class="feature-card">Ignored social interaction</div>

<div class="feature-card">Language role ignored</div>

<div class="feature-card">Rigid stage division</div>

<div class="feature-card">Underestimated children</div>

<div class="feature-card">Own children sample</div>

<div class="feature-card">Cultural bias</div>

<div class="feature-card">Formal stage not universal</div>

<div class="feature-card">Task method flaw</div>

<div class="feature-card">Overfocus on maturation</div>

<hr>

<h3>🧠 Memory Mega Trick</h3>

<div class="feature-card">

<b>S-P-C-F</b><br>
Sensorimotor → Pre → Concrete → Formal

<br><br>

<b>A-A-E</b><br>
Assimilation → Accommodation → Equilibration

<br><br>

<b>ELC</b><br>
Egocentrism → Lack conservation → Centration

</div>

</div>

`;

}

}



/* ======================
MCQ TOGGLE
====================== */

window.toggleMCQ = function(el){

  const ans =
    el.querySelector(".mcq-answer");

  const opts =
    el.querySelectorAll(".mcq-opt");

  /* Toggle answer */

  if(ans.style.display === "block"){
    ans.style.display = "none";

    opts.forEach(o =>
      o.classList.remove("show")
    );

  } else {

    ans.style.display = "block";

    opts.forEach(o => {

      if(o.classList.contains("correct")){
        o.classList.add("show");
      }

    });

  }

};


/* ======================
BACK BUTTON
====================== */

window.goBack = function(){
  window.location.replace("../subject-list.html");
};

/* ======================
PIAGET MCQ PAGE GO
====================== */

/* ======================
PIAGET MCQ PAGE GO
====================== */

window.goPiagetMCQ = function(event){

  // Active remove
  document
    .querySelectorAll(".btab")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  // Active add
  if(event){
    event.currentTarget
         .classList.add("active");
  }

  // Ripple
  const btn = event.currentTarget;

  const circle =
    document.createElement("span");

  circle.classList.add("ripple");

  const rect =
    btn.getBoundingClientRect();

  const size =
    Math.max(rect.width,
             rect.height);

  circle.style.width  =
  circle.style.height =
    size + "px";

  circle.style.left =
    event.clientX
    - rect.left
    - size/2 + "px";

  circle.style.top =
    event.clientY
    - rect.top
    - size/2 + "px";

  btn.appendChild(circle);

  setTimeout(()=>{
    circle.remove();
  },600);

  // Redirect
  setTimeout(()=>{
    window.location.href =
      "MCQ/piaget-mcq.html";
  },180);

};

/* ======================
STAGE DIAGRAM LOAD
====================== */

/* ======================
ANIMATED SVG DIAGRAM
====================== */

function loadDiagram(){

  const container =
    document.getElementById(
      "diagramContainer"
    );

  if(!container){
    console.warn(
      "Diagram container missing"
    );
    return;
  }

  /* ----------------------
  SVG INJECT
  ---------------------- */

  container.innerHTML = `

<svg id="piagetSVG"
     viewBox="0 0 360 620"
     width="100%"
     height="auto">

<defs>
  <filter id="glow">
    <feGaussianBlur
      stdDeviation="4"
      result="coloredBlur"/>
    <feMerge>
      <feMergeNode in="coloredBlur"/>
      <feMergeNode in="SourceGraphic"/>
    </feMerge>
  </filter>
</defs>

<!-- ======================
STAGE BOXES (CLICKABLE)
====================== -->

<!-- 1 -->
<rect class="stage"
      data-stage="sensorimotor"
      x="40" y="30"
      width="280"
      height="90"
      rx="16"/>

<text x="60" y="60" class="title">
Sensorimotor
</text>
<text x="60" y="82" class="sub">
0–2 yrs
</text>
<text x="60" y="102" class="sub">
Object Permanence
</text>

<!-- 2 -->
<rect class="stage"
      data-stage="pre"
      x="40" y="160"
      width="280"
      height="90"
      rx="16"/>

<text x="60" y="190" class="title">
Pre-Operational
</text>
<text x="60" y="212" class="sub">
2–7 yrs
</text>
<text x="60" y="232" class="sub">
Egocentrism
</text>

<!-- 3 -->
<rect class="stage"
      data-stage="concrete"
      x="40" y="290"
      width="280"
      height="90"
      rx="16"/>

<text x="60" y="320" class="title">
Concrete
</text>
<text x="60" y="342" class="sub">
7–11 yrs
</text>
<text x="60" y="362" class="sub">
Conservation
</text>

<!-- 4 -->
<rect class="stage"
      data-stage="formal"
      x="40" y="420"
      width="280"
      height="90"
      rx="16"/>

<text x="60" y="450" class="title">
Formal
</text>
<text x="60" y="472" class="sub">
11+ yrs
</text>
<text x="60" y="492" class="sub">
Abstract Thinking
</text>

<!-- ======================
ARROWS
====================== -->

<line class="arrow"
      x1="180" y1="120"
      x2="180" y2="160"/>

<line class="arrow"
      x1="180" y1="250"
      x2="180" y2="290"/>

<line class="arrow"
      x1="180" y1="380"
      x2="180" y2="420"/>

</svg>


<style>

.stage{
  fill:#e3f2fd;
  stroke:#1e88e5;
  stroke-width:2;
  transition:.4s;
  cursor:pointer;
}

.stage.active{
  filter:url(#glow);
  fill:#bbdefb;
}

.title{
  font:bold 16px Arial;
  fill:#000;
}

.sub{
  font:13px Arial;
  fill:#222;
}

.arrow{
  stroke:#1e88e5;
  stroke-width:3;
  stroke-dasharray:8;
  animation:flow 2s linear infinite;
}

@keyframes flow{
  from{stroke-dashoffset:20;}
  to{stroke-dashoffset:0;}
}

</style>
`;

  /* ----------------------
  GLOW LOOP
  ---------------------- */

  const stages =
    container.querySelectorAll(
      ".stage"
    );

  let i = 0;

  function glowLoop(){

    stages.forEach(
      s => s.classList.remove("active")
    );

    stages[i].classList.add(
      "active"
    );

    i++;
    if(i >= stages.length)
      i = 0;
  }

  glowLoop();

  setInterval(glowLoop,1800);

  /* ----------------------
  TAP → POPUP
  ---------------------- */

  stages.forEach(stage => {

    stage.addEventListener(
      "click",
      () => {

        const type =
          stage.getAttribute(
            "data-stage"
          );

        openStagePopup(type);

      }
    );

  });

}
function openStagePopup(type){

  let content = "";

if(type === "sensorimotor"){

content = `

<h3>🧠 Sensorimotor Stage</h3>

<b>Age:</b> 0–2 years

<br><br>

<b>📘 Description:</b><br>

This is the first stage of Piaget’s cognitive  
development where infants learn through  
sensory experiences and motor actions like  
touching, seeing, grasping, sucking and moving.

Thinking is action-based — not symbolic.

<br><br>

<b>🔑 Key Features:</b><br>

• Learning by senses & actions<br>
• Object permanence develops<br>
• Goal-directed behaviour begins<br>
• Imitation starts<br>
• Trial & error learning<br>
• Circular reactions occur<br>
• No symbolic thinking<br>
• No logical reasoning

<br><br>

<b>🧩 Sub-Stages:</b><br>

1️⃣ Reflex stage → Sucking, grasping<br>
2️⃣ Primary circular reaction<br>
3️⃣ Secondary circular reaction<br>
4️⃣ Coordination stage<br>
5️⃣ Tertiary circular reaction<br>
6️⃣ Mental representation

<br><br>

<b>🧪 Classic Experiment:</b><br>

Hidden Toy Experiment →  
Baby searches object even when unseen,  
showing object permanence.

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Baby sucks thumb repeatedly  
→ Reflex / circular reaction

<br>

2️⃣ Baby shakes rattle again & again  
→ Primary circular reaction

<br>

3️⃣ Baby throws toy repeatedly  
→ Secondary circular reaction

<br>

4️⃣ Baby searches hidden ball  
→ Object permanence

<br>

5️⃣ Baby pulls cloth to reach toy  
→ Goal-directed behaviour

<br>

6️⃣ Baby imitates clapping or smiling  
→ Imitation learning

<br>

7️⃣ Baby presses sound toy purposely  
→ Cause-effect understanding

<br>

8️⃣ Baby tries different ways to grab toy  
→ Trial & error exploration

<br><br>

<b>🎯 CTET Focus:</b><br>

• Object permanence concept<br>
• Hidden toy experiment<br>
• Sub-stage identification<br>
• Circular reaction examples

<br><br>

<b>⚠️ Examiner Trap:</b><br>

“Symbolic thinking present” ❌<br>
Correct → Develops in Pre-operational stage.

<br><br>

<b>🧠 Memory Trick:</b><br>

<b>O-G-I-C</b><br>

O → Object permanence<br>
G → Goal behaviour<br>
I → Imitation<br>
C → Circular reaction

`;
}

  else if(type === "pre"){

content = `

<h3>🎭 Pre-Operational Stage</h3>

<b>Age:</b> 2–7 years

<br><br>

<b>📘 Description:</b><br>

At this stage children develop symbolic  
thinking, imagination and language skills,  
but logical reasoning is still weak.

Thinking is intuitive and perception-based,  
not logical or reversible.

<br><br>

<b>🔑 Key Features:</b><br>

• Symbolic thinking develops<br>
• Rapid language growth<br>
• Egocentrism present<br>
• Animism belief<br>
• Centration thinking<br>
• Lack of conservation<br>
• Irreversibility of thought<br>
• Transductive reasoning

<br><br>

<b>🧪 Classic Experiments:</b><br>

• Three Mountain Task → Egocentrism<br>
• Conservation Task → Failure<br>
• Tall vs flat glass judgment

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Child thinks moon follows him  
→ Egocentrism

<br>

2️⃣ Child says “Doll is crying”  
→ Animism

<br>

3️⃣ Child says tall glass has more water  
→ Lack of conservation

<br>

4️⃣ Stick used as horse in play  
→ Symbolic thinking

<br>

5️⃣ Child covers eyes & thinks others can’t see him  
→ Egocentrism

<br>

6️⃣ Child believes sun sleeps at night  
→ Animism

<br>

7️⃣ Child focuses only on glass height  
→ Centration

<br>

8️⃣ Child cannot mentally reverse actions  
→ Irreversibility

<br><br>

<b>🎯 CTET Focus:</b><br>

• Egocentrism identification<br>
• Animism examples<br>
• Conservation failure<br>
• Centration concept<br>
• Three mountain task

<br><br>

<b>⚠️ Examiner Trap:</b><br>

“Child shows logical conservation” ❌<br>
Correct → Develops in Concrete stage.

<br><br>

<b>🧠 Memory Trick:</b><br>

<b>E-A-C-I</b><br>

E → Egocentrism<br>
A → Animism<br>
C → Centration<br>
I → Irreversibility

`;
}

  else if(type === "concrete"){

content = `

<h3>🧠 Concrete Operational Stage</h3>

<b>Age:</b> 7–11 years

<br><br>

<b>📘 Description:</b><br>

At this stage children develop  
logical thinking, but only about  
real (concrete) objects and events.

Abstract reasoning is still limited.

<br><br>

<b>🔑 Key Features:</b><br>

• Logical thinking develops<br>
• Conservation ability<br>
• Classification skill<br>
• Seriation ability<br>
• Reversibility thinking<br>
• Decentration develops<br>
• Problem solving improves

<br><br>

<b>🧪 Classic Experiments:</b><br>

• Conservation of liquid<br>
• Conservation of number<br>
• Stick length ordering task

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Child says water equal in tall & flat glass  
→ Conservation

<br>

2️⃣ Child arranges sticks small → big  
→ Seriation

<br>

3️⃣ Child groups fruits vs vegetables  
→ Classification

<br>

4️⃣ Child understands 5+3 = 8 & 8−3 = 5  
→ Reversibility

<br>

5️⃣ Child compares weight correctly  
→ Logical reasoning

<br>

6️⃣ Child counts beads correctly after spreading  
→ Number conservation

<br>

7️⃣ Child considers height + width both  
→ Decentration

<br>

8️⃣ Child solves real life math problems  
→ Concrete logic

<br><br>

<b>🎯 CTET Focus:</b><br>

• Conservation tasks<br>
• Logical reasoning examples<br>
• Classification & seriation<br>
• Stage identification questions

`;
}

  else if(type === "formal"){

content = `

<h3>🧠 Formal Operational Stage</h3>

<b>Age:</b> 11+ years

<br><br>

<b>📘 Description:</b><br>

This is the highest stage of cognitive development  
where adolescents develop the ability to think  
abstractly, logically and hypothetically.

They can reason beyond concrete experiences.

<br><br>

<b>🔑 Key Features:</b><br>

• Abstract thinking develops<br>
• Hypothetical reasoning<br>
• Deductive logic<br>
• Scientific thinking<br>
• Problem solving ability<br>
• Future planning<br>
• Metacognition (thinking about thinking)

<br><br>

<b>🧪 Classic Experiment:</b><br>

Pendulum Task → Child tests which factor  
(length, weight, force) affects speed.

Shows scientific hypothesis testing.

<br><br>

<b>📌 Examples (8):</b><br>

1️⃣ Solving algebra equations  
→ Abstract reasoning

<br>

2️⃣ Thinking about democracy & justice  
→ Abstract concepts

<br>

3️⃣ Predicting “What if gravity disappears?”  
→ Hypothetical thinking

<br>

4️⃣ Conducting science experiments  
→ Scientific reasoning

<br>

5️⃣ Planning career goals  
→ Future planning

<br>

6️⃣ Debating moral dilemmas  
→ Logical argument

<br>

7️⃣ Using formulas in physics  
→ Abstract application

<br>

8️⃣ Thinking about own thinking process  
→ Metacognition

<br><br>

<b>🎯 CTET Focus:</b><br>

• Abstract reasoning questions<br>
• Hypothesis examples<br>
• Scientific thinking tasks<br>
• Stage identification MCQ

`;
}

  const popup =
    document.createElement("div");

  popup.className = "stagePopup";

  popup.innerHTML = `
    <div class="stagePopupCard">
      <span class="closePopup">✖</span>
      ${content}
    </div>
  `;

  document.body.appendChild(popup);

  popup.onclick = e=>{
    if(e.target===popup)
      popup.remove();
  };

  popup
    .querySelector(".closePopup")
    .onclick = ()=>popup.remove();

}

window.addEventListener(
  "DOMContentLoaded",
  () => {

    console.log("Theory DOM Ready");

    // Box fetch after DOM ready
    box =
      document.getElementById(
        "theoryBox"
      );

    if (!box) {
      console.error(
        "theoryBox not found!"
      );
      return;
    }

    // Default tab load
    setTimeout(() => {

      loadTabContent(
        "definition"
      );

    }, 50);

  }
);