export function setSubject(sub){
  localStorage.setItem(
    "subject", sub
  );
}

export function getSubject(){
  return localStorage.getItem(
    "subject"
  );
}

export function setConcept(id){
  localStorage.setItem(
    "concept", id
  );
}

export function getConcept(){
  return localStorage.getItem(
    "concept"
  );
}