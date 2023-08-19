function test1() {
  const smallGear = 3;
  const bigGear = 7;
  const possibleGears = [];
  const impossibleGears = [];

  for (i = 1; i <= smallGear; i++) {
    for (j = 1; j <= bigGear; j++) {
      possibleGears.push(i * j);
    }
  }
  const lastGear = possibleGears.slice(-1);
  const gears = new Set(possibleGears.sort((a, b) => a - b)); // Removemos valores duplicados transformando o array em um Set

  for (let i = 1; i <= lastGear; i++) {
    if (!gears.has(i)) {
      impossibleGears.push(i);
    }
  }

  /*LOGS DE VERIFICAÇÃO*/
  console.log("marcha máxima = " + lastGear);
  console.log("possiveis = " + gears.size);
  console.log("Impossiveis = " + impossibleGears.length);
  console.log("somatoria = " + (gears.size + impossibleGears.length)); // É a soma das marchas possiveis e impossiveis, portanto precisa ser igual ao valor da ultima marcha
  return impossibleGears.length;
}

// -----------------------------------

function test2() {
  let smallGear = 3000;
  let bigGear = 7000;

  let allSmall = [];
  let allBig = [];
  let possibleGears = [];

  for (let i = 1; i <= smallGear; i++) {
    allSmall.push(i);
  }

  for (let i = 1; i <= bigGear; i++) {
    allBig.push(i);
  }

  for (const element of allBig) {
    for (const gear of allSmall) {
      possibleGears.push(element * gear);
    }
  }

  return new Set(possibleGears.sort((a, b) => a - b));
}

const start = performance.now();
test1();
const end = performance.now();
const elapsed = end - start;
console.log("Tempo de execução: " + elapsed);

// let test = allSmall.reduce(function (r, a, i) {
//   return r + a * allBig[i];
// }, 1);

//--------------------------------------------
