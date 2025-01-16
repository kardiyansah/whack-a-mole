const soils = Array.from(document.querySelectorAll(".soil"));
const moles = Array.from(document.querySelectorAll(".mole"));
const scoreBoard = document.querySelector(".score");
const pop = document.querySelector(".pop");
console.log(pop);

let score;
let finish;

function randomMole(moles) {
  const randomMole = Math.floor(Math.random() * moles.length);
  return moles[randomMole];
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function poppingMole() {
  const mole = randomMole(moles);
  const time = randomTime(450, 800);
  if (mole.classList.contains("popping")) poppingMole();
  mole.classList.add("popping");

  setTimeout(() => {
    mole.classList.remove("popping");
    if (!finish) {
      poppingMole();
    }
  }, time);
}

function play() {
  finish = false;
  score = 0;
  scoreBoard.textContent = score;
  poppingMole();
  setTimeout(() => {
    finish = true;
  }, 10000);
}

function hitMole(that) {
  pop.play();
  score++;
  // console.log(score);
  scoreBoard.textContent = score;
  that.classList.remove("popping");
  // that.style.transition = "all .3s";
}

moles.forEach((mole) => {
  mole.addEventListener("click", function () {
    hitMole(this);
  });
});

// moles.forEach((mole) => {
//   mole.addEventListener("click", function () {
//     hitMole(this);
//   });
// });
