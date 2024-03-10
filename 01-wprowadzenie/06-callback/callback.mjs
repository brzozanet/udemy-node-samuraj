// const add = (a, b) => a + b;
// const div = (c, d) => c / d;

// const math = (x, y, callback) => {
//   console.log(callback(x, y));
// };

// math(2, 4, add);

// setTimeout(() => console.log("Wywołanie pierwsze, timeout"), 3000);
// console.log("Wywołanie drugie, po timeout");

import fs from "fs";
fs.readFile("./text.txt", "utf8", (error, file) => console.log(file));
console.log("po readFile?");
