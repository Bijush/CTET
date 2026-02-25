/* ======================
🚀 NAVIGATION (SAFE)
====================== */

window.go = page => {

  if(!page) return;

  setTimeout(()=>{

    try{
      window.location.href = page;
    }
    catch(err){
      console.error(
        "Navigation error:",
        err
      );
    }

  },150);

};



/* ======================
🌤️ GREETING SYSTEM
====================== */

function setGreeting(name = "") {
  const greetEl = document.getElementById("greetText");
  if (!greetEl) return;

  const hour = new Date().getHours();
  let greeting = "";

 if (hour >= 4 && hour < 12) {
  greeting = "Good Morning ☀️";
} 
else if (hour >= 12 && hour < 17) {
  greeting = "Good Afternoon 🌤️";
} 
else if (hour >= 17 && hour < 21) {
  greeting = "Good Evening 🌆";
} 
else {
  greeting = "Good Night 🌙";
}

  greetEl.textContent = name ? `${greeting}, ${name}!` : greeting;
}



/* ======================
👤 USERNAME LOAD
====================== */

function loadUsername(){

  const userEl =
    document.getElementById("userName"); // ✅ correct id

  if(!userEl) return;

  const name =
    localStorage.getItem("studentName")
    || "Guest User";

  userEl.textContent = name;

  // Greeting e name show korte chaile
  setGreeting(name);
}



/* ======================
📊 PROGRESS RING
====================== */

function loadProgress(){

  const circle =
    document.getElementById(
      "progressRing"
    );

  const text =
    document.getElementById(
      "progressText"
    );

  if(!circle) return;

  const percent = 75;

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
      (percent/100)
      * circumference;

  },300);

  if(text)
    text.textContent =
      percent + "%";
}



/* ======================
🎨 BG SWITCH
====================== */

function setBG(bg){

  if(!bg) return;

  document.body.className =
    bg;

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

  document.body.className =
    saved;

  updateActiveBG(saved);
}



/* Active glow */

function updateActiveBG(bg){

  const buttons =
    document.querySelectorAll(
      ".bg-switch button"
    );

  buttons.forEach((btn,i)=>{

    btn.classList.remove(
      "active"
    );

    if("bg"+(i+1) === bg)
      btn.classList.add(
        "active"
      );

  });
}



/* ======================
💧 RIPPLE EFFECT
====================== */

function initRipple(){

  document
  .querySelectorAll(".ripple")
  .forEach(btn=>{

    btn.addEventListener(
      "click",
      function(e){

        const wave =
          document.createElement(
            "span"
          );

        wave.classList.add(
          "ripple-wave"
        );

        const rect =
          this.getBoundingClientRect();

        wave.style.left =
          e.clientX -
          rect.left + "px";

        wave.style.top =
          e.clientY -
          rect.top + "px";

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



/* ===============================
📲 INSTALL PROMPT SYSTEM
=============================== */

let deferredPrompt;

function initInstallPrompt(){

const installBox =
document.getElementById(
  "installBox"
);

const installBtn =
document.getElementById(
  "installBtn"
);

const closeBtn =
document.getElementById("closeInstall");

if(closeBtn){
  closeBtn.addEventListener("click", ()=>{
    installBox.style.display = "none";
  });
}

if(!installBox || !installBtn)
return;


// Detect availability
window.addEventListener(
"beforeinstallprompt",
e=>{

console.log(
"Install Ready 🔥"
);

e.preventDefault();

deferredPrompt = e;

installBox.style.display =
"flex";

}
);


// Install click
installBtn.addEventListener(
"click",
async ()=>{

if(!deferredPrompt){

alert(
"Install not available"
);

return;

}

deferredPrompt.prompt();

const { outcome } =
await deferredPrompt
.userChoice;

if(outcome==="accepted"){

alert(
"App Installed ✅"
);

localStorage.setItem(
"appInstalled",
"yes"
);

}

installBox.style.display =
"none";

deferredPrompt = null;

}
);


// Hide if already installed
if(
window.matchMedia(
"(display-mode: standalone)"
).matches ||
localStorage.getItem(
"appInstalled"
)
){
installBox.style.display =
"none";
}

}



/* ===============================
🔧 SERVICE WORKER REGISTER
=============================== */

function registerSW(){

if(
"serviceWorker"
in navigator
){

navigator
.serviceWorker
.register("../sw.js")
.then(()=>
console.log(
"SW Ready"
)
)
.catch(err=>
console.error(
"SW Error:",
err
)
);

}

}



/* ===============================
🚀 INIT AFTER DOM LOAD
=============================== */

document.addEventListener(
"DOMContentLoaded",
()=>{

setGreeting();
setInterval(() => {
  setGreeting(
    localStorage.getItem("studentName") || ""
  );
}, 60000); // every 1 minute

loadUsername();
//loadProgress();
loadSavedBG();
initRipple();
setCurrentDate();   // ✅ Date
startAnalogClock(); // ✅ Analog Clock


initInstallPrompt(); // ⭐ Install
registerSW();        // ⭐ SW

}
);


/* ======================
📅 CURRENT DATE
====================== */

function setCurrentDate(){

  const dateEl =
    document.getElementById("currentDate");

  if(!dateEl) return;

  const now = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  dateEl.textContent =
    now.toLocaleDateString("en-IN", options);
}


/* ======================
🕙 ANALOG CLOCK SYSTEM
====================== */

function startAnalogClock(){

  const hourHand =
    document.getElementById("hourHand");

  const minuteHand =
    document.getElementById("minuteHand");

  const secondHand =
    document.getElementById("secondHand");

  if(!hourHand) return;

  function updateClock(){

    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours   = now.getHours();

    const secDeg  = seconds * 6;
    const minDeg  = minutes * 6 + seconds * 0.1;
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;

    secondHand.style.transform =
      `translateX(-50%) rotate(${secDeg}deg)`;

    minuteHand.style.transform =
      `translateX(-50%) rotate(${minDeg}deg)`;

    hourHand.style.transform =
      `translateX(-50%) rotate(${hourDeg}deg)`;
  }

  updateClock();               // first run
  setInterval(updateClock,1000); // every 1 second tick
}