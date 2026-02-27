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
USE OF TLM
====================== */

if(tab === "tlm"){

box.innerHTML = `
<div class="card">
<h3>📘 Use of Teaching Learning Materials (TLM)</h3>

<div class="feature-card">
TLM makes abstract concepts concrete.
<br><span class="feature-bn">
শিক্ষণ উপকরণ অমূর্ত ধারণাকে বাস্তব করে তোলে।
</span>
</div>

<div class="feature-card">
Examples: Number line, flash cards, beads, charts.
<br><span class="feature-bn">
উদাহরণ: সংখ্যারেখা, ফ্ল্যাশ কার্ড, গুটি, চার্ট।
</span>
</div>

<div class="feature-card">
Improves engagement and participation.
<br><span class="feature-bn">
শিক্ষার্থীদের অংশগ্রহণ বাড়ায়।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Activity-based learning
</div>
</div>
`;
}


/* ======================
MATH LAB
====================== */

else if(tab === "mathlab"){

box.innerHTML = `
<div class="card">
<h3>🧪 Mathematics Laboratory</h3>

<div class="feature-card">
Provides hands-on experience in mathematics.
<br><span class="feature-bn">
গণিতে হাতে-কলমে শেখার সুযোগ দেয়।
</span>
</div>

<div class="feature-card">
Encourages experimentation and discovery.
<br><span class="feature-bn">
অনুসন্ধান ও আবিষ্কারভিত্তিক শিক্ষণ।
</span>
</div>

<div class="feature-card">
Supports conceptual clarity.
<br><span class="feature-bn">
ধারণাগত স্পষ্টতা বাড়ায়।
</span>
</div>

<div class="feature-ctet">
Keyword: Learning by doing
</div>
</div>
`;
}


/* ======================
ICT
====================== */

else if(tab === "ict"){

box.innerHTML = `
<div class="card">
<h3>💻 Use of ICT in Mathematics</h3>

<div class="feature-card">
Use of digital tools and smart boards.
<br><span class="feature-bn">
ডিজিটাল উপকরণ ও স্মার্ট বোর্ডের ব্যবহার।
</span>
</div>

<div class="feature-card">
Helps in visualization of graphs and geometry.
<br><span class="feature-bn">
গ্রাফ ও জ্যামিতি বোঝাতে সহায়ক।
</span>
</div>

<div class="feature-card">
Supports interactive learning.
<br><span class="feature-bn">
ইন্টারেক্টিভ শেখাকে সমর্থন করে।
</span>
</div>

<div class="feature-ctet">
CTET Line: Technology integration
</div>
</div>
`;
}


/* ======================
MANIPULATIVES
====================== */

else if(tab === "manipulatives"){

box.innerHTML = `
<div class="card">
<h3>🔢 Use of Manipulatives</h3>

<div class="feature-card">
Concrete materials used to teach math concepts.
<br><span class="feature-bn">
বাস্তব উপকরণ দিয়ে গণিত শেখানো।
</span>
</div>

<div class="feature-card">
Examples: Base-10 blocks, fraction strips, counters.
<br><span class="feature-bn">
উদাহরণ: Base-10 ব্লক, ভগ্নাংশ স্ট্রিপ, কাউন্টার।
</span>
</div>

<div class="feature-card">
Helps in better conceptual understanding.
<br><span class="feature-bn">
ধারণাগত বোঝাপড়া উন্নত করে।
</span>
</div>

<div class="feature-ctet">
Exam Trap: Only lecture method is enough ❌
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

    box.setAttribute("data-tab","tlm");
    loadTabContent("tlm");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});