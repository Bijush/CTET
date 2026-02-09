/* ======================
   GET WEAK CONCEPT LIST
====================== */

export function getWeakConceptList(){

  const data =
    JSON.parse(
      localStorage.getItem("weakConcepts")
    ) || {};

  const weakList = [];

  Object.keys(data).forEach(concept => {

    const total =
      data[concept].total;

    const wrong =
      data[concept].wrong;

    const accuracy =
      ((total - wrong) / total) * 100;

    /* Weak threshold */
    if(accuracy < 60){

      weakList.push({
        concept,
        accuracy:
          accuracy.toFixed(0)
      });

    }

  });

  return weakList;
}