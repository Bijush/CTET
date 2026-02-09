import { toggleBookmark, isBookmarked } from "./core/bookmark.service.js";

const id = localStorage.getItem("conceptId");

const marked = isBookmarked("CONCEPT", id);

bookmarkBtn.onclick = () => {
  toggleBookmark({
    type: "CONCEPT",
    id,
    subject: localStorage.getItem("conceptSubject")
  });
};