/* ======================
LOAD BOX
====================== */

let box;

/* ======================
OPEN TAB
====================== */

window.openTab = function(tab, ev){

  if(!box) return;

  // Remove active
  document.querySelectorAll(".btab")
    .forEach(btn => btn.classList.remove("active"));

  if(ev && ev.currentTarget){
    ev.currentTarget.classList.add("active");

    ev.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }

  const currentTab =
    box.getAttribute("data-tab");

  if(currentTab === tab) return;

  box.setAttribute("data-tab", tab);

  box.classList.remove("fade-in");
  box.classList.add("fade-out");

  setTimeout(()=>{

    loadTabContent(tab);

    box.classList.remove("fade-out");
    box.classList.add("fade-in");

  },180);

};


/* ======================
LOAD TAB CONTENT
====================== */

function loadTabContent(tab){

if(!box) return;

/* ======================
MEANING
====================== */

if(tab === "meaning"){

box.innerHTML = `
<div class="card">
<h3>🔗 Integrated Approach (সমন্বিত পদ্ধতি)</h3>

<div class="feature-card">
Integrated approach means combining different subjects while teaching EVS.
<br>
<span class="feature-bn">
সমন্বিত পদ্ধতি মানে EVS পড়ানোর সময় বিভিন্ন বিষয়কে একত্রিত করা।
</span>
</div>

<div class="feature-card">
EVS integrates science, social science and environmental concepts.
<br>
<span class="feature-bn">
EVS-এ বিজ্ঞান, সমাজবিজ্ঞান ও পরিবেশ বিষয় একত্রে শেখানো হয়।
</span>
</div>

<div class="feature-card">
Learning is connected with real life experiences.
<br>
<span class="feature-bn">
শেখা বাস্তব জীবনের অভিজ্ঞতার সাথে যুক্ত থাকে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Interdisciplinary learning
</div>

</div>
`;
}

/* ======================
FEATURES
====================== */

else if(tab === "features"){

box.innerHTML = `
<div class="card">
<h3>⭐ Features of Integrated Approach</h3>

<div class="feature-card">
Learning connects different subjects.
<br>
<span class="feature-bn">
শেখা বিভিন্ন বিষয়কে যুক্ত করে।
</span>
</div>

<div class="feature-card">
Focus on real life situations.
<br>
<span class="feature-bn">
বাস্তব জীবনের পরিস্থিতির উপর গুরুত্ব।
</span>
</div>

<div class="feature-card">
Encourages observation and exploration.
<br>
<span class="feature-bn">
পর্যবেক্ষণ ও অনুসন্ধানকে উৎসাহিত করে।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Activity based learning
</div>

</div>
`;
}

/* ======================
EXAMPLES
====================== */

else if(tab === "examples"){

box.innerHTML = `
<div class="card">
<h3>📘 Examples in EVS</h3>

<div class="feature-card">
Topic: Water
<br>
Science → Water cycle  
<br>
Social science → Water use in society
</div>

<div class="feature-card">
Topic: Plants
<br>
Science → Plant structure  
<br>
Environment → Importance of plants
</div>

<div class="feature-card">
Topic: Family
<br>
Social science → Family roles  
<br>
Environment → Social relationships
</div>

<div class="feature-ctet">
CTET Line: EVS learning should connect different disciplines
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
Integrated approach promotes holistic learning.
<br>
<span class="feature-bn">
সমন্বিত পদ্ধতি সামগ্রিক শেখাকে উৎসাহিত করে।
</span>
</div>

<div class="feature-card">
Learning should not be divided into isolated subjects.
<br>
<span class="feature-bn">
শেখাকে আলাদা বিষয় হিসেবে ভাগ করা উচিত নয়।
</span>
</div>

<div class="feature-card">
Students learn better through activities and real-life context.
</div>

<div class="feature-ctet">
CTET Trap: Teaching EVS as only science subject ❌
</div>

</div>
`;
}

}
/*
window.goBack = function(){
  window.location.replace("../subject-list.html");
};
*/
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
DEFAULT LOAD
====================== */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    box =
      document.getElementById("theoryBox");

    if (!box) return;

    box.setAttribute("data-tab","meaning");
    loadTabContent("meaning");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});