const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const animatedImage = document.getElementById("animatedImage");
let animationPaused = true;
let currentTranslateX = 0;

startButton.addEventListener("click", toggleAnimation);
stopButton.addEventListener("click", stopAnimation);

function toggleAnimation() {
    animatedImage.style.transform = "translateX(100%)";
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopAnimation() {
  const computedStyle = getComputedStyle(animatedImage);
  currentTranslateX = parseInt(computedStyle.transform.split(",")[4]) || 0;

  animatedImage.style.transform = `translateX(${currentTranslateX}px)`;

  animatedImage.style.animationPlayState = "paused";
  startButton.disabled = false;
  stopButton.disabled = true;
}
