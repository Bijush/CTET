const params = new URLSearchParams(location.search);

const topic = params.get("topic") || "piaget";



import(`./theory/${topic}.js`)
.then(()=>{



})
.catch(err=>{

console.error(err);

document.getElementById("theoryBox").innerHTML =
"<div>Theory not found</div>";

});