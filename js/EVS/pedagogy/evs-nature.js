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
NATURE OF EVS
====================== */

if(tab === "nature"){

box.innerHTML = `
<div class="card">
<h3>🌱 Nature of EVS (EVS-এর প্রকৃতি)</h3>

<div class="feature-card">
EVS is an integrated subject combining science, social science and environmental studies.
<br>
<span class="feature-bn">
EVS একটি সমন্বিত বিষয় যেখানে বিজ্ঞান, সমাজবিজ্ঞান ও পরিবেশবিদ্যা একত্রিত হয়।
</span>
</div>

<div class="feature-card">
It focuses on child's immediate environment.
<br>
<span class="feature-bn">
এটি শিশুর নিকটবর্তী পরিবেশের উপর গুরুত্ব দেয়।
</span>
</div>

<div class="feature-card">
Learning is based on observation, experience and activities.
<br>
<span class="feature-bn">
শেখা পর্যবেক্ষণ, অভিজ্ঞতা ও কার্যক্রমের মাধ্যমে হয়।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Integrated learning • Child-centered approach
</div>

</div>
`;
}

/* ======================
SCOPE OF EVS
====================== */

else if(tab === "scope"){

box.innerHTML = `
<div class="card">
<h3>🌍 Scope of EVS (EVS-এর পরিসর)</h3>

<div class="feature-card">
EVS includes study of natural environment.
<br>
<span class="feature-bn">
EVS প্রাকৃতিক পরিবেশের অধ্যয়ন অন্তর্ভুক্ত করে।
</span>
</div>

<div class="feature-card">
Also includes social environment and human interaction.
<br>
<span class="feature-bn">
এতে সামাজিক পরিবেশ ও মানুষের পারস্পরিক সম্পর্কও অন্তর্ভুক্ত।
</span>
</div>

<div class="feature-card">
Topics include family, food, water, travel, plants and animals.
<br>
<span class="feature-bn">
পরিবার, খাদ্য, জল, ভ্রমণ, উদ্ভিদ ও প্রাণী ইত্যাদি বিষয় অন্তর্ভুক্ত।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Environment = Natural + Social
</div>

</div>
`;
}

/* ======================
IMPORTANCE OF EVS
====================== */

else if(tab === "importance"){

box.innerHTML = `
<div class="card">
<h3>⭐ Importance of EVS (EVS-এর গুরুত্ব)</h3>

<div class="feature-card">
Develops environmental awareness in children.
<br>
<span class="feature-bn">
শিশুদের মধ্যে পরিবেশ সচেতনতা গড়ে তোলে।
</span>
</div>

<div class="feature-card">
Encourages curiosity and critical thinking.
<br>
<span class="feature-bn">
কৌতূহল ও সমালোচনামূলক চিন্তা বাড়ায়।
</span>
</div>

<div class="feature-card">
Helps children understand relationship between humans and environment.
<br>
<span class="feature-bn">
মানুষ ও পরিবেশের সম্পর্ক বুঝতে সাহায্য করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Awareness • Sensitivity • Inquiry learning
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
EVS should be activity-based and experiential.
<br>
<span class="feature-bn">
EVS কার্যভিত্তিক ও অভিজ্ঞতাভিত্তিক হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Learning should connect with real-life environment.
<br>
<span class="feature-bn">
শেখা বাস্তব জীবনের পরিবেশের সাথে যুক্ত হওয়া উচিত।
</span>
</div>

<div class="feature-card">
Teacher should encourage questioning and exploration.
<br>
<span class="feature-bn">
শিক্ষককে প্রশ্ন ও অনুসন্ধান উৎসাহিত করতে হবে।
</span>
</div>

<div class="feature-ctet">
CTET Trap: EVS = Only textbook learning ❌
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

    box.setAttribute("data-tab","nature");
    loadTabContent("nature");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});