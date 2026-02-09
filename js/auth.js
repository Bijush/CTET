function login() {
  const name = document.getElementById("name").value;
  localStorage.setItem("studentName", name);
  window.location.href = "./pages/dashboard.html";
}