function calculateClockAngle(hour, minute) {
  let angle = Math.abs(30 * hour - (11 * minute) / 2);
  if (angle > 180) {
    angle = Math.abs(angle - 360);
  }
  return angle;
}
console.log(calculateClockAngle(12, 30));
console.log(calculateClockAngle(6, 0));
