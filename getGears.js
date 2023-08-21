async function getGears() {
  const smallGear = 3000;
  const bigGear = 7000;
  const lastGear = smallGear * bigGear;

  const possibleGears = new Set();

  /* Achamos todas as marchas possiveis e adicionamos no Set possibleGears, que já elimina valores duplicados*/
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
getGears().then((result) => {
  const end = performance.now();
  const elapsed = end - start;
  console.log("Número de marchas impossíveis:", result);
  console.log("Tempo de execução:", elapsed, "ms");
});