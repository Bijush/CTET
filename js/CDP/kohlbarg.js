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
Lawrence Kohlberg’s Theory of Moral Development explains how moral reasoning develops through structured stages.
</div>

<div class="feature-bn">
লরেন্স কোলবার্গের নৈতিক বিকাশ তত্ত্ব ব্যাখ্যা করে কীভাবে নৈতিক যুক্তি ধাপে ধাপে বিকশিত হয়।
</div>

</div>

<div class="feature-card">

<div class="feature-en">
Moral development occurs in invariant and universal stages.
</div>

<div class="feature-bn">
নৈতিক বিকাশ নির্দিষ্ট ও সর্বজনীন ধাপে ঘটে।
</div>

</div>

<div class="feature-card">

<div class="feature-en">
Moral reasoning (not behavior) is central to development.
</div>

<div class="feature-bn">
নৈতিক আচরণ নয়, নৈতিক যুক্তিই প্রধান।
</div>

</div>

<div class="feature-ctet">
CTET Keyword: Moral Reasoning Stages
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
<li>Theory of Moral Development</li>
<li>Stage Theory of Morality</li>
<li>Moral Reasoning Theory</li>
</ul>
</div>

<div class="feature-bn">
<ul>
<li>নৈতিক বিকাশ তত্ত্ব</li>
<li>ধাপভিত্তিক নৈতিক তত্ত্ব</li>
<li>নৈতিক যুক্তি তত্ত্ব</li>
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
<div class="feature-en">Moral reasoning develops in 3 levels.</div>
<div class="feature-bn">নৈতিক যুক্তি ৩ স্তরে বিকশিত হয়।</div>
</div>

<div class="feature-card">
<div class="feature-en">Each level has 2 stages.</div>
<div class="feature-bn">প্রতিটি স্তরে ২টি ধাপ থাকে।</div>
</div>

<div class="feature-card">
<div class="feature-en">Stages are universal and invariant.</div>
<div class="feature-bn">ধাপগুলো সর্বজনীন ও অপরিবর্তনীয়।</div>
</div>

<div class="feature-card">
<div class="feature-en">Focus is on reasoning behind decision.</div>
<div class="feature-bn">সিদ্ধান্তের পেছনের যুক্তিই মুখ্য।</div>
</div>

</div>


<!-- ======================
⚡ ULTRA SHORT REVISION
====================== -->
<div class="card">

<h3>⚡ Ultra Short Revision</h3>

<div class="feature-card">Level 1 → Pre-Conventional</div>
<div class="feature-card">Level 2 → Conventional</div>
<div class="feature-card">Level 3 → Post-Conventional</div>
<div class="feature-card">6 Stages Total</div>
<div class="feature-card">Reasoning > Behavior</div>

</div>


<!-- ======================
⚠️ CTET TRAP
====================== -->
<div class="card">

<h3>⚠️ CTET Trap Lines (পরীক্ষায় ফাঁদ প্রশ্ন)</h3>

<div class="feature-card">

<div style="color:#d32f2f; font-weight:600;">
❌ Moral behavior equals moral development.
</div>

<div style="color:#2e7d32; font-weight:600;">
✔ Moral reasoning determines stage.
</div>

</div>

<div class="feature-card">

<div style="color:#d32f2f; font-weight:600;">
❌ All adults reach Post-Conventional level.
</div>

<div style="color:#2e7d32; font-weight:600;">
✔ Many remain at Conventional level.
</div>

</div>

<div class="feature-card">

<div style="color:#d32f2f; font-weight:600;">
❌ Stages can be skipped.
</div>

<div style="color:#2e7d32; font-weight:600;">
✔ Stages are sequential and invariant.
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
1️⃣ Obeying rules to avoid punishment belongs to:
</div>

<div class="mcq-opt correct">A. Pre-Conventional Level</div>
<div class="mcq-opt">B. Conventional Level</div>
<div class="mcq-opt">C. Post-Conventional Level</div>
<div class="mcq-opt">D. Formal Operational Stage</div>

<div class="mcq-answer" style="display:none;">
✔ Stage 1: Obedience and punishment orientation.
</div>

</div>

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
2️⃣ Following rules to maintain social order belongs to:
</div>

<div class="mcq-opt">A. Stage 2</div>
<div class="mcq-opt correct">B. Stage 4</div>
<div class="mcq-opt">C. Stage 5</div>
<div class="mcq-opt">D. Stage 6</div>

<div class="mcq-answer" style="display:none;">
✔ Stage 4: Law and order orientation.
</div>

</div>

</div>


<!-- ======================
🧠 MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Memory Trick</h3>

<div class="feature-card">

<b>P-C-P</b><br><br>

P → Pre-Conventional  
C → Conventional  
P → Post-Conventional  

<br><br>

Remember: <i>People Can Progress</i>

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

<h3>🧭 Moral Development Visual Diagram</h3>

<div id="diagramContainer">
Pre-Conventional → Conventional → Post-Conventional
</div>

</div>


<!-- ======================
📊 LEVELS OVERVIEW
====================== -->
<div class="card">

<h3>📊 3 Levels Overview (৩ স্তর সংক্ষেপে)</h3>

<!-- Level 1 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Pre-Conventional Level
</div>

<div class="feature-en">
Focus: Self-interest & punishment
</div>

<div class="feature-bn">
মূল গুরুত্ব: শাস্তি এড়ানো ও ব্যক্তিগত লাভ
</div>

<div class="feature-ctet">
Usually children below 9 years
</div>

</div>

<!-- Level 2 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Conventional Level
</div>

<div class="feature-en">
Focus: Social approval & law
</div>

<div class="feature-bn">
মূল গুরুত্ব: সামাজিক অনুমোদন ও আইন মানা
</div>

<div class="feature-ctet">
Most adults remain here
</div>

</div>

<!-- Level 3 -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Post-Conventional Level
</div>

<div class="feature-en">
Focus: Moral principles & justice
</div>

<div class="feature-bn">
মূল গুরুত্ব: ন্যায় ও নৈতিক নীতি
</div>

<div class="feature-ctet">
Rare highest level
</div>

</div>

<div class="feature-card">
<div class="feature-title">
<span class="feature-num">🎯</span>
CTET Tip
</div>
<div class="feature-en">
Reasoning behind decision is most important.
</div>
<div class="feature-bn">
সিদ্ধান্তের পেছনের যুক্তিই সবচেয়ে গুরুত্বপূর্ণ।
</div>
</div>

</div>


<!-- ======================
LEVEL 1 DETAILS
====================== -->
<div class="card">

<h3>🧒 Pre-Conventional Level (প্রাক-প্রচলিত স্তর)</h3>

<b>Stage 1: Obedience & Punishment</b>

<div class="feature-card">
<div class="feature-en">
Right = Avoid punishment
</div>
<div class="feature-bn">
সঠিক = শাস্তি এড়ানো
</div>
<div class="feature-example">
Example: “I won’t steal because I’ll be punished.”
</div>
</div>

<b>Stage 2: Individualism & Exchange</b>

<div class="feature-card">
<div class="feature-en">
Right = Personal gain
</div>
<div class="feature-bn">
সঠিক = নিজের লাভ
</div>
<div class="feature-example">
Example: “You help me, I help you.”
</div>
</div>

</div>


<!-- ======================
LEVEL 2 DETAILS
====================== -->
<div class="card">

<h3>👥 Conventional Level (প্রচলিত স্তর)</h3>

<b>Stage 3: Good Boy / Good Girl</b>

<div class="feature-card">
<div class="feature-en">
Right = Approval from others
</div>
<div class="feature-bn">
সঠিক = অন্যের প্রশংসা পাওয়া
</div>
<div class="feature-example">
Example: “People will think I am good.”
</div>
</div>

<b>Stage 4: Law & Order</b>

<div class="feature-card">
<div class="feature-en">
Right = Follow rules & maintain order
</div>
<div class="feature-bn">
সঠিক = আইন মেনে চলা
</div>
<div class="feature-example">
Example: “Rules must be followed.”
</div>
<div class="feature-ctet">
CTET Most Asked
</div>
</div>

</div>


<!-- ======================
LEVEL 3 DETAILS
====================== -->
<div class="card">

<h3>⚖️ Post-Conventional Level (উত্তর-প্রচলিত স্তর)</h3>

<b>Stage 5: Social Contract</b>

<div class="feature-card">
<div class="feature-en">
Right = Laws can change for human welfare
</div>
<div class="feature-bn">
সঠিক = মানবকল্যাণের জন্য আইন পরিবর্তনযোগ্য
</div>
<div class="feature-example">
Example: “Breaking law to save life.”
</div>
</div>

<b>Stage 6: Universal Ethical Principles</b>

<div class="feature-card">
<div class="feature-en">
Right = Based on justice & conscience
</div>
<div class="feature-bn">
সঠিক = ন্যায় ও বিবেকের ভিত্তিতে সিদ্ধান্ত
</div>
<div class="feature-example">
Example: Gandhi’s moral stand.
</div>
</div>

</div>


<!-- ======================
MCQ
====================== -->
<div class="card">

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
A child says “I won’t cheat because teacher will punish me.” Stage?
<br>
<span class="feature-bn">
“আমি নকল করবো না কারণ শিক্ষক শাস্তি দেবেন।” — কোন স্তর?
</span>
</div>

<div class="mcq-opt correct">A. Stage 1</div>
<div class="mcq-opt">B. Stage 3</div>
<div class="mcq-opt">C. Stage 4</div>
<div class="mcq-opt">D. Stage 5</div>

<div class="mcq-answer" style="display:none;">
✔ Obedience & punishment orientation (Stage 1).
</div>

</div>

</div>


<!-- ======================
MEGA TABLE
====================== -->
<div class="card">

<h3>📊 Kohlberg Stage Mega Table</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Level</th>
<th>Stage</th>
<th>Main Focus</th>
<th>Keyword</th>
</tr>

<tr>
<td>Pre-Conventional</td>
<td>1</td>
<td>Punishment avoidance</td>
<td>Fear</td>
</tr>

<tr>
<td>Pre-Conventional</td>
<td>2</td>
<td>Self-interest</td>
<td>Exchange</td>
</tr>

<tr>
<td>Conventional</td>
<td>3</td>
<td>Social approval</td>
<td>Good child</td>
</tr>

<tr>
<td>Conventional</td>
<td>4</td>
<td>Law & duty</td>
<td>Order</td>
</tr>

<tr>
<td>Post-Conventional</td>
<td>5</td>
<td>Human rights</td>
<td>Contract</td>
</tr>

<tr>
<td>Post-Conventional</td>
<td>6</td>
<td>Universal ethics</td>
<td>Justice</td>
</tr>

</table>

</div>

</div>

<!-- ======================
🔥 HEINZ MORAL DILEMMA (DEEP CASE)
====================== -->
<div class="card">

<h3>🔥 Heinz Moral Dilemma (Deep Case Analysis)</h3>

<div class="feature-card">

<div class="feature-title">
📖 The Heinz Story
</div>

<div class="feature-en">
A woman is dying of cancer. A druggist has discovered a medicine that can save her life, but he is charging 10 times its cost.\nHeinz, the husband, cannot afford the price.\nHe asks the druggist to sell it cheaper or allow payment later, but the druggist refuses.\nHeinz then considers stealing the medicine.\nShould Heinz steal the drug?
</div>

<div class="feature-bn">
একজন মহিলা ক্যান্সারে মারা যাচ্ছেন। একজন ওষুধ ব্যবসায়ী এমন একটি ওষুধ আবিষ্কার করেছেন যা তাকে বাঁচাতে পারে, কিন্তু তিনি উৎপাদন খরচের ১০ গুণ দাম নিচ্ছেন।\nহেইঞ্জ তার স্ত্রীকে বাঁচাতে চায়, কিন্তু টাকা জোগাড় করতে পারে না।\nতিনি কম দামে বা পরে টাকা দেওয়ার প্রস্তাব দেন, কিন্তু ব্যবসায়ী অস্বীকার করেন।\nতখন হেইঞ্জ ওষুধ চুরি করার কথা ভাবেন।\nহেইঞ্জ কি ওষুধ চুরি করা উচিত?
</div>

</div>

</div>


<!-- ======================
🧠 STAGE-WISE ANALYSIS
====================== -->
<div class="card">

<h3>🧠 Stage-wise Moral Reasoning Analysis</h3>

<!-- Stage 1 -->
<div class="feature-card">
<b>Stage 1: Obedience & Punishment</b><br>
“He should not steal because he will go to jail.”
<br>
<span class="feature-bn">
“চুরি করলে জেলে যাবে, তাই করা উচিত নয়।”
</span>
</div>

<!-- Stage 2 -->
<div class="feature-card">
<b>Stage 2: Individualism</b><br>
“He should steal because he loves his wife.”
<br>
<span class="feature-bn">
“স্ত্রীকে বাঁচাতে চুরি করা উচিত।”
</span>
</div>

<!-- Stage 3 -->
<div class="feature-card">
<b>Stage 3: Good Boy Orientation</b><br>
“People will think he is a good husband.”
<br>
<span class="feature-bn">
“মানুষ তাকে ভালো স্বামী বলবে।”
</span>
</div>

<!-- Stage 4 -->
<div class="feature-card">
<b>Stage 4: Law & Order</b><br>
“He should not steal because law must be followed.”
<br>
<span class="feature-bn">
“আইন ভাঙা উচিত নয়।”
</span>
</div>

<!-- Stage 5 -->
<div class="feature-card">
<b>Stage 5: Social Contract</b><br>
“Law can be changed if it harms human life.”
<br>
<span class="feature-bn">
“মানবজীবন রক্ষার জন্য আইন পরিবর্তনযোগ্য।”
</span>
</div>

<!-- Stage 6 -->
<div class="feature-card">
<b>Stage 6: Universal Ethics</b><br>
“Saving life is a higher moral principle than property.”
<br>
<span class="feature-bn">
“জীবন রক্ষা সম্পত্তির চেয়ে বড় নৈতিক নীতি।”
</span>
</div>

</div>

<!-- ======================
🧠 META QUESTION – ANSWER – EXPLANATION (HEINZ + STAGE NAME)
====================== -->
<div class="card">

<h3>🧠 Meta Analytical Q–A (Heinz Dilemma + Stage Identification)</h3>
<div class="feature-bn">হেইঞ্জ নৈতিক সমস্যা – গভীর বিশ্লেষণমূলক প্রশ্নোত্তর (স্তরসহ)</div>


<!-- Q1 -->
<div class="feature-card">
<b>Q1️⃣ What is the real moral issue in the Heinz dilemma?</b><br>
<span class="feature-bn">হেইঞ্জ সমস্যার আসল নৈতিক প্রশ্ন কী?</span><br><br>

<b>Answer:</b> Conflict between law and human life.<br>
<span class="feature-bn">উত্তর: আইন ও মানবজীবনের সংঘাত।</span><br><br>

<b>Stage Followed:</b> Social Contract Orientation / Universal Ethical Principles<br>
<span class="feature-bn">স্তর: সামাজিক চুক্তি অভিমুখ / সর্বজনীন নৈতিক নীতি</span><br><br>

<b>Reason:</b> The thinker evaluates whether law should serve human welfare.<br>
<span class="feature-bn">কারণ: এখানে আইন মানবকল্যাণের জন্য কিনা তা বিচার করা হচ্ছে।</span><br><br>

<b>Explanation:</b> The dilemma is about prioritizing life over rigid legal structure.<br>
<span class="feature-bn">ব্যাখ্যা: এখানে কঠোর আইনের উপরে জীবনের অগ্রাধিকার নির্ধারণ করা হচ্ছে।</span>
</div>


<!-- Q2 -->
<div class="feature-card">
<b>Q2️⃣ Does breaking a law automatically make an act immoral?</b><br>
<span class="feature-bn">আইন ভাঙা মানেই কি কাজটি অনৈতিক?</span><br><br>

<b>Answer:</b> Not necessarily.<br>
<span class="feature-bn">উত্তর: সবসময় নয়।</span><br><br>

<b>Stage Followed:</b> Social Contract Orientation<br>
<span class="feature-bn">স্তর: সামাজিক চুক্তি অভিমুখ</span><br><br>

<b>Reason:</b> Laws are seen as flexible agreements for social welfare.<br>
<span class="feature-bn">কারণ: আইনকে পরিবর্তনযোগ্য সামাজিক চুক্তি হিসেবে দেখা হচ্ছে।</span><br><br>

<b>Explanation:</b> If a law harms human dignity, its moral validity may be challenged.<br>
<span class="feature-bn">ব্যাখ্যা: আইন মানব মর্যাদার বিরুদ্ধে গেলে তা প্রশ্নবিদ্ধ হতে পারে।</span>
</div>


<!-- Q3 -->
<div class="feature-card">
<b>Q3️⃣ Should intention be considered while judging Heinz?</b><br>
<span class="feature-bn">হেইঞ্জকে বিচার করার সময় কি তার উদ্দেশ্য বিবেচনা করা উচিত?</span><br><br>

<b>Answer:</b> Yes, intention is morally significant.<br>
<span class="feature-bn">উত্তর: হ্যাঁ, উদ্দেশ্য গুরুত্বপূর্ণ।</span><br><br>

<b>Stage Followed:</b> Good Boy–Good Girl Orientation / Universal Ethical Principles<br>
<span class="feature-bn">স্তর: ভালো ছেলে–ভালো মেয়ে অভিমুখ / সর্বজনীন নৈতিক নীতি</span><br><br>

<b>Reason:</b> Moral evaluation considers motive and human concern.<br>
<span class="feature-bn">কারণ: এখানে মানবিক উদ্দেশ্য ও সহানুভূতির গুরুত্ব দেওয়া হচ্ছে।</span><br><br>

<b>Explanation:</b> Moral reasoning examines justification, not merely the act itself.<br>
<span class="feature-bn">ব্যাখ্যা: নৈতিক বিশ্লেষণে কাজের চেয়ে যুক্তি গুরুত্বপূর্ণ।</span>
</div>


<!-- Q4 -->
<div class="feature-card">
<b>Q4️⃣ If Heinz steals and accepts punishment, does that justify his act?</b><br>
<span class="feature-bn">হেইঞ্জ যদি চুরি করে শাস্তি মেনে নেয়, তাহলে কি তার কাজ ন্যায্য হয়?</span><br><br>

<b>Answer:</b> It reflects moral conviction but does not remove legal violation.<br>
<span class="feature-bn">উত্তর: এটি নৈতিক দৃঢ়তা প্রকাশ করে, তবে আইন ভঙ্গ মুছে দেয় না।</span><br><br>

<b>Stage Followed:</b> Universal Ethical Principles<br>
<span class="feature-bn">স্তর: সর্বজনীন নৈতিক নীতি</span><br><br>

<b>Reason:</b> Personal conscience is prioritized over fear of punishment.<br>
<span class="feature-bn">কারণ: এখানে শাস্তির ভয়ের চেয়ে বিবেককে অগ্রাধিকার দেওয়া হয়েছে।</span><br><br>

<b>Explanation:</b> Accepting punishment shows internal moral commitment beyond external rule.<br>
<span class="feature-bn">ব্যাখ্যা: শাস্তি মেনে নেওয়া অন্তর্গত নৈতিক নীতির দৃঢ়তা প্রকাশ করে।</span>
</div>


<!-- Q5 -->
<div class="feature-card">
<b>Q5️⃣ Is saving one life sufficient reason to challenge legal order?</b><br>
<span class="feature-bn">একজনের জীবন রক্ষার জন্য কি আইন অতিক্রম করা যথেষ্ট কারণ?</span><br><br>

<b>Answer:</b> It depends on one's moral hierarchy.<br>
<span class="feature-bn">উত্তর: এটি ব্যক্তির মূল্যবোধের অগ্রাধিকার নির্ভর।</span><br><br>

<b>Stage Followed:</b> Law & Order Orientation vs Universal Ethical Principles<br>
<span class="feature-bn">স্তর: আইন ও শৃঙ্খলা অভিমুখ বনাম সর্বজনীন নৈতিক নীতি</span><br><br>

<b>Reason:</b> Some value social stability, others value human dignity above law.<br>
<span class="feature-bn">কারণ: কেউ সামাজিক শৃঙ্খলা অগ্রাধিকার দেয়, কেউ মানব মর্যাদা।</span><br><br>

<b>Explanation:</b> The dilemma reveals the conflict between system preservation and moral principle.<br>
<span class="feature-bn">ব্যাখ্যা: এখানে সামাজিক কাঠামো রক্ষা ও নৈতিক নীতির সংঘাত প্রকাশ পায়।</span>
</div>


<!-- Q6 -->
<div class="feature-card">
<b>Q6️⃣ What makes this dilemma psychologically powerful?</b><br>
<span class="feature-bn">এই নৈতিক সমস্যাটি মানসিকভাবে শক্তিশালী কেন?</span><br><br>

<b>Answer:</b> It creates unavoidable moral tension.<br>
<span class="feature-bn">উত্তর: এটি অনিবার্য নৈতিক টানাপোড়েন সৃষ্টি করে।</span><br><br>

<b>Stage Followed:</b> Applicable across all orientations (reveals dominant reasoning pattern)<br>
<span class="feature-bn">স্তর: সকল অভিমুখে প্রযোজ্য (প্রধান যুক্তি প্রকাশ করে)</span><br><br>

<b>Reason:</b> Every decision compromises either law or life.<br>
<span class="feature-bn">কারণ: যেকোনো সিদ্ধান্তেই আইন বা জীবন—কোনো একটিকে আপস করতে হয়।</span><br><br>

<b>Explanation:</b> The dilemma exposes internal value structure of the thinker.<br>
<span class="feature-bn">ব্যাখ্যা: এটি ব্যক্তির অভ্যন্তরীণ মূল্যবোধের কাঠামো প্রকাশ করে।</span>
</div>

</div>
<!-- ======================
🔥 CTET 2027 EXAMINER PREDICTION SET (HEINZ)
====================== -->
<div class="card">

<h3>🔥 CTET 2027 Prediction – Heinz Moral Dilemma</h3>
<div class="feature-bn">CTET ২০২৭ সম্ভাব্য প্রশ্নধারা – হেইঞ্জ নৈতিক সমস্যা</div>


<!-- P1 -->
<div class="feature-card">
<b>Q1️⃣ Heinz says, “If laws do not protect life, they lose their moral authority.”  
This reflects which orientation?</b><br>
<span class="feature-bn">“আইন যদি জীবন রক্ষা না করে, তবে তার নৈতিক বৈধতা থাকে না।” — এটি কোন অভিমুখ?</span><br><br>

<b>Answer:</b> Universal Ethical Principles<br>
<span class="feature-bn">উত্তর: সর্বজনীন নৈতিক নীতি</span><br><br>

<b>Reason:</b> Justice is placed above legal structure.<br>
<span class="feature-bn">কারণ: এখানে আইনের উপরে ন্যায়কে অগ্রাধিকার দেওয়া হয়েছে।</span><br><br>

<b>Examiner Trap:</b> Law is mentioned → Many choose Law & Order (Wrong).<br>
<span class="feature-bn">ফাঁদ: আইনের উল্লেখ থাকায় অনেকেই আইন ও শৃঙ্খলা বেছে নেবে (ভুল)।</span>
</div>


<!-- P2 -->
<div class="feature-card">
<b>Q2️⃣ Heinz says, “I must not steal because society will collapse if everyone breaks the law.”  
This reflects?</b><br>
<span class="feature-bn">“সবাই আইন ভাঙলে সমাজ ভেঙে পড়বে, তাই চুরি করা উচিত নয়।” — এটি কোন অভিমুখ?</span><br><br>

<b>Answer:</b> Law & Order Orientation<br>
<span class="feature-bn">উত্তর: আইন ও শৃঙ্খলা অভিমুখ</span><br><br>

<b>Reason:</b> Focus on maintaining social stability.<br>
<span class="feature-bn">কারণ: সামাজিক স্থিতিশীলতা রক্ষার উপর জোর।</span><br><br>

<b>Examiner Focus:</b> Collective consequence reasoning = Law & Order.<br>
<span class="feature-bn">পরীক্ষার ফোকাস: সামাজিক পরিণতি ভাবা = আইন ও শৃঙ্খলা।</span>
</div>


<!-- P3 -->
<div class="feature-card">
<b>Q3️⃣ Heinz says, “I will steal because I would expect someone to help me in future.”  
This reflects?</b><br>
<span class="feature-bn">“আমি চুরি করব, কারণ ভবিষ্যতে আমিও সাহায্য পাব।” — এটি কোন অভিমুখ?</span><br><br>

<b>Answer:</b> Individualism & Exchange Orientation<br>
<span class="feature-bn">উত্তর: ব্যক্তিস্বার্থ ও বিনিময় অভিমুখ</span><br><br>

<b>Reason:</b> Reciprocity mindset (You help me, I help you).<br>
<span class="feature-bn">কারণ: পারস্পরিক লাভের মানসিকতা।</span><br><br>

<b>Examiner Trap:</b> Love mentioned → Many choose Good Boy orientation (Wrong).<br>
<span class="feature-bn">ফাঁদ: আবেগ দেখে অনেকে ভালো ছেলে অভিমুখ বেছে নেবে (ভুল)।</span>
</div>


<!-- P4 -->
<div class="feature-card">
<b>Q4️⃣ Heinz says, “People will think I am a bad husband if I don’t save her.”  
This reflects?</b><br>
<span class="feature-bn">“আমি স্ত্রীকে বাঁচাতে না পারলে মানুষ আমাকে খারাপ স্বামী বলবে।” — এটি কোন অভিমুখ?</span><br><br>

<b>Answer:</b> Good Boy–Good Girl Orientation<br>
<span class="feature-bn">উত্তর: ভালো ছেলে–ভালো মেয়ে অভিমুখ</span><br><br>

<b>Reason:</b> Focus on social approval.<br>
<span class="feature-bn">কারণ: সামাজিক অনুমোদনের উপর গুরুত্ব।</span><br><br>

<b>Examiner Focus:</b> Approval-based reasoning ≠ Highest stage.<br>
<span class="feature-bn">পরীক্ষার ফোকাস: প্রশংসা পাওয়া উচ্চস্তর নয়।</span>
</div>


<!-- P5 -->
<div class="feature-card">
<b>Q5️⃣ Heinz says, “Stealing is wrong, but life has greater moral worth than property.”  
This reflects?</b><br>
<span class="feature-bn">“চুরি ভুল, কিন্তু জীবন সম্পত্তির চেয়ে বেশি মূল্যবান।” — এটি কোন অভিমুখ?</span><br><br>

<b>Answer:</b> Universal Ethical Principles<br>
<span class="feature-bn">উত্তর: সর্বজনীন নৈতিক নীতি</span><br><br>

<b>Reason:</b> Value hierarchy based on abstract justice.<br>
<span class="feature-bn">কারণ: বিমূর্ত ন্যায়ভিত্তিক মূল্যবোধের অগ্রাধিকার।</span><br><br>

<b>CTET 2027 Pattern:</b> Mixed statement — Identify dominant justification.<br>
<span class="feature-bn">২০২৭ ধরণ: মিশ্র বক্তব্যে প্রধান যুক্তি নির্ধারণ।</span>
</div>


<!-- P6 -->
<div class="feature-card">
<b>Q6️⃣ If an adult answers at Individualism Orientation level, what does it show?</b><br>
<span class="feature-bn">প্রাপ্তবয়স্ক যদি ব্যক্তিস্বার্থ স্তরে উত্তর দেয়, তা কী নির্দেশ করে?</span><br><br>

<b>Answer:</b> Moral stage is not age-fixed.<br>
<span class="feature-bn">উত্তর: নৈতিক স্তর বয়স নির্ভর নয়।</span><br><br>

<b>Reason:</b> Development is sequential but not guaranteed by age.<br>
<span class="feature-bn">কারণ: বিকাশ ক্রমিক হলেও বয়স দ্বারা নিশ্চিত নয়।</span><br><br>

<b>Examiner Prediction:</b> Age ≠ Stage question likely.<br>
<span class="feature-bn">সম্ভাব্য প্রশ্ন: বয়স ≠ স্তর।</span>
</div>


</div>

<!-- ======================
⚠️ CTET TRAP FOCUS
====================== -->
<div class="card">

<h3>⚠️ CTET Trap Focus</h3>

<div class="feature-card">
❌ Correct answer is NOT about stealing or not stealing.\n✔ Focus on reasoning behind decision.
</div>

<div class="feature-card">
❌ Moral action ≠ Moral stage.\n✔ Moral reasoning determines stage.
</div>

</div>


<!-- ======================
📝 MINI MCQ
====================== -->
<div class="card">

<div class="mcq-box" onclick="toggleMCQ(this)">

<div class="mcq-q">
Heinz says, “Even if I go to jail, saving a human life is more important than law.”\nThis reflects:
</div>

<div class="mcq-opt">A. Stage 2</div>
<div class="mcq-opt">B. Stage 3</div>
<div class="mcq-opt">C. Stage 4</div>
<div class="mcq-opt correct">D. Stage 6</div>

<div class="mcq-answer" style="display:none;">
✔ Universal ethical principle (life > law).
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

<h3>⚠️ Criticism of Kohlberg’s Moral Development Theory</h3>

<!-- ======================
1️⃣ GENDER BIAS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">1</span>
Gender Bias (Justice Orientation Bias)
</div>

<div class="feature-en">
Kohlberg’s theory was based mainly on boys and emphasized justice over care.
</div>

<div class="feature-bn">
কোলবার্গের তত্ত্ব প্রধানত ছেলেদের উপর ভিত্তি করে — ন্যায়ভিত্তিক চিন্তাকে বেশি গুরুত্ব দেয়।
</div>

<div class="feature-ctet">
Major Critic: <b>Carol Gilligan</b>
</div>

<div class="feature-example">
Care orientation ignored.
</div>

</div>

<!-- ======================
2️⃣ CULTURAL BIAS
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">2</span>
Cultural Bias
</div>

<div class="feature-en">
Theory is based on Western values and may not apply universally.
</div>

<div class="feature-bn">
তত্ত্বটি পাশ্চাত্য সংস্কৃতির উপর ভিত্তি করে — সব সংস্কৃতিতে সমানভাবে প্রযোজ্য নাও হতে পারে।
</div>

<div class="feature-ctet">
Collectivist cultures value harmony more than abstract justice.
</div>

</div>

<!-- ======================
3️⃣ MORAL REASONING ≠ MORAL BEHAVIOUR
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">3</span>
Moral Reasoning ≠ Moral Behaviour
</div>

<div class="feature-en">
A person may reason at a high stage but not act morally.
</div>

<div class="feature-bn">
কেউ উচ্চস্তরের নৈতিক যুক্তি দিতে পারে, কিন্তু আচরণে তা নাও দেখাতে পারে।
</div>

<div class="feature-example">
Knowing justice ≠ doing justice.
</div>

</div>

<!-- ======================
4️⃣ RIGID STAGE THEORY
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">4</span>
Rigid Stage Sequence
</div>

<div class="feature-en">
Not everyone follows fixed sequential stages.
</div>

<div class="feature-bn">
সবাই একই ধাপে ক্রমানুসারে অগ্রসর হয় না।
</div>

<div class="feature-ctet">
Age ≠ Moral Stage
</div>

</div>

<!-- ======================
5️⃣ LIMITED SAMPLE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">5</span>
Limited Research Sample
</div>

<div class="feature-en">
Research conducted mainly on American boys.
</div>

<div class="feature-bn">
গবেষণা মূলত আমেরিকান ছেলেদের উপর করা হয়েছিল।
</div>

<div class="feature-ctet">
Results lack generalization.
</div>

</div>

<!-- ======================
6️⃣ HYPOTHETICAL DILEMMA ISSUE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">6</span>
Hypothetical Dilemma Limitation
</div>

<div class="feature-en">
People may respond differently in real-life situations.
</div>

<div class="feature-bn">
বাস্তব জীবনে মানুষ কল্পিত প্রশ্নের চেয়ে ভিন্নভাবে আচরণ করতে পারে।
</div>

<div class="feature-example">
Heinz dilemma ≠ real-life action.
</div>

</div>

<!-- ======================
7️⃣ EMOTION IGNORED
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">7</span>
Ignored Role of Emotion
</div>

<div class="feature-en">
Theory focuses on reasoning but ignores emotional factors.
</div>

<div class="feature-bn">
তত্ত্বটি যুক্তির উপর জোর দেয় — আবেগের ভূমিকা উপেক্ষা করে।
</div>

</div>

<!-- ======================
8️⃣ STAGE 6 RARE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">8</span>
Stage 6 Rarely Found
</div>

<div class="feature-en">
Very few people consistently show Universal Ethical reasoning.
</div>

<div class="feature-bn">
খুব কম মানুষ নিয়মিতভাবে সর্বজনীন নৈতিক নীতিতে পৌঁছায়।
</div>

</div>

<!-- ======================
9️⃣ OVEREMPHASIS ON JUSTICE
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">9</span>
Overemphasis on Justice
</div>

<div class="feature-en">
Neglected care, empathy and relationship-based morality.
</div>

<div class="feature-bn">
যত্ন, সহানুভূতি ও সম্পর্কভিত্তিক নৈতিকতা কম গুরুত্ব পায়।
</div>

</div>

<!-- ======================
🔟 CONTEXT DEPENDENT
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">10</span>
Context Dependent Morality
</div>

<div class="feature-en">
Moral reasoning may vary depending on situation.
</div>

<div class="feature-bn">
পরিস্থিতি অনুযায়ী নৈতিক যুক্তি পরিবর্তিত হতে পারে।
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

• Gender bias (Gilligan)<br>
• Cultural bias<br>
• Moral reasoning ≠ behaviour<br>
• Stage rigidity<br>
• Hypothetical dilemma limitation

</div>

</div>
<div class="card">

<h3>⚖️ Gilligan vs Kohlberg Debate</h3>
<div class="feature-bn">গিলিগান বনাম কোলবার্গ – নৈতিক বিকাশ বিতর্ক</div>


<!-- ======================
CORE DIFFERENCE
====================== -->
<div class="feature-card">

<b>🔹 Core Difference:</b><br>
Kohlberg → Justice-based morality<br>
<span class="feature-bn">কোলবার্গ → ন্যায়ভিত্তিক নৈতিকতা</span><br><br>

Gilligan → Care-based morality<br>
<span class="feature-bn">গিলিগান → যত্নভিত্তিক নৈতিকতা</span>

</div>


<!-- ======================
GENDER DEBATE
====================== -->
<div class="feature-card">

<b>🔹 Gender Bias Issue:</b><br>
Gilligan argued that Kohlberg’s research was male-centered.<br>
<span class="feature-bn">গিলিগান বলেন কোলবার্গের গবেষণা পুরুষকেন্দ্রিক ছিল।</span><br><br>

Girls’ care reasoning appeared “lower” because justice was prioritized.<br>
<span class="feature-bn">ন্যায়ভিত্তিক যুক্তিকে বেশি গুরুত্ব দেওয়ায় যত্নভিত্তিক যুক্তি কম মূল্যায়িত হয়।</span>

</div>


<!-- ======================
MORAL ORIENTATION
====================== -->
<div class="feature-card">

<b>🔹 Moral Orientation Difference:</b><br>
Kohlberg → Rights, rules, universal principles<br>
<span class="feature-bn">কোলবার্গ → অধিকার, নিয়ম, সর্বজনীন নীতি</span><br><br>

Gilligan → Relationships, empathy, responsibility<br>
<span class="feature-bn">গিলিগান → সম্পর্ক, সহানুভূতি, দায়িত্ব</span>

</div>


<!-- ======================
HEINZ INTERPRETATION
====================== -->
<div class="feature-card">

<b>🔹 Heinz Dilemma View:</b><br>
Kohlberg focuses on abstract justice reasoning.<br>
<span class="feature-bn">কোলবার্গ বিমূর্ত ন্যায়ভিত্তিক যুক্তির উপর জোর দেন।</span><br><br>

Gilligan focuses on relational care (husband–wife bond).<br>
<span class="feature-bn">গিলিগান সম্পর্কভিত্তিক যত্ন ও দায়িত্বের উপর জোর দেন।</span>

</div>


<!-- ======================
STAGE MODEL VS FLEXIBLE
====================== -->
<div class="feature-card">

<b>🔹 Development Model:</b><br>
Kohlberg → Fixed sequential stages<br>
<span class="feature-bn">কোলবার্গ → নির্দিষ্ট ক্রমিক ধাপ</span><br><br>

Gilligan → Context-sensitive, relational development<br>
<span class="feature-bn">গিলিগান → পরিস্থিতিনির্ভর ও সম্পর্কভিত্তিক বিকাশ</span>

</div>


<!-- ======================
MODERN VIEW
====================== -->
<div class="feature-card">

<b>🔹 Modern Psychological View:</b><br>
Both justice and care are important in moral reasoning.<br>
<span class="feature-bn">আধুনিক দৃষ্টিভঙ্গিতে ন্যায় ও যত্ন — উভয়ই গুরুত্বপূর্ণ।</span><br><br>

Mature morality includes principles + empathy.<br>
<span class="feature-bn">পরিপক্ব নৈতিকতায় নীতি ও সহানুভূতি উভয়ই অন্তর্ভুক্ত।</span>

</div>


<!-- ======================
CTET FOCUS
====================== -->
<div class="feature-card">

<b>🎯 CTET Focus:</b><br>
• Gender bias criticism<br>
<span class="feature-bn">লিঙ্গভিত্তিক সমালোচনা</span><br>

• Justice vs Care distinction<br>
<span class="feature-bn">ন্যায় বনাম যত্ন পার্থক্য</span><br>

• Heinz interpretation difference<br>
<span class="feature-bn">হেইঞ্জ সমস্যার ভিন্ন বিশ্লেষণ</span>

</div>


<!-- ======================
MEMORY TRICK
====================== -->
<div class="feature-card">

<b>🧠 Memory Trick:</b><br><br>

<b>J – C – R</b><br><br>

J → Justice (Kohlberg)<br>
<span class="feature-bn">ন্যায়</span><br>

C → Care (Gilligan)<br>
<span class="feature-bn">যত্ন</span><br>

R → Relationship focus<br>
<span class="feature-bn">সম্পর্ককেন্দ্রিকতা</span>

</div>

</div>

<!-- ======================
MAJOR CRITICS (CLEAR VERSION – LINE BY LINE BILINGUAL)
====================== -->
<div class="feature-card">

<div class="feature-title">
<span class="feature-num">👨‍🏫</span>
Who Criticized Kohlberg & Why
</div>

<div class="feature-en">

<b>Carol Gilligan criticized Kohlberg →</b><br>
She argued that Kohlberg’s theory is male-centered and ignores care-based morality.<br>
<span class="feature-bn">
ক্যারল গিলিগান কোলবার্গকে সমালোচনা করেন →  
তিনি বলেন, তত্ত্বটি পুরুষকেন্দ্রিক এবং যত্নভিত্তিক নৈতিকতাকে উপেক্ষা করে।
</span>
<br><br>

<b>Cross-cultural researchers criticized Kohlberg →</b><br>
They argued that his theory reflects Western values and lacks cultural universality.<br>
<span class="feature-bn">
বিভিন্ন সংস্কৃতি-ভিত্তিক গবেষক কোলবার্গকে সমালোচনা করেন →  
তারা বলেন, এটি পাশ্চাত্য মূল্যবোধের উপর ভিত্তি করে এবং সর্বজনীন নয়।
</span>
<br><br>

<b>Albert Bandura criticized Kohlberg →</b><br>
He argued that moral reasoning does not always match moral behavior (Social Learning gap).<br>
<span class="feature-bn">
আলবার্ট ব্যান্ডুরা কোলবার্গকে সমালোচনা করেন →  
তিনি বলেন, নৈতিক যুক্তি সবসময় নৈতিক আচরণের সাথে মিল নাও খেতে পারে (সামাজিক শিক্ষণ ফাঁক)।
</span>

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

<b>G-C-B-R-H-E-S-J-C</b><br><br>

G → Gender bias<br>
C → Cultural bias<br>
B → Behaviour gap<br>
R → Rigid stages<br>
H → Hypothetical dilemma issue<br>
E → Emotion ignored<br>
S → Stage 6 rare<br>
J → Justice overemphasis<br>
C → Context dependent

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

<h3>🆚 Kohlberg vs Other Theories (CTET Comparison)</h3>

</div>

<!-- ======================
KOHLBERG vs PIAGET
====================== -->
<div class="card">

<h3>Kohlberg vs Piaget</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Kohlberg</th>
<th>Piaget</th>
</tr>

<tr>
<td>Development Type</td>
<td>Moral Development</td>
<td>Cognitive Development</td>
</tr>

<tr>
<td>Main Focus</td>
<td>Right vs Wrong Judgment</td>
<td>Thinking & Logic</td>
</tr>

<tr>
<td>Stages</td>
<td>3 Levels / 6 Stages</td>
<td>4 Stages</td>
</tr>

<tr>
<td>Basis of Study</td>
<td>Moral Dilemmas</td>
<td>Task-based Experiments</td>
</tr>

<tr>
<td>Age Link</td>
<td>Yes (but not fixed)</td>
<td>Yes (age-specific stages)</td>
</tr>

</table>

</div>

<div class="feature-ctet">
CTET Trap: Piaget = Thinking, Kohlberg = Moral reasoning
</div>

</div>

<!-- ======================
KOHLBERG vs GILLIGAN
====================== -->
<div class="card">

<h3>Kohlberg vs Gilligan</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Kohlberg</th>
<th>Gilligan</th>
</tr>

<tr>
<td>Moral Orientation</td>
<td>Justice-based</td>
<td>Care-based</td>
</tr>

<tr>
<td>Sample</td>
<td>Mostly boys</td>
<td>Included girls</td>
</tr>

<tr>
<td>Highest Morality</td>
<td>Universal justice principle</td>
<td>Responsibility & care</td>
</tr>

<tr>
<td>Criticism</td>
<td>Male-centered</td>
<td>Critic of Kohlberg</td>
</tr>

<tr>
<td>Key Concept</td>
<td>Moral reasoning stages</td>
<td>Ethics of care</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Gilligan → Care morality vs Justice morality
</div>

</div>

<!-- ======================
KOHLBERG vs BANDURA
====================== -->
<div class="card">

<h3>Kohlberg vs Bandura</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Kohlberg</th>
<th>Bandura</th>
</tr>

<tr>
<td>Learning Type</td>
<td>Stage-based reasoning</td>
<td>Observational learning</td>
</tr>

<tr>
<td>Focus</td>
<td>Moral thinking</td>
<td>Moral behavior</td>
</tr>

<tr>
<td>Method</td>
<td>Dilemma discussion</td>
<td>Model imitation</td>
</tr>

<tr>
<td>Gap View</td>
<td>Reasoning centered</td>
<td>Reasoning ≠ Behavior</td>
</tr>

<tr>
<td>Key Idea</td>
<td>Sequential stages</td>
<td>Social learning theory</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Bandura → Behavior learned by modeling
</div>

</div>

<!-- ======================
KOHLBERG vs SKINNER
====================== -->
<div class="card">

<h3>Kohlberg vs Skinner</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Kohlberg</th>
<th>Skinner</th>
</tr>

<tr>
<td>Development Type</td>
<td>Moral reasoning</td>
<td>Behavior conditioning</td>
</tr>

<tr>
<td>Focus</td>
<td>Internal justification</td>
<td>External reinforcement</td>
</tr>

<tr>
<td>Learning Method</td>
<td>Discussion & reflection</td>
<td>Reward & punishment</td>
</tr>

<tr>
<td>View of Morality</td>
<td>Cognitive growth</td>
<td>Conditioned response</td>
</tr>

<tr>
<td>Key Word</td>
<td>Moral dilemma</td>
<td>Reinforcement</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Skinner → Behavior shaped externally
</div>

</div>

<!-- ======================
KOHLBERG vs ERIKSON
====================== -->
<div class="card">

<h3>Kohlberg vs Erikson</h3>

<div class="table-scroll">

<table class="stage-table">

<tr>
<th>Basis</th>
<th>Kohlberg</th>
<th>Erikson</th>
</tr>

<tr>
<td>Development Type</td>
<td>Moral</td>
<td>Psychosocial</td>
</tr>

<tr>
<td>Stages</td>
<td>6 stages</td>
<td>8 stages</td>
</tr>

<tr>
<td>Focus</td>
<td>Right–Wrong judgment</td>
<td>Identity & personality</td>
</tr>

<tr>
<td>Method</td>
<td>Moral dilemma</td>
<td>Life crisis resolution</td>
</tr>

<tr>
<td>Scope</td>
<td>Mainly childhood → adolescence</td>
<td>Lifespan theory</td>
</tr>

</table>

</div>

<div class="feature-ctet">
Erikson → Identity crisis (Adolescence)
</div>

</div>

<!-- ======================
MEGA MEMORY TRICK
====================== -->
<div class="card">

<h3>🧠 Memory Trick — Kohlberg Link</h3>

<div class="feature-card">

<b>K-G-B-S-E-P</b><br><br>

K → Kohlberg → Moral stages<br>
G → Gilligan → Care ethics<br>
B → Bandura → Modeling behavior<br>
S → Skinner → Reinforcement<br>
E → Erikson → Psychosocial crisis<br>
P → Piaget → Cognitive thinking

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

<h3>👩‍🏫 Teaching Implications of Kohlberg’s Theory (With Examples)</h3>
<div class="feature-bn">কোলবার্গের তত্ত্বের শিক্ষণগত প্রভাব (উদাহরণসহ)</div>

<!-- ======================
CORE IDEA
====================== -->
<div class="feature-card">
<b>📘 Core Idea</b><br>
Teaching should promote higher level moral reasoning through discussion and dilemma situations.<br>
<span class="feature-bn">
শিক্ষণ এমন হওয়া উচিত যাতে আলোচনা ও নৈতিক সমস্যার মাধ্যমে উচ্চস্তরের নৈতিক যুক্তি বিকাশ পায়।
</span>
<br><br>
<b>CTET Keyword:</b> Moral dilemma discussion.<br>
<span class="feature-bn">
CTET কী-শব্দ: নৈতিক সমস্যা আলোচনা।
</span>
</div>

<!-- ======================
1 MORAL DISCUSSION
====================== -->
<div class="feature-card">
<b>1. Use Moral Dilemma Method</b><br>
নৈতিক সমস্যা পদ্ধতি ব্যবহার<br><br>

Present real-life moral conflicts and encourage discussion.<br>
<span class="feature-bn">
বাস্তব জীবনের নৈতিক সংঘাত উপস্থাপন করে আলোচনা উৎসাহিত করা।
</span>
<br><br>

<b>Example:</b> Teacher presents Heinz dilemma and asks:<br>
“Should he steal? Why?”<br>
<span class="feature-bn">
উদাহরণ: শিক্ষক হেইঞ্জের কেস দেন এবং জিজ্ঞেস করেন — “তার কি চুরি করা উচিত? কেন?”
</span>
</div>

<!-- ======================
2 JUSTIFICATION FOCUS
====================== -->
<div class="feature-card">
<b>2. Focus on Reasoning, Not Answer</b><br>
উত্তরের চেয়ে যুক্তির উপর গুরুত্ব<br><br>

Teacher should evaluate “why” not “yes/no”.<br>
<span class="feature-bn">
শিক্ষক “কেন” বিশ্লেষণ করবেন, শুধু হ্যাঁ/না নয়।
</span>
<br><br>

<b>Example:</b><br>
Two students say “Yes”.<br>
One says “Because law can change” → Higher stage.<br>
Other says “Because I love my wife” → Lower stage.<br>
<span class="feature-bn">
উদাহরণ: দুইজন শিক্ষার্থী “হ্যাঁ” বলেছে।<br>
একজন বলে “আইন পরিবর্তনযোগ্য” → উচ্চস্তর।<br>
অন্যজন বলে “আমি স্ত্রীকে ভালোবাসি” → নিম্নস্তর।
</span>
</div>

<!-- ======================
3 DEMOCRATIC CLASSROOM
====================== -->
<div class="feature-card">
<b>3. Democratic Classroom Environment</b><br>
গণতান্ত্রিক শ্রেণিকক্ষ পরিবেশ<br><br>

Encourage free expression and respectful disagreement.<br>
<span class="feature-bn">
স্বাধীন মত প্রকাশ ও সম্মানজনক মতভেদকে উৎসাহিত করা।
</span>
<br><br>

<b>Example:</b> Students allowed to disagree without punishment.<br>
<span class="feature-bn">
উদাহরণ: মতভেদ করলেও শাস্তি দেওয়া হয় না।
</span>
</div>

<!-- ======================
4 PEER DISCUSSION
====================== -->
<div class="feature-card">
<b>4. Peer Interaction & Debate</b><br>
সহপাঠী আলোচনা ও বিতর্ক<br><br>

Moral growth occurs through discussion with others.<br>
<span class="feature-bn">
অন্যদের সাথে আলোচনার মাধ্যমে নৈতিক বিকাশ ঘটে।
</span>
<br><br>

<b>Example:</b> Group debate on “Is breaking rule ever justified?”<br>
<span class="feature-bn">
উদাহরণ: “নিয়ম ভাঙা কি কখনও ন্যায়সঙ্গত?” — এ বিষয়ে দলীয় বিতর্ক।
</span>
</div>

<!-- ======================
5 ROLE PLAY
====================== -->
<div class="feature-card">
<b>5. Role Play & Perspective Taking</b><br>
ভূমিকা পালন ও দৃষ্টিভঙ্গি গ্রহণ<br><br>

Students act different roles to understand viewpoints.<br>
<span class="feature-bn">
ভিন্ন ভিন্ন চরিত্রে অভিনয় করে দৃষ্টিভঙ্গি বোঝা।
</span>
<br><br>

<b>Example:</b> One student acts as Heinz, one as druggist, one as judge.<br>
<span class="feature-bn">
উদাহরণ: একজন হেইঞ্জ, একজন ওষুধ বিক্রেতা, একজন বিচারক।
</span>
</div>

<!-- ======================
6 VALUE CLARIFICATION
====================== -->
<div class="feature-card">
<b>6. Value Clarification Activities</b><br>
মূল্যবোধ বিশ্লেষণ কার্যক্রম<br><br>

Help students examine their own moral values.<br>
<span class="feature-bn">
শিক্ষার্থীদের নিজস্ব নৈতিক মূল্যবোধ বিশ্লেষণে সহায়তা করা।
</span>
<br><br>

<b>Example:</b> Students rank values: Law, Life, Love, Justice.<br>
<span class="feature-bn">
উদাহরণ: আইন, জীবন, ভালোবাসা, ন্যায় — এগুলোর অগ্রাধিকার নির্ধারণ।
</span>
</div>

<!-- ======================
7 STAGE PROGRESSION
====================== -->
<div class="feature-card">
<b>7. Promote Higher Stage Thinking</b><br>
উচ্চস্তরের চিন্তা উন্নীত করা<br><br>

Encourage movement from punishment-based thinking to principle-based reasoning.<br>
<span class="feature-bn">
শাস্তিভিত্তিক চিন্তা থেকে নীতিভিত্তিক চিন্তায় উন্নীত করা।
</span>
<br><br>

<b>Example:</b><br>
Child: “He will go to jail.”<br>
Teacher: “Is law always correct?”<br>
<span class="feature-bn">
উদাহরণ: শিশু বলে “সে জেলে যাবে।”<br>
শিক্ষক জিজ্ঞেস করেন “আইন কি সবসময় সঠিক?”
</span>
</div>

<!-- ======================
8 TEACHER ROLE
====================== -->
<div class="feature-card">
<b>8. Teacher as Moral Facilitator</b><br>
নৈতিক সহায়ক হিসেবে শিক্ষক<br><br>

Teacher guides discussion but does not impose moral answers.<br>
<span class="feature-bn">
শিক্ষক আলোচনা পরিচালনা করেন, মত চাপিয়ে দেন না।
</span>
</div>

<!-- ======================
CTET TRAP LINES
====================== -->
<div class="feature-card">

<b>⚠️ CTET Examiner Trap Lines</b><br>
<span class="feature-bn">CTET পরীক্ষকের ফাঁদ</span>
<br><br>

Moral education = Giving lectures ❌<br>
<span class="feature-bn">নৈতিক শিক্ষা মানেই বক্তৃতা নয় ❌</span><br>

Teacher decides right answer ❌<br>
<span class="feature-bn">শিক্ষক সঠিক উত্তর নির্ধারণ করেন ❌</span><br>

Memorizing moral rules is enough ❌<br>
<span class="feature-bn">নৈতিক নিয়ম মুখস্থ করাই যথেষ্ট নয় ❌</span><br><br>

✔ Correct → Discussion + reasoning + dilemma.<br>
<span class="feature-bn">
✔ সঠিক → আলোচনা + যুক্তি + নৈতিক সমস্যা।
</span>

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

window.goKohlberg = function(event){

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
      "MCQ/kohlbarg-mcq-page.html";
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

<svg viewBox="0 0 360 720"
     width="100%"
     height="auto">

<!-- LEVEL 1 -->
<rect class="stage" data-stage="l1"
      x="40" y="30"
      width="280" height="120" rx="16"/>
<text x="60" y="65" class="title">
Level 1: Pre-Conventional
</text>
<text x="60" y="90" class="sub">
Stage 1 → Punishment
</text>
<text x="60" y="110" class="sub">
Stage 2 → Self-interest
</text>

<!-- LEVEL 2 -->
<rect class="stage" data-stage="l2"
      x="40" y="200"
      width="280" height="120" rx="16"/>
<text x="60" y="235" class="title">
Level 2: Conventional
</text>
<text x="60" y="260" class="sub">
Stage 3 → Good child
</text>
<text x="60" y="280" class="sub">
Stage 4 → Law & Order
</text>

<!-- LEVEL 3 -->
<rect class="stage" data-stage="l3"
      x="40" y="370"
      width="280" height="120" rx="16"/>
<text x="60" y="405" class="title">
Level 3: Post-Conventional
</text>
<text x="60" y="430" class="sub">
Stage 5 → Social contract
</text>
<text x="60" y="450" class="sub">
Stage 6 → Universal ethics
</text>

<!-- ARROWS -->
<line class="arrow"
      x1="180" y1="150"
      x2="180" y2="200"/>
<line class="arrow"
      x1="180" y1="320"
      x2="180" y2="370"/>

</svg>

<style>
.stage{
  fill:#f3e5f5;
  stroke:#8e24aa;
  stroke-width:2;
  cursor:pointer;
  transition:.4s;
}
.stage:hover{
  fill:#e1bee7;
}
.title{
  font:bold 15px Arial;
}
.sub{
  font:13px Arial;
}
.arrow{
  stroke:#8e24aa;
  stroke-width:3;
  stroke-dasharray:6;
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

if(type === "l1"){

content = `
<h3>🧒 Level 1: Pre-Conventional</h3>

<b>Age:</b> Below 9 years

<br><br>

<b>Stage 1:</b> Obedience & Punishment  
Right = Avoid punishment  
Example: “I won’t cheat because teacher will punish.”

<br><br>

<b>Stage 2:</b> Individualism & Exchange  
Right = Personal gain  
Example: “You help me, I help you.”

<br><br>

CTET Focus → Fear based morality.
`;
}

else if(type === "l2"){

content = `
<h3>👥 Level 2: Conventional</h3>

<b>Stage 3:</b> Good Boy / Good Girl  
Right = Approval from others  
Example: “People will think I am good.”

<br><br>

<b>Stage 4:</b> Law & Order  
Right = Follow rules & maintain order  
Example: “Rules must be followed.”

<br><br>

CTET Most Asked → Stage 4.
`;
}

else if(type === "l3"){

content = `
<h3>⚖️ Level 3: Post-Conventional</h3>

<b>Stage 5:</b> Social Contract  
Law can change for human welfare.  

<br><br>

<b>Stage 6:</b> Universal Ethical Principles  
Justice > Law  

Example: “Saving life is more important than property.”

<br><br>

Rare highest level.
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

      loadTabContent(
        "definition"
      );

    }, 50);

  }
);