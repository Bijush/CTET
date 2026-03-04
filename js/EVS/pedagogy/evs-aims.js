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
AIMS OF EVS
====================== */

if(tab === "aims"){

box.innerHTML = `
<div class="card">
<h3>🎯 Aims of EVS (EVS-এর লক্ষ্য)</h3>

<div class="feature-card">
To develop awareness about environment.
<br>
<span class="feature-bn">
পরিবেশ সম্পর্কে সচেতনতা গড়ে তোলা।
</span>
</div>

<div class="feature-card">
To develop curiosity and observation skills.
<br>
<span class="feature-bn">
কৌতূহল ও পর্যবেক্ষণ ক্ষমতা বৃদ্ধি করা।
</span>
</div>

<div class="feature-card">
To help children understand relationship between humans and nature.
<br>
<span class="feature-bn">
মানুষ ও প্রকৃতির সম্পর্ক বুঝতে সাহায্য করা।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Awareness • Sensitivity • Inquiry
</div>

</div>
`;
}

/* ======================
OBJECTIVES OF EVS
====================== */

else if(tab === "objectives"){

box.innerHTML = `
<div class="card">
<h3>📘 Objectives of EVS (EVS-এর উদ্দেশ্য)</h3>

<div class="feature-card">
Develop knowledge about environment and surroundings.
<br>
<span class="feature-bn">
পরিবেশ ও আশেপাশের বিষয়ে জ্ঞান বৃদ্ধি।
</span>
</div>

<div class="feature-card">
Develop problem solving and critical thinking.
<br>
<span class="feature-bn">
সমস্যা সমাধান ও সমালোচনামূলক চিন্তা বৃদ্ধি।
</span>
</div>

<div class="feature-card">
Encourage participation in environmental protection.
<br>
<span class="feature-bn">
পরিবেশ রক্ষায় অংশগ্রহণ উৎসাহিত করা।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Knowledge + Skill + Attitude
</div>

</div>
`;
}

/* ======================
LEARNING OUTCOMES
====================== */

else if(tab === "outcomes"){

box.innerHTML = `
<div class="card">
<h3>⭐ Learning Outcomes of EVS</h3>

<div class="feature-card">
Students observe and explore their surroundings.
<br>
<span class="feature-bn">
শিক্ষার্থীরা তাদের আশেপাশের পরিবেশ পর্যবেক্ষণ করে।
</span>
</div>

<div class="feature-card">
Students understand social and natural environment.
<br>
<span class="feature-bn">
শিক্ষার্থীরা সামাজিক ও প্রাকৃতিক পরিবেশ বুঝতে শেখে।
</span>
</div>

<div class="feature-card">
Students develop environmental responsibility.
<br>
<span class="feature-bn">
পরিবেশের প্রতি দায়িত্ববোধ তৈরি হয়।
</span>
</div>

<div class="feature-ctet">
CTET Line: EVS promotes experiential learning
</div>

</div>
`;
}

/* ======================
CTET EXAM FOCUS
====================== */

else if(tab === "ctet"){

box.innerHTML = `
<div class="card">
<h3>🎯 CTET Exam Focus</h3>

<div class="feature-card">
EVS should develop environmental sensitivity.
<br>
<span class="feature-bn">
EVS পরিবেশের প্রতি সংবেদনশীলতা তৈরি করে।
</span>
</div>

<div class="feature-card">
Learning should be activity-based and child-centered.
<br>
<span class="feature-bn">
শেখা কার্যভিত্তিক ও শিশু-কেন্দ্রিক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Focus on real-life environmental issues.
<br>
<span class="feature-bn">
বাস্তব জীবনের পরিবেশগত সমস্যার উপর গুরুত্ব।
</span>
</div>

<div class="feature-ctet">
CTET Trap: EVS = Only theoretical knowledge ❌
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

    box.setAttribute("data-tab","aims");
    loadTabContent("aims");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});