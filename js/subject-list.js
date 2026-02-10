/* ======================
SUBJECT DATA
====================== */

const subjectData = {

  CDP:[
    {
      title:"Jean Piaget Theory",
      page:"piaget.html",
      progress:80,
      lock:false
    },
    {
      title:"Lev Vygotsky Theory",
      page:"vygotsky.html",
      progress:60,
      lock:false
    },
    {
      title:"Kohlberg Theory",
      page:"kohlberg.html",
      progress:20,
      lock:true
    }
  ],

  MATH:[
    {
      title:"Number System",
      page:"number-system.html",
      progress:40,
      lock:false
    }
  ]
};


/* ======================
ICON COLOR AUTO
====================== */

function getColor(sub){

  const map = {

    CDP:"#42a5f5",
    MATH:"#66bb6a",
    EVS:"#26c6da",
    ENGLISH:"#ab47bc",
    BENGALI:"#ef5350"

  };

  return map[sub] || "#1e88e5";
}


/* ======================
CHANGE SUBJECT
====================== */

window.changeSubject =
function(ev,sub){

  document
    .querySelectorAll(".tab")
    .forEach(t =>
      t.classList.remove("active")
    );

  ev.currentTarget
    .classList.add("active");

  renderConcepts(sub);
};


/* ======================
RENDER
====================== */

function renderConcepts(sub){

  const list =
    document.getElementById(
      "conceptList"
    );

  const title =
    document.getElementById(
      "subjectTitle"
    );

  title.innerText =
    `📘 ${sub} Concepts`;

  list.innerHTML = "";

  const data =
    subjectData[sub] || [];

  data.forEach(c => {

    const div =
      document.createElement("div");

    div.className = "card";

    /* Ripple click */

    div.onclick = e => {

      rippleEffect(e,div);

      if(c.lock){
        alert("🔒 Premium locked");
        return;
      }

      setTimeout(()=>{
        location.href =
          "./" + c.page;
      },200);
    };

    div.innerHTML = `

      <div class="icon"
           style="background:${getColor(sub)}">
        📘
      </div>

      <div style="flex:1;">
        ${c.title}
      </div>

      <div class="progress"
           style="--value:${c.progress}%">
        ${c.progress}%
      </div>

      ${
        c.lock
        ? `<div class="lock">PRO</div>`
        : ""
      }

    `;

    list.appendChild(div);
  });
}


/* ======================
RIPPLE EFFECT
====================== */

function rippleEffect(e,el){

  const circle =
    document.createElement("span");

  circle.classList.add("ripple");

  const rect =
    el.getBoundingClientRect();

  const size =
    Math.max(rect.width,
             rect.height);

  circle.style.width =
  circle.style.height =
    size + "px";

  circle.style.left =
    e.clientX - rect.left
    - size/2 + "px";

  circle.style.top =
    e.clientY - rect.top
    - size/2 + "px";

  el.appendChild(circle);

  setTimeout(()=>{
    circle.remove();
  },600);
}


/* ======================
DEFAULT LOAD
====================== */

renderConcepts("CDP");