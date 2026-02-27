/* ======================
UNIVERSAL PROGRESS TRACKER
====================== */

(function(){

  function saveProgress(percent){

    const page =
      location.pathname.split("/").pop();

    let data =
      JSON.parse(
        localStorage.getItem("progressData")
      ) || {};

    data[page] = percent;

    localStorage.setItem(
      "progressData",
      JSON.stringify(data)
    );
  }

  function updateProgress(){

    const scrollTop =
      window.scrollY;

    const windowHeight =
      window.innerHeight;

    const docHeight =
      document.body.scrollHeight;

    const total =
      docHeight - windowHeight;

    const percent =
      Math.min(
        100,
        Math.round(
          (scrollTop / total) * 100
        )
      );

    saveProgress(percent);
  }

  window.addEventListener(
    "scroll",
    updateProgress
  );

})();