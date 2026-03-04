/* ======================
LOAD BOX
====================== */

let box;

/* ======================
TAB SWITCH
====================== */

window.openTab = function(tab, ev){

document.querySelectorAll(".btab")
.forEach(btn => btn.classList.remove("active"));

if(ev){
ev.currentTarget.classList.add("active");

ev.currentTarget.scrollIntoView({
behavior:"smooth",
inline:"center",
block:"nearest"
});
}

if(!box) return;

const currentTab = box.getAttribute("data-tab");

if(currentTab === tab) return;

box.setAttribute("data-tab",tab);

box.classList.remove("fade-in");
box.classList.add("fade-out");

setTimeout(()=>{

loadTabContent(tab);

box.classList.remove("fade-out");
box.classList.add("fade-in");

},180);

};

/* ======================
LOAD CONTENT
====================== */

function loadTabContent(tab){

if(!box) return;

/* ======================
FORMATIVE
====================== */

if(tab === "formative"){

box.innerHTML = `
<div class="card">

<h3>📘 Formative Assessment</h3>

<div class="feature-card">
Continuous and ongoing assessment.
<br>
<span class="feature-bn">
চলমান ও ধারাবাহিক মূল্যায়ন।
</span>
</div>

<div class="feature-card">
Examples: Observation, worksheet, oral questions.
<br>
<span class="feature-bn">
উদাহরণ: পর্যবেক্ষণ, ওয়ার্কশিট, মৌখিক প্রশ্ন।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Improvement oriented
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
Assessment at the end of a unit or term.
<br>
<span class="feature-bn">
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
PORTFOLIO
====================== */

else if(tab === "portfolio"){

box.innerHTML = `
<div class="card">

<h3>📂 Portfolio Assessment</h3>

<div class="feature-card">
Collection of student's work over time.
<br>
<span class="feature-bn">
সময়ের সাথে শিক্ষার্থীর কাজের সংগ্রহ।
</span>
</div>

<div class="feature-card">
Shows learning progress.
<br>
<span class="feature-bn">
শেখার অগ্রগতি দেখায়।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Continuous evaluation
</div>

</div>
`;

}

/* ======================
OBSERVATION
====================== */

else if(tab === "observation"){

box.innerHTML = `
<div class="card">

<h3>👀 Observation Method</h3>

<div class="feature-card">
Teacher observes student's behavior and activities.
<br>
<span class="feature-bn">
শিক্ষক শিক্ষার্থীর আচরণ ও কার্যকলাপ পর্যবেক্ষণ করেন।
</span>
</div>

<div class="feature-card">
Useful for assessing skills and attitudes.
</div>

<div class="feature-ctet">
CTET Focus: Informal assessment
</div>

</div>
`;

}

/* ======================
CTET
====================== */

else if(tab === "ctet"){

box.innerHTML = `
<div class="card">

<h3>🎯 CTET Exam Focus</h3>

<div class="feature-card">
Assessment should support learning improvement.
<br>
<span class="feature-bn">
মূল্যায়ন শেখার উন্নতিতে সহায়ক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Focus on holistic development.
<br>
<span class="feature-bn">
সামগ্রিক বিকাশের উপর গুরুত্ব।
</span>
</div>

<div class="feature-ctet">
Trap: Assessment only means exams ❌
</div>

</div>
`;

}

}

/* ======================
DEFAULT LOAD
====================== */

window.addEventListener("DOMContentLoaded",()=>{

box = document.getElementById("theoryBox");

if(!box) return;

box.setAttribute("data-tab","formative");

loadTabContent("formative");

});