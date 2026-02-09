import { setConcept, getSubject, setSubject } from "./utils/state.js";

const list = document.getElementById("conceptList");
const title = document.getElementById("subjectTitle");

async function loadData(sub) {
  if (sub === "CDP")
    return (await import("../data/concept_cdp.js")).conceptCDP;
  if (sub === "MATH")
    return (await import("../data/concept_math.js")).conceptMath;
  if (sub === "EVS")
    return (await import("../data/concept_evs.js")).conceptEVS;
  return [];
}

export async function renderConcepts(sub) {
  list.innerHTML = "Loading…";
  setSubject(sub);

  const data = await loadData(sub);
  title.innerText = `📘 ${sub} Concepts`;
  list.innerHTML = "";

  data.forEach(c => {
    const div = document.createElement("div");
    div.className = "card";
    div.onclick = () => {
      setConcept(c.id);
      location.href = "concept-view.html";
    };
    div.innerHTML = `
      <h3>${c.title}</h3>
      <p>${c.definition?.bn || ""}</p>
    `;
    list.appendChild(div);
  });
}

window.switchSubject = s => renderConcepts(s);
renderConcepts(getSubject());