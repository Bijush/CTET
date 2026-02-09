/* ======================
🚀 NAVIGATION (SAFE)
====================== */

window.go = page => {

  if(!page) return;

  // Smooth click delay
  setTimeout(()=>{

    try{
      window.location.href = page;
    }
    catch(err){
      console.error("Navigation error:", err);
    }

  },150);

};



/* ======================
🌤️ GREETING SYSTEM
====================== */

function setGreeting(){

  const greetEl =
    document.getElementById("greetText");

  if(!greetEl) return;

  const h = new Date().getHours();

  let text = "Good Evening 👋";

  if(h < 12)
    text = "Good Morning ☀️";

  else if(h < 17)
    text = "Good Afternoon 🌤";

  else if(h < 21)
    text = "Good Evening 🌆";

  else
    text = "Good Night 🌙";

  greetEl.textContent = text;
}



/* ======================
👤 USERNAME LOAD
====================== */

function loadUsername(){

  const userEl =
    document.getElementById("userName");

  if(!userEl) return;

  const name =
    localStorage.getItem("username")
    || "Bijush Kumar Roy";

  userEl.textContent = name;
}



/* ======================
📊 PROGRESS RING
====================== */

function loadProgress(){

  const circle =
    document.getElementById("progressRing");

  const text =
    document.getElementById("progressText");

  if(!circle) return;

  const percent = 75; // dynamic later

  const radius = 28;
  const circumference =
    2 * Math.PI * radius;

  circle.style.strokeDasharray =
    circumference;

  circle.style.strokeDashoffset =
    circumference;

  setTimeout(()=>{

    circle.style.strokeDashoffset =
      circumference -
      (percent/100) * circumference;

  },300);

  if(text)
    text.textContent = percent + "%";
}



/* ======================
🎨 BG SWITCH
====================== */

function setBG(bg){

  if(!bg) return;

  document.body.className = bg;

  localStorage.setItem(
    "dashboardBG",
    bg
  );

  updateActiveBG(bg);
}



/* Load saved BG */

function loadSavedBG(){

  const saved =
    localStorage.getItem(
      "dashboardBG"
    ) || "bg1";

  document.body.className = saved;

  updateActiveBG(saved);
}



/* Active glow */

function updateActiveBG(bg){

  const buttons =
    document.querySelectorAll(
      ".bg-switch button"
    );

  buttons.forEach((btn,i)=>{

    btn.classList.remove("active");

    if("bg"+(i+1) === bg)
      btn.classList.add("active");

  });
}



/* ======================
💧 RIPPLE EFFECT (SAFE)
====================== */

function initRipple(){

  document.querySelectorAll(".ripple")
  .forEach(btn=>{

    btn.addEventListener(
      "click",
      function(e){

        const wave =
          document.createElement("span");

        wave.classList.add(
          "ripple-wave"
        );

        const rect =
          this.getBoundingClientRect();

        wave.style.left =
          e.clientX - rect.left + "px";

        wave.style.top =
          e.clientY - rect.top + "px";

        this.appendChild(wave);

        setTimeout(
          ()=>wave.remove(),
          600
        );

      }
    );

  });

}



/* ======================
📦 APP VERSION
====================== */

function setVersion(){

  const v =
    document.getElementById(
      "appVersion"
    );

  if(v)
    v.textContent =
      "Version 1.0.0";
}



/* ======================
🚀 INIT AFTER DOM LOAD
====================== */

document.addEventListener(
  "DOMContentLoaded",
  ()=>{

    setGreeting();
    loadUsername();
    loadProgress();
    loadSavedBG();
    initRipple();
    setVersion();

  }
);