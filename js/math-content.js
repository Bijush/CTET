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
NUMBER SYSTEM
====================== */

if(tab === "number"){

box.innerHTML = `
<div class="card">
<h3>🔢 Number System Pedagogy</h3>

<div class="feature-card">
Develop number sense before formal algorithms.
<br><span class="feature-bn">
অ্যালগরিদম শেখানোর আগে সংখ্যা বোধ গড়ে তুলতে হবে।
</span>
</div>

<div class="feature-card">
Use number line, beads, bundles, abacus.
<br><span class="feature-bn">
সংখ্যারেখা, গুটি, বান্ডিল, অ্যাবাকাস ব্যবহার।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Concept > Procedure
</div>
</div>
`;
}


/* ======================
FRACTIONS
====================== */

else if(tab === "fraction"){

box.innerHTML = `
<div class="card">
<h3>➗ Fractions Pedagogy</h3>

<div class="feature-card">
Start with concrete objects (paper folding, pizza model).
<br><span class="feature-bn">
বাস্তব উপকরণ দিয়ে শুরু করতে হবে।
</span>
</div>

<div class="feature-card">
Explain part-whole relationship clearly.
<br><span class="feature-bn">
অংশ-সমগ্র সম্পর্ক বোঝানো জরুরি।
</span>
</div>

<div class="feature-ctet">
CTET Favourite Topic
</div>
</div>
`;
}


/* ======================
ALGEBRA READINESS
====================== */

else if(tab === "algebra"){

box.innerHTML = `
<div class="card">
<h3>🧮 Algebra Readiness</h3>

<div class="feature-card">
Focus on patterns and number relationships.
<br><span class="feature-bn">
প্যাটার্ন ও সংখ্যার সম্পর্ক বোঝানো।
</span>
</div>

<div class="feature-card">
Introduce simple unknowns through activities.
<br><span class="feature-bn">
কার্যভিত্তিকভাবে অজানা সংখ্যা পরিচয় করানো।
</span>
</div>

<div class="feature-ctet">
Keyword: Pattern recognition
</div>
</div>
`;
}


/* ======================
GEOMETRY
====================== */

else if(tab === "geometry"){

box.innerHTML = `
<div class="card">
<h3>📐 Geometry Teaching</h3>

<div class="feature-card">
Begin with shapes in real life.
<br><span class="feature-bn">
বাস্তব জীবনের আকার দিয়ে শুরু।
</span>
</div>

<div class="feature-card">
Use models and drawing activities.
<br><span class="feature-bn">
মডেল ও আঁকার কার্যক্রম ব্যবহার।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Visualization skill
</div>
</div>
`;
}


/* ======================
MENSURATION
====================== */

else if(tab === "mensuration"){

box.innerHTML = `
<div class="card">
<h3>📏 Mensuration Teaching</h3>

<div class="feature-card">
Teach measurement using real objects.
<br><span class="feature-bn">
বাস্তব বস্তু দিয়ে পরিমাপ শেখানো।
</span>
</div>

<div class="feature-card">
Start with non-standard units first.
<br><span class="feature-bn">
প্রথমে অ-মানক একক ব্যবহার।
</span>
</div>

<div class="feature-ctet">
CTET Line: Concrete → Abstract
</div>
</div>
`;
}


/* ======================
DATA HANDLING
====================== */

else if(tab === "data"){

box.innerHTML = `
<div class="card">
<h3>📊 Data Handling Teaching</h3>

<div class="feature-card">
Collect real classroom data.
<br><span class="feature-bn">
শ্রেণিকক্ষের বাস্তব তথ্য সংগ্রহ।
</span>
</div>

<div class="feature-card">
Create pictograph and bar graph.
<br><span class="feature-bn">
চিত্রলেখ ও বার গ্রাফ তৈরি।
</span>
</div>

<div class="feature-ctet">
CTET Focus: Activity-based learning
</div>
</div>
`;
}


/* ======================
WORD PROBLEMS
====================== */

else if(tab === "word"){

box.innerHTML = `
<div class="card">
<h3>📝 Word Problem Strategy</h3>

<div class="feature-card">
Teach language comprehension first.
<br><span class="feature-bn">
প্রথমে ভাষা বোঝার দক্ষতা গড়ে তুলতে হবে।
</span>
</div>

<div class="feature-card">
Use step approach: Read → Plan → Solve → Check.
<br><span class="feature-bn">
পড়ো → পরিকল্পনা করো → সমাধান করো → যাচাই করো।
</span>
</div>

<div class="feature-ctet">
Exam Trap: Direct formula application ❌
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

    box.setAttribute("data-tab","number");
    loadTabContent("number");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});