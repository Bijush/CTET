/* ======================
SUBJECT DATA
====================== */

const subjectData = {

  CDP:[

    {
      group:"Development Theories",
      items:[
        { title:"Jean Piaget Theory", page:"piaget.html", progress:0, lock:false },
        { title:"Lev Vygotsky Theory", page:"vygotsky.html", progress:0, lock:false },
        { title:"Kohlberg Moral Development", page:"kohlbarg.html", progress:0, lock:false },
        { title:"Erikson Psychosocial Theory", page:"erikson.html", progress:0, lock:false },
        { title:"Gesell Maturation Theory", page:"gesell.html", progress:0, lock:false }
      ]
    },

    {
      group:"Learning Theories",
      items:[
        { title:"Pavlov Classical Conditioning", page:"pavlov.html", progress:0, lock:false },
        { title:"Thorndike Trial & Error", page:"thorndike.html", progress:0, lock:false },
        { title:"Skinner Operant Conditioning", page:"skinner.html", progress:0, lock:false },
        { title:"Bandura Social Learning", page:"bandura.html", progress:0, lock:false },
        { title:"Bruner Discovery Learning", page:"bruner.html", progress:0, lock:false },
        { title:"Constructivism", page:"constructivism.html", progress:0, lock:false }
      ]
    },

    {
      group:"Intelligence",
      items:[
        { title:"Binet IQ Theory", page:"binet.html", progress:0, lock:false },
        { title:"Gardner Multiple Intelligence", page:"gardner.html", progress:0, lock:false },
        { title:"Sternberg Triarchic Theory", page:"sternberg.html", progress:0, lock:false },
        { title:"Emotional Intelligence", page:"emotional-intelligence.html", progress:0, lock:false }
      ]
    },

    {
      group:"Child Development Concepts",
      items:[
        { title:"Growth vs Development", page:"growth-development.html", progress:0, lock:false },
        { title:"Principles of Development", page:"principles.html", progress:0, lock:false },
        { title:"Heredity & Environment", page:"heredity.html", progress:0, lock:false },
        { title:"Individual Differences", page:"individual-difference.html", progress:0, lock:false },
        { title:"Nature vs Nurture", page:"nature-nurture.html", progress:0, lock:false }
      ]
    },

    {
      group:"Inclusive Education",
      items:[
        { title:"CWSN Concept", page:"cwsn.html", progress:0, lock:false },
        { title:"ADHD", page:"adhd.html", progress:0, lock:false },
        { title:"Dyslexia", page:"dyslexia.html", progress:0, lock:false },
        { title:"Autism", page:"autism.html", progress:0, lock:false },
        { title:"Gifted Child", page:"gifted.html", progress:0, lock:false },
        { title:"RTE Act 2009", page:"rte.html", progress:0, lock:false }
      ]
    },

    {
      group:"Motivation",
      items:[
        { title:"Intrinsic vs Extrinsic Motivation", page:"motivation.html", progress:0, lock:false },
        { title:"Maslow Hierarchy of Needs", page:"maslow.html", progress:0, lock:false },
        { title:"Achievement Motivation", page:"achievement.html", progress:0, lock:false }
      ]
    },

    {
      group:"Assessment & Evaluation",
      items:[
        { title:"Formative Assessment", page:"formative.html", progress:0, lock:false },
        { title:"Summative Assessment", page:"summative.html", progress:0, lock:false },
        { title:"Diagnostic Test", page:"diagnostic.html", progress:0, lock:false },
        { title:"CCE", page:"cce.html", progress:0, lock:false },
        { title:"Bloom's Taxonomy", page:"bloom.html", progress:0, lock:false }
      ]
    }

  ],


  MATH:[

  {
    group:"Nature & Philosophy of Mathematics",
    items:[
      { title:"Nature & Aims", page:"math-nature.html", progress:0, lock:false }
    ]
  },

  {
    group:"Learning Theories Applied to Mathematics",
    items:[
      { title:"Learning Theories in Math", page:"math-theories.html", progress:0, lock:false }
    ]
  },

  {
    group:"Teaching Methods of Mathematics",
    items:[
      { title:"Teaching Methods", page:"math-methods.html", progress:0, lock:false }
    ]
  },

  {
    group:"Learning Resources & TLM",
    items:[
      { title:"TLM & ICT", page:"math-tlm.html", progress:0, lock:false }
    ]
  },

  {
    group:"Assessment & Evaluation in Mathematics",
    items:[
      { title:"Assessment in Math", page:"math-assessment.html", progress:0, lock:false }
    ]
  },

  {
    group:"Error Analysis & Misconceptions",
    items:[
      { title:"Error Analysis", page:"math-errors.html", progress:0, lock:false }
    ]
  },

  {
    group:"Inclusive Mathematics Education",
    items:[
      { title:"Inclusive Math Classroom", page:"math-inclusive.html", progress:0, lock:false }
    ]
  },

  {
    group:"Curriculum & Policies",
    items:[
      { title:"Curriculum & Policy", page:"math-policy.html", progress:0, lock:false }
    ]
  },

  {
    group:"Mathematics Content Pedagogy (Class 1–5 Focus)",
    items:[
      { title:"Content Pedagogy", page:"math-content.html", progress:0, lock:false }
    ]
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

  const list = document.getElementById("conceptList");
  const title = document.getElementById("subjectTitle");

  title.innerText = `📘 ${sub} Concepts`;
  list.innerHTML = "";

  const data = subjectData[sub] || [];
  // 🔥 Load saved progress
// 🔥 Load tab-wise progress
const tabData =
  JSON.parse(localStorage.getItem("tabProgress")) || {};
  
  data.forEach((group,index)=>{

    // 🔹 GROUP CARD
    const groupDiv = document.createElement("div");
    groupDiv.className = "group-card";

    groupDiv.innerHTML = `
      <span>📂 ${group.group}</span>
      <span class="group-arrow" id="arrow-${index}">▼</span>
    `;

    // 🔹 CHILD CONTAINER
    const childContainer = document.createElement("div");
    childContainer.className = "child-container";
    childContainer.id = `child-${index}`;
    childContainer.style.height = "0px";

    group.items.forEach(c=>{
      
      // 🔥 Calculate final progress (tab average)
let finalProgress = c.progress;

if(tabData[c.page]){

  const tabs =
    Object.values(tabData[c.page]);

  if(tabs.length > 0){

    const total =
      tabs.reduce((a,b)=>a+b,0);

    finalProgress =
      Math.round(total / tabs.length);
  }
}

      const div = document.createElement("div");
      div.className = "card";

      div.onclick = e=>{
        e.stopPropagation(); // prevent group toggle

        rippleEffect(e,div);

        if(c.lock){
          alert("🔒 Premium locked");
          return;
        }

        setTimeout(()=>{
          location.href = "./" + c.page;
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
     style="--value:${finalProgress}%">
  ${finalProgress}%
</div>
      `;

      childContainer.appendChild(div);
    });

    // 🔹 TOGGLE LOGIC
    groupDiv.onclick = ()=>{

  const allContainers =
    document.querySelectorAll(".child-container");

  const allArrows =
    document.querySelectorAll(".group-arrow");

  allContainers.forEach(c=>{
    if(c !== childContainer){
      c.style.height = "0px";
    }
  });

  allArrows.forEach(a=>{
    a.classList.remove("rotate");
  });

  if(childContainer.style.height &&
     childContainer.style.height !== "0px"){

    childContainer.style.height = "0px";

  }else{

    childContainer.style.height =
      childContainer.scrollHeight + "px";

    document.getElementById(
      `arrow-${index}`
    ).classList.add("rotate");
  }

};

    list.appendChild(groupDiv);
    list.appendChild(childContainer);

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