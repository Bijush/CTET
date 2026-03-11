export function showSnack(msg){

const sb =
document.getElementById("snackbar");

const bookmarkBtn =
document.getElementById("bookmarkBtn");

if(!sb) return;

/* RESET */
sb.classList.remove(
"show",
"snack-success",
"snack-error",
"snack-info"
);

sb.innerText = msg;

const text = msg.toLowerCase();

/* COLOR TYPE */
if(
text.includes("correct") ||
text.includes("saved") ||
text.includes("bookmarked")
){
sb.classList.add("snack-success");
}
else if(
text.includes("wrong") ||
text.includes("removed") ||
text.includes("error")
){
sb.classList.add("snack-error");
}
else{
sb.classList.add("snack-info");
}

/* DEFAULT POSITION */
sb.style.position = "fixed";
sb.style.left = "50%";
sb.style.bottom = "110px";
sb.style.top = "auto";
sb.style.transform = "translateX(-50%)";

/* BOOKMARK POSITION */
if(bookmarkBtn){

const rect =
bookmarkBtn.getBoundingClientRect();

const snackWidth =
sb.offsetWidth || 220;

const screenWidth =
window.innerWidth;

let left =
rect.left + rect.width / 2;

const margin = 12;

if(left - snackWidth/2 < margin){
left = snackWidth/2 + margin;
}

if(left + snackWidth/2 > screenWidth - margin){
left =
screenWidth -
snackWidth/2 -
margin;
}

sb.style.left = left + "px";
sb.style.top =
rect.bottom + 10 + "px";

sb.style.bottom = "auto";

}

/* SHOW */
sb.classList.add("show");

setTimeout(()=>{
sb.classList.remove("show");
},1600);

}