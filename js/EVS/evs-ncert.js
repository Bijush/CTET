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

if (!box) return;

/* ======================
CLASS 3
====================== */

if(tab === "class3"){

box.innerHTML = `
<div class="card">
<h3>📘 Class 3 EVS – Important Chapters</h3>

<div class="feature-card">
✔ Poonam’s Day Out<br>
<span class="feature-bn">Living condition sensitivity</span>
</div>

<div class="feature-card">
✔ Families Can Be Different<br>
<span class="feature-bn">Inclusion & diversity</span>
</div>

<div class="feature-card">
✔ Water O Water<br>
<span class="feature-bn">Water conservation</span>
</div>

</div>
`;

}

/* ======================
CLASS 4
====================== */

else if(tab === "class4"){

box.innerHTML = `
<div class="card">
<h3>📗 Class 4 EVS – High Priority</h3>

<div class="feature-card">
✔ Wahida Prism<br>
<span class="feature-bn">Gender equality</span>
</div>

<div class="feature-card">
✔ Omana’s Journey<br>
<span class="feature-bn">Migration & livelihood</span>
</div>

<div class="feature-card">
✔ A River’s Tale<br>
<span class="feature-bn">Pollution awareness</span>
</div>

</div>
`;

}

/* ======================
CLASS 5
====================== */

else if(tab === "class5"){

box.innerHTML = `
<div class="card">
<h3>📕 Class 5 EVS – MOST IMPORTANT</h3>

<div class="feature-card">
✔ A Shelter So High<br>
<span class="feature-bn">Adaptation to climate</span>
</div>

<div class="feature-card">
✔ No Place for Us?<br>
<span class="feature-bn">Displacement & empathy</span>
</div>

<div class="feature-card">
✔ Blow Hot, Blow Cold<br>
<span class="feature-bn">Scientific inquiry</span>
</div>

<div class="feature-card">
✔ Seeds and Seeds<br>
<span class="feature-bn">Biodiversity</span>
</div>

</div>
`;

}

}

window.goBack = function(){
  window.location.replace("../subject-list.html");
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
DEFAULT LOAD
====================== */

window.addEventListener(
  "DOMContentLoaded",
  () => {

    box =
      document.getElementById("theoryBox");

    if (!box) return;

    box.setAttribute("data-tab","class3");
    loadTabContent("class3");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});