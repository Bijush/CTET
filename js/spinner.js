/* ======================
LOAD SPINNER HTML
====================== */

export async function initSpinner(){

  const res =
    await fetch(
      "../pages/components/spinner.html"
    );

  const html =
    await res.text();

  document.body.insertAdjacentHTML(
    "beforeend",
    html
  );
}


/* ======================
SHOW
====================== */

export function showSpinner(){

  document
    .getElementById(
      "globalSpinner"
    )
    ?.classList.add("show");
}


/* ======================
HIDE
====================== */

export function hideSpinner(){

  document
    .getElementById(
      "globalSpinner"
    )
    ?.classList.remove("show");
}