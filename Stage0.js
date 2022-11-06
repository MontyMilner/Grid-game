let bx = [size / 5, size / 3, size / 5 * 3, size / 3]
let k1 = 10

function titleScreen() {
  fill(255)
  rect(bx[0], bx[1], bx[2], bx[3])
  textSize(size / k1)
  textAlign(CENTER, CENTER)
  fill(0)
  text('PLAY', width / 2, height / 2)
}

function chekMas0() {
  let ed = size / (k1 * 2)
  if ((mouseX > bx[0]) && (mouseX < bx[0] + bx[2])) {
    if ((mouseY > bx[1]) && (mouseY < bx[1] + bx[3])) {
      noFill()
      rect(bx[0] + ed, bx[1] + ed, bx[2] - 2 * ed, bx[3] - 2 * ed)
    }
  }
}

function masPres0() {
  if ((mouseX > bx[0]) && (mouseX < bx[0] + bx[2])) {
    if ((mouseY > bx[1]) && (mouseY < bx[1] + bx[3])) {
      stage = 1
    }
  }

}
