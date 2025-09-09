function numericalMorphisms(n) {
  n = n + "";
  let result = "";
  for (let i = 0; i <= n.length; i++) {
    if (n[i] < 9) {
      result += Number(n[i]) + 1;
    }
    if (n[i] == 9) {
      result += Number(n[i]) + 1;
    }
  }
  return result;
}
console.log(numericalMorphisms(1234));
console.log(numericalMorphisms(9294));
