import { findItem }
from "../engine/bookmark_engine.js";

import "../data/mcq_question.js";
import "../data/mock_question.js";
import "../data/piaget_mcq_question.js";
import "../data/scert/teaching-aptitude.js";
import "../data/vygotskyMcq.js";
import "../data/kohlbarg-mcq.js";
import "../data/eriksonDataMcq.js";


const list = document.getElementById("list");

/* ======================
   📦 GET BOOKMARKS
====================== */
function getBookmarks() {
  try {
    let b = JSON.parse(localStorage.getItem("bookmarks")) || [];

    b = b.map(x => {

      // 🔹 Old string format support
      if (typeof x === "string") {
        return {
          type: "MCQ",
          id: x,
          subject: "General",
          date: Date.now()
        };
      }

      // 🔹 Missing subject fix
      if (!x.subject) {
        x.subject = "General";
      }

      // 🔹 Missing date fix (for sort)
      if (!x.date) {
        x.date = Date.now();
      }

      return x;
    });

    localStorage.setItem("bookmarks", JSON.stringify(b));

    return b;

  } catch {
    return [];
  }
}

const bookmarks = getBookmarks();

const subjectSelect =
  document.getElementById("filterSubject");

const uniqueSubjects = [
  ...new Set(
    bookmarks
      .map(b => b.subject)
      .filter(Boolean)
  )
];

uniqueSubjects.forEach(sub => {
  const opt = document.createElement("option");
  opt.value = sub;
  opt.textContent = sub;
  subjectSelect.appendChild(opt);
});

/* ======================
   ❌ NO BOOKMARK
====================== */
function renderBookmarks() {

  const typeFilter =
    document.getElementById("filterType")?.value || "ALL";

  const subjectFilter =
    document.getElementById("filterSubject")?.value || "ALL";

  const sortValue =
    document.getElementById("sortBy")?.value || "LATEST";

  list.innerHTML = "";

  let filtered = [...bookmarks];

  // Type Filter
  if (typeFilter !== "ALL") {
    filtered =
      filtered.filter(b => b.type === typeFilter);
  }

  // Subject Filter
  if (subjectFilter !== "ALL") {
    filtered =
      filtered.filter(b => b.subject === subjectFilter);
  }

  // Sort
  filtered.sort((a, b) => {
    const da = a.date || 0;
    const db = b.date || 0;

    return sortValue === "LATEST"
      ? db - da
      : da - db;
  });

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <p>No bookmarks found ⭐</p>
      </div>
    `;
    return;
  }

  filtered.forEach(bm => {
    const item = findItem(bm.type, bm.id);

if (!item) return;

    const card = document.createElement("div");
    card.className = "bookmark-card";

    card.innerHTML = `
      <h4>${item.title || item.q_en}</h4>
      <div>${item.short || item.q_bn || ""}</div>

      <div style="margin-top:6px;font-size:13px;color:#6b7280;">
        📘 ${bm.subject || "Unknown"}
        • 🏷 ${bm.type}
      </div>

      <div class="bookmark-actions">
        <button class="bookmark-btn"
          onclick="view('${bm.type}','${bm.id}')">
          🔍 View
        </button>

        <button class="bookmark-btn"
          onclick="removeBookmark('${bm.type}','${bm.id}')">
          ❌ Remove
        </button>
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

  // 🔥 update local array
  bookmarks.length = 0;
  bookmarks.push(...updated);

  renderBookmarks(); // 🔥 re-render only
};

["filterType",
 "filterSubject",
 "sortBy"].forEach(id => {

  document
    .getElementById(id)
    ?.addEventListener("change",
      renderBookmarks);
});

renderBookmarks();