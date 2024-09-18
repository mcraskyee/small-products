const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//set up process flag
let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = 4;
  }
  console.log("##next", currentActive);
  updateStyle();
});

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  console.log("##prev", currentActive);
  updateStyle();
});

// change styles
function updateStyle() {
  // number dot change
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  // bar change
  progress.style.width =
    ((currentActive - 1) / (circles.length - 1)) * 100 + "%";

  // button change
  if (currentActive === 1) {
    prev.disabled = true;
    next.disabled = false;
  } else if (currentActive === circles.length) {
    prev.disabled = false;
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
