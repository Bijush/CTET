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
DEFINITION
====================== */

if(tab === "definition"){

box.innerHTML = `
<div class="card">
<h3>📘 Nature of Mathematics</h3>

<div class="feature-card">
Mathematics is a logical, systematic and abstract discipline.
<br><span class="feature-bn">
গণিত একটি যৌক্তিক, সুশৃঙ্খল ও বিমূর্ত বিষয়।
</span>
</div>

<div class="feature-card">
It develops reasoning, critical thinking and problem-solving ability.
<br><span class="feature-bn">
এটি যুক্তি, সমালোচনামূলক চিন্তা ও সমস্যা সমাধান ক্ষমতা বৃদ্ধি করে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Logical Thinking + Pattern + Reasoning
</div>
</div>
`;
}

/* ======================
AIMS
====================== */

else if(tab === "aims"){

box.innerHTML = `
<div class="card">
<h3>🎯 Aims of Teaching Mathematics</h3>

<div class="feature-card">
✔ Develop logical thinking
<br><span class="feature-bn">যুক্তি শক্তি বৃদ্ধি</span>
</div>

<div class="feature-card">
✔ Develop problem-solving ability
<br><span class="feature-bn">সমস্যা সমাধান দক্ষতা</span>
</div>

<div class="feature-card">
✔ Apply mathematics in daily life
<br><span class="feature-bn">বাস্তব জীবনে প্রয়োগ</span>
</div>

<div class="feature-card">
✔ Develop accuracy and precision
<br><span class="feature-bn">সঠিকতা ও নির্ভুলতা</span>
</div>

<div class="feature-ctet">
CTET Trap: Aim ≠ Memorization
</div>
</div>
`;
}

/* ======================
VALUES
====================== */

else if(tab === "values"){

box.innerHTML = `
<div class="card">
<h3>💎 Values of Mathematics</h3>

<div class="feature-card">
✔ Intellectual Value
<br><span class="feature-bn">বুদ্ধিবৃত্তিক মূল্য</span>
</div>

<div class="feature-card">
✔ Practical Value
<br><span class="feature-bn">ব্যবহারিক মূল্য</span>
</div>

<div class="feature-card">
✔ Disciplinary Value
<br><span class="feature-bn">শৃঙ্খলাগত মূল্য</span>
</div>

<div class="feature-card">
✔ Cultural Value
<br><span class="feature-bn">সাংস্কৃতিক মূল্য</span>
</div>
</div>
`;
}

/* ======================
CORRELATION
====================== */

else if(tab === "correlation"){

box.innerHTML = `
<div class="card">
<h3>🔗 Correlation of Mathematics</h3>

<div class="feature-card">
✔ Math with Science (Measurement, Data)
</div>

<div class="feature-card">
✔ Math with Social Science (Statistics, Graph)
</div>

<div class="feature-card">
✔ Math with Daily Life (Money, Time, Distance)
</div>

<div class="feature-ctet">
CTET Focus: Real-life connection is essential
</div>
</div>
`;
}

/* ======================
DAILY LIFE
====================== */

else if(tab === "daily-life"){

box.innerHTML = `
<div class="card">
<h3>🌍 Mathematics in Daily Life</h3>

<div class="feature-card">
✔ Budget calculation
</div>

<div class="feature-card">
✔ Time management
</div>

<div class="feature-card">
✔ Measurement in cooking & shopping
</div>

<div class="feature-card">
✔ Logical decision making
</div>

<div class="feature-ctet">
CTET Trap: Math is not only classroom subject
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

    box.setAttribute("data-tab","definition");
    loadTabContent("definition");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});