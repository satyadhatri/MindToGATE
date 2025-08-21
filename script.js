console.log("MindToGATE is live!");
document.querySelectorAll(".accordion").forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = (panel.style.display === "block") ? "none" : "block";
  });
});
document.getElementById("searchInput").addEventListener("keyup", function () {
  let filter = this.value.toUpperCase();
  let buttons = document.querySelectorAll(".accordion");

  buttons.forEach(button => {
    let text = button.textContent || button.innerText;
    button.style.display = text.toUpperCase().includes(filter) ? "" : "none";
  });
});
