function test1() {
  let smallGear = 1500;
  let smallGear2 = 3000;
  let bigGear = 3500;
  let bigGear2 = 7000;

  let allSmall = [];
  let allBig = [];
  let possibleGears = [];
  const impossibleGears = [];

  async function small() {
    for (let i = 1; i <= smallGear; i++) {
      allSmall.push(i);
    }
  }

  async function small2() {
    for (let i = 1500; i <= smallGear2; i++) {
      allSmall.push(i);
    }
  }

  async function big() {
    for (let i = 1; i <= bigGear; i++) {
      allBig.push(i);
    }
  }

  async function big2() {
    for (let i = 3500; i <= bigGear2; i++) {
      allBig.push(i);
    }
  }

  async function calc() {
    for (const element of allBig) {
      for (const gear of allSmall) {
        possibleGears.push(element * gear);
      }
    }
  }
  small();
  small2();
  big();
  big2();
  calc();

  const lastGear = possibleGears.slice(-1);
  const gears = new Set(possibleGears);

  async function checkImpossibleGears() {
    /* Percorremos todos os numeros até a marcha máxima e pushamos no array impossibleGears as marchas não encontradas */
    for (let i = 1; i <= lastGear; i++) {
      if (!gears.has(i)) {
        impossibleGears.push(i);
      }
    }
  }
  checkImpossibleGears();
  /*LOGS DE VERIFICAÇÃO*/

  console.log("marcha máxima = " + lastGear);
  console.log("possiveis = " + gears.size);
  console.log("Impossiveis = " + impossibleGears.length);
  console.log("somatoria = " + (gears.size + impossibleGears.length)); // É a soma das marchas possiveis e impossiveis, portanto precisa ser igual ao valor da ultima marcha
  return impossibleGears.length;
}

const start = performance.now();
test1();
const end = performance.now();
const elapsed = end - start;
console.log("Tempo de execução: " + elapsed);
