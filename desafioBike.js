function test1() {
  const smallGear = 3000;
  const bigGear = 7000;
  const possibleGears = [];
  const impossibleGears = [];

  async function getGears() {
    for (i = 1; i <= smallGear; i++) {
      for (j = 1; j <= bigGear; j++) {
        possibleGears.push(i * j);
      }
    }
  }
  getGears();
  const lastGear = possibleGears.slice(-1);
  const gears = new Set(possibleGears); // Removemos valores duplicados transformando o array em um Set - .sort((a, b) => a - b)

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

// -----------------------------------

const start = performance.now();
test1();
const end = performance.now();
const elapsed = end - start;
console.log("Tempo de execução: " + elapsed);

/* 
marcha máxima = 21000000
possiveis = 6218446
Impossiveis = 14781554
somatoria = 21000000
Tempo de execução: 13662.518999993801
*/

//--------------------------------------------