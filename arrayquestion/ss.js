function calculateTimeSaved(speed1, speed2, distance) {
  let time1 = distance / speed1;
  let time2 = distance / speed2;
  return time1 - time2;
}
console.log(calculateTimeSaved(50, 70, 350));
