async function test1() {
  const smallGear = 3000;
  const bigGear = 7000;
  const lastGear = smallGear * bigGear;

  const possibleGears = new Set();

  /* Achamos todas as marchas possivel e adicionamos no Set possibleGears, que já elimina valores duplicados*/
  for (let i = 1; i <= smallGear; i++) {
    for (let j = i; j <= bigGear; j++) {
      possibleGears.add(i * j);
    }
  }

  const impossibleGears = lastGear - possibleGears.size;

  return impossibleGears;
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
