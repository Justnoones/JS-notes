// import { name, age } from "./export.js";
// import x from "./export.js";
// this x represents whatever export from export.js with default
// you can name 'x' whatever name you want


// import {userName, userAge} from "./export.js";
// console.log(`${userName} is ${userAge} years old`);

// importing with alias

import x , { name as userName, age as userAge } from "./export.js";
console.log(`${userName} is ${userAge}.`);
document.body.innerHTML = x("Wai Yan Ye Yint", 18);
