async function test1() {
  const smallGear = 3000;
  const bigGear = 7000;
  const lastGear = smallGear * bigGear;

  const possibleGears = new Set();
  const impossibleGears = [];

  /* Achamos todas as marchas possivel e adicionamos no Set possibleGears, que já elimina valores duplicados*/
  for (let i = 1; i <= smallGear; i++) {
    for (let j = 1; j <= bigGear; j++) {
      possibleGears.add(i * j);
    }
  }

  /* Percorremos todos os numeros até a marcha máxima e pushamos no array impossibleGears as marchas não encontradas */
  for (let i = 1; i <= lastGear; i++) {
    if (!possibleGears.has(i)) {
      impossibleGears.push(i);
    }
  }

  /*LOGS DE VERIFICAÇÃO*/

  console.log("marcha máxima = " + lastGear);
  console.log("possiveis = " + possibleGears.size);
  console.log("Impossiveis = " + impossibleGears.length);
  console.log("somatoria = " + (possibleGears.size + impossibleGears.length)); // É a soma das marchas possiveis e impossiveis, portanto precisa ser igual ao valor da ultima marcha
  return impossibleGears.length;
}

// ------------------------------------

const start = performance.now();
test1().then((result) => {
  const end = performance.now();
  const elapsed = end - start;
  console.log("Número de marchas impossíveis:", result);
  console.log("Tempo de execução:", elapsed, "ms");
});

/* 
marcha máxima = 21000000
possiveis = 6218446
Impossiveis = 14781554
somatoria = 21000000
Tempo de execução: 13662.518999993801
*/

// ------------------------------------
