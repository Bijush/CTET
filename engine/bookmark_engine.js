/* ======================
   BOOKMARK ENGINE
====================== */

const registry = {
  MCQ: [],
  MOCK: [],
  CONCEPT: [],
  THEORY: [],
  GK: []
  
};

/* ======================
   REGISTER DATA
====================== */
export function registerData(type, data){

  if(!registry[type]){
    registry[type] = [];
  }

  registry[type].push(...data);

}

/* ======================
   FIND QUESTION
====================== */
export function findItem(type, id){

  const pool = registry[type] || [];

  return pool.find(x => x.id === id);

}

/* ======================
   GET SUBJECT LIST
====================== */
export function getSubjects(){

  const subjects = new Set();

  Object.values(registry).forEach(arr => {

    arr.forEach(q => {

      if(q.subject){
        subjects.add(q.subject);
      }

    });

  });

  return [...subjects];

}