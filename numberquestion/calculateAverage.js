function calculateAverageSalaryExcludingExtremes(salaries) {
  let max = -Infinity,
    min = Infinity,
    sum = 0;
  for (let i = 0; i < salaries.length; i++) {
    sum += salaries[i];
    max = Math.max(max, salaries[i]);

    min = Math.min(min, salaries[i]);
  }
  let allsum = sum - max - min;
  if (max + min == sum) {
    return 0;
  } else {
    return allsum / (salaries.length - 2);
  }
}
console.log(calculateAverageSalaryExcludingExtremes([3000, 5000, 7000, 9000]));
console.log(calculateAverageSalaryExcludingExtremes([3000, 5000]));
