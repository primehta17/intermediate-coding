function calculateWeeklySalary(rate, hours) {
  if (hours <= 40) {
    return hours * rate;
  } else if (hours > 40) {
    let newhr = hours - 40;
    let s = newhr * 1.5 * rate;
    return s + 40 * rate;
  }
}
console.log(calculateWeeklySalary(20, 45));
console.log(calculateWeeklySalary(20, 40));
