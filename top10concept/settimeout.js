function settime(arr) {
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      console.log(arr[i]);
    }, 2000 * (i + 1));
  }
}
settime([1, 23, 21, 44]);
