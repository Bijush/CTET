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

  if (!box) return;

  const currentTab =
    box.getAttribute("data-tab");

  if (currentTab === tab) return;

  box.setAttribute("data-tab", tab);

  document
    .querySelectorAll(".btab")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  if (ev && ev.currentTarget) {
    ev.currentTarget.classList.add("active");
  }

  box.classList.remove("fade-in");
  box.classList.add("fade-out");

  setTimeout(()=>{

    loadTabContent(tab);

    box.classList.remove("fade-out");
    box.classList.add("fade-in");

  },180);
};


/* ======================
PROGRESS SAVE
====================== */

function saveTabProgress(tab){

  const page =
    location.pathname.split("/").pop();

  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.body.scrollHeight;

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

  let data =
    JSON.parse(
      localStorage.getItem("tabProgress")
    ) || {};

  if(!data[page]) data[page] = {};

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

if (!box) return;

/* ======================
FORMATIVE
====================== */

if(tab === "formative"){

box.innerHTML = `
<div class="card">
<h3>📘 Formative Assessment</h3>

<div class="feature-card">
Continuous and ongoing assessment.
<br><span class="feature-bn">
চলমান ও ধারাবাহিক মূল্যায়ন।
</span>
</div>

<div class="feature-card">
Examples: Observation, oral questioning, worksheet.
<br><span class="feature-bn">
উদাহরণ: পর্যবেক্ষণ, মৌখিক প্রশ্ন, ওয়ার্কশিট।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Improvement oriented
</div>
</div>
`;
}


/* ======================
SUMMATIVE
====================== */

else if(tab === "summative"){

box.innerHTML = `
<div class="card">
<h3>📝 Summative Assessment</h3>

<div class="feature-card">
Assessment at the end of unit or term.
<br><span class="feature-bn">
ইউনিট বা টার্ম শেষে মূল্যায়ন।
</span>
</div>

<div class="feature-card">
Examples: Final exam, unit test.
</div>

<div class="feature-ctet">
CTET Trap: Only marks-based evaluation ❌
</div>
</div>
`;
}


/* ======================
DIAGNOSTIC
====================== */

else if(tab === "diagnostic"){

box.innerHTML = `
<div class="card">
<h3>🔍 Diagnostic Test</h3>

<div class="feature-card">
Identifies learning difficulties.
<br><span class="feature-bn">
শেখার অসুবিধা চিহ্নিত করে।
</span>
</div>

<div class="feature-card">
Used before remedial teaching.
<br><span class="feature-bn">
পুনর্বাসনমূলক শিক্ষণের আগে ব্যবহৃত হয়।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Error analysis
</div>
</div>
`;
}


/* ======================
REMEDIAL
====================== */

else if(tab === "remedial"){

box.innerHTML = `
<div class="card">
<h3>🛠 Remedial Teaching</h3>

<div class="feature-card">
Given after diagnosis of errors.
<br><span class="feature-bn">
ত্রুটি নির্ণয়ের পরে প্রদান করা হয়।
</span>
</div>

<div class="feature-card">
Focuses on correcting misconceptions.
<br><span class="feature-bn">
ভুল ধারণা সংশোধনে জোর দেয়।
</span>
</div>

<div class="feature-ctet">
Sequence: Diagnostic → Remedial
</div>
</div>
`;
}


/* ======================
CCE
====================== */

else if(tab === "cce"){

box.innerHTML = `
<div class="card">
<h3>📊 CCE (Continuous and Comprehensive Evaluation)</h3>

<div class="feature-card">
Evaluates both scholastic and co-scholastic areas.
<br><span class="feature-bn">
শিক্ষাগত ও সহ-শিক্ষাগত উভয় ক্ষেত্র মূল্যায়ন করে।
</span>
</div>

<div class="feature-card">
Continuous + Comprehensive approach.
</div>

<div class="feature-ctet">
CTET Line: Holistic development
</div>
</div>
`;
}


/* ======================
BLOOM
====================== */

else if(tab === "bloom"){

box.innerHTML = `
<div class="card">
<h3>🧠 Bloom’s Taxonomy in Mathematics</h3>

<div class="feature-card">
Levels: Remember → Understand → Apply → Analyze → Evaluate → Create
</div>

<div class="feature-card">
Math should move beyond remembering formulas.
<br><span class="feature-bn">
গণিত শুধু সূত্র মুখস্থে সীমাবদ্ধ নয়।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Higher Order Thinking
</div>
</div>
`;
}


/* ======================
HOTS
====================== */

else if(tab === "hots"){

box.innerHTML = `
<div class="card">
<h3>🚀 HOTS (Higher Order Thinking Skills)</h3>

<div class="feature-card">
Questions that require reasoning and application.
<br><span class="feature-bn">
যুক্তি ও প্রয়োগভিত্তিক প্রশ্ন।
</span>
</div>

<div class="feature-card">
Encourages critical thinking in math.
</div>

<div class="feature-ctet">
Exam Trap: Only procedural questions ❌
</div>
</div>
`;
}

}

window.goBack = function(){
  window.location.replace("subject-list.html");
};


/* ======================
DEFAULT LOAD
====================== */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    box =
      document.getElementById("theoryBox");

    if (!box) return;

    box.setAttribute("data-tab","formative");
    loadTabContent("formative");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});