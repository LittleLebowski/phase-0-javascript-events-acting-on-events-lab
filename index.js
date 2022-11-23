// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";
dodger.style.left = "180px";

const movment = (e) => {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft(e);
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight(e);
  }
};

const moveDodgerLeft = (e) => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left - 1}px`;
};

const moveDodgerRight = (e) => {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
  }
};
document.addEventListener("keydown", movment);
