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
POLLUTION
====================== */

if(tab === "pollution"){

box.innerHTML = `
<div class="card">
<h3>🌫 Pollution (দূষণ)</h3>

<div class="feature-card">
<b>1️⃣ Air Pollution</b><br>
Caused by vehicles, factories, burning of fuels.<br>
<span class="feature-bn">
যানবাহন, কারখানা ও জ্বালানি পোড়ানো থেকে বায়ু দূষণ হয়।
</span><br>
Effects: Breathing problems, global warming.
</div>

<div class="feature-card">
<b>2️⃣ Water Pollution</b><br>
Industrial waste, sewage, plastic dumping.<br>
<span class="feature-bn">
কারখানার বর্জ্য, নর্দমা ও প্লাস্টিক ফেলার ফলে জল দূষণ হয়।
</span><br>
Effects: Water-borne diseases.
</div>

<div class="feature-card">
<b>3️⃣ Noise Pollution</b><br>
Loudspeakers, traffic, construction work.<br>
<span class="feature-bn">
লাউডস্পিকার, যানবাহন ও নির্মাণকাজ শব্দ দূষণ সৃষ্টি করে।
</span><br>
Effects: Stress, hearing loss.
</div>

<div class="feature-ctet">
CTET Focus: Types + Causes + Prevention (Plantation, Reduce plastic, Public awareness)
</div>

</div>
`;
}

/* ======================
FOREST
====================== */

else if(tab === "forest"){

box.innerHTML = `
<div class="card">
<h3>🌳 Forest & Biodiversity (বন ও জীববৈচিত্র্য)</h3>

<div class="feature-card">
<b>Importance of Forest:</b><br>
✔ Provides oxygen<br>
✔ Maintains ecological balance<br>
✔ Home of wildlife<br>
<span class="feature-bn">
অক্সিজেন দেয়, পরিবেশের ভারসাম্য রক্ষা করে, বন্যপ্রাণীর আবাসস্থল।
</span>
</div>

<div class="feature-card">
<b>Deforestation Effects:</b><br>
✔ Soil erosion<br>
✔ Floods<br>
✔ Loss of biodiversity<br>
<span class="feature-bn">
মাটিক্ষয়, বন্যা ও জীববৈচিত্র্যের ক্ষতি।
</span>
</div>

<div class="feature-card">
<b>Wildlife Protection:</b><br>
National parks, wildlife sanctuaries, conservation laws.
</div>

<div class="feature-ctet">
CTET Keyword: Conservation • Sustainable Development
</div>

</div>
`;
}

/* ======================
WATER
====================== */

else if(tab === "water"){

box.innerHTML = `
<div class="card">
<h3>💧 Water Conservation (জল সংরক্ষণ)</h3>

<div class="feature-card">
<b>Why Save Water?</b><br>
✔ Essential for life<br>
✔ Limited fresh water resources<br>
<span class="feature-bn">
জীবনের জন্য অপরিহার্য এবং মিঠা জলের পরিমাণ সীমিত।
</span>
</div>

<div class="feature-card">
<b>Methods:</b><br>
✔ Rainwater Harvesting<br>
✔ Reuse & Recycling<br>
✔ Prevent water wastage<br>
<span class="feature-bn">
বৃষ্টির জল সংরক্ষণ, পুনঃব্যবহার, অপচয় রোধ।
</span>
</div>

<div class="feature-card">
<b>CTET Example:</b><br>
“Fix leaking taps” → Practical conservation step.
</div>

<div class="feature-ctet">
CTET Line: Sustainable use of resources
</div>

</div>
`;
}

/* ======================
CLIMATE
====================== */

else if(tab === "climate"){

box.innerHTML = `
<div class="card">
<h3>🌍 Climate Change (জলবায়ু পরিবর্তন)</h3>

<div class="feature-card">
<b>Global Warming:</b><br>
Increase in Earth’s temperature due to greenhouse gases.<br>
<span class="feature-bn">
গ্রিনহাউস গ্যাসের কারণে পৃথিবীর তাপমাত্রা বৃদ্ধি।
</span>
</div>

<div class="feature-card">
<b>Greenhouse Effect:</b><br>
Carbon dioxide traps heat in atmosphere.
</div>

<div class="feature-card">
<b>Effects:</b><br>
✔ Melting glaciers<br>
✔ Rising sea level<br>
✔ Extreme weather events
</div>

<div class="feature-card">
<b>Prevention:</b><br>
✔ Plant more trees<br>
✔ Use renewable energy<br>
✔ Reduce carbon footprint
</div>

<div class="feature-ctet">
CTET Trap: “Only industrial cause” ❌ (Multiple human activities involved)
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

    box.setAttribute("data-tab","pollution");
    loadTabContent("pollution");
  }
);

window.addEventListener("scroll",()=>{

  const currentTab =
    box?.getAttribute("data-tab");

  if(currentTab){
    saveTabProgress(currentTab);
  }

});