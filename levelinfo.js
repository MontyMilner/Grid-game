let levs = [
  [],
  []
]
let gri = []
let trakx = []
let traky = []
let conx = 0
let cony = 0

function generate(a) {
  for (let i = 0; i < a; i++) {
    gri[i] = []
    for (let j = 0; j < a; j++) {
      gri[i][j] = random()
    }
  }
  print(gri)
  for (let i = 0; i < a; i++) {
    trakx[i] = []
    traky[i] = []
    for (let j = 0; j < a; j++) {
      if (gri[i][j] > dens) {
        conx++
      } else {
        if (conx != 0) {
          append(trakx[i], conx)
        }
        conx = 0
      }
      if (gri[j][i] > dens) {
        cony++
      } else {
        if (cony != 0) {
          append(traky[i], cony)
        }
        cony = 0
      }
    }
    if (conx != 0) {
      append(trakx[i], conx)
    }
    if (cony != 0) {
      append(traky[i], cony)
    }
    conx = 0
    cony = 0
  }
  //print(trakx)
  //print(traky)
}
