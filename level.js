let ar = [];
let k2 = 0.9
let k5 = 0.8
let k6 = 8
let chekt = 0
let complet = false
let fou = true

let chex = []
let chey = []
let cx = 0
let cy = 0



function theArray(a) {
  for (let i = 0; i < a; i++) {
    ar[i] = []
    for (let j = 0; j < a; j++) {
      ar[i][j] = false
    }
  }
}

function boc() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (ar[i][j]) {
        fill(50, 50, 255, 180)
      } else {
        fill(255)
      }
      rect(width / (n + 2) * (i + 1), height / (n + 2) * (j + 1), width / (n + 2), height / (n + 2))
    }
  }

  let ret = [size / (2 * (n + 2)), size / (2 * (n + 2)), size / (n + 2) * k5, size / (n + 2) * k5]
  let hnBx = [ret[0] * (2 * (n + 2) - 1), ret[1], ret[2], ret[3]]

  if ((mouseX > ret[0] - ret[2] / 2) && (mouseX < ret[0] + ret[2] / 2)) {
    if ((mouseY > ret[1] - ret[3] / 2) && (mouseY < ret[1] + ret[3] / 2)) {
      fill(120, 240, 120, 100)
    } else {
      fill(255)
    }
  } else {
    fill(255)
  }
  rectMode(CENTER)
  rect(ret[0], ret[1], ret[2], ret[3])

  textAlign(CENTER, CENTER)
  fill(0)
  textSize(width / (k6 * (n + 2)))
  text('Return', ret[0], ret[1])


  if ((mouseX > hnBx[0] - hnBx[2] / 2) && (mouseX < hnBx[0] + hnBx[2] / 2)) {
    if ((mouseY > hnBx[1] - hnBx[3] / 2) && (mouseY < hnBx[1] + hnBx[3] / 2)) {
      fill(240, 120, 120, 100)
    } else {
      fill(255)
    }
  } else {
    fill(255)
  }
  rect(hnBx[0], hnBx[1], hnBx[2], hnBx[3])

  fill(0)
  textSize(width / (k6 * (n + 2)))
  text('Hint', hnBx[0], hnBx[1])
  rectMode(CORNER)
}

function tec() {
  textAlign(CENTER, BOTTOM)
  fill(0)
  textSize(height / (n + 2) * k2)
  text('Level ' + n, width / 2, height)



  textAlign(CENTER, CENTER)
  for (let i = 0; i < n; i++) {
    if (trakx[i].length != 0) {
      for (let j = 0; j < trakx[i].length; j++) {
        textSize(height / ((n + 2) * trakx[i].length) * k2)
        text(trakx[i][j], width / (n + 2) * (i + 3 / 2), height / ((n + 2) * 2 * trakx[i].length) * (2 * j + 1))
      }
    } else {
      textSize(height / (n + 2) * k2)
      text(0, width / (n + 2) * (i + 3 / 2), height / (2 * (n + 2)))
    }
    if (traky[i].length != 0) {
      for (let j = 0; j < traky[i].length; j++) {
        textSize(height / ((n + 2) * traky[i].length) * k2)
        text(traky[i][j], width / ((n + 2) * 2 * traky[i].length) * (2 * j + 1), height / (n + 2) * (i + 3 / 2))
      }
    } else {
      textSize(height / (n + 2) * k2)
      text(0, width / (2 * (n + 2)), height / (n + 2) * (i + 3 / 2))
    }
  }
}

function chekMas2() {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((mouseX > (width / (n + 2) * (i + 1))) && (mouseX < (width / (n + 2) * (i + 2)))) {
        if ((mouseY > (height / (n + 2) * (j + 1))) && (mouseY < (height / (n + 2) * (j + 2)))) {
          return [i, j]
        }
      }
    }
  }
}

function lit2(a) {
  fill(125, 125, 255, 100)
  rect(width / (n + 2) * (a[0] + 1), height / (n + 2) * (a[1] + 1), width / (n + 2), height / (n + 2))
}

function masPres2() {
  if (chekMas2() != undefined) {
    ar[chekMas2()[0]][chekMas2()[1]] = !ar[chekMas2()[0]][chekMas2()[1]]
  }

  let ret = [size / (2 * (n + 2)), size / (2 * (n + 2)), size / (n + 2) * k5, size / (n + 2) * k5]
  let hnBx = [ret[0] * (2 * (n + 2) - 1), ret[1], ret[2], ret[3]]

  if ((mouseX > ret[0] - ret[2] / 2) && (mouseX < ret[0] + ret[2] / 2)) {
    if ((mouseY > ret[1] - ret[3] / 2) && (mouseY < ret[1] + ret[3] / 2)) {
      stage = 1
    }
  }

  if ((mouseX > hnBx[0] - hnBx[2] / 2) && (mouseX < hnBx[0] + hnBx[2] / 2)) {
    if ((mouseY > hnBx[1] - hnBx[3] / 2) && (mouseY < hnBx[1] + hnBx[3] / 2)) {
      while (fou) {
        k = floor(random(0, n))
        j = floor(random(0, n))

        if ((!complet) && (gri[k][j] > dens) && (ar[k][j] != true)) {
          ar[k][j] = true
          fou = false
          print(k, j)
        }
      }
      fou = true
    }
  }
}

function chek() {
  chekt = true
  for (let i = 0; i < n; i++) {
    chex[i] = []
    chey[i] = []
    for (let j = 0; j < n; j++) {
      if (ar[i][j]) {
        cx++
      } else {
        if (cx != 0) {
          append(chex[i], cx)
        }
        cx = 0
      }
      if (ar[j][i]) {
        cy++
      } else {
        if (cy != 0) {
          append(chey[i], cy)
        }
        cy = 0
      }
    }
    if (cx != 0) {
      append(chex[i], cx)
    }
    if (cy != 0) {
      append(chey[i], cy)
    }
    cx = 0
    cy = 0

    for (let k = 0; k < trakx[i].length; k++) {
      if (chex[i][k] != trakx[i][k]) {
        chekt = false
      }
    }
    for (let k = 0; k < traky[i].length; k++) {
      if (chey[i][k] != traky[i][k]) {
        chekt = false
      }
    }
  }
  if (chekt) {
    complet = true
    chekt = false
  }
}

function complete() {
  textSize(70)
  fill(0)
  textAlign(CENTER, CENTER)
  text('Completed', width / 2, height / 2)
}
