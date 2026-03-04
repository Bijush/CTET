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
MEANING
====================== */

if(tab === "meaning"){

box.innerHTML = `
<div class="card">

<h3>🌱 Environmental Sensitivity</h3>

<div class="feature-card">
Environmental sensitivity means awareness and concern for nature.
<br>
<span class="feature-bn">
পরিবেশ সম্পর্কে সচেতনতা ও দায়িত্ববোধকে পরিবেশ সংবেদনশীলতা বলা হয়।
</span>
</div>

<div class="feature-card">
It encourages respect for living beings and natural resources.
<br>
<span class="feature-bn">
জীবজগৎ ও প্রাকৃতিক সম্পদের প্রতি সম্মান গড়ে তোলে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Environmental awareness
</div>

</div>
`;

}

/* ======================
IMPORTANCE
====================== */

else if(tab === "importance"){

box.innerHTML = `
<div class="card">

<h3>🌍 Importance of Environmental Sensitivity</h3>

<div class="feature-card">
Helps protect nature and biodiversity.
<br>
<span class="feature-bn">
প্রকৃতি ও জীববৈচিত্র্য রক্ষা করতে সাহায্য করে।
</span>
</div>

<div class="feature-card">
Encourages sustainable lifestyle.
<br>
<span class="feature-bn">
টেকসই জীবনধারা গড়ে তোলে।
</span>
</div>

<div class="feature-card">
Promotes responsible citizenship.
<br>
<span class="feature-bn">
দায়িত্বশীল নাগরিক তৈরি করে।
</span>
</div>

<div class="feature-ctet">
CTET Line: Protect environment for future generations
</div>

</div>
`;

}

/* ======================
TEACHER ROLE
====================== */

else if(tab === "teacher"){

box.innerHTML = `
<div class="card">

<h3>👩‍🏫 Role of Teacher</h3>

<div class="feature-card">
Teachers should encourage nature observation.
<br>
<span class="feature-bn">
শিক্ষককে প্রকৃতি পর্যবেক্ষণে উৎসাহিত করতে হবে।
</span>
</div>

<div class="feature-card">
Organize field trips and environmental activities.
<br>
<span class="feature-bn">
ভ্রমণ ও পরিবেশভিত্তিক কার্যক্রম আয়োজন করা।
</span>
</div>

<div class="feature-card">
Promote habits like saving water and planting trees.
<br>
<span class="feature-bn">
জল সংরক্ষণ ও বৃক্ষরোপণের অভ্যাস তৈরি করা।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Learning through real life experiences
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
Environmental education should develop values and attitudes.
<br>
<span class="feature-bn">
পরিবেশ শিক্ষা মূল্যবোধ ও মনোভাব গড়ে তোলে।
</span>
</div>

<div class="feature-card">
Students should actively participate in environmental protection.
<br>
<span class="feature-bn">
শিক্ষার্থীদের পরিবেশ রক্ষায় সক্রিয়ভাবে অংশ নিতে হবে।
</span>
</div>

<div class="feature-ctet">
Trap: Only theoretical knowledge ❌
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

box.setAttribute("data-tab","meaning");

loadTabContent("meaning");

});