const ball = document.querySelector(".ball");
const isDarkMode = localStorage.getItem("DARKMODE") === "true";

if (isDarkMode) {
    ball.classList.add("ball-move");
    document.body.classList.add("darkmode");
} else {
    ball.classList.remove("ball-move");
    document.body.classList.remove("darkmode");
}

ball.addEventListener("click", () => {
    ball.classList.toggle("ball-move");
    document.body.classList.toggle("darkmode");
    localStorage.setItem("DARKMODE", document.body.classList.contains("darkmode"));
});

window.addEventListener("beforeunload", () => {
    localStorage.setItem("DARKMODE", document.body.classList.contains("darkmode"));
});