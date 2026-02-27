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
PIAGET
====================== */

if(tab === "piaget"){

box.innerHTML = `
<div class="card">
<h3>🧠 Jean Piaget in Mathematics</h3>

<div class="feature-card">
Children construct knowledge actively.
<br><span class="feature-bn">
শিশুরা সক্রিয়ভাবে জ্ঞান গঠন করে।
</span>
</div>

<div class="feature-card">
Primary learners are mostly in Concrete Operational Stage (7–11 years).
<br><span class="feature-bn">
প্রাথমিক স্তরের শিশুরা Concrete Operational পর্যায়ে থাকে।
</span>
</div>

<div class="feature-ctet">
CTET Keyword: Constructivism + Concrete Operational + TLM
</div>
</div>
`;
}


/* ======================
VYGOTSKY
====================== */

else if(tab === "vygotsky"){

box.innerHTML = `
<div class="card">
<h3>🤝 Lev Vygotsky in Mathematics</h3>

<div class="feature-card">
Learning happens through social interaction.
<br><span class="feature-bn">
শেখা সামাজিক মিথস্ক্রিয়ার মাধ্যমে ঘটে।
</span>
</div>

<div class="feature-card">
ZPD helps child solve problems with guidance.
<br><span class="feature-bn">
ZPD-এর মাধ্যমে শিশু সহায়তায় সমস্যা সমাধান করে।
</span>
</div>

<div class="feature-card">
Scaffolding supports gradual independence.
<br><span class="feature-bn">
Scaffolding ধীরে ধীরে স্বনির্ভরতা বাড়ায়।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Guided learning / Peer learning
</div>
</div>
`;
}


/* ======================
BRUNER
====================== */

else if(tab === "bruner"){

box.innerHTML = `
<div class="card">
<h3>📚 Jerome Bruner in Mathematics</h3>

<div class="feature-card">
Enactive → Iconic → Symbolic learning stages.
<br><span class="feature-bn">
কাজ → ছবি → প্রতীক ধাপ।
</span>
</div>

<div class="feature-card">
Spiral curriculum revisits concepts deeply.
<br><span class="feature-bn">
Spiral curriculum একই ধারণা উচ্চতর স্তরে শেখায়।
</span>
</div>

<div class="feature-ctet">
CTET Line: Discovery learning
</div>
</div>
`;
}


/* ======================
CONSTRUCTIVISM
====================== */

else if(tab === "constructivism"){

box.innerHTML = `
<div class="card">
<h3>🧩 Constructivism in Math Classroom</h3>

<div class="feature-card">
Students build their own understanding.
<br><span class="feature-bn">
শিক্ষার্থীরা নিজেরাই ধারণা গঠন করে।
</span>
</div>

<div class="feature-card">
Teacher acts as facilitator.
<br><span class="feature-bn">
শিক্ষক সহায়ক হিসেবে কাজ করেন।
</span>
</div>

<div class="feature-card">
Errors are part of learning.
<br><span class="feature-bn">
ভুল শেখার অংশ।
</span>
</div>

<div class="feature-ctet">
Exam Trap: Rote learning ❌
</div>
</div>
`;
}


/* ======================
BEHAVIORISM
====================== */

else if(tab === "behaviorism"){

box.innerHTML = `
<div class="card">
<h3>🔁 Behaviorism in Mathematics</h3>

<div class="feature-card">
Learning through reinforcement and practice.
<br><span class="feature-bn">
অনুশীলন ও পুনর্বলনের মাধ্যমে শেখা।
</span>
</div>

<div class="feature-card">
Drill and practice method.
<br><span class="feature-bn">
Drill পদ্ধতি।
</span>
</div>

<div class="feature-ctet">
CTET Line: Skinner / Reinforcement
</div>
</div>
`;
}


/* ======================
GAGNE
====================== */

else if(tab === "gagne"){

box.innerHTML = `
<div class="card">
<h3>📊 Gagne’s Hierarchy in Mathematics</h3>

<div class="feature-card">
Learning occurs in hierarchical order.
<br><span class="feature-bn">
শেখা ধাপে ধাপে হয়।
</span>
</div>

<div class="feature-card">
Simple → Complex progression.
<br><span class="feature-bn">
সহজ থেকে জটিল।
</span>
</div>

<div class="feature-ctet">
CTET Trigger: Sequential learning
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

    box.setAttribute("data-tab","piaget");
    loadTabContent("piaget");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});