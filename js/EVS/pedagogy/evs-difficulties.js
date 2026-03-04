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
TYPES
====================== */

if(tab === "types"){

box.innerHTML = `
<div class="card">

<h3>⚠ Learning Difficulties in EVS</h3>

<div class="feature-card">
Students may face difficulty understanding environmental concepts.
<br>
<span class="feature-bn">
শিক্ষার্থীরা পরিবেশ বিষয়ক ধারণা বুঝতে সমস্যায় পড়তে পারে।
</span>
</div>

<div class="feature-card">
Misconceptions about natural phenomena.
<br>
<span class="feature-bn">
প্রাকৃতিক ঘটনার ভুল ধারণা থাকতে পারে।
</span>
</div>

<div class="feature-card">
Language barriers may affect understanding.
<br>
<span class="feature-bn">
ভাষাগত সমস্যাও বোঝার ক্ষেত্রে বাধা হতে পারে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Misconceptions
</div>

</div>
`;
}

/* ======================
CAUSES
====================== */

else if(tab === "causes"){

box.innerHTML = `
<div class="card">

<h3>📌 Causes of Learning Difficulties</h3>

<div class="feature-card">
Abstract concepts are difficult for children.
<br>
<span class="feature-bn">
অমূর্ত ধারণা শিশুদের জন্য কঠিন।
</span>
</div>

<div class="feature-card">
Lack of real-life experiences.
<br>
<span class="feature-bn">
বাস্তব জীবনের অভিজ্ঞতার অভাব।
</span>
</div>

<div class="feature-card">
Teacher-centered teaching methods.
<br>
<span class="feature-bn">
শিক্ষক-কেন্দ্রিক শিক্ষণ পদ্ধতি।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Activity based learning required
</div>

</div>
`;
}

/* ======================
SOLUTIONS
====================== */

else if(tab === "solutions"){

box.innerHTML = `
<div class="card">

<h3>🛠 Solutions</h3>

<div class="feature-card">
Use activity-based learning.
<br>
<span class="feature-bn">
কার্যভিত্তিক শিক্ষণ ব্যবহার করা।
</span>
</div>

<div class="feature-card">
Encourage observation and exploration.
<br>
<span class="feature-bn">
পর্যবেক্ষণ ও অনুসন্ধানকে উৎসাহিত করা।
</span>
</div>

<div class="feature-card">
Use local examples and TLM.
<br>
<span class="feature-bn">
স্থানীয় উদাহরণ ও TLM ব্যবহার করা।
</span>
</div>

<div class="feature-ctet">
CTET Line: Learning through experience
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
Teacher should identify misconceptions of students.
<br>
<span class="feature-bn">
শিক্ষকের উচিত শিক্ষার্থীদের ভুল ধারণা শনাক্ত করা।
</span>
</div>

<div class="feature-card">
Use inquiry and activity methods to solve difficulties.
<br>
<span class="feature-bn">
অনুসন্ধান ও কার্যভিত্তিক পদ্ধতি ব্যবহার করা।
</span>
</div>

<div class="feature-ctet">
Trap: Punishing students for wrong answers ❌
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

box.setAttribute("data-tab","types");

loadTabContent("types");

});