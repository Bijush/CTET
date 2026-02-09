import { mcqQuestion } from "../data/mcq_question.js";
import { mockQuestion } from "../data/mock_question.js";
import { conceptCDP } from "../data/concept_cdp.js";
import { conceptMath } from "../data/concept_math.js";
import { conceptEVS } from "../data/concept_evs.js";
import { detectTraps } from "../utils/trap_detector.js";
import { piagetMcq } 
from "../data/piaget_mcq_question.js";

const list = document.getElementById("list");

/* ======================
   📦 GET BOOKMARKS
====================== */
function getBookmarks() {
  try {
    let b = JSON.parse(localStorage.getItem("bookmarks")) || [];

    // normalize old string format
    b = b.map(x =>
      typeof x === "string"
        ? { type: "MCQ", id: x }
        : x
    );

    return b;
  } catch {
    return [];
  }
}

const bookmarks = getBookmarks();

/* ======================
   ❌ NO BOOKMARK
====================== */
if (bookmarks.length === 0) {
  list.innerHTML = `
    <p style="text-align:center;color:#6b7280;">
      No bookmarks yet ⭐
    </p>
  `;
} else {

  bookmarks.forEach(bm => {
    let item = null;

    /* 🔁 DATA SOURCE SELECT */
    if (bm.type === "MCQ") {

  item = mcqQuestion.find(q => q.id === bm.id)

      || piagetMcq.find(q => q.id === bm.id);

}else if (bm.type === "MOCK") {
      item = mockQuestion.find(q => q.id === bm.id);

    } else if (bm.type === "CONCEPT") {
      const allConcepts = [
        ...conceptCDP,
        ...conceptMath,
        ...conceptEVS
      ];
      item = allConcepts.find(c => c.id === bm.id);
    }

    if (!item) return;

    const card = document.createElement("div");
    card.className = "card";
    card.style.marginBottom = "14px";

    /* 🧾 CARD CONTENT */
    card.innerHTML = `
      <h4>${item.title || item.q_en}</h4>
      <div>${item.short || item.q_bn || ""}</div>

      <div style="margin-top:6px;font-size:13px;color:#6b7280;">
        📘 ${bm.subject}
        • 🏷 ${bm.type}
      </div>

      <div style="margin-top:10px;display:flex;gap:10px;">
        <button onclick="view('${bm.type}','${bm.id}')">🔍 View</button>
        <button onclick="removeBookmark('${bm.type}','${bm.id}')">❌ Remove</button>
      </div>
    `;

    list.appendChild(card);
  });
}

/* ======================
   🔍 VIEW
====================== */
window.view = (type, id) => {
  location.href = `bookmark-view.html?type=${type}&id=${id}`;
};

/* ======================
   ❌ REMOVE
====================== */
window.removeBookmark = (type, id) => {
  const updated = bookmarks.filter(
    b => !(b.type === type && b.id === id)
  );
  localStorage.setItem("bookmarks", JSON.stringify(updated));
  location.reload();
};