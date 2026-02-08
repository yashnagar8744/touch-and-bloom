document.addEventListener("touchstart", function (e) {
  const touch = e.touches[0];

  const flower = document.createElement("div");
  flower.classList.add("flower");

  const colors = ["#ff4d6d", "#ffafcc", "#cdb4db", "#a2d2ff", "#bde0fe"];
  flower.style.background = colors[Math.floor(Math.random() * colors.length)];

  flower.style.left = touch.clientX - 20 + "px";
  flower.style.top = touch.clientY - 20 + "px";

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, 1200);
});
