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
TLM
====================== */

if(tab === "tlm"){

box.innerHTML = `
<div class="card">

<h3>📚 Teaching Learning Materials (TLM)</h3>

<div class="feature-card">
TLM are materials used by teachers to make learning effective.
<br>
<span class="feature-bn">
শিক্ষণকে কার্যকর করতে শিক্ষক যে উপকরণ ব্যবহার করেন তাকে TLM বলে।
</span>
</div>

<div class="feature-card">
Examples: Charts, models, maps, pictures, flashcards.
<br>
<span class="feature-bn">
উদাহরণ: চার্ট, মডেল, মানচিত্র, ছবি, ফ্ল্যাশকার্ড।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Learning aids
</div>

</div>
`;

}

/* ======================
TYPES
====================== */

else if(tab === "types"){

box.innerHTML = `
<div class="card">

<h3>📦 Types of TLM</h3>

<div class="feature-card">
Visual TLM → Charts, diagrams, maps.
<br>
<span class="feature-bn">
দৃশ্যমান উপকরণ → চার্ট, ডায়াগ্রাম, মানচিত্র।
</span>
</div>

<div class="feature-card">
Audio TLM → Radio, recordings.
<br>
<span class="feature-bn">
শ্রাব্য উপকরণ → রেডিও, অডিও।
</span>
</div>

<div class="feature-card">
Audio-visual → Videos, smart class.
</div>

<div class="feature-ctet">
CTET Focus: Multi-sensory learning
</div>

</div>
`;

}

/* ======================
ACTIVITY
====================== */

else if(tab === "activity"){

box.innerHTML = `
<div class="card">

<h3>⚡ Activity Based Learning</h3>

<div class="feature-card">
Learning through activities and participation.
<br>
<span class="feature-bn">
কার্যক্রমের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Examples: Experiments, projects, group work.
<br>
<span class="feature-bn">
উদাহরণ: পরীক্ষা, প্রকল্প, দলগত কাজ।
</span>
</div>

<div class="feature-card">
Encourages exploration and curiosity.
</div>

<div class="feature-ctet">
CTET Line: Learning by doing
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
EVS teaching should use local materials.
<br>
<span class="feature-bn">
স্থানীয় উপকরণ ব্যবহার করা উচিত।
</span>
</div>

<div class="feature-card">
Activities should relate to real life.
<br>
<span class="feature-bn">
কার্যক্রম বাস্তব জীবনের সাথে যুক্ত হওয়া উচিত।
</span>
</div>

<div class="feature-ctet">
Trap: Only textbook teaching ❌
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

box.setAttribute("data-tab","tlm");

loadTabContent("tlm");

});