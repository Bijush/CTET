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
COMMON ERRORS
====================== */

if(tab === "common"){

box.innerHTML = `
<div class="card">
<h3>⚠️ Common Errors in Mathematics</h3>

<div class="feature-card">
Errors are natural in learning.
<br><span class="feature-bn">
শেখার সময় ভুল হওয়া স্বাভাবিক।
</span>
</div>

<div class="feature-card">
Mistakes reveal thinking process.
<br><span class="feature-bn">
ভুল চিন্তার প্রক্রিয়া বোঝায়।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Error analysis + Misconception
</div>
</div>
`;
}


/* ======================
NUMBER SYSTEM
====================== */

else if(tab === "number"){

box.innerHTML = `
<div class="card">
<h3>🔢 Misconceptions in Number System</h3>

<div class="feature-card">
Confusion between larger digit & larger number.
<br><span class="feature-bn">
বড় অঙ্ক মানেই বড় সংখ্যা ভাবা।
</span>
</div>

<div class="feature-card">
Example: 345 < 1000 but child may compare digits only.
</div>

<div class="feature-ctet">
CTET Trigger: Place value misunderstanding
</div>
</div>
`;
}


/* ======================
FRACTION
====================== */

else if(tab === "fraction"){

box.innerHTML = `
<div class="card">
<h3>➗ Misconceptions in Fractions</h3>

<div class="feature-card">
Believing 1/4 > 1/2 because 4 > 2.
<br><span class="feature-bn">
4 বড় তাই 1/4 বড় ভাবা।
</span>
</div>

<div class="feature-card">
Difficulty understanding numerator & denominator.
</div>

<div class="feature-ctet">
CTET Favourite Area
</div>
</div>
`;
}


/* ======================
PLACE VALUE
====================== */

else if(tab === "placevalue"){

box.innerHTML = `
<div class="card">
<h3>📊 Place Value Confusion</h3>

<div class="feature-card">
Writing 305 as 35.
<br><span class="feature-bn">
305 কে 35 লেখা।
</span>
</div>

<div class="feature-card">
Ignoring zero as placeholder.
<br><span class="feature-bn">
শূন্যের স্থানীয় মান না বোঝা।
</span>
</div>

<div class="feature-ctet">
Keyword: Place value error
</div>
</div>
`;
}


/* ======================
LANGUAGE ERROR
====================== */

else if(tab === "language"){

box.innerHTML = `
<div class="card">
<h3>🗣 Word Problem Language Errors</h3>

<div class="feature-card">
Misinterpreting question language.
<br><span class="feature-bn">
প্রশ্নের ভাষা ঠিকমতো না বোঝা।
</span>
</div>

<div class="feature-card">
Difficulty in translating words to mathematical form.
</div>

<div class="feature-ctet">
CTET Focus: Language barrier in math
</div>
</div>
`;
}


/* ======================
REMEDIAL
====================== */

else if(tab === "remedial"){

box.innerHTML = `
<div class="card">
<h3>🛠 Remedial Teaching for Errors</h3>

<div class="feature-card">
Step 1: Diagnose error
<br><span class="feature-bn">
প্রথমে ত্রুটি নির্ণয়।
</span>
</div>

<div class="feature-card">
Step 2: Identify misconception
<br><span class="feature-bn">
ভুল ধারণা শনাক্ত।
</span>
</div>

<div class="feature-card">
Step 3: Provide targeted activity
<br><span class="feature-bn">
নির্দিষ্ট কার্যভিত্তিক শিক্ষণ।
</span>
</div>

<div class="feature-ctet">
Sequence: Diagnostic → Remedial
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

    box.setAttribute("data-tab","common");
    loadTabContent("common");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});