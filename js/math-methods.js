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
INDUCTIVE
====================== */

if(tab === "inductive"){

box.innerHTML = `
<div class="card">
<h3>🔍 Inductive Method</h3>

<div class="feature-card">
From specific examples → general rule.
<br><span class="feature-bn">
নির্দিষ্ট উদাহরণ থেকে সাধারণ নিয়ম।
</span>
</div>

<div class="feature-card">
Example:  
2+4=6  
4+6=10  
Even + Even = Even
</div>

<div class="feature-ctet">
CTET Keyword: Child-centered + Discovery
</div>
</div>
`;
}


/* ======================
DEDUCTIVE
====================== */

else if(tab === "deductive"){

box.innerHTML = `
<div class="card">
<h3>📐 Deductive Method</h3>

<div class="feature-card">
General rule → specific example.
<br><span class="feature-bn">
সাধারণ নিয়ম থেকে উদাহরণ।
</span>
</div>

<div class="feature-card">
Example:  
Area of rectangle = l × b  
Apply formula directly.
</div>

<div class="feature-ctet">
CTET Trap: Not suitable for primary level alone
</div>
</div>
`;
}


/* ======================
ANALYTIC
====================== */

else if(tab === "analytic"){

box.innerHTML = `
<div class="card">
<h3>🧠 Analytic Method</h3>

<div class="feature-card">
Start from unknown → reach known.
<br><span class="feature-bn">
অজানা থেকে জানা দিকে অগ্রসর।
</span>
</div>

<div class="feature-card">
Used in geometry proofs.
</div>

<div class="feature-ctet">
CTET Line: Logical reasoning method
</div>
</div>
`;
}


/* ======================
PROBLEM SOLVING
====================== */

else if(tab === "problem"){

box.innerHTML = `
<div class="card">
<h3>🧩 Problem Solving Method</h3>

<div class="feature-card">
Students learn by solving real-life problems.
</div>

<div class="feature-card">
Steps:  
Understand → Plan → Solve → Verify
</div>

<div class="feature-ctet">
CTET Favourite Method
</div>
</div>
`;
}


/* ======================
HEURISTIC
====================== */

else if(tab === "heuristic"){

box.innerHTML = `
<div class="card">
<h3>🔎 Heuristic Method</h3>

<div class="feature-card">
Learning by self-discovery.
<br><span class="feature-bn">
নিজে আবিষ্কার করে শেখা।
</span>
</div>

<div class="feature-card">
Teacher gives hints, not answers.
</div>

<div class="feature-ctet">
Keyword: Inquiry method
</div>
</div>
`;
}


/* ======================
PROJECT
====================== */

else if(tab === "project"){

box.innerHTML = `
<div class="card">
<h3>📊 Project Method</h3>

<div class="feature-card">
Learning through practical projects.
</div>

<div class="feature-card">
Example: Survey and create graph.
</div>

<div class="feature-ctet">
CTET Line: Learning by doing
</div>
</div>
`;
}


/* ======================
PLAYWAY
====================== */

else if(tab === "playway"){

box.innerHTML = `
<div class="card">
<h3>🎲 Play Way Method</h3>

<div class="feature-card">
Learning through games and activities.
</div>

<div class="feature-card">
Example: Math puzzles, flash cards.
</div>

<div class="feature-ctet">
Best for primary classes
</div>
</div>
`;
}


/* ======================
LAB
====================== */

else if(tab === "lab"){

box.innerHTML = `
<div class="card">
<h3>🧪 Laboratory Method</h3>

<div class="feature-card">
Hands-on learning using materials.
</div>

<div class="feature-card">
Use of math lab, models, TLM.
</div>

<div class="feature-ctet">
CTET Keyword: Activity-based learning
</div>
</div>
`;
}


/* ======================
ABL
====================== */

else if(tab === "abl"){

box.innerHTML = `
<div class="card">
<h3>🎯 Activity Based Learning (ABL)</h3>

<div class="feature-card">
Students actively participate in learning.
</div>

<div class="feature-card">
Focus on concept, not memorization.
</div>

<div class="feature-ctet">
Exam Trap: Lecture method ❌
</div>
</div>
`;
}

}


/* ======================
DEFAULT LOAD
====================== */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    box =
      document.getElementById("theoryBox");

    if (!box) return;

    box.setAttribute("data-tab","inductive");
    loadTabContent("inductive");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});