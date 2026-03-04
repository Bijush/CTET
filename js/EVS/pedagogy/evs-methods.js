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
INQUIRY METHOD
====================== */

if(tab === "inquiry"){

box.innerHTML = `
<div class="card">

<h3>🔍 Inquiry Method</h3>

<div class="feature-card">
Students learn by asking questions and investigating.
<br>
<span class="feature-bn">
শিক্ষার্থীরা প্রশ্ন করে ও অনুসন্ধান করে শেখে।
</span>
</div>

<div class="feature-card">
Encourages curiosity and exploration.
<br>
<span class="feature-bn">
কৌতূহল ও অনুসন্ধানকে উৎসাহিত করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Inquiry based learning
</div>

</div>
`;

}

/* ======================
PROJECT METHOD
====================== */

else if(tab === "project"){

box.innerHTML = `
<div class="card">

<h3>📘 Project Method</h3>

<div class="feature-card">
Learning through real-life projects.
<br>
<span class="feature-bn">
বাস্তব জীবনের প্রকল্পের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Students work collaboratively.
<br>
<span class="feature-bn">
শিক্ষার্থীরা দলগতভাবে কাজ করে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Experiential learning
</div>

</div>
`;

}

/* ======================
FIELD VISIT
====================== */

else if(tab === "field"){

box.innerHTML = `
<div class="card">

<h3>🌍 Field Visit</h3>

<div class="feature-card">
Students observe environment directly.
<br>
<span class="feature-bn">
শিক্ষার্থীরা সরাসরি পরিবেশ পর্যবেক্ষণ করে।
</span>
</div>

<div class="feature-card">
Examples: Visiting farm, forest, river.
</div>

<div class="feature-ctet">
CTET Line: Learning beyond classroom
</div>

</div>
`;

}

/* ======================
DISCUSSION METHOD
====================== */

else if(tab === "discussion"){

box.innerHTML = `
<div class="card">

<h3>🗣 Discussion Method</h3>

<div class="feature-card">
Students share ideas and opinions.
<br>
<span class="feature-bn">
শিক্ষার্থীরা মতামত ভাগ করে।
</span>
</div>

<div class="feature-card">
Encourages participation and critical thinking.
</div>

<div class="feature-ctet">
CTET Focus: Collaborative learning
</div>

</div>
`;

}

/* ======================
CTET TRAPS
====================== */

else if(tab === "ctet"){

box.innerHTML = `
<div class="card">

<h3>🎯 CTET Focus</h3>

<div class="feature-card">
EVS teaching should be activity-based.
<br>
<span class="feature-bn">
EVS পড়ানো কার্যভিত্তিক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Teacher acts as facilitator.
<br>
<span class="feature-bn">
শিক্ষক সহায়কের ভূমিকা পালন করেন।
</span>
</div>

<div class="feature-ctet">
Trap: Lecture method only ❌
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

box.setAttribute("data-tab","inquiry");

loadTabContent("inquiry");

});