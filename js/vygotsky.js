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

<div class="feature-en">
Lev Vygotsky’s Sociocultural Theory explains that cognitive development occurs through social interaction within cultural context.
</div>

<div class="feature-bn">
লেভ ভায়গটস্কির মতে জ্ঞানীয় বিকাশ সমাজ ও সংস্কৃতির প্রভাবের মাধ্যমে ঘটে।
</div>

</div>

<div class="feature-card">

<div class="feature-en">
Language is the primary psychological tool that shapes thinking.
</div>

<div class="feature-bn">
ভাষা হলো প্রধান মানসিক উপকরণ যা চিন্তাকে গঠন করে।
</div>

</div>

<div class="feature-card">

<div class="feature-en">
Learning precedes development.
</div>

<div class="feature-bn">
শিক্ষণ বিকাশের পূর্বে ঘটে।
</div>

</div>

<div class="feature-ctet">
CTET Keyword: Social Constructivism
</div>

</div>


<!-- ======================
📚 OTHER NAMES
====================== -->
<div class="card">

<h3>📚 Also Known As (অন্য নাম)</h3>

<div class="feature-card">

<div class="feature-en">
<ul>
<li>Sociocultural Theory</li>
<li>Social Development Theory</li>
<li>Social Constructivism</li>
<li>Cultural-Historical Theory</li>
</ul>
</div>

<div class="feature-bn">
<ul>
<li>সমাজ-সাংস্কৃতিক তত্ত্ব</li>
<li>সামাজিক বিকাশ তত্ত্ব</li>
<li>সামাজিক গঠনবাদ</li>
<li>সাংস্কৃতিক-ঐতিহাসিক তত্ত্ব</li>
</ul>
</div>

</div>

</div>


<!-- ======================
🎯 CORE IDEAS
====================== -->
<div class="card">

<h3>🎯 Core Ideas (মূল ধারণা)</h3>

<div class="feature-card">
<div class="feature-en">Knowledge is constructed socially.</div>
<div class="feature-bn">জ্ঞান সামাজিকভাবে গঠিত হয়।</div>
</div>

<div class="feature-card">
<div class="feature-en">MKO guides learning.</div>
<div class="feature-bn">অধিক জ্ঞানসম্পন্ন ব্যক্তি শেখায়।</div>
</div>

<div class="feature-card">
<div class="feature-en">ZPD is central concept.</div>
<div class="feature-bn">ZPD হলো কেন্দ্রীয় ধারণা।</div>
</div>

<div class="feature-card">
<div class="feature-en">Language shapes thought.</div>
<div class="feature-bn">ভাষা চিন্তাকে গঠন করে।</div>
</div>

</div>


<!-- ======================
⚡ ULTRA SHORT REVISION
====================== -->
<div class="card">

<h3>⚡ Ultra Short Revision</h3>

<div class="feature-card">Vygotsky → Social Constructivist</div>
<div class="feature-card">Learning → Development</div>
<div class="feature-card">Language → Thinking</div>
<div class="feature-card">ZPD → Most Important</div>
<div class="feature-card">MKO → Guide</div>

</div>


<!-- ======================
⚠️ CTET TRAP
====================== -->
<div class="card">

<h3>⚠️ CTET Trap Lines (পরীক্ষায় ফাঁদ প্রশ্ন)</h3>

<!-- ======================
🔥 QUICK CONTRAST LINE (SUPER FAST REVISION)
====================== -->
<div class="feature-card" style="text-align:center; font-weight:600; line-height:1.8;">

<div style="color:#1565c0;">
🔵 Piaget → Development before Learning
</div>

<div class="feature-bn" style="color:#1565c0;">
🔵 পিয়াজে → বিকাশ আগে, পরে শিক্ষণ
</div>

<br>

<div style="color:#1565c0;">
🔵 Piaget → Development precedes learning.
</div>

<div class="feature-bn" style="color:#1565c0;">
🔵 পিয়াজে → বিকাশ শিক্ষণের আগে ঘটে।
</div>

<br>

<div style="font-size:18px;">⇅</div>

<br>

<div style="color:#2e7d32;">
🟢 Vygotsky → Learning before Development
</div>

<div class="feature-bn" style="color:#2e7d32;">
🟢 ভায়গটস্কি → শিক্ষণ আগে, পরে বিকাশ
</div>

<br>

<div style="color:#2e7d32; font-weight:600;">
🟢 Vygotsky → Learning precedes development.
</div>

<br>

<div class="feature-bn" style="color:#2e7d32;">
🟢 ভায়গটস্কি → শিক্ষণ বিকাশের আগে আসে।
</div>

</div>


<!-- ======================
Trap 1: Learning vs Development (Detailed)
====================== -->
<div class="feature-card">

<div style="color:#1565c0; font-weight:600;">
🔵 Piaget: Development occurs before learning.
</div>

<div class="feature-bn" style="color:#1565c0;">
🔵 পিয়াজে: বিকাশ শিক্ষণের আগে ঘটে।
</div>

<br>

<div style="color:#2e7d32; font-weight:600;">
🟢 Vygotsky: Learning leads development.
</div>

<div class="feature-bn" style="color:#2e7d32;">
🟢 ভায়গটস্কি: শিক্ষণ বিকাশকে এগিয়ে নিয়ে যায়।
</div>

<div class="feature-example">
CTET Tip: “Guided learning helps development” → 🟢 Vygotsky
<br>
CTET টিপস: নির্দেশিত শিক্ষণ বিকাশ বাড়ায় → 🟢 ভায়গটস্কি
</div>

</div>



<!-- ======================
Trap 2: Role of Language
====================== -->
<div class="feature-card">

<div style="color:#1565c0; font-weight:600;">
🔵 Piaget: Language is secondary; thought develops first.
</div>

<div class="feature-bn" style="color:#1565c0;">
🔵 পিয়াজে: ভাষা গৌণ; আগে চিন্তা বিকাশ পায়।
</div>

<br>

<div style="color:#2e7d32; font-weight:600;">
🟢 Vygotsky: Language is the primary psychological tool.
</div>

<div class="feature-bn" style="color:#2e7d32;">
🟢 ভায়গটস্কি: ভাষা হলো প্রধান মানসিক উপকরণ।
</div>

<div class="feature-example">
Private speech guides thinking → 🟢 Vygotsky
<br>
ব্যক্তিগত বাক চিন্তাকে পরিচালনা করে → 🟢 ভায়গটস্কি
</div>

</div>



<!-- ======================
Trap 3: Learning Method
====================== -->
<div class="feature-card">

<div style="color:#1565c0; font-weight:600;">
🔵 Piaget: Child learns mainly through independent discovery.
</div>

<div class="feature-bn" style="color:#1565c0;">
🔵 পিয়াজে: শিশু প্রধানত স্ব-অন্বেষণের মাধ্যমে শেখে।
</div>

<br>

<div style="color:#2e7d32; font-weight:600;">
🟢 Vygotsky: Learning occurs through guidance (MKO).
</div>

<div class="feature-bn" style="color:#2e7d32;">
🟢 ভায়গটস্কি: অধিক জ্ঞানসম্পন্ন ব্যক্তির নির্দেশনায় শেখা হয়।
</div>

<div class="feature-example">
“Scaffolding” mentioned → 🟢 Always Vygotsky
<br>
“Scaffolding” শব্দ থাকলে → 🟢 সবসময় ভায়গটস্কি
</div>

</div>

</div>


<!-- ======================
📝 MINI MCQ
====================== -->
<div class="card">

<h3>📝 Mini MCQ Practice</h3>

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
1️⃣ According to Vygotsky, learning mainly depends on:
</div>

<div class="mcq-opt">A. Reflex action</div>
<div class="mcq-opt correct">B. Social interaction</div>
<div class="mcq-opt">C. Conditioning</div>
<div class="mcq-opt">D. Punishment</div>

<div class="mcq-answer" style="display:none;">
✔ Social interaction shapes development.
</div>

</div>

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
2️⃣ Language in Vygotsky’s theory is:
</div>

<div class="mcq-opt">A. Secondary</div>
<div class="mcq-opt correct">B. Primary cognitive tool</div>
<div class="mcq-opt">C. Biological reflex</div>
<div class="mcq-opt">D. Irrelevant</div>

<div class="mcq-answer" style="display:none;">
✔ Language shapes thinking.
</div>

</div>

</div>


<!-- ======================
🧠 MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Memory Trick</h3>

<div class="feature-card">

<b>S-L-Z-M</b><br><br>

S → Social interaction  
L → Language  
Z → ZPD  
M → MKO  

<br><br>

Remember: <i>Social Language Zones Mind</i>

</div>

</div>

`;
}


/* ======================
STAGES
====================== */

if(tab === "zpd"){

box.innerHTML = `

<div class="card">

<h3>📊 Core Concepts (মূল ধারণা)</h3>

<!-- MKO -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
MKO (More Knowledgeable Other)
</div>

<div class="feature-en">
A person who has more knowledge and guides the learner.
</div>

<div class="feature-bn">
যে ব্যক্তি বেশি জ্ঞানসম্পন্ন এবং শিক্ষার্থীকে নির্দেশনা দেয়।
</div>

<div class="feature-example">
<div class="feature-en">
Example: A teacher helping a child solve a math problem.
</div>
<div class="feature-bn">
উদাহরণ: শিক্ষক গণিতের সমস্যা সমাধানে শিশুকে সাহায্য করছে।
</div>
</div>

</div>

<!-- ZPD -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
ZPD (Zone of Proximal Development)
</div>

<div class="feature-en">
The gap between what a child can do alone and what the child can do with help.
</div>

<div class="feature-bn">
শিশু একা যা করতে পারে এবং সাহায্যের মাধ্যমে যা করতে পারে — তার মধ্যবর্তী ব্যবধানই ZPD।
</div>

<div class="feature-example">

<div class="feature-en">
Example: A child cannot solve a puzzle alone, but solves it with teacher’s hint.
</div>

<div class="feature-bn">
উদাহরণ: শিশু একা ধাঁধা সমাধান করতে পারে না, কিন্তু শিক্ষকের ইঙ্গিতে করতে পারে।
</div>

<br>

<div class="feature-en">
ZPD = With help – Without help
</div>

<div class="feature-bn">
ZPD = সাহায্যসহ – সাহায্য ছাড়া
</div>

</div>

<div class="feature-ctet">
Most Asked Concept
</div>

</div>
<!-- ======================
🧭 ZPD VISUAL DIAGRAM
====================== -->
<div class="card">

<h3>🧭 ZPD 3-Layer Visual Model</h3>

<div class="feature-card">

<div style="
padding:10px;
border-radius:12px;
background:linear-gradient(to bottom,#4CAF50,#81C784);
color:white;
margin-bottom:12px;
">

<b>🟢 Level 1: Can Do Alone</b><br>

<div class="feature-en">
Tasks child can perform independently.
</div>

<div class="feature-bn">
যে কাজ শিশু একা একাই করতে পারে।
</div>

</div>


<div style="
padding:15px;
border-radius:12px;
background:linear-gradient(to bottom,#FFC107,#FFD54F);
color:black;
margin-bottom:12px;
">

<b>🟡 Level 2: With Help (ZPD Zone)</b><br>

<div class="feature-en">
Tasks child cannot do alone but can do with guidance.
</div>

<div class="feature-bn">
যে কাজ শিশু একা পারে না, কিন্তু সাহায্যে করতে পারে।
</div>

<br>

<div class="feature-en">
This is the Zone of Proximal Development.
</div>

<div class="feature-bn">
এই অংশটিই ZPD।
</div>

</div>


<div style="
padding:15px;
border-radius:12px;
background:linear-gradient(to bottom,#F44336,#E57373);
color:white;
">

<b>🔴 Level 3: Cannot Do Even With Help</b><br>

<div class="feature-en">
Tasks beyond child’s current developmental level.
</div>

<div class="feature-bn">
শিশুর বর্তমান বিকাশের বাইরে যে কাজ — সাহায্যেও সম্ভব নয়।
</div>

</div>

</div>


<hr>

<div class="feature-card">

<b>🎯 Example (উদাহরণ):</b><br><br>

<div class="feature-en">
• Child can add single-digit numbers alone → 🟢<br>
• Child adds double-digit numbers with teacher hint → 🟡 (ZPD)<br>
• Child solves algebra equation → 🔴
</div>

<br>

<div class="feature-bn">
• শিশু একা এক অংকের যোগ করতে পারে → 🟢<br>
• শিক্ষক সাহায্যে দুই অংকের যোগ করে → 🟡 (ZPD)<br>
• বীজগণিত সমাধান করতে পারে না → 🔴
</div>

</div>


<div class="feature-card">

<b>🧠 Memory Trick:</b><br><br>

Green → Independent<br>
Yellow → ZPD<br>
Red → Beyond Level

<br><br>

সবচেয়ে গুরুত্বপূর্ণ অংশ = 🟡 Yellow Zone

</div>

</div>

<!-- Scaffolding -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Scaffolding
</div>

<div class="feature-en">
Temporary support given by teacher which is gradually removed.
</div>

<div class="feature-bn">
শিক্ষক প্রদত্ত সাময়িক সহায়তা যা ধীরে ধীরে সরিয়ে নেওয়া হয়।
</div>

<div class="feature-example">
<div class="feature-en">
Example: Teacher first gives step-by-step help, then slowly lets the child solve independently.
</div>
<div class="feature-bn">
উদাহরণ: শিক্ষক প্রথমে ধাপে ধাপে সাহায্য করে, পরে ধীরে ধীরে সাহায্য কমিয়ে দেয়।
</div>
</div>

</div>

<!-- Language -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Role of Language
</div>

<div class="feature-en">
Language is the primary tool for cognitive development.
</div>

<div class="feature-bn">
জ্ঞানীয় বিকাশে ভাষা প্রধান ভূমিকা পালন করে।
</div>

<div class="feature-example">

<div class="feature-en">
Stages: Social Speech → Private Speech → Inner Speech
</div>

<div class="feature-bn">
ধাপ: সামাজিক বাক → ব্যক্তিগত বাক → অন্তর্নিহিত চিন্তা
</div>

<br>

<div class="feature-en">
Example: A child talks aloud while solving math (private speech).
</div>

<div class="feature-bn">
উদাহরণ: গণিত সমাধান করার সময় শিশু নিজে নিজে জোরে কথা বলে।
</div>

</div>

</div>

</div>
<!-- ======================
🧠 INTERNALIZATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Internalization (অন্তর্গতীকরণ)
</div>

<div class="feature-en">
Process by which social activities become internal mental activities.
</div>

<div class="feature-bn">
সামাজিক কার্যক্রম ধীরে ধীরে মানসিক চিন্তায় রূপান্তরিত হওয়াকে অন্তর্গতীকরণ বলে।
</div>

<div class="feature-example">
<div class="feature-en">
Example: Child first solves with teacher, later solves alone.
</div>
<div class="feature-bn">
উদাহরণ: শিশু প্রথমে শিক্ষকের সাহায্যে করে, পরে নিজেই করতে পারে।
</div>
</div>

</div>


<!-- ======================
🌍 CULTURAL TOOLS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">6</span>
Cultural Tools (সাংস্কৃতিক উপকরণ)
</div>

<div class="feature-en">
Tools provided by culture that shape thinking (language, symbols, numbers).
</div>

<div class="feature-bn">
সংস্কৃতি প্রদত্ত উপকরণ যা চিন্তাকে প্রভাবিত করে (ভাষা, প্রতীক, সংখ্যা)।
</div>

<div class="feature-example">
<div class="feature-en">
Example: Using number system to learn mathematics.
</div>
<div class="feature-bn">
উদাহরণ: গণিত শেখার জন্য সংখ্যা পদ্ধতি ব্যবহার।
</div>
</div>

</div>


<!-- ======================
👥 GUIDED PARTICIPATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">7</span>
Guided Participation
</div>

<div class="feature-en">
Child learns through active participation with adult guidance.
</div>

<div class="feature-bn">
শিশু প্রাপ্তবয়স্কের নির্দেশনায় সক্রিয় অংশগ্রহণের মাধ্যমে শেখে।
</div>

<div class="feature-example">
<div class="feature-en">
Example: Parent guiding child while cooking.
</div>
<div class="feature-bn">
উদাহরণ: রান্নার সময় অভিভাবক শিশুকে শেখাচ্ছে।
</div>
</div>

</div>


<!-- ======================
🤝 COOPERATIVE LEARNING
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">8</span>
Cooperative Learning
</div>

<div class="feature-en">
Learning through peer interaction.
</div>

<div class="feature-bn">
সহপাঠীদের সাথে মিথস্ক্রিয়ার মাধ্যমে শেখা।
</div>

<div class="feature-example">
<div class="feature-en">
Example: Group discussion improves understanding.
</div>
<div class="feature-bn">
উদাহরণ: দলগত আলোচনা বোঝাপড়া বাড়ায়।
</div>
</div>

</div>


<!-- ======================
⚠️ CTET TRAP LINES
====================== -->
<div class="card">

<h3>⚠️ CTET Examiner Trap Lines</h3>

<div class="feature-card">
❌ Learning depends only on biological maturation.
<br>
✔ Social interaction is primary.
</div>

<div class="feature-card">
❌ Language is secondary.
<br>
✔ Language shapes thought.
</div>

<div class="feature-card">
❌ Child learns independently only.
<br>
✔ Guided learning is essential.
</div>

</div>

<div class="card">

<h3>⚠️ Important Note</h3>

<div class="feature-card">

<div class="feature-en">
Vygotsky did NOT propose fixed developmental stages.
</div>

<div class="feature-bn">
ভায়গটস্কি নির্দিষ্ট বিকাশ ধাপ প্রস্তাব করেননি।
</div>

</div>

<div class="feature-card">

<div class="feature-en">
Development is continuous and socially influenced.
</div>

<div class="feature-bn">
বিকাশ ধাপে ধাপে নির্দিষ্ট নয় — এটি সামাজিকভাবে প্রভাবিত ও ধারাবাহিক।
</div>

</div>

</div>
<!-- ======================
🆚 MINI COMPARISON TABLE (BILINGUAL + COLOR)
====================== -->
<div class="card">

<h3>🆚 Quick Comparison: Piaget vs Vygotsky  
<br><span class="feature-bn">দ্রুত তুলনা: পিয়াজে বনাম ভায়গটস্কি</span></h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>

<th style="color:#1565c0;">
🔵 Piaget<br>
<span class="feature-bn">পিয়াজে</span>
</th>

<th style="color:#2e7d32;">
🟢 Vygotsky<br>
<span class="feature-bn">ভায়গটস্কি</span>
</th>
</tr>

<tr>
<td>
Development Type<br>
<span class="feature-bn">বিকাশের ধরন</span>
</td>

<td style="color:#1565c0;">
Stage-based (4 fixed stages)<br>
<span class="feature-bn">৪টি নির্দিষ্ট ধাপ</span>
</td>

<td style="color:#2e7d32;">
Continuous & socially influenced<br>
<span class="feature-bn">ধারাবাহিক ও সামাজিকভাবে প্রভাবিত</span>
</td>
</tr>

<tr>
<td>
Main Focus<br>
<span class="feature-bn">মূল গুরুত্ব</span>
</td>

<td style="color:#1565c0;">
Individual cognitive construction<br>
<span class="feature-bn">ব্যক্তিগত জ্ঞান নির্মাণ</span>
</td>

<td style="color:#2e7d32;">
Social interaction & culture<br>
<span class="feature-bn">সামাজিক মিথস্ক্রিয়া ও সংস্কৃতি</span>
</td>
</tr>

<tr>
<td>
Role of Language<br>
<span class="feature-bn">ভাষার ভূমিকা</span>
</td>

<td style="color:#1565c0;">
Secondary (thought develops first)<br>
<span class="feature-bn">গৌণ (আগে চিন্তা, পরে ভাষা)</span>
</td>

<td style="color:#2e7d32;">
Primary psychological tool<br>
<span class="feature-bn">চিন্তার প্রধান মানসিক উপকরণ</span>
</td>
</tr>

<tr>
<td>
Learning & Development<br>
<span class="feature-bn">শিক্ষণ ও বিকাশ</span>
</td>

<td style="color:#1565c0;">
Development → Learning<br>
<span class="feature-bn">বিকাশের পর শিক্ষণ</span>
</td>

<td style="color:#2e7d32;">
Learning → Development<br>
<span class="feature-bn">শিক্ষণ বিকাশকে এগিয়ে নিয়ে যায়</span>
</td>
</tr>

<tr>
<td>
Key Concept<br>
<span class="feature-bn">মূল ধারণা</span>
</td>

<td style="color:#1565c0;">
Schema, Assimilation, Accommodation<br>
<span class="feature-bn">স্কিমা, অভিযোজন, সামঞ্জস্য</span>
</td>

<td style="color:#2e7d32;">
ZPD, Scaffolding, MKO<br>
<span class="feature-bn">ZPD, সহায়ক কাঠামো, অধিক জ্ঞানসম্পন্ন ব্যক্তি</span>
</td>
</tr>

<tr>
<td>
Teacher Role<br>
<span class="feature-bn">শিক্ষকের ভূমিকা</span>
</td>

<td style="color:#1565c0;">
Facilitator (minimal guidance)<br>
<span class="feature-bn">সহায়ক (কম নির্দেশনা)</span>
</td>

<td style="color:#2e7d32;">
Guide + Scaffolder (active support)<br>
<span class="feature-bn">নির্দেশক ও সক্রিয় সহায়তাকারী</span>
</td>
</tr>

<tr>
<td>
Type of Constructivism<br>
<span class="feature-bn">গঠনবাদের ধরন</span>
</td>

<td style="color:#1565c0;">
Cognitive Constructivism<br>
<span class="feature-bn">জ্ঞানীয় গঠনবাদ</span>
</td>

<td style="color:#2e7d32;">
Social Constructivism<br>
<span class="feature-bn">সামাজিক গঠনবাদ</span>
</td>
</tr>

<tr>
<td>
Classroom Strategy<br>
<span class="feature-bn">শ্রেণিকক্ষ কৌশল</span>
</td>

<td style="color:#1565c0;">
Discovery learning, activity-based<br>
<span class="feature-bn">আবিষ্কারমূলক শিক্ষণ</span>
</td>

<td style="color:#2e7d32;">
Collaborative learning, peer tutoring<br>
<span class="feature-bn">সহযোগী শিক্ষণ</span>
</td>
</tr>

</table>

</div>

</div>

<div class="feature-card">

<div class="feature-en">
CTET Tip: If question mentions “social interaction” or “guided help” → Think Vygotsky.
</div>

<div class="feature-bn">
CTET টিপস: প্রশ্নে যদি “সামাজিক মিথস্ক্রিয়া” বা “নির্দেশিত সহায়তা” থাকে → ভায়গটস্কি।
</div>

</div>

</div>

`;
}


/* ======================
CRITICISM
====================== */

else if(tab === "criticism"){

box.innerHTML = `

<div class="card">

<h3>⚠️ Criticism of Vygotsky’s Sociocultural Theory</h3>

<!-- ======================
1️⃣ TOO MUCH SOCIAL EMPHASIS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Overemphasis on Social Factors
</div>

<div class="feature-en">
Vygotsky focused heavily on social interaction and underestimated biological maturation.
</div>

<div class="feature-bn">
ভায়গটস্কি সামাজিক মিথস্ক্রিয়ার উপর অতিরিক্ত গুরুত্ব দেন এবং জৈবিক পরিপক্বতাকে কম গুরুত্ব দেন।
</div>

</div>

<!-- ======================
2️⃣ VAGUE CONCEPT OF ZPD
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
ZPD Not Clearly Measurable
</div>

<div class="feature-en">
ZPD is difficult to measure scientifically and lacks clear boundaries.
</div>

<div class="feature-bn">
ZPD বৈজ্ঞানিকভাবে পরিমাপ করা কঠিন এবং এর নির্দিষ্ট সীমা স্পষ্ট নয়।
</div>

<div class="feature-ctet">
Common CTET point
</div>

</div>

<!-- ======================
3️⃣ LACK OF STAGE EXPLANATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
No Clear Developmental Stages
</div>

<div class="feature-en">
Unlike Piaget, Vygotsky did not explain age-wise cognitive stages.
</div>

<div class="feature-bn">
পিয়াজের মতো ভায়গটস্কি বয়সভিত্তিক স্পষ্ট বিকাশ ধাপ দেননি।
</div>

</div>

<!-- ======================
4️⃣ LIMITED RESEARCH EVIDENCE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Limited Experimental Evidence
</div>

<div class="feature-en">
Many ideas were theoretical and lacked strong empirical testing.
</div>

<div class="feature-bn">
তার অনেক ধারণা তাত্ত্বিক ছিল এবং পর্যাপ্ত পরীক্ষামূলক প্রমাণ ছিল না।
</div>

</div>

<!-- ======================
5️⃣ TOO MUCH DEPENDENCE ON LANGUAGE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Overemphasis on Language
</div>

<div class="feature-en">
Theory assumes language is central for all learning, which may not apply in all cases.
</div>

<div class="feature-bn">
তত্ত্বে ভাষাকে সব শিক্ষণের কেন্দ্র হিসেবে ধরা হয়েছে — যা সব ক্ষেত্রে প্রযোজ্য নাও হতে পারে।
</div>

</div>

<!-- ======================
6️⃣ CULTURAL LIMITATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">6</span>
Cultural Specificity
</div>

<div class="feature-en">
Theory may not apply equally across all cultures.
</div>

<div class="feature-bn">
সব সংস্কৃতিতে সমানভাবে প্রযোজ্য নাও হতে পারে।
</div>

</div>

<!-- ======================
7️⃣ PEER LEARNING LIMITATION
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">7</span>
Peer Learning Not Always Effective
</div>

<div class="feature-en">
Sometimes peers may provide incorrect guidance.
</div>

<div class="feature-bn">
সহপাঠীরা অনেক সময় ভুল নির্দেশনা দিতে পারে।
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

• ZPD difficult to measure<br>
• Overemphasis on social interaction<br>
• Lack of stage explanation<br>
• Limited experimental evidence

</div>

</div>

<!-- ======================
MAJOR COUNTER VIEW
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">🔵</span>
Contrast with Piaget
</div>

<div class="feature-en">
Piaget emphasized biological maturation and stage development.
</div>

<div class="feature-bn">
পিয়াজে জৈবিক পরিপক্বতা ও ধাপভিত্তিক বিকাশে গুরুত্ব দেন।
</div>

</div>

<!-- ======================
🆚 COLOR-CODED COMPARISON TABLE
====================== -->
<div class="card">

<h3>🆚 Comparison-Based Criticism (পিয়াজে বনাম ভায়গটস্কি)</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>
<th style="color:#2e7d32;">
🟢 Vygotsky (Criticism)<br>
<span class="feature-bn">ভায়গটস্কির সমালোচনা</span>
</th>
<th style="color:#1565c0;">
🔵 Piaget (Contrast)<br>
<span class="feature-bn">পিয়াজের অবস্থান</span>
</th>
</tr>

<tr>
<td>Biological Factor<br><span class="feature-bn">জৈবিক উপাদান</span></td>
<td style="color:#2e7d32;">
Overemphasis on social interaction<br>
<span class="feature-bn">সামাজিক মিথস্ক্রিয়ায় অতিরিক্ত গুরুত্ব</span>
</td>
<td style="color:#1565c0;">
Emphasized biological maturation<br>
<span class="feature-bn">জৈবিক পরিপক্বতায় গুরুত্ব দেন</span>
</td>
</tr>

<tr>
<td>Stage Theory<br><span class="feature-bn">ধাপ তত্ত্ব</span></td>
<td style="color:#2e7d32;">
No fixed developmental stages<br>
<span class="feature-bn">নির্দিষ্ট ধাপ নেই</span>
</td>
<td style="color:#1565c0;">
Proposed fixed stages<br>
<span class="feature-bn">নির্দিষ্ট ধাপ প্রস্তাব করেন</span>
</td>
</tr>

<tr>
<td>Measurement<br><span class="feature-bn">পরিমাপযোগ্যতা</span></td>
<td style="color:#2e7d32;">
ZPD difficult to measure<br>
<span class="feature-bn">ZPD পরিমাপ কঠিন</span>
</td>
<td style="color:#1565c0;">
Structured experiments<br>
<span class="feature-bn">গঠিত পরীক্ষামূলক পদ্ধতি</span>
</td>
</tr>

<tr>
<td>Language Role<br><span class="feature-bn">ভাষার ভূমিকা</span></td>
<td style="color:#2e7d32;">
Overdependence on language<br>
<span class="feature-bn">ভাষায় অতিরিক্ত নির্ভরতা</span>
</td>
<td style="color:#1565c0;">
Language secondary<br>
<span class="feature-bn">ভাষা গৌণ</span>
</td>
</tr>

<tr>
<td>Research Evidence<br><span class="feature-bn">গবেষণা প্রমাণ</span></td>
<td style="color:#2e7d32;">
Limited empirical testing<br>
<span class="feature-bn">পরীক্ষামূলক প্রমাণ সীমিত</span>
</td>
<td style="color:#1565c0;">
Detailed observations<br>
<span class="feature-bn">বিস্তারিত পর্যবেক্ষণ</span>
</td>
</tr>

</table>

</div>

</div>



<!-- ======================
⚡ ULTRA-SHORT 6-LINE CRASH REVISION
====================== -->
<div class="card">

<h3>⚡ 6-Line Crash Revision (দ্রুত পুনরাবৃত্তি)</h3>

<div class="feature-card">
🟢 <b>Vygotsky</b> → Social interaction is central  
<br>
<span class="feature-bn">🟢 <b>ভায়গটস্কি</b> → সামাজিক মিথস্ক্রিয়া প্রধান</span>
</div>

<div class="feature-card">
🔵 <b>Piaget</b> → Biological maturation is central  
<br>
<span class="feature-bn">🔵 <b>পিয়াজে</b> → জৈবিক পরিপক্বতা প্রধান</span>
</div>

<div class="feature-card">
🟢 <b>Vygotsky</b> → No fixed developmental stages  
<br>
<span class="feature-bn">🟢 <b>ভায়গটস্কি</b> → নির্দিষ্ট বিকাশ ধাপ নেই</span>
</div>

<div class="feature-card">
🔵 <b>Piaget</b> → Fixed stage theory  
<br>
<span class="feature-bn">🔵 <b>পিয়াজে</b> → ধাপভিত্তিক তত্ত্ব</span>
</div>

<div class="feature-card">
🟢 <b>Vygotsky</b> → ZPD is central concept  
<br>
<span class="feature-bn">🟢 <b>ভায়গটস্কি</b> → ZPD কেন্দ্রীয় ধারণা</span>
</div>

<div class="feature-card">
🔵 <b>Piaget</b> → Conservation & stages are central  
<br>
<span class="feature-bn">🔵 <b>পিয়াজে</b> → সংরক্ষণ ও ধাপ গুরুত্বপূর্ণ</span>
</div>

</div>

<div class="feature-card">

<div class="feature-en">
CTET Tip: If question compares social vs biological emphasis → Think Vygotsky vs Piaget contrast.
</div>

<div class="feature-bn">
CTET টিপস: সামাজিক বনাম জৈবিক গুরুত্ব তুলনা করলে → ভায়গটস্কি ও পিয়াজের পার্থক্য ভাবুন।
</div>

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

<b>S-Z-L-L-C-P</b><br><br>

S → Social overemphasis<br>
Z → ZPD unclear<br>
L → Lack of stages<br>
L → Limited research<br>
C → Cultural limitation<br>
P → Peer limitation

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

<h3>🆚 Piaget vs Other Theories (CTET Comparison)
<br>
<span class="feature-bn">
পিয়াজে বনাম অন্যান্য তত্ত্ব (CTET তুলনা)
</span>
</h3>

<div class="feature-card" style="font-weight:600; line-height:1.9;">

<!-- Core Identity -->
<div style="display:flex; justify-content:space-between;">
<span style="color:#1565c0;">🔵 Piaget</span>
<span>Cognitive Constructivism</span>
</div>

<div style="display:flex; justify-content:space-between;">
<span class="feature-bn" style="color:#1565c0;">পিয়াজে</span>
<span class="feature-bn">জ্ঞানীয় গঠনবাদ</span>
</div>

<br>

<div style="display:flex; justify-content:space-between;">
<span style="color:#2e7d32;">🟢 Vygotsky</span>
<span>Social Constructivism</span>
</div>

<div style="display:flex; justify-content:space-between;">
<span class="feature-bn" style="color:#2e7d32;">ভায়গটস্কি</span>
<span class="feature-bn">সামাজিক গঠনবাদ</span>
</div>

<hr style="margin:10px 0;">

<!-- Quick Link Strip -->
<div style="display:flex; justify-content:space-between;">
<span>ZPD</span>
<span>→ Vygotsky</span>
</div>

<div style="display:flex; justify-content:space-between;">
<span>Reinforcement</span>
<span>→ Skinner</span>
</div>

<div style="display:flex; justify-content:space-between;">
<span>Moral dilemma</span>
<span>→ Kohlberg</span>
</div>

<div class="feature-bn" style="margin-top:6px;">
ZPD → ভায়গটস্কি | Reinforcement → স্কিনার | Moral dilemma → কোলবার্গ
</div>

</div>

</div>


<!-- ======================
PIAGET vs VYGOTSKY
====================== -->
<div class="card">

<h3>🔵 Piaget vs 🟢 Vygotsky</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>
<th style="color:#1565c0;">🔵 Piaget<br><span class="feature-bn">পিয়াজে</span></th>
<th style="color:#2e7d32;">🟢 Vygotsky<br><span class="feature-bn">ভায়গটস্কি</span></th>
</tr>

<tr>
<td>Learning Type<br><span class="feature-bn">শিক্ষণ পদ্ধতি</span></td>
<td style="color:#1565c0;">Self discovery<br><span class="feature-bn">স্ব-আবিষ্কার</span></td>
<td style="color:#2e7d32;">Social interaction<br><span class="feature-bn">সামাজিক মিথস্ক্রিয়া</span></td>
</tr>

<tr>
<td>Development<br><span class="feature-bn">বিকাশ</span></td>
<td style="color:#1565c0;">Stage based<br><span class="feature-bn">ধাপভিত্তিক</span></td>
<td style="color:#2e7d32;">Continuous<br><span class="feature-bn">ধারাবাহিক</span></td>
</tr>

<tr>
<td>Language Role<br><span class="feature-bn">ভাষার ভূমিকা</span></td>
<td style="color:#1565c0;">Secondary<br><span class="feature-bn">গৌণ</span></td>
<td style="color:#2e7d32;">Primary tool of thinking<br><span class="feature-bn">চিন্তার প্রধান হাতিয়ার</span></td>
</tr>

<tr>
<td>Key Concept<br><span class="feature-bn">মূল ধারণা</span></td>
<td style="color:#1565c0;">Schema & Stages<br><span class="feature-bn">স্কিমা ও ধাপ</span></td>
<td style="color:#2e7d32;">ZPD & Scaffolding<br><span class="feature-bn">ZPD ও সহায়ক কাঠামো</span></td>
</tr>

<tr>
<td>Teacher Role<br><span class="feature-bn">শিক্ষকের ভূমিকা</span></td>
<td style="color:#1565c0;">Facilitator<br><span class="feature-bn">সহায়ক</span></td>
<td style="color:#2e7d32;">Guide + Support<br><span class="feature-bn">নির্দেশক ও সহায়তাকারী</span></td>
</tr>

</table>

</div>

<div class="feature-ctet">
CTET Most Asked Comparison
</div>

</div>


<!-- ======================
PIAGET vs SKINNER (TRAP FOCUS)
====================== -->
<div class="card">

<h3>🔵 Piaget vs Skinner</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>🔵 Piaget</th>
<th>Skinner</th>
</tr>

<tr>
<td>Theory Type</td>
<td style="color:#1565c0;">Cognitive</td>
<td>Behaviorism</td>
</tr>

<tr>
<td>Learning</td>
<td style="color:#1565c0;">Mental construction</td>
<td>Conditioning</td>
</tr>

<tr>
<td>Method</td>
<td style="color:#1565c0;">Discovery</td>
<td>Reinforcement</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Trap: Reinforcement ≠ Piaget
</div>

</div>


<!-- ======================
ULTRA QUICK RECALL STRIP
====================== -->
<div class="card">

<h3>⚡ Ultra Quick Recall</h3>

<div class="feature-card">

🔵 Piaget → Stage & Schema  
<br>
🟢 Vygotsky → Social & ZPD  
<br>
Skinner → Reinforcement  
<br>
Bandura → Modeling (Bobo Doll)  
<br>
Kohlberg → Moral stages  
<br>
Bruner → Spiral curriculum  

</div>

</div>


<!-- ======================
MEGA MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Mega Memory Trick</h3>

<div class="feature-card">

<b>P-V-B-K-S-B</b><br><br>

P → Piaget → Cognitive  
<br>
V → Vygotsky → Social  
<br>
B → Bruner → Spiral  
<br>
K → Kohlberg → Moral  
<br>
S → Skinner → Reinforcement  
<br>
B → Bandura → Modeling  

</div>

</div>
<!-- ======================
📝 COMPARISON MCQ SECTION
====================== -->
<div class="card">

<h3>📝 Comparison Based MCQ (CTET Level)</h3>

<!-- MCQ 1 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
1. “Learning leads development” — This idea belongs to:
<br>
<span class="feature-bn">
“শিক্ষণ বিকাশকে এগিয়ে নিয়ে যায়” — কার ধারণা?
</span>
</div>

<div class="mcq-opt">A. Piaget</div>
<div class="mcq-opt correct">B. Vygotsky</div>
<div class="mcq-opt">C. Skinner</div>
<div class="mcq-opt">D. Bruner</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Vygotsky — Social constructivism.
</div>
</div>


<!-- MCQ 2 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
2. Reinforcement theory is associated with:
<br>
<span class="feature-bn">
Reinforcement তত্ত্ব কার সাথে যুক্ত?
</span>
</div>

<div class="mcq-opt">A. Piaget</div>
<div class="mcq-opt correct">B. Skinner</div>
<div class="mcq-opt">C. Vygotsky</div>
<div class="mcq-opt">D. Gardner</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Skinner — Behaviorism.
</div>
</div>


<!-- MCQ 3 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
3. ZPD is the key concept of:
<br>
<span class="feature-bn">
ZPD কার মূল ধারণা?
</span>
</div>

<div class="mcq-opt">A. Piaget</div>
<div class="mcq-opt correct">B. Vygotsky</div>
<div class="mcq-opt">C. Bandura</div>
<div class="mcq-opt">D. Dewey</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Vygotsky.
</div>
</div>


<!-- MCQ 4 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
4. “Bobo Doll Experiment” is linked with:
<br>
<span class="feature-bn">
Bobo Doll পরীক্ষা কার সাথে যুক্ত?
</span>
</div>

<div class="mcq-opt">A. Skinner</div>
<div class="mcq-opt correct">B. Bandura</div>
<div class="mcq-opt">C. Piaget</div>
<div class="mcq-opt">D. Erikson</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Bandura — Observational learning.
</div>
</div>


<!-- MCQ 5 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
5. Stage-based cognitive development theory belongs to:
<br>
<span class="feature-bn">
ধাপভিত্তিক জ্ঞানীয় বিকাশ তত্ত্ব কার?
</span>
</div>

<div class="mcq-opt correct">A. Piaget</div>
<div class="mcq-opt">B. Vygotsky</div>
<div class="mcq-opt">C. Gardner</div>
<div class="mcq-opt">D. Skinner</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Piaget.
</div>
</div>


<!-- MCQ 6 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
6. Spiral Curriculum is associated with:
<br>
<span class="feature-bn">
Spiral Curriculum কার সাথে যুক্ত?
</span>
</div>

<div class="mcq-opt">A. Piaget</div>
<div class="mcq-opt correct">B. Bruner</div>
<div class="mcq-opt">C. Dewey</div>
<div class="mcq-opt">D. Montessori</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Bruner.
</div>
</div>


<!-- MCQ 7 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
7. Moral dilemma questions belong to:
<br>
<span class="feature-bn">
নৈতিক দ্বন্দ্ব প্রশ্ন কার তত্ত্বে পাওয়া যায়?
</span>
</div>

<div class="mcq-opt">A. Piaget</div>
<div class="mcq-opt correct">B. Kohlberg</div>
<div class="mcq-opt">C. Vygotsky</div>
<div class="mcq-opt">D. Bandura</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Kohlberg — Moral development.
</div>
</div>


<!-- MCQ 8 -->
<div class="mcq-box" onclick="toggleMCQ(this)">
<div class="mcq-q">
8. “Prepared environment” is related to:
<br>
<span class="feature-bn">
Prepared environment কার ধারণা?
</span>
</div>

<div class="mcq-opt">A. Dewey</div>
<div class="mcq-opt correct">B. Montessori</div>
<div class="mcq-opt">C. Piaget</div>
<div class="mcq-opt">D. Erikson</div>

<div class="mcq-answer" style="display:none;">
✔ Correct: Montessori.
</div>
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

<h3>👩‍🏫 Teaching Implications of Vygotsky’s Theory  
<br><span class="feature-bn">ভায়গটস্কির তত্ত্বের শিক্ষণগত প্রয়োগ</span></h3>

<!-- CORE IDEA -->
<div class="feature-card">
<b>📘 Core Idea (মূল ধারণা)</b><br>
Learning occurs through social interaction and guided support.
<br>
শিক্ষণ সামাজিক মিথস্ক্রিয়া ও নির্দেশিত সহায়তার মাধ্যমে ঘটে।
<br><br>
<b>Example:</b> Teacher explains a math problem through discussion instead of giving direct answer.
<br>
<span class="feature-bn">উদাহরণ: শিক্ষক সরাসরি উত্তর না দিয়ে আলোচনা করে বোঝান।</span>
<br><br>
<b>CTET Keyword:</b> ZPD, Scaffolding, MKO
</div>

<!-- 1 ZPD -->
<div class="feature-card">
<b>1. Teaching within ZPD</b><br>
Teach slightly above the child’s current level with support.
<br>
বর্তমান স্তরের একটু উপরে নির্দেশনার মাধ্যমে শেখাতে হবে।
<br><br>
<b>Example:</b> Child solves 2-digit addition; teacher helps with 3-digit addition.
<br>
<span class="feature-bn">উদাহরণ: দুই অংকের যোগ পারে, শিক্ষক তিন অংকের যোগে সহায়তা দেন।</span>
</div>

<!-- 2 SCAFFOLDING -->
<div class="feature-card">
<b>2. Scaffolding Strategy</b><br>
Give hints, prompts, modeling and gradually withdraw help.
<br>
ইঙ্গিত, সহায়তা ও মডেলিং দিয়ে ধীরে ধীরে সাহায্য কমাতে হবে।
<br><br>
<b>Example:</b> First teacher demonstrates, then gives hint, finally child solves alone.
<br>
<span class="feature-bn">উদাহরণ: প্রথমে শিক্ষক দেখান, পরে ইঙ্গিত দেন, শেষে শিশু একা সমাধান করে।</span>
</div>

<!-- 3 MKO -->
<div class="feature-card">
<b>3. More Knowledgeable Other (MKO)</b><br>
Teacher, peer, parent or even digital tools can act as MKO.
<br>
শিক্ষক, সহপাঠী বা অভিভাবক MKO হতে পারে।
<br><br>
<b>Example:</b> A senior student guides a junior in solving a science experiment.
<br>
<span class="feature-bn">উদাহরণ: অগ্রসর ছাত্র জুনিয়রকে বিজ্ঞান পরীক্ষায় সাহায্য করে।</span>
</div>

<!-- 4 COLLABORATIVE -->
<div class="feature-card">
<b>4. Cooperative / Group Learning</b><br>
Learning improves through peer discussion and teamwork.
<br>
দলগত আলোচনা শেখাকে উন্নত করে।
<br><br>
<b>Example:</b> Group project discussion in classroom.
<br>
<span class="feature-bn">উদাহরণ: শ্রেণিকক্ষে দলগত প্রকল্প আলোচনা।</span>
</div>

<!-- 5 LANGUAGE -->
<div class="feature-card">
<b>5. Role of Language</b><br>
Encourage dialogue, questioning and private speech.
<br>
আলোচনা, প্রশ্ন ও স্বকথন উৎসাহিত করতে হবে।
<br><br>
<b>Example:</b> Child talks aloud while solving puzzle.
<br>
<span class="feature-bn">উদাহরণ: ধাঁধা সমাধান করতে করতে শিশু নিজে নিজে কথা বলে।</span>
</div>

<!-- 6 SELF REGULATION -->
<div class="feature-card">
<b>6. Self-Regulation</b><br>
Private speech helps children control thinking and behavior.
<br>
স্বকথন চিন্তা ও আচরণ নিয়ন্ত্রণে সাহায্য করে।
<br><br>
<b>Example:</b> Child says, “First I write, then I check.”
<br>
<span class="feature-bn">উদাহরণ: শিশু বলে, “আগে লিখব, পরে পরীক্ষা করব।”</span>
</div>

<!-- 7 CULTURAL -->
<div class="feature-card">
<b>7. Cultural Relevance</b><br>
Teaching must consider cultural tools and background.
<br>
শিক্ষণ সংস্কৃতি ও প্রেক্ষাপট অনুযায়ী হওয়া উচিত।
<br><br>
<b>Example:</b> Using local festivals as teaching examples.
<br>
<span class="feature-bn">উদাহরণ: স্থানীয় উৎসবের উদাহরণ দিয়ে পাঠদান।</span>
</div>

<!-- 8 GUIDED DISCOVERY -->
<div class="feature-card">
<b>8. Guided Discovery</b><br>
Learning should be guided, not completely independent.
<br>
শেখা নির্দেশিত হওয়া উচিত — সম্পূর্ণ একা নয়।
<br><br>
<b>Example:</b> Teacher asks leading questions instead of giving answer.
<br>
<span class="feature-bn">উদাহরণ: সরাসরি উত্তর না দিয়ে শিক্ষক প্রশ্নের মাধ্যমে পথ দেখান।</span>
</div>

<!-- 9 ACTIVE -->
<div class="feature-card">
<b>9. Active Social Participation</b><br>
Students learn through interaction in real social tasks.
<br>
বাস্তব সামাজিক কাজে অংশ নিয়ে শেখা হয়।
<br><br>
<b>Example:</b> Role-play activity in classroom.
<br>
<span class="feature-bn">উদাহরণ: শ্রেণিকক্ষে ভূমিকা পালন কার্যকলাপ।</span>
</div>

<!-- 10 DYNAMIC ASSESSMENT -->
<div class="feature-card">
<b>10. Dynamic Assessment</b><br>
Assess learning through interaction and guided tasks.
<br>
নির্দেশিত কার্যকলাপের মাধ্যমে মূল্যায়ন করা উচিত।
<br><br>
<b>Example:</b> Teacher checks how much help child needs to solve.
<br>
<span class="feature-bn">উদাহরণ: শিক্ষক দেখেন কতটা সহায়তায় শিশু সমাধান করতে পারে।</span>
</div>

<!-- CTET TRAP -->
<div class="feature-card">

<b>⚠️ CTET Examiner Trap Lines</b><br><br>

• Child learns independently only ❌<br>
• Language has minor role ❌<br>
• Development must happen before learning ❌<br><br>

✔ Correct → Learning precedes development  
<br>
✔ Guided interaction is essential  
<br>
✔ Language shapes thought

</div>

<!-- MCQ -->
<div class="feature-card">

<b>📝 CTET Practice MCQ</b><br><br>

According to Vygotsky, effective teaching should:<br><br>

A. Wait for biological maturation<br>
B. Encourage rote memorization<br>
C. Focus on guided interaction within ZPD ✔<br>
D. Avoid peer discussion

</div>
<!-- ======================
🆚 TEACHING COMPARISON (EXAM TRAP FOCUSED)
====================== -->
<div class="card">

<h3>🆚 Teaching Comparison: Piaget vs Vygotsky  
<br><span class="feature-bn">শিক্ষণ তুলনা: পিয়াজে বনাম ভায়গটস্কি</span></h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Exam Focus Area<br><span class="feature-bn">পরীক্ষার ভিত্তি</span></th>

<th style="color:#1565c0;">
🔵 Piaget<br>
<span class="feature-bn">পিয়াজে</span>
</th>

<th style="color:#2e7d32;">
🟢 Vygotsky<br>
<span class="feature-bn">ভায়গটস্কি</span>
</th>
</tr>

<tr>
<td>
Learning Nature<br>
<span class="feature-bn">শেখার ধরন</span>
</td>

<td style="color:#1565c0;">
Self-discovery<br>
<span class="feature-bn">স্ব-আবিষ্কারমূলক</span>
</td>

<td style="color:#2e7d32;">
Guided interaction<br>
<span class="feature-bn">নির্দেশিত মিথস্ক্রিয়া</span>
</td>
</tr>

<tr>
<td>
Learning & Development<br>
<span class="feature-bn">শিক্ষণ ও বিকাশ</span>
</td>

<td style="color:#1565c0;">
Development → Learning<br>
<span class="feature-bn">বিকাশের পর শিক্ষণ</span>
</td>

<td style="color:#2e7d32;">
Learning → Development<br>
<span class="feature-bn">শিক্ষণ বিকাশকে এগিয়ে নিয়ে যায়</span>
</td>
</tr>

<tr>
<td>
Teacher Role<br>
<span class="feature-bn">শিক্ষকের ভূমিকা</span>
</td>

<td style="color:#1565c0;">
Facilitator (minimal help)<br>
<span class="feature-bn">সহায়ক (কম নির্দেশনা)</span>
</td>

<td style="color:#2e7d32;">
Guide + Scaffolder (active help)<br>
<span class="feature-bn">নির্দেশক ও সহায়তাকারী</span>
</td>
</tr>

<tr>
<td>
Classroom Strategy<br>
<span class="feature-bn">শ্রেণিকক্ষ কৌশল</span>
</td>

<td style="color:#1565c0;">
Discovery learning, activity-based<br>
<span class="feature-bn">আবিষ্কারমূলক কার্যকলাপ</span>
</td>

<td style="color:#2e7d32;">
Collaborative learning, peer tutoring<br>
<span class="feature-bn">সহযোগী ও দলগত শিক্ষণ</span>
</td>
</tr>

<tr>
<td>
Role of Language<br>
<span class="feature-bn">ভাষার ভূমিকা</span>
</td>

<td style="color:#1565c0;">
Secondary<br>
<span class="feature-bn">গৌণ</span>
</td>

<td style="color:#2e7d32;">
Primary psychological tool<br>
<span class="feature-bn">চিন্তার প্রধান উপকরণ</span>
</td>
</tr>

<tr>
<td>
Assessment Type<br>
<span class="feature-bn">মূল্যায়ন পদ্ধতি</span>
</td>

<td style="color:#1565c0;">
Stage-based evaluation<br>
<span class="feature-bn">ধাপভিত্তিক মূল্যায়ন</span>
</td>

<td style="color:#2e7d32;">
Dynamic assessment (with help)<br>
<span class="feature-bn">সহায়ক ভিত্তিক মূল্যায়ন</span>
</td>
</tr>

<tr>
<td>
Exam Trap Keywords<br>
<span class="feature-bn">ফাঁদ শব্দ</span>
</td>

<td style="color:#1565c0;">
Schema, Assimilation, Discovery<br>
<span class="feature-bn">স্কিমা, অভিযোজন</span>
</td>

<td style="color:#2e7d32;">
ZPD, Scaffolding, MKO<br>
<span class="feature-bn">ZPD, সহায়ক কাঠামো</span>
</td>
</tr>

</table>

</div>

<div class="feature-card">

<b>🎯 CTET Super Trap Rule:</b><br><br>

🔵 If question says → “Wait for maturity” → Piaget  
<br>
🟢 If question says → “Provide guided support” → Vygotsky  
<br>
🔵 “Independent discovery” → Piaget  
<br>
🟢 “Collaborative learning” → Vygotsky  

<br>
<span class="feature-bn">
যদি প্রশ্নে পরিপক্বতার অপেক্ষা বলা হয় → পিয়াজে  
<br>
যদি নির্দেশিত সহায়তা বলা হয় → ভায়গটস্কি
</span>

</div>

</div>

<!-- MEMORY -->
<div class="feature-card">

<b>🧠 Memory Trick</b><br><br>

Z-S-M-L-C-R<br><br>

Z → ZPD<br>
S → Scaffolding<br>
M → MKO<br>
L → Language<br>
C → Collaboration<br>
R → Regulation (Self-control)<br><br>

Line:<br>
<i>ZPD Supports Meaningful Learning through Collaboration & Regulation</i>

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

window.goBack =
function(){
  history.back();
};

/* ======================
vygotsky MCQ PAGE GO
====================== */



window.goVygotsky = function(event){

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
      "vygotsky-mcq.html";
  },180);

};



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