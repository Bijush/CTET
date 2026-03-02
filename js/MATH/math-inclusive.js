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
CWSN
====================== */

if(tab === "cwsn"){

box.innerHTML = `
<div class="card">
<h3>♿ CWSN in Mathematics Classroom</h3>

<div class="feature-card">
CWSN = Children With Special Needs.
<br><span class="feature-bn">
বিশেষ চাহিদাসম্পন্ন শিশু।
</span>
</div>

<div class="feature-card">
Inclusive classroom teaches all children together.
<br><span class="feature-bn">
অন্তর্ভুক্তিমূলক শ্রেণিকক্ষে সবাই একসাথে শেখে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Inclusive education + Equal opportunity
</div>
</div>
`;
}


/* ======================
DYSCALCULIA
====================== */

else if(tab === "dyscalculia"){

box.innerHTML = `
<div class="card">
<h3>🔢 Dyscalculia</h3>

<div class="feature-card">
Specific learning disability in mathematics.
<br><span class="feature-bn">
গণিতে নির্দিষ্ট শেখার অসুবিধা।
</span>
</div>

<div class="feature-card">
Difficulty in number sense and calculation.
<br><span class="feature-bn">
সংখ্যা বোধ ও হিসাব করতে অসুবিধা।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Difficulty in basic number understanding
</div>
</div>
`;
}


/* ======================
MATH ANXIETY
====================== */

else if(tab === "anxiety"){

box.innerHTML = `
<div class="card">
<h3>😟 Math Anxiety</h3>

<div class="feature-card">
Fear or tension related to mathematics.
<br><span class="feature-bn">
গণিত সম্পর্কিত ভয় বা মানসিক চাপ।
</span>
</div>

<div class="feature-card">
May affect performance negatively.
<br><span class="feature-bn">
ফলাফলে নেতিবাচক প্রভাব ফেলতে পারে।
</span>
</div>

<div class="feature-card">
Teacher should create stress-free environment.
<br><span class="feature-bn">
শিক্ষককে চাপমুক্ত পরিবেশ তৈরি করতে হবে।
</span>
</div>

<div class="feature-ctet">
Exam Trap: Punishment reduces anxiety ❌
</div>
</div>
`;
}


/* ======================
GIFTED
====================== */

else if(tab === "gifted"){

box.innerHTML = `
<div class="card">
<h3>🌟 Gifted Learners in Mathematics</h3>

<div class="feature-card">
High logical reasoning and quick problem solving.
<br><span class="feature-bn">
উচ্চ যুক্তি ও দ্রুত সমস্যা সমাধান ক্ষমতা।
</span>
</div>

<div class="feature-card">
Need enrichment activities.
<br><span class="feature-bn">
অতিরিক্ত চ্যালেঞ্জিং কাজ প্রয়োজন।
</span>
</div>

<div class="feature-ctet">
CTET Line: Provide differentiated instruction
</div>
</div>
`;
}


/* ======================
GENDER BIAS
====================== */

else if(tab === "gender"){

box.innerHTML = `
<div class="card">
<h3>⚖ Gender Bias in Mathematics</h3>

<div class="feature-card">
Mathematics ability is not gender-based.
<br><span class="feature-bn">
গণিত দক্ষতা লিঙ্গভিত্তিক নয়।
</span>
</div>

<div class="feature-card">
Teacher should avoid stereotypes.
<br><span class="feature-bn">
শিক্ষককে লিঙ্গভিত্তিক ধারণা এড়াতে হবে।
</span>
</div>

<div class="feature-ctet">
CTET Trap: Boys are naturally better at math ❌
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

    box.setAttribute("data-tab","cwsn");
    loadTabContent("cwsn");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});