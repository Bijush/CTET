const plan = [
  { subject: "CDP", time: "40 min", tip: "Child psychology focus" },
  { subject: "Math", time: "30 min", tip: "Practice daily" },
  { subject: "EVS", time: "30 min", tip: "Concept + example" },
  { subject: "Language", time: "20 min", tip: "Grammar & pedagogy" }
];

const box = document.getElementById("plan");

plan.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${p.subject}</h3>
    <p>⏱ ${p.time}</p>
    <small>${p.tip}</small>
  `;
  box.appendChild(div);
});

function goBack(){
  window.history.back();
}