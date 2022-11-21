const roulette = document.getElementById("roulette");
const l = roulette.childElementCount;

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

document.addEventListener("DOMContentLoaded", async () => {
  let i = 0;
  
  while (true) {
    roulette.children[i].classList.remove("roulette-focused");
    roulette.children[(i + 1) % l].classList.add("roulette-focused");
    await delay(5000);
    i = (i + 1) % l;
  }
});
