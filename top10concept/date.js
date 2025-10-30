let d1 = new Date(); //global time + 5:30 from indian time
console.log(d1);
let d2 = new Date("2025-5-20"); //pass argument in string
console.log(d2);
let d3 = new Date(2025, 4, 20); //pass argument in number
//counting in month, is -1 counting
console.log(d3);

console.log(d1.getFullYear());
console.log(d1.getMonth()); //0 based counting
console.log(d1.getDate());
console.log(d1.getDay()); //sunday 0 monday 1 tuesday 2 wednesday 3 thrusday 4 friday 5 saturday 6

//time
console.log(d1.getTime()); //1 january 1970 counting now
console.log(d1.getHours());
console.log(d1.getMinutes());
console.log(d1.getMinutes());
console.log(d1.getMilliseconds());
