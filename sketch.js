let size = 600
let num_levels = 15
let dens = 0.6
let stage = 0
//0: Stage 0
//1: chooseLevel
//2: level

function setup() {
  createCanvas(size, size);
}

function draw() {
  background(220);
  if (stage == 0) {
    titleScreen()
    chekMas0()
  }
  if (stage == 1) {
    showLevels()
    chekMas1()
  }
  if (stage == 2) {
    boc()
    tec()
    if (chekMas2() != undefined) {
      lit2(chekMas2())
    }
    if (complet){
      complete()
    }
  }
}


function mousePressed() {
  if (stage == 0) {
    masPres0()
  }
  if (stage == 1) {
    masPres1()
  }
  if (stage == 2) {
    if (complet){
      stage=1
      complet=false
    }
    masPres2()
    chek()
  }
}
