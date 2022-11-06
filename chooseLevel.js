let spac1 = 4
let spac2 = size / (2 * spac1 + 1)
let k7=0.85

function showLevels() {
  for (let i = 0; i < num_levels; i++) {
    if (chekMas1() == i) {
      fill(100, 100, 250, 100)
    } else {
      fill(255)
    }
    rect(spac2 * (2 * (i % 4) + 1), spac2 * (2 * floor(i / 4) + 1), spac2, spac2)
    textAlign(CENTER, CENTER)
    textSize(spac2*k7)
    fill(0)
    text(i + 1, spac2 * (2 * (i % 4) + 3 / 2), spac2 * (2 * floor(i / 4) + 3 / 2))
  }
}


function chekMas1() {
  for (let i = 0; i < num_levels; i++) {
    if ((mouseX > spac2 * (2 * (i % 4) + 1)) && (mouseX < spac2 * (2 * (i % 4) + 2))) {
      if ((mouseY > spac2 * (2 * floor(i / 4) + 1)) && (mouseY < spac2 * (2 * floor(i / 4) + 2))) {
        return i
      }
    }
  }
}

function masPres1() {
  if (chekMas1() != undefined) {
    stage = 2
    n = chekMas1() + 1
    theArray(n)
    generate(n)
  }
}
