let button = document.getElementById("button");

button.onclick = () => {
  window.scrollTo({
    top: 500,
    behavior: "smooth",
  });
};

window.addEventListener("scroll", () => {
  if (scrollY > 2900) {
    var audio = document.getElementById("myAudio");
    audio.play();
    window.removeEventListener("scroll", arguments.callee);
  }
});
