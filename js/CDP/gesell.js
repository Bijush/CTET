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

function saveTabProgress(tab){

  const page =
    location.pathname.split("/").pop();

  const scrollTop =
    window.scrollY;

  const windowHeight =
    window.innerHeight;

  const docHeight =
    document.body.scrollHeight;

  // 🔥 Safe scroll calculation
  const totalScrollable =
    docHeight - windowHeight;

  let percent = 100;

  if(totalScrollable > 0){

    percent = Math.min(
      100,
      Math.round(
        (scrollTop / totalScrollable) * 100
      )
    );
  }

  // 🔥 Load previous data
  let data =
    JSON.parse(
      localStorage.getItem("tabProgress")
    ) || {};

  if(!data[page]){
    data[page] = {};
  }

  // 🔥 Update only if greater progress
  const oldPercent =
    data[page][tab] || 0;

  if(percent > oldPercent){

    data[page][tab] = percent;

    localStorage.setItem(
      "tabProgress",
      JSON.stringify(data)
    );
  }

}


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
Gesell’s Maturation Theory states that development is guided by heredity and biological growth.
</div>
<div class="feature-bn">
গেসেলের পরিপক্বতা তত্ত্ব অনুযায়ী বিকাশ মূলত বংশগতি ও জৈবিক বৃদ্ধির মাধ্যমে নির্ধারিত হয়।
</div>
</div>

<div class="feature-card">
<div class="feature-en">
Development follows a fixed sequence.
</div>
<div class="feature-bn">
বিকাশ একটি নির্দিষ্ট ক্রম অনুসরণ করে।
</div>
</div>

<div class="feature-card">
<div class="feature-en">
Environment has limited role.
</div>
<div class="feature-bn">
পরিবেশের ভূমিকা সীমিত।
</div>
</div>

<div class="feature-ctet">
CTET Keyword: Maturation + Heredity + Biological Growth
</div>

</div>


<!-- ======================
🎯 CORE IDEAS
====================== -->
<div class="card">

<h3>🎯 Core Ideas</h3>

<div class="feature-card">
<div class="feature-en">
Growth happens naturally when the child is ready.
</div>
<div class="feature-bn">
শিশু প্রস্তুত হলে স্বাভাবিকভাবে বিকাশ ঘটে।
</div>
</div>

<div class="feature-card">
<div class="feature-en">
Motor development follows head-to-toe direction.
</div>
<div class="feature-bn">
মোটর বিকাশ মাথা থেকে পায়ের দিকে (Cephalocaudal principle) হয়।
</div>
</div>

<div class="feature-card">
<div class="feature-en">
Development cannot be forced by training.
</div>
<div class="feature-bn">
প্রশিক্ষণ দিয়ে বিকাশ জোর করে ঘটানো যায় না।
</div>
</div>

</div>


<!-- ======================
📊 Important Principles
====================== -->
<div class="card">

<h3>📊 Key Principles</h3>

<div class="feature-card">
✔ Cephalocaudal (Head to Toe)<br>
<span class="feature-bn">মাথা থেকে পা পর্যন্ত বিকাশ</span>
</div>

<div class="feature-card">
✔ Proximodistal (Center to Outward)<br>
<span class="feature-bn">দেহের কেন্দ্র থেকে বাইরের দিকে বিকাশ</span>
</div>

</div>


<!-- ======================
⚠️ CTET TRAP
====================== -->
<div class="card">

<h3>⚠️ CTET Trap Lines</h3>

<div class="feature-card">
❌ Development depends mainly on environment<br>
<span class="feature-bn">ভুল: Gesell জৈবিক কারণকে বেশি গুরুত্ব দেন।</span><br>
✔ Heredity based development
</div>

<div class="feature-card">
❌ Learning can change development sequence<br>
<span class="feature-bn">ভুল: ক্রম পরিবর্তন করা যায় না।</span><br>
✔ Fixed developmental sequence
</div>

</div>

`;

}


/* ======================
STAGES
====================== */

else if(tab === "stage"){

box.innerHTML = `

<!-- ======================
STAGE DIAGRAM CONTAINER
====================== -->
<div class="card">
<h3>📊 Maturation Visual Diagram</h3>
<div id="diagramContainer" 
     style="margin-top:15px; margin-bottom:5px;">
</div>
</div>


<!-- INTRO -->
<div class="card">
<h3>Arnold Gesell – Maturation Theory</h3>

<div class="feature-card">

Development is controlled mainly by heredity.
<br>
<span class="feature-bn">
বিকাশ প্রধানত বংশগতি দ্বারা নিয়ন্ত্রিত হয়।
</span>
<br><br>

Growth follows a fixed and predictable sequence.
<br>
<span class="feature-bn">
বিকাশ একটি নির্দিষ্ট ও পূর্বানুমানযোগ্য ক্রম অনুসরণ করে।
</span>
<br><br>

Training cannot change developmental order.
<br>
<span class="feature-bn">
প্রশিক্ষণ দিয়ে বিকাশের ক্রম পরিবর্তন করা যায় না।
</span>

</div>

<div class="feature-ctet">
CTET Keywords: Maturation • Heredity • Readiness • Biological Growth
<br>
<span class="feature-bn">
এই শব্দগুলি থাকলে Gesell মনে করতে হবে।
</span>
</div>

</div>



<!-- ======================
MAIN PRINCIPLES
====================== -->
<div class="card">
<h3>🧠 Key Principles</h3>

<div class="feature-card">
✔ Cephalocaudal Principle (Head → Toe)<br>
<span class="feature-bn">
মাথা থেকে পায়ের দিকে বিকাশ
</span>
</div>

<div class="feature-card">
✔ Proximodistal Principle (Center → Outward)<br>
<span class="feature-bn">
দেহের কেন্দ্র থেকে বাইরের দিকে বিকাশ
</span>
</div>

<div class="feature-card">
✔ Development depends on readiness.<br>
<span class="feature-bn">
শিশু প্রস্তুত হলে তবেই শেখা সম্ভব।
</span>
</div>

</div>



<!-- ======================
DEVELOPMENT SEQUENCE
====================== -->
<div class="card">
<h3>👶 Motor Development Sequence</h3>

<div class="feature-card">
1️⃣ Lifts head  
<br><span class="feature-bn">মাথা তোলে</span>
<br><br>

2️⃣ Sits  
<br><span class="feature-bn">বসে</span>
<br><br>

3️⃣ Crawls  
<br><span class="feature-bn">হামাগুড়ি দেয়</span>
<br><br>

4️⃣ Stands  
<br><span class="feature-bn">দাঁড়ায়</span>
<br><br>

5️⃣ Walks  
<br><span class="feature-bn">হাঁটে</span>
</div>

</div>



<!-- ======================
CTET CASE BASED
====================== -->
<div class="card">

<h3>📌 CTET Case-Based Clues</h3>

<div class="feature-card">

“A 2-year-old cannot write even after training.”  
<br>
👉 According to Gesell: Child is not biologically ready.
<br>
<span class="feature-bn">
২ বছরের শিশু লিখতে পারছে না — কারণ সে এখনও প্রস্তুত নয়।
</span>
<br><br>

“A teacher forces early reading.”  
<br>
👉 Wrong as per maturation theory.
<br>
<span class="feature-bn">
জোর করে আগে পড়ানো ভুল — কারণ প্রস্তুতি দরকার।
</span>

</div>

</div>



<!-- ======================
CTET TRAP
====================== -->
<div class="card">

<h3>⚠️ CTET Trap Lines</h3>

<div class="feature-card">
❌ Development mainly depends on environment  
<br>
✔ Gesell focuses on heredity
<br>
<span class="feature-bn">
গেসেল পরিবেশ নয়, বংশগতিকে বেশি গুরুত্ব দেন।
</span>
<br><br>

❌ Learning can change developmental sequence  
<br>
✔ Sequence is fixed
<br>
<span class="feature-bn">
বিকাশের ধাপ নির্দিষ্ট।
</span>

</div>

</div>



<!-- ======================
QUICK REVISION BOX
====================== -->
<div class="card">

<h3>⚡ 30-Second Revision (CTET)</h3>

Maturation = Biological growth  
<br>
Heredity > Environment  
<br>
Fixed sequence  
<br>
Readiness important  

<br><br>

<span class="feature-bn">
পরিপক্বতা = জৈবিক বিকাশ  
বংশগতি বেশি গুরুত্বপূর্ণ  
ধাপ নির্দিষ্ট  
প্রস্তুতি জরুরি  
</span>

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
<h3>⚠️ Criticism of Gesell’s Maturation Theory</h3>
<div class="feature-bn">
গেসেলের পরিপক্বতা তত্ত্বের সমালোচনা
</div>
</div>


<!-- 1 -->
<div class="card">
<b>1. Overemphasis on Heredity</b><br>
<span class="feature-bn">বংশগতির উপর অতিরিক্ত জোর</span><br><br>

Gesell gave more importance to biological factors.
<br>
<span class="feature-bn">
গেসেল জৈবিক উপাদানকে বেশি গুরুত্ব দিয়েছেন।
</span><br><br>

He underestimated environmental influence.
<br>
<span class="feature-bn">
পরিবেশের প্রভাবকে কম গুরুত্ব দিয়েছেন।
</span>

<div class="feature-ctet">
CTET Line: Heredity > Environment
</div>
</div>



<!-- 2 -->
<div class="card">
<b>2. Neglect of Learning & Training</b><br>
<span class="feature-bn">শেখা ও প্রশিক্ষণকে উপেক্ষা</span><br><br>

The theory says training cannot change development.
<br>
<span class="feature-bn">
তত্ত্ব অনুযায়ী প্রশিক্ষণ বিকাশের ক্রম পরিবর্তন করতে পারে না।
</span><br><br>

But research shows practice can improve performance.
<br>
<span class="feature-bn">
কিন্তু গবেষণায় দেখা যায় অনুশীলন দক্ষতা বাড়াতে পারে।
</span>

<div class="feature-ctet">
Exam Trap: Learning ignored
</div>
</div>



<!-- 3 -->
<div class="card">
<b>3. Too Biological & Deterministic</b><br>
<span class="feature-bn">অতিরিক্ত জৈবিক ও নির্ধারিতবাদী</span><br><br>

It assumes development is automatic and fixed.
<br>
<span class="feature-bn">
এটি ধরে নেয় বিকাশ স্বয়ংক্রিয় ও নির্দিষ্ট।
</span><br><br>

Individual differences are not fully explained.
<br>
<span class="feature-bn">
ব্যক্তিগত পার্থক্য সম্পূর্ণভাবে ব্যাখ্যা করা হয় না।
</span>

<div class="feature-ctet">
Keyword: Determinism
</div>
</div>



<!-- 4 -->
<div class="card">
<b>4. Limited Scope</b><br>
<span class="feature-bn">সীমিত পরিসর</span><br><br>

Focuses mainly on early childhood.
<br>
<span class="feature-bn">
মূলত শৈশবের বিকাশে সীমাবদ্ধ।
</span><br><br>

Does not explain emotional & social development deeply.
<br>
<span class="feature-bn">
আবেগীয় ও সামাজিক বিকাশ গভীরভাবে ব্যাখ্যা করে না।
</span>
</div>



<!-- 5 -->
<div class="card">
<b>5. Lack of Experimental Evidence</b><br>
<span class="feature-bn">পরীক্ষামূলক প্রমাণের অভাব</span><br><br>

Theory is based largely on observation.
<br>
<span class="feature-bn">
তত্ত্বটি মূলত পর্যবেক্ষণের উপর ভিত্তি করে।
</span><br><br>

Strong scientific validation is limited.
<br>
<span class="feature-bn">
শক্তিশালী বৈজ্ঞানিক প্রমাণ সীমিত।
</span>
</div>



<!-- ======================
CTET IDENTIFICATION CLUES
====================== -->
<div class="card">

<b>🎯 CTET – How to Identify Gesell in Exam:</b><br><br>

If question contains these words:<br><br>

• Maturation<br>
<span class="feature-bn">পরিপক্বতা</span><br>

• Biological readiness<br>
<span class="feature-bn">জৈবিক প্রস্তুতি</span><br>

• Fixed sequence<br>
<span class="feature-bn">নির্দিষ্ট ক্রম</span><br>

• Cephalocaudal / Proximodistal<br>
<span class="feature-bn">মাথা থেকে পা / কেন্দ্র থেকে বাইরে</span><br>

• Heredity dominance<br>
<span class="feature-bn">বংশগতির প্রাধান্য</span><br><br>

👉 It refers to Gesell’s theory.<br>
<span class="feature-bn">
এই শব্দগুলি থাকলে বুঝতে হবে এটি গেসেলের তত্ত্ব।
</span>

</div>



<!-- ======================
MEMORY TRICK
====================== -->
<div class="card">

<b>🧠 Memory Trick: H-D-L-S-E</b><br><br>

H → Heredity overemphasis<br>
D → Deterministic<br>
L → Learning ignored<br>
S → Limited scope<br>
E → Experimental weakness<br>

<br>
<span class="feature-bn">
H → বংশগতি বেশি  
D → নির্ধারিতবাদ  
L → শেখাকে কম গুরুত্ব  
S → সীমিত পরিসর  
E → পরীক্ষামূলক দুর্বলতা  
</span>

</div>

`;
}


/* ======================
COMPARE
====================== */

else if(tab === "compare"){

box.innerHTML = `

<div class="card">
<h3>🆚 Gesell vs Other Theories (CTET Comparison)</h3>
<div class="feature-bn">
গেসেল বনাম অন্যান্য তত্ত্ব – পরীক্ষায় বিভ্রান্তি দূর করার জন্য
</div>
</div>


<!-- ======================
GESELL vs PIAGET
====================== -->
<div class="card">

<h3>Gesell vs Piaget</h3>
<div class="feature-bn">গেসেল বনাম পিয়াজে</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis</th>
<th>Gesell</th>
<th>Piaget</th>
</tr>

<tr>
<td>Development Type</td>
<td>Maturation (Biological)<br>
<span class="feature-bn">পরিপক্বতা (জৈবিক)</span></td>

<td>Cognitive Development<br>
<span class="feature-bn">জ্ঞানীয় বিকাশ</span></td>
</tr>

<tr>
<td>Main Focus</td>
<td>Heredity & readiness<br>
<span class="feature-bn">বংশগতি ও প্রস্তুতি</span></td>

<td>Thinking ability<br>
<span class="feature-bn">চিন্তার ক্ষমতা</span></td>
</tr>

<tr>
<td>Sequence</td>
<td>Fixed developmental order<br>
<span class="feature-bn">নির্দিষ্ট ক্রম</span></td>

<td>Stage-wise thinking growth<br>
<span class="feature-bn">ধাপে ধাপে চিন্তার বিকাশ</span></td>
</tr>

<tr>
<td>Keyword</td>
<td>Cephalocaudal / Readiness<br>
<span class="feature-bn">মাথা থেকে পা / প্রস্তুতি</span></td>

<td>Schema / Assimilation<br>
<span class="feature-bn">স্কিমা / আত্মীকরণ</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Readiness / maturation → Gesell  
<br>
Thinking / logic problem → Piaget  
</div>

</div>



<!-- ======================
GESELL vs ERIKSON
====================== -->
<div class="card">

<h3>Gesell vs Erikson</h3>
<div class="feature-bn">গেসেল বনাম এরিকসন</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis</th>
<th>Gesell</th>
<th>Erikson</th>
</tr>

<tr>
<td>Development Type</td>
<td>Biological maturation<br>
<span class="feature-bn">জৈবিক পরিপক্বতা</span></td>

<td>Psychosocial development<br>
<span class="feature-bn">মনোসামাজিক বিকাশ</span></td>
</tr>

<tr>
<td>Scope</td>
<td>Mainly childhood<br>
<span class="feature-bn">মূলত শৈশব</span></td>

<td>Lifespan (Birth to old age)<br>
<span class="feature-bn">আজীবন</span></td>
</tr>

<tr>
<td>Focus</td>
<td>Motor development sequence<br>
<span class="feature-bn">মোটর বিকাশের ক্রম</span></td>

<td>Identity & crisis<br>
<span class="feature-bn">পরিচয় ও সংকট</span></td>
</tr>

<tr>
<td>Keyword</td>
<td>Heredity dominant<br>
<span class="feature-bn">বংশগতির প্রাধান্য</span></td>

<td>Identity crisis / Virtue<br>
<span class="feature-bn">পরিচয় সংকট / গুণ</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Biological readiness → Gesell  
<br>
Psychosocial crisis → Erikson  
</div>

</div>



<!-- ======================
GESELL vs BANDURA
====================== -->
<div class="card">

<h3>Gesell vs Bandura</h3>
<div class="feature-bn">গেসেল বনাম ব্যান্ডুরা</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis</th>
<th>Gesell</th>
<th>Bandura</th>
</tr>

<tr>
<td>Development Type</td>
<td>Maturation theory<br>
<span class="feature-bn">পরিপক্বতা তত্ত্ব</span></td>

<td>Social Learning Theory<br>
<span class="feature-bn">সামাজিক শিক্ষণ তত্ত্ব</span></td>
</tr>

<tr>
<td>Learning Role</td>
<td>Learning has limited effect<br>
<span class="feature-bn">শেখার ভূমিকা কম</span></td>

<td>Learning through modeling<br>
<span class="feature-bn">অনুকরণের মাধ্যমে শেখা</span></td>
</tr>

<tr>
<td>Key Concept</td>
<td>Readiness<br>
<span class="feature-bn">প্রস্তুতি</span></td>

<td>Reciprocal determinism<br>
<span class="feature-bn">পারস্পরিক নির্ধারণবাদ</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Modeling / imitation → Bandura  
<br>
Biological readiness → Gesell  
</div>

</div>



<!-- ======================
CTET MASTER IDENTIFICATION
====================== -->
<div class="card">

<h3>🎯 CTET Identification Clues (Gesell)</h3>

If question contains:<br><br>

• Maturation<br>
• Biological readiness<br>
• Fixed sequence<br>
• Cephalocaudal principle<br>
• Proximodistal principle<br>
• Heredity dominance<br><br>

👉 It refers to Gesell’s theory.  
<span class="feature-bn">
এই শব্দগুলি থাকলে বুঝতে হবে এটি গেসেলের তত্ত্ব।
</span>

</div>



<!-- ======================
MEGA MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Mega Memory Trick</h3>

G → Gesell → Growth from genes  
<span class="feature-bn">গেসেল → জিনের মাধ্যমে বিকাশ</span><br><br>

P → Piaget → Problem solving / thinking  
<span class="feature-bn">পিয়াজে → চিন্তা ও সমস্যা সমাধান</span><br><br>

E → Erikson → Eight stages / identity  
<span class="feature-bn">এরিকসন → ৮ ধাপ / পরিচয়</span><br><br>

B → Bandura → Behavior by modeling  
<span class="feature-bn">ব্যান্ডুরা → অনুকরণ দ্বারা আচরণ</span>

</div>

`;
}


/* ======================
TEACHING
====================== */

else if(tab === "teaching"){

box.innerHTML = `

<div class="card">

<h3>👩‍🏫 Teaching Implications of Gesell’s Maturation Theory</h3>
<div class="feature-bn">
গেসেলের পরিপক্বতা তত্ত্বের শিক্ষণগত প্রভাব
</div>

<!-- ======================
CORE IDEA
====================== -->
<div class="feature-card">
<b>📘 Core Idea</b><br>
Teaching should match the child's biological readiness.<br>
<span class="feature-bn">
শিক্ষণ শিশুর জৈবিক প্রস্তুতির সাথে সামঞ্জস্যপূর্ণ হওয়া উচিত।
</span>
<br><br>
<b>CTET Keyword:</b> Readiness / Maturation / Heredity<br>
<span class="feature-bn">
CTET কী-শব্দ: প্রস্তুতি / পরিপক্বতা / বংশগতি
</span>
</div>

<!-- ======================
1 READINESS PRINCIPLE
====================== -->
<div class="feature-card">
<b>1. Respect Readiness</b><br>
প্রস্তুতিকে সম্মান করা<br><br>

Do not force learning before child is ready.<br>
<span class="feature-bn">
শিশু প্রস্তুত হওয়ার আগে শেখাতে জোর করা উচিত নয়।
</span>
<br><br>

<b>Example:</b> Do not force writing at age 2.<br>
<span class="feature-bn">
উদাহরণ: ২ বছরে লিখতে বাধ্য করা উচিত নয়।
</span>
</div>

<!-- ======================
2 INDIVIDUAL DIFFERENCE
====================== -->
<div class="feature-card">
<b>2. Accept Individual Differences</b><br>
ব্যক্তিগত পার্থক্য গ্রহণ করা<br><br>

Children mature at different rates.<br>
<span class="feature-bn">
শিশুরা ভিন্ন গতিতে পরিপক্ব হয়।
</span>
<br><br>

<b>Example:</b> Some walk at 10 months, others at 14 months.<br>
<span class="feature-bn">
উদাহরণ: কেউ ১০ মাসে হাঁটে, কেউ ১৪ মাসে।
</span>
</div>

<!-- ======================
3 DEVELOPMENT SEQUENCE
====================== -->
<div class="feature-card">
<b>3. Follow Natural Development Sequence</b><br>
স্বাভাবিক বিকাশের ক্রম অনুসরণ<br><br>

Skills develop in fixed order.<br>
<span class="feature-bn">
দক্ষতা নির্দিষ্ট ক্রমে বিকশিত হয়।
</span>
<br><br>

<b>Example:</b> Crawling before walking.<br>
<span class="feature-bn">
উদাহরণ: হাঁটার আগে হামাগুড়ি।
</span>
</div>

<!-- ======================
4 MOTOR DEVELOPMENT
====================== -->
<div class="feature-card">
<b>4. Focus on Motor Readiness</b><br>
মোটর প্রস্তুতিতে গুরুত্ব<br><br>

Activities should suit child’s physical maturity.<br>
<span class="feature-bn">
শারীরিক পরিপক্বতার সাথে মিল রেখে কার্যক্রম দেওয়া উচিত।
</span>
</div>

<!-- ======================
5 AVOID COMPARISON
====================== -->
<div class="feature-card">
<b>5. Avoid Unnecessary Comparison</b><br>
অপ্রয়োজনীয় তুলনা এড়ানো<br><br>

Comparison may harm confidence.<br>
<span class="feature-bn">
তুলনা আত্মবিশ্বাস নষ্ট করতে পারে।
</span>
</div>

<!-- ======================
6 SUPPORT NATURAL GROWTH
====================== -->
<div class="feature-card">
<b>6. Provide Supportive Environment</b><br>
সহায়ক পরিবেশ তৈরি করা<br><br>

Environment supports growth but cannot change biological order.<br>
<span class="feature-bn">
পরিবেশ সহায়ক ভূমিকা পালন করে, কিন্তু জৈবিক ক্রম পরিবর্তন করতে পারে না।
</span>
</div>

<!-- ======================
7 PATIENCE
====================== -->
<div class="feature-card">
<b>7. Teacher Should Be Patient</b><br>
শিক্ষকের ধৈর্যশীল হওয়া উচিত<br><br>

Maturation takes time.<br>
<span class="feature-bn">
পরিপক্বতা সময়সাপেক্ষ।
</span>
</div>

<!-- ======================
CTET TRAP LINES
====================== -->
<div class="feature-card">

<b>⚠️ CTET Examiner Trap Lines</b><br>
<span class="feature-bn">CTET পরীক্ষকের ফাঁদ</span>
<br><br>

Early training guarantees early development ❌<br>
<span class="feature-bn">
আগে প্রশিক্ষণ দিলে আগে বিকাশ হবে ❌
</span><br>

Environment completely determines development ❌<br>
<span class="feature-bn">
পরিবেশ সম্পূর্ণভাবে বিকাশ নির্ধারণ করে ❌
</span><br>

All children develop at same rate ❌<br>
<span class="feature-bn">
সব শিশু একই গতিতে বিকাশ লাভ করে ❌
</span><br><br>

✔ Correct → Biological readiness + Fixed sequence + Individual pace<br>
<span class="feature-bn">
✔ সঠিক → জৈবিক প্রস্তুতি + নির্দিষ্ট ক্রম + ব্যক্তিগত গতি
</span>

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
  window.location.replace("subject-list.html");
};

/* ======================
PIAGET MCQ PAGE GO
====================== */

/* ======================
PIAGET MCQ PAGE GO
====================== */

window.goErikson = function(event){

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
      "MCQ/erikson-mcq.html";
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
    document.getElementById("diagramContainer");

  if(!container) return;

  container.innerHTML = `

<svg viewBox="0 0 360 700"
     width="100%"
     height="auto">

<!-- 1 Head Control -->
<rect class="stage" data-stage="g1"
 x="40" y="30" width="280" height="90" rx="14"/>
<text x="60" y="60" class="title">
Head Control
</text>
<text x="60" y="80" class="sub">
Cephalocaudal Principle
</text>

<!-- 2 Sitting -->
<rect class="stage" data-stage="g2"
 x="40" y="140" width="280" height="90" rx="14"/>
<text x="60" y="170" class="title">
Sitting
</text>
<text x="60" y="190" class="sub">
Motor Development Sequence
</text>

<!-- 3 Crawling -->
<rect class="stage" data-stage="g3"
 x="40" y="250" width="280" height="90" rx="14"/>
<text x="60" y="280" class="title">
Crawling
</text>
<text x="60" y="300" class="sub">
Fixed Sequence
</text>

<!-- 4 Standing -->
<rect class="stage" data-stage="g4"
 x="40" y="360" width="280" height="90" rx="14"/>
<text x="60" y="390" class="title">
Standing
</text>
<text x="60" y="410" class="sub">
Biological Readiness
</text>

<!-- 5 Walking -->
<rect class="stage" data-stage="g5"
 x="40" y="470" width="280" height="90" rx="14"/>
<text x="60" y="500" class="title">
Walking
</text>
<text x="60" y="520" class="sub">
Maturation Complete
</text>

</svg>

<style>
.stage{
  fill:#e8f5e9;
  stroke:#2e7d32;
  stroke-width:2;
  cursor:pointer;
  transition:.3s;
}
.stage:hover{
  fill:#c8e6c9;
}
.title{
  font:bold 15px Arial;
}
.sub{
  font:12px Arial;
}
</style>
`;

  container
    .querySelectorAll(".stage")
    .forEach(stage=>{
      stage.addEventListener("click",()=>{
        openStagePopup(
          stage.getAttribute("data-stage")
        );
      });
    });
}
function openStagePopup(type){

let content = "";

if(type === "g1"){
content = `
<h3>👶 Head Control</h3>
<b>Principle:</b> Cephalocaudal<br>
<b>Meaning:</b> Development starts from head downward.<br>
<span>মাথা থেকে নিচের দিকে বিকাশ শুরু হয়।</span>
`;
}

else if(type === "g2"){
content = `
<h3>🪑 Sitting</h3>
<b>Concept:</b> Maturation before training<br>
<b>Example:</b> Child sits when muscles are ready.<br>
<span>পেশি প্রস্তুত হলে শিশু বসে।</span>
`;
}

else if(type === "g3"){
content = `
<h3>🐾 Crawling</h3>
<b>Concept:</b> Fixed developmental order<br>
<b>Important:</b> Cannot skip stages.<br>
<span>বিকাশের ধাপ লাফিয়ে পার হওয়া যায় না।</span>
`;
}

else if(type === "g4"){
content = `
<h3>🧍 Standing</h3>
<b>Concept:</b> Biological readiness<br>
<b>CTET Point:</b> Training cannot force development.<br>
<span>প্রশিক্ষণ দিয়ে বিকাশ জোর করা যায় না।</span>
`;
}

else if(type === "g5"){
content = `
<h3>🚶 Walking</h3>
<b>Result:</b> Natural maturation outcome<br>
<b>Keyword:</b> Heredity > Environment<br>
<span>বংশগতি পরিবেশের চেয়ে বেশি গুরুত্বপূর্ণ।</span>
`;
}

const popup =
  document.createElement("div");

popup.className="stagePopup";

popup.innerHTML=`
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
 .onclick=()=>popup.remove();

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

  box.setAttribute("data-tab","definition");
  loadTabContent("definition");

}, 50);

  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});