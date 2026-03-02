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
Erikson’s Psychosocial Development Theory explains personality development through social conflicts across the lifespan.
</div>
<div class="feature-bn">
এরিকসনের মনোসামাজিক তত্ত্ব সামাজিক দ্বন্দ্বের মাধ্যমে ব্যক্তিত্বের বিকাশ ব্যাখ্যা করে।
</div>
</div>

<div class="feature-card">
<div class="feature-en">
Development occurs in 8 psychosocial stages.
</div>
<div class="feature-bn">
৮টি মনোসামাজিক ধাপে বিকাশ ঘটে।
</div>
</div>

<div class="feature-card">
<div class="feature-en">
Each stage has a crisis that leads to virtue if resolved successfully.
</div>
<div class="feature-bn">
প্রতিটি ধাপে একটি সংকট থাকে যা সফল হলে গুণ (virtue) তৈরি হয়।
</div>
</div>

<div class="feature-ctet">
CTET Keyword: Psychosocial Crisis + Lifespan Theory
</div>

</div>


<!-- ======================
🎯 CORE IDEAS
====================== -->
<div class="card">

<h3>🎯 Core Ideas</h3>

<div class="feature-card">
<div class="feature-en">Personality develops through social interaction.</div>
<div class="feature-bn">সামাজিক মিথস্ক্রিয়ার মাধ্যমে ব্যক্তিত্ব গঠিত হয়।</div>
</div>

<div class="feature-card">
<div class="feature-en">Development continues throughout life.</div>
<div class="feature-bn">বিকাশ সারাজীবন ধরে চলে।</div>
</div>

<div class="feature-card">
<div class="feature-en">Each stage has positive & negative outcome.</div>
<div class="feature-bn">প্রতিটি ধাপে ইতিবাচক ও নেতিবাচক ফল থাকে।</div>
</div>

</div>


<!-- ======================
⚠️ CTET TRAP
====================== -->
<div class="card">

<h3>⚠️ CTET Trap Lines</h3>

<div class="feature-card">
❌ Erikson = Moral theory<br>
<span class="feature-bn">ভুল: এটি নৈতিক তত্ত্ব নয়।</span><br>
✔ Personality development theory
</div>

<div class="feature-card">
❌ Only childhood development<br>
<span class="feature-bn">ভুল: শুধু শৈশব নয়।</span><br>
✔ Lifespan development
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
<h3>📊 Stage Visual Diagram</h3>
<div id="diagramContainer" 
     style="margin-top:15px; margin-bottom:5px;">
</div>
</div>

<!-- INTRO -->
<div class="card">
<h3>Erik Erikson – Psychosocial Development Theory</h3>

<div class="feature-card">

Development continues from birth to old age.
<br>
<span class="feature-bn">
জন্ম থেকে বার্ধক্য পর্যন্ত বিকাশ চলতে থাকে।
</span>
<br><br>

There are eight stages of psychosocial development.
<br>
<span class="feature-bn">
মনোসামাজিক বিকাশের মোট আটটি ধাপ রয়েছে।
</span>
<br><br>

Each stage involves a psychosocial crisis.
<br>
<span class="feature-bn">
প্রতিটি ধাপে একটি মনোসামাজিক দ্বন্দ্ব থাকে।
</span>
<br><br>

Successful resolution of the crisis leads to the development of a virtue.
<br>
<span class="feature-bn">
দ্বন্দ্বের সফল সমাধান একটি ইতিবাচক গুণের বিকাশ ঘটায়।
</span>

</div>

<div class="feature-ctet">
CTET Keywords: Identity crisis • Psychosocial • 8 stages • Virtue • Lifelong development
<br>
<span class="feature-bn">
এই শব্দগুলি থাকলে বুঝতে হবে এটি Erikson-এর তত্ত্ব।
</span>
</div>

</div>



<!-- STAGE 1 -->
<div class="card">
<h3>Stage 1: Trust vs Mistrust (0–1 year)</h3>

<b>Definition:</b><br>
This stage focuses on the infant’s ability to develop trust in caregivers.
<br>
<span class="feature-bn">
এই ধাপে শিশু পরিচর্যাকারীর প্রতি আস্থা গড়ে তোলে কি না তা নির্ধারিত হয়।
</span>
<br><br>

<b>Virtue: Hope</b><br>
<span class="feature-bn">গুণ: আশা</span><br><br>

Positive example:<br>
Consistent care develops trust.
<br>
<span class="feature-bn">
নিয়মিত যত্ন আস্থা তৈরি করে।
</span>
<br><br>

Negative example:<br>
Neglect leads to mistrust.
<br>
<span class="feature-bn">
অবহেলা অনাস্থা তৈরি করে।
</span>

</div>



<!-- STAGE 2 -->
<div class="card">
<h3>Stage 2: Autonomy vs Shame and Doubt (1–3 years)</h3>

<b>Definition:</b><br>
This stage emphasizes the child’s attempt to become independent.
<br>
<span class="feature-bn">
এই ধাপে শিশু স্বাধীন হওয়ার চেষ্টা করে।
</span>
<br><br>

<b>Virtue: Will</b><br>
<span class="feature-bn">গুণ: ইচ্ছাশক্তি</span><br><br>

Positive example:<br>
Encouraging self-help skills develops autonomy.
<br>
<span class="feature-bn">
নিজে কাজ করতে উৎসাহ দিলে স্বায়ত্তশাসন তৈরি হয়।
</span>
<br><br>

Negative example:<br>
Over-criticism leads to shame.
<br>
<span class="feature-bn">
অতিরিক্ত সমালোচনা লজ্জা তৈরি করে।
</span>

</div>



<!-- STAGE 3 -->
<div class="card">
<h3>Stage 3: Initiative vs Guilt (3–6 years)</h3>

<b>Definition:</b><br>
The child begins to take initiative and plan activities.
<br>
<span class="feature-bn">
এই ধাপে শিশু উদ্যোগ নিয়ে কাজ শুরু করে।
</span>
<br><br>

<b>Virtue: Purpose</b><br>
<span class="feature-bn">গুণ: উদ্দেশ্য</span><br><br>

Positive example:<br>
Planning games develops initiative.
<br>
<span class="feature-bn">
খেলার পরিকল্পনা উদ্যোগ বাড়ায়।
</span>
<br><br>

Negative example:<br>
Discouragement leads to guilt.
<br>
<span class="feature-bn">
নিরুৎসাহিত করলে অপরাধবোধ তৈরি হয়।
</span>

</div>



<!-- STAGE 4 -->
<div class="card">
<h3>Stage 4: Industry vs Inferiority (6–12 years)</h3>

<b>Definition:</b><br>
The child develops a sense of competence through school and work.
<br>
<span class="feature-bn">
বিদ্যালয় ও কাজের মাধ্যমে শিশু দক্ষতা অর্জন করে।
</span>
<br><br>

<b>Virtue: Competence</b><br>
<span class="feature-bn">গুণ: দক্ষতা</span><br><br>

Positive example:<br>
Success in tasks builds industry.
<br>
<span class="feature-bn">
কাজে সাফল্য পরিশ্রমী মানসিকতা তৈরি করে।
</span>
<br><br>

Negative example:<br>
Repeated failure creates inferiority.
<br>
<span class="feature-bn">
বারবার ব্যর্থতা হীনমন্যতা তৈরি করে।
</span>

</div>



<!-- STAGE 5 -->
<div class="card">
<h3>Stage 5: Identity vs Role Confusion (Adolescence: 12–18 years)</h3>

<b>Definition:</b><br>
Adolescents search for personal identity and life goals.
<br>
<span class="feature-bn">
কৈশোরে (১২–১৮ বছর) ব্যক্তি নিজের পরিচয় ও লক্ষ্য খুঁজে পেতে চেষ্টা করে।
</span>
<br><br>

<b>Virtue: Fidelity</b><br>
<span class="feature-bn">গুণ: বিশ্বস্ততা</span><br><br>

Positive example:<br>
Exploring roles forms identity.
<br>
<span class="feature-bn">
ভূমিকা অন্বেষণ পরিচয় গঠন করে।
</span>
<br><br>

Negative example:<br>
Confusion leads to role confusion.
<br>
<span class="feature-bn">
বিভ্রান্তি পরিচয় বিভ্রান্তি তৈরি করে।
</span>

</div>
<div class="feature-ctet">

<b>CTET Exam Focus:</b><br><br>

Most questions are asked from:<br>

1. Identity vs Role Confusion (Adolescence)<br>
<span class="feature-bn">
সবচেয়ে বেশি প্রশ্ন আসে কৈশোরের পরিচয় সংকট থেকে।
</span>
<br><br>

2. Industry vs Inferiority (School Age)<br>
<span class="feature-bn">
বিদ্যালয় বয়সের পরিশ্রম বনাম হীনমন্যতা থেকেও প্রশ্ন বেশি আসে।
</span>
<br><br>

Important Trigger Words:<br>
Identity Crisis • School Age • Industry • Fidelity • Competence
<br>
<span class="feature-bn">
এই শব্দগুলি থাকলে Erikson মনে করতে হবে।
</span>

</div>
<div class="feature-ctet">

<b>CTET Case-Based Clues (Erikson):</b>
<br><br>

“A 15-year-old is confused about career choice.”  
<br>
👉 Stage 5: Identity vs Role Confusion (Adolescence)
<br>
<span class="feature-bn">
১৫ বছরের কিশোর পেশা নিয়ে বিভ্রান্ত — কৈশোরের পরিচয় সংকট।
</span>
<br><br>

“A 10-year-old feels inferior in school.”  
<br>
👉 Stage 4: Industry vs Inferiority (School Age)
<br>
<span class="feature-bn">
১০ বছরের শিশু বিদ্যালয়ে হীনমন্যতা অনুভব করছে — স্কুল বয়সের দ্বন্দ্ব।
</span>
<br><br>

“An old man regrets his life decisions.”  
<br>
👉 Stage 8: Integrity vs Despair (Old Age)
<br>
<span class="feature-bn">
একজন বৃদ্ধ ব্যক্তি জীবনের সিদ্ধান্ত নিয়ে অনুশোচনা করছেন — বার্ধক্যের হতাশা।
</span>

</div>



<!-- STAGE 6 -->
<div class="card">
<h3>Stage 6: Intimacy vs Isolation (Young Adulthood: 19–40 years)</h3>

<b>Definition:</b><br>
Young adults seek close and meaningful relationships.
<br>
<span class="feature-bn">
যুব প্রাপ্তবয়স্ক (১৯–৪০ বছর) ঘনিষ্ঠ ও অর্থপূর্ণ সম্পর্ক গড়ে তুলতে চায়।
</span>
<br><br>

<b>Virtue: Love</b><br>
<span class="feature-bn">গুণ: প্রেম</span><br><br>

Positive example:<br>
Forming close bonds develops intimacy.
<br>
<span class="feature-bn">
ঘনিষ্ঠ সম্পর্ক ঘনিষ্ঠতা তৈরি করে।
</span>
<br><br>

Negative example:<br>
Avoidance leads to isolation.
<br>
<span class="feature-bn">
সম্পর্ক এড়ালে একাকীত্ব তৈরি হয়।
</span>

</div>


<!-- STAGE 7 -->
<div class="card">
<h3>Stage 7: Generativity vs Stagnation (Middle Adulthood: 40–65 years)</h3>

<b>Definition:</b><br>
Adults focus on contributing to society and guiding the next generation.
<br>
<span class="feature-bn">
মধ্য প্রাপ্তবয়স্ক (৪০–৬৫ বছর) সমাজে অবদান রাখা ও পরবর্তী প্রজন্মকে পথনির্দেশে মনোযোগ দেয়।
</span>
<br><br>

<b>Virtue: Care</b><br>
<span class="feature-bn">গুণ: যত্ন</span><br><br>

Positive example:<br>
Supporting the next generation builds generativity.
<br>
<span class="feature-bn">
পরবর্তী প্রজন্মকে সহায়তা করলে সৃজনশীলতা প্রকাশ পায়।
</span>
<br><br>

Negative example:<br>
Self-centeredness leads to stagnation.
<br>
<span class="feature-bn">
স্বার্থপরতা স্থবিরতা তৈরি করে।
</span>

</div>


<!-- STAGE 8 -->
<div class="card">
<h3>Stage 8: Integrity vs Despair (Old Age: 65+ years)</h3>

<b>Definition:</b><br>
In old age, individuals reflect on their life.
<br>
<span class="feature-bn">
বার্ধক্যে (৬৫ বছর ও তদূর্ধ্ব) ব্যক্তি নিজের জীবন মূল্যায়ন করে।
</span>
<br><br>

<b>Virtue: Wisdom</b><br>
<span class="feature-bn">গুণ: প্রজ্ঞা</span><br><br>

Positive example:<br>
Life satisfaction develops integrity.
<br>
<span class="feature-bn">
জীবনে সন্তুষ্টি অখণ্ডতা তৈরি করে।
</span>
<br><br>

Negative example:<br>
Regret leads to despair.
<br>
<span class="feature-bn">
অনুশোচনা হতাশা তৈরি করে।
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
<h3>⚠️ Criticism of Erikson’s Psychosocial Theory</h3>
<div class="feature-bn">
এরিকসনের মনোসামাজিক বিকাশ তত্ত্বের সমালোচনা
</div>
</div>


<!-- 1 -->
<div class="card">
<b>1. Lack of Scientific Evidence</b><br>
<span class="feature-bn">বৈজ্ঞানিক প্রমাণের ঘাটতি</span><br><br>

Erikson’s theory is mainly based on observation and case studies.
<br>
<span class="feature-bn">
এরিকসনের তত্ত্ব মূলত পর্যবেক্ষণ ও কেস স্টাডির উপর ভিত্তি করে।
</span><br><br>

It lacks strong experimental verification.
<br>
<span class="feature-bn">
এতে শক্তিশালী পরীক্ষামূলক প্রমাণের অভাব রয়েছে।
</span>

<div class="feature-ctet">
CTET Line: Not empirically testable
</div>
</div>



<!-- 2 -->
<div class="card">
<b>2. Vague and Abstract Concepts</b><br>
<span class="feature-bn">অস্পষ্ট ও বিমূর্ত ধারণা</span><br><br>

Concepts like “Identity Crisis” and “Integrity” are difficult to measure.
<br>
<span class="feature-bn">
“পরিচয় সংকট” ও “অখণ্ডতা” এর মতো ধারণা পরিমাপ করা কঠিন।
</span>

<div class="feature-ctet">
Exam Line: Difficult to operationalize
</div>
</div>



<!-- 3 -->
<div class="card">
<b>3. Stage Rigidity Questioned</b><br>
<span class="feature-bn">ধাপের কঠোরতা প্রশ্নবিদ্ধ</span><br><br>

Not all individuals pass through stages in fixed order.
<br>
<span class="feature-bn">
সবাই নির্দিষ্ট ক্রমে ধাপ অতিক্রম করে না।
</span><br><br>

Age does not always match exact stage.
<br>
<span class="feature-bn">
বয়স সবসময় নির্দিষ্ট ধাপ নির্ধারণ করে না।
</span>

<div class="feature-ctet">
Keyword: Age ≠ Stage
</div>
</div>



<!-- 4 -->
<div class="card">
<b>4. Cultural Limitation</b><br>
<span class="feature-bn">সাংস্কৃতিক সীমাবদ্ধতা</span><br><br>

The theory reflects Western social values.
<br>
<span class="feature-bn">
তত্ত্বটি পাশ্চাত্য সামাজিক মূল্যবোধের উপর ভিত্তি করে।
</span><br><br>

It may not apply equally to all cultures.
<br>
<span class="feature-bn">
সব সংস্কৃতিতে সমানভাবে প্রযোজ্য নাও হতে পারে।
</span>
</div>



<!-- 5 -->
<div class="card">
<b>5. Overemphasis on Social Factors</b><br>
<span class="feature-bn">সামাজিক উপাদানে অতিরিক্ত জোর</span><br><br>

The theory gives less importance to biological factors.
<br>
<span class="feature-bn">
জৈবিক উপাদানের গুরুত্ব তুলনামূলকভাবে কম দেওয়া হয়েছে।
</span>
</div>



<!-- 6 -->
<div class="card">
<b>6. Limited Research Support</b><br>
<span class="feature-bn">সীমিত গবেষণা সমর্থন</span><br><br>

Some stages are not strongly supported by research findings.
<br>
<span class="feature-bn">
কিছু ধাপ গবেষণায় দৃঢ়ভাবে সমর্থিত নয়।
</span>
</div>



<!-- 7 -->
<div class="card">
<b>7. Identity Crisis Not Universal</b><br>
<span class="feature-bn">পরিচয় সংকট সবার ক্ষেত্রে প্রযোজ্য নয়</span><br><br>

Not every adolescent experiences identity crisis.
<br>
<span class="feature-bn">
সব কিশোর-কিশোরী পরিচয় সংকটে ভোগে না।
</span>
</div>



<!-- ======================
CTET IDENTIFICATION CLUES
====================== -->
<div class="card">

<b>🎯 CTET – How to Identify Erikson in Exam:</b><br><br>

If question contains these words:<br><br>

• Identity Crisis<br>
<span class="feature-bn">পরিচয় সংকট</span><br>

• Psychosocial Crisis<br>
<span class="feature-bn">মনোসামাজিক দ্বন্দ্ব</span><br>

• Eight Stages of Development<br>
<span class="feature-bn">বিকাশের আটটি ধাপ</span><br>

• Lifelong Development<br>
<span class="feature-bn">আজীবন বিকাশ</span><br>

• Industry vs Inferiority<br>
<span class="feature-bn">পরিশ্রম বনাম হীনমন্যতা</span><br>

• Integrity vs Despair<br>
<span class="feature-bn">অখণ্ডতা বনাম হতাশা</span><br><br>

👉 It refers to Erikson’s theory.<br>
<span class="feature-bn">
এই শব্দগুলি থাকলে বুঝতে হবে এটি এরিকসনের তত্ত্ব।
</span>

</div>

<!-- ======================
MEMORY TRICK
====================== -->
<div class="card">

<b>🧠 Memory Trick: V-S-S-C-O-I</b><br><br>

V → Vague concepts<br>
S → Scientific weakness<br>
S → Stage rigidity<br>
C → Cultural limitation<br>
O → Overemphasis on social factor<br>
I → Identity crisis not universal<br>

</div>

`;
}


/* ======================
COMPARE
====================== */

else if(tab === "compare"){

box.innerHTML = `

<div class="card">
<h3>🆚 Erikson vs Other Theories (CTET Comparison)</h3>
<div class="feature-bn">
এরিকসন বনাম অন্যান্য তত্ত্ব – পরীক্ষায় বিভ্রান্তি দূর করার জন্য
</div>
</div>


<!-- ======================
ERIKSON vs PIAGET
====================== -->
<div class="card">

<h3>Erikson vs Piaget</h3>
<div class="feature-bn">এরিকসন বনাম পিয়াজে</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>
<th>Erikson</th>
<th>Piaget</th>
</tr>

<tr>
<td>Development Type<br><span class="feature-bn">বিকাশের ধরন</span></td>
<td>Psychosocial development<br><span class="feature-bn">মনোসামাজিক বিকাশ</span></td>
<td>Cognitive development<br><span class="feature-bn">জ্ঞানীয় বিকাশ</span></td>
</tr>

<tr>
<td>Focus<br><span class="feature-bn">মূল কেন্দ্র</span></td>
<td>Social crisis & identity<br><span class="feature-bn">সামাজিক দ্বন্দ্ব ও পরিচয়</span></td>
<td>Thinking & reasoning ability<br><span class="feature-bn">চিন্তা ও যুক্তি করার ক্ষমতা</span></td>
</tr>

<tr>
<td>Stages<br><span class="feature-bn">ধাপ</span></td>
<td>8 stages (Lifespan)<br><span class="feature-bn">৮ ধাপ (আজীবন)</span></td>
<td>4 stages (Age-specific)<br><span class="feature-bn">৪ ধাপ (বয়সভিত্তিক)</span></td>
</tr>

<tr>
<td>Scope<br><span class="feature-bn">পরিসর</span></td>
<td>Birth to old age<br><span class="feature-bn">জন্ম থেকে বার্ধক্য</span></td>
<td>Mainly childhood<br><span class="feature-bn">মূলত শৈশবকাল</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Thinking / logic problem → Piaget  
<span class="feature-bn">চিন্তা বা যুক্তি সমস্যা → পিয়াজে</span><br>
Identity / crisis word → Erikson  
<span class="feature-bn">পরিচয় বা সংকট শব্দ → এরিকসন</span>
</div>

</div>



<!-- ======================
ERIKSON vs KOHLBERG
====================== -->
<div class="card">

<h3>Erikson vs Kohlberg</h3>
<div class="feature-bn">এরিকসন বনাম কোলবার্গ</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>
<th>Erikson</th>
<th>Kohlberg</th>
</tr>

<tr>
<td>Development Type</td>
<td>Psychosocial<br><span class="feature-bn">মনোসামাজিক</span></td>
<td>Moral development<br><span class="feature-bn">নৈতিক বিকাশ</span></td>
</tr>

<tr>
<td>Stages</td>
<td>8 stages<br><span class="feature-bn">৮ ধাপ</span></td>
<td>6 stages<br><span class="feature-bn">৬ ধাপ</span></td>
</tr>

<tr>
<td>Focus</td>
<td>Identity & personality<br><span class="feature-bn">পরিচয় ও ব্যক্তিত্ব</span></td>
<td>Right–Wrong judgment<br><span class="feature-bn">সঠিক-ভুল বিচার</span></td>
</tr>

<tr>
<td>Keyword</td>
<td>Identity crisis<br><span class="feature-bn">পরিচয় সংকট</span></td>
<td>Heinz dilemma<br><span class="feature-bn">হেইঞ্জ সমস্যা</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Moral reasoning → Kohlberg  
<span class="feature-bn">নৈতিক যুক্তি → কোলবার্গ</span><br>
Psychosocial crisis → Erikson  
<span class="feature-bn">মনোসামাজিক দ্বন্দ্ব → এরিকসন</span>
</div>

</div>



<!-- ======================
ERIKSON vs FREUD
====================== -->
<div class="card">

<h3>Erikson vs Freud</h3>
<div class="feature-bn">এরিকসন বনাম ফ্রয়েড</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis</th>
<th>Erikson</th>
<th>Freud</th>
</tr>

<tr>
<td>Development Type</td>
<td>Psychosocial<br><span class="feature-bn">মনোসামাজিক</span></td>
<td>Psychosexual<br><span class="feature-bn">মনোকাম বিকাশ</span></td>
</tr>

<tr>
<td>Stages</td>
<td>8 stages (Lifespan)<br><span class="feature-bn">৮ ধাপ (আজীবন)</span></td>
<td>5 stages (Childhood)<br><span class="feature-bn">৫ ধাপ (শৈশবকাল)</span></td>
</tr>

<tr>
<td>Focus</td>
<td>Social relationships<br><span class="feature-bn">সামাজিক সম্পর্ক</span></td>
<td>Libido / sexual energy<br><span class="feature-bn">লিবিডো / যৌন শক্তি</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Libido / Id / Oedipus → Freud  
<span class="feature-bn">লিবিডো / ইড / ওডিপাস → ফ্রয়েড</span><br>
Industry / Identity / Integrity → Erikson  
<span class="feature-bn">পরিশ্রম / পরিচয় / অখণ্ডতা → এরিকসন</span>
</div>

</div>

<!-- ======================
ERIKSON vs BANDURA
====================== -->
<div class="card">

<h3>Erikson vs Bandura</h3>
<div class="feature-bn">এরিকসন বনাম ব্যান্ডুরা</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>
<th>Erikson</th>
<th>Bandura</th>
</tr>

<tr>
<td>Development Type<br><span class="feature-bn">বিকাশের ধরন</span></td>
<td>Psychosocial Development<br>
<span class="feature-bn">মনোসামাজিক বিকাশ</span></td>

<td>Social Learning Theory<br>
<span class="feature-bn">সামাজিক শিক্ষণ তত্ত্ব</span></td>
</tr>

<tr>
<td>Main Focus<br><span class="feature-bn">মূল কেন্দ্র</span></td>
<td>Identity & life crises<br>
<span class="feature-bn">পরিচয় ও জীবনের সংকট</span></td>

<td>Observational learning<br>
<span class="feature-bn">পর্যবেক্ষণমূলক শেখা</span></td>
</tr>

<tr>
<td>Learning Process<br><span class="feature-bn">শেখার প্রক্রিয়া</span></td>
<td>Resolution of psychosocial crisis<br>
<span class="feature-bn">মনোসামাজিক দ্বন্দ্বের সমাধান</span></td>

<td>Modeling & imitation<br>
<span class="feature-bn">অনুকরণ ও মডেলিং</span></td>
</tr>

<tr>
<td>Key Concept<br><span class="feature-bn">মূল ধারণা</span></td>
<td>Virtue development<br>
<span class="feature-bn">গুণের বিকাশ</span></td>

<td>Reciprocal determinism<br>
<span class="feature-bn">পারস্পরিক নির্ধারণবাদ</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Modeling / imitation → Bandura  
<span class="feature-bn">মডেলিং / অনুকরণ → ব্যান্ডুরা</span><br>

Identity / psychosocial crisis → Erikson  
<span class="feature-bn">পরিচয় / মনোসামাজিক দ্বন্দ্ব → এরিকসন</span>
</div>

</div>



<!-- ======================
ERIKSON vs GILLIGAN
====================== -->
<div class="card">

<h3>Erikson vs Gilligan</h3>
<div class="feature-bn">এরিকসন বনাম গিলিগান</div>

<div class="table-scroll">
<table class="stage-table">

<tr>
<th>Basis<br><span class="feature-bn">ভিত্তি</span></th>
<th>Erikson</th>
<th>Gilligan</th>
</tr>

<tr>
<td>Development Type<br><span class="feature-bn">বিকাশের ধরন</span></td>
<td>Psychosocial Development<br>
<span class="feature-bn">মনোসামাজিক বিকাশ</span></td>

<td>Moral Development (Care-based)<br>
<span class="feature-bn">নৈতিক বিকাশ (যত্নভিত্তিক)</span></td>
</tr>

<tr>
<td>Main Focus<br><span class="feature-bn">মূল কেন্দ্র</span></td>
<td>Identity formation<br>
<span class="feature-bn">পরিচয় গঠন</span></td>

<td>Ethics of care<br>
<span class="feature-bn">যত্নভিত্তিক নৈতিকতা</span></td>
</tr>

<tr>
<td>Stages<br><span class="feature-bn">ধাপ</span></td>
<td>8 stages (Lifespan)<br>
<span class="feature-bn">৮ ধাপ (আজীবন)</span></td>

<td>3 moral orientations<br>
<span class="feature-bn">৩ নৈতিক ধারা</span></td>
</tr>

<tr>
<td>Core Idea<br><span class="feature-bn">মূল ধারণা</span></td>
<td>Psychosocial crisis resolution<br>
<span class="feature-bn">মনোসামাজিক দ্বন্দ্বের সমাধান</span></td>

<td>Care & relationship responsibility<br>
<span class="feature-bn">যত্ন ও সম্পর্কের দায়িত্ব</span></td>
</tr>

</table>
</div>

<div class="feature-ctet">
Care ethics → Gilligan  
<span class="feature-bn">যত্নভিত্তিক নৈতিকতা → গিলিগান</span><br>

Identity crisis / Eight stages → Erikson  
<span class="feature-bn">পরিচয় সংকট / আটটি ধাপ → এরিকসন</span>
</div>

</div>

<!-- ======================
CTET IDENTIFICATION MASTER SECTION
====================== -->
<div class="card">

<h3>🎯 CTET Identification Clues</h3>

If question contains:<br><br>

• Identity crisis  
<span class="feature-bn">পরিচয় সংকট</span><br>

• Industry vs Inferiority  
<span class="feature-bn">পরিশ্রম বনাম হীনমন্যতা</span><br>

• Integrity vs Despair  
<span class="feature-bn">অখণ্ডতা বনাম হতাশা</span><br>

• Eight stages  
<span class="feature-bn">আটটি ধাপ</span><br>

• Lifelong development  
<span class="feature-bn">আজীবন বিকাশ</span><br><br>

👉 It refers to Erikson.  
<span class="feature-bn">তাহলে বুঝতে হবে এটি এরিকসনের তত্ত্ব।</span>

</div>



<!-- ======================
MEGA MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Mega Memory Trick</h3>

E → Erikson → Eight stages → Identity crisis  
<span class="feature-bn">এরিকসন → ৮ ধাপ → পরিচয় সংকট</span><br><br>

P → Piaget → Thinking stages  
<span class="feature-bn">পিয়াজে → চিন্তার ধাপ</span><br><br>

K → Kohlberg → Moral stages  
<span class="feature-bn">কোলবার্গ → নৈতিক ধাপ</span><br><br>

F → Freud → Five psychosexual stages  
<span class="feature-bn">ফ্রয়েড → ৫ মনোকাম ধাপ</span>

</div>


`;
}


/* ======================
TEACHING
====================== */

else if(tab === "teaching"){

box.innerHTML = `

<div class="card">

<h3>👩‍🏫 Teaching Implications of Erikson’s Theory (With Examples)</h3>
<div class="feature-bn">এরিকসনের তত্ত্বের শিক্ষণগত প্রভাব (উদাহরণসহ)</div>

<!-- ======================
CORE IDEA
====================== -->
<div class="feature-card">
<b>📘 Core Idea</b><br>
Teaching should support students in resolving psychosocial crises at each stage.<br>
<span class="feature-bn">
প্রতিটি ধাপে মনোসামাজিক দ্বন্দ্বের সমাধানে শিক্ষণ সহায়ক হওয়া উচিত।
</span>
<br><br>
<b>CTET Keyword:</b> Identity formation / Psychosocial crisis<br>
<span class="feature-bn">
CTET কী-শব্দ: পরিচয় গঠন / মনোসামাজিক দ্বন্দ্ব
</span>
</div>

<!-- ======================
1 TRUST BUILDING
====================== -->
<div class="feature-card">
<b>1. Build Trust in Early Years</b><br>
প্রাথমিক স্তরে আস্থা গড়ে তোলা<br><br>

Create a safe and supportive classroom.<br>
<span class="feature-bn">
নিরাপদ ও সহায়ক শ্রেণিকক্ষ তৈরি করা।
</span>
<br><br>

<b>Example:</b> Teacher responds warmly to mistakes.<br>
<span class="feature-bn">
উদাহরণ: ভুল করলে শিক্ষক শান্তভাবে সহায়তা করেন।
</span>
</div>

<!-- ======================
2 ENCOURAGE AUTONOMY
====================== -->
<div class="feature-card">
<b>2. Encourage Independence</b><br>
স্বাধীনতা উৎসাহিত করা<br><br>

Allow children to take small decisions.<br>
<span class="feature-bn">
শিশুদের ছোট সিদ্ধান্ত নিতে সুযোগ দেওয়া।
</span>
<br><br>

<b>Example:</b> Let students choose project topics.<br>
<span class="feature-bn">
উদাহরণ: শিক্ষার্থীদের প্রকল্পের বিষয় বেছে নিতে দেওয়া।
</span>
</div>

<!-- ======================
3 PROMOTE INITIATIVE
====================== -->
<div class="feature-card">
<b>3. Promote Initiative</b><br>
উদ্যোগ বাড়ানো<br><br>

Encourage creativity and leadership activities.<br>
<span class="feature-bn">
সৃজনশীলতা ও নেতৃত্বমূলক কাজ উৎসাহিত করা।
</span>
<br><br>

<b>Example:</b> Allow student to lead morning assembly.<br>
<span class="feature-bn">
উদাহরণ: শিক্ষার্থীকে প্রার্থনা সভা পরিচালনার সুযোগ দেওয়া।
</span>
</div>

<!-- ======================
4 DEVELOP INDUSTRY
====================== -->
<div class="feature-card">
<b>4. Develop Industry (School Age)</b><br>
পরিশ্রমী মানসিকতা গড়ে তোলা<br><br>

Provide tasks suited to ability and praise effort.<br>
<span class="feature-bn">
ক্ষমতা অনুযায়ী কাজ দিয়ে প্রচেষ্টার প্রশংসা করা।
</span>
<br><br>

<b>Example:</b> Appreciating improvement, not just high marks.<br>
<span class="feature-bn">
উদাহরণ: শুধুমাত্র নম্বর নয়, উন্নতির প্রশংসা।
</span>
</div>

<!-- ======================
5 SUPPORT IDENTITY
====================== -->
<div class="feature-card">
<b>5. Support Identity Formation (Adolescence)</b><br>
কৈশোরে পরিচয় গঠনে সহায়তা<br><br>

Provide career guidance and open discussion.<br>
<span class="feature-bn">
ক্যারিয়ার নির্দেশনা ও মুক্ত আলোচনা প্রদান।
</span>
<br><br>

<b>Example:</b> Organize career counseling sessions.<br>
<span class="feature-bn">
উদাহরণ: ক্যারিয়ার কাউন্সেলিং আয়োজন।
</span>
</div>

<!-- ======================
6 AVOID SHAME
====================== -->
<div class="feature-card">
<b>6. Avoid Public Criticism</b><br>
সর্বসমক্ষে অপমান এড়ানো<br><br>

Excess criticism may cause shame and inferiority.<br>
<span class="feature-bn">
অতিরিক্ত সমালোচনা লজ্জা ও হীনমন্যতা তৈরি করতে পারে।
</span>
</div>

<!-- ======================
7 POSITIVE FEEDBACK
====================== -->
<div class="feature-card">
<b>7. Give Positive Reinforcement</b><br>
ইতিবাচক প্রতিক্রিয়া প্রদান<br><br>

Encourage confidence and self-belief.<br>
<span class="feature-bn">
আত্মবিশ্বাস ও আত্মবিশ্বাস বৃদ্ধি করা।
</span>
</div>

<!-- ======================
8 TEACHER ROLE
====================== -->
<div class="feature-card">
<b>8. Teacher as Facilitator of Growth</b><br>
বিকাশ সহায়ক হিসেবে শিক্ষক<br><br>

Teacher supports emotional and social growth.<br>
<span class="feature-bn">
শিক্ষক আবেগীয় ও সামাজিক বিকাশে সহায়তা করেন।
</span>
</div>

<!-- ======================
CTET TRAP LINES
====================== -->
<div class="feature-card">

<b>⚠️ CTET Examiner Trap Lines</b><br>
<span class="feature-bn">CTET পরীক্ষকের ফাঁদ</span>
<br><br>

Strict punishment builds character ❌<br>
<span class="feature-bn">কঠোর শাস্তি চরিত্র গঠন করে ❌</span><br>

Only academic success matters ❌<br>
<span class="feature-bn">শুধু একাডেমিক সাফল্য গুরুত্বপূর্ণ ❌</span><br>

Identity forms automatically ❌<br>
<span class="feature-bn">পরিচয় নিজে নিজেই তৈরি হয় ❌</span><br><br>

✔ Correct → Emotional support + Social interaction + Identity guidance.<br>
<span class="feature-bn">
✔ সঠিক → আবেগীয় সহায়তা + সামাজিক মিথস্ক্রিয়া + পরিচয় নির্দেশনা।
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
  window.location.replace("../subject-list.html");
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

<svg viewBox="0 0 360 1100"
     width="100%"
     height="auto">

<!-- STAGE BOX TEMPLATE -->

<!-- 1 -->
<rect class="stage" data-stage="s1"
 x="40" y="30" width="280" height="90" rx="14"/>
<text x="60" y="60" class="title">
Stage 1: Trust vs Mistrust
</text>
<text x="60" y="80" class="sub">
0–1 year
</text>

<!-- 2 -->
<rect class="stage" data-stage="s2"
 x="40" y="150" width="280" height="90" rx="14"/>
<text x="60" y="180" class="title">
Stage 2: Autonomy vs Shame
</text>
<text x="60" y="200" class="sub">
1–3 years
</text>

<!-- 3 -->
<rect class="stage" data-stage="s3"
 x="40" y="270" width="280" height="90" rx="14"/>
<text x="60" y="300" class="title">
Stage 3: Initiative vs Guilt
</text>
<text x="60" y="320" class="sub">
3–6 years
</text>

<!-- 4 -->
<rect class="stage" data-stage="s4"
 x="40" y="390" width="280" height="90" rx="14"/>
<text x="60" y="420" class="title">
Stage 4: Industry vs Inferiority
</text>
<text x="60" y="440" class="sub">
6–12 years
</text>

<!-- 5 -->
<rect class="stage" data-stage="s5"
 x="40" y="510" width="280" height="90" rx="14"/>
<text x="60" y="540" class="title">
Stage 5: Identity vs Role Confusion
</text>
<text x="60" y="560" class="sub">
Adolescence: 12–18 years
</text>

<!-- 6 -->
<rect class="stage" data-stage="s6"
 x="40" y="630" width="280" height="90" rx="14"/>
<text x="60" y="660" class="title">
Stage 6: Intimacy vs Isolation
</text>
<text x="60" y="680" class="sub">
Young Adulthood: 19–40 years
</text>

<!-- 7 -->
<rect class="stage" data-stage="s7"
 x="40" y="750" width="280" height="90" rx="14"/>
<text x="60" y="780" class="title">
Stage 7: Generativity vs Stagnation
</text>
<text x="60" y="800" class="sub">
Middle Adulthood: 40–65 years
</text>

<!-- 8 -->
<rect class="stage" data-stage="s8"
 x="40" y="870" width="280" height="90" rx="14"/>
<text x="60" y="900" class="title">
Stage 8: Integrity vs Despair
</text>
<text x="60" y="920" class="sub">
Old Age: 65+ years
</text>

</svg>

<style>
.stage{
  fill:#e3f2fd;
  stroke:#1565c0;
  stroke-width:2;
  cursor:pointer;
  transition:.3s;
}
.stage:hover{
  fill:#bbdefb;
}
.title{
  font:bold 14px Arial;
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

if(type === "s1"){
content = `
<h3>👶 Trust vs Mistrust</h3>
<b>Virtue:</b> Hope<br>
<b>Example:</b> Responsive caregiving builds trust.<br>
<span>যত্নশীল পরিচর্যা আস্থা তৈরি করে।</span>
`;
}

else if(type === "s2"){
content = `
<h3>🚶 Autonomy vs Shame</h3>
<b>Virtue:</b> Will<br>
<b>Example:</b> Allowing independence builds autonomy.<br>
<span>স্বাধীনতা দিলে স্বায়ত্তশাসন গড়ে ওঠে।</span>
`;
}

else if(type === "s3"){
content = `
<h3>🧒 Initiative vs Guilt</h3>
<b>Virtue:</b> Purpose<br>
<b>Example:</b> Encouraging action builds initiative.<br>
<span>উৎসাহ দিলে উদ্যোগ বাড়ে।</span>
`;
}

else if(type === "s4"){
content = `
<h3>🏫 Industry vs Inferiority</h3>
<b>Virtue:</b> Competence<br>
<b>Example:</b> School success builds competence.<br>
<span>বিদ্যালয়ের সাফল্য দক্ষতা তৈরি করে।</span>
<br><br>
🔥 CTET Most Asked
`;
}

else if(type === "s5"){
content = `
<h3>🧑 Identity vs Role Confusion</h3>
<b>Virtue:</b> Fidelity<br>
<b>Example:</b> Career exploration forms identity.<br>
<span>পেশা খোঁজা পরিচয় গঠন করে।</span>
`;
}

else if(type === "s6"){
content = `
<h3>💑 Intimacy vs Isolation</h3>
<b>Virtue:</b> Love<br>
<b>Example:</b> Deep relationships build intimacy.<br>
<span>ঘনিষ্ঠ সম্পর্ক প্রেম তৈরি করে।</span>
`;
}

else if(type === "s7"){
content = `
<h3>👨‍👩‍👧 Generativity vs Stagnation</h3>
<b>Virtue:</b> Care<br>
<b>Example:</b> Guiding next generation builds care.<br>
<span>পরবর্তী প্রজন্মকে পথ দেখানো যত্ন প্রকাশ করে।</span>
`;
}

else if(type === "s8"){
content = `
<h3>👴 Integrity vs Despair</h3>
<b>Virtue:</b> Wisdom<br>
<b>Example:</b> Life satisfaction builds integrity.<br>
<span>জীবনে সন্তুষ্টি অখণ্ডতা তৈরি করে।</span>
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