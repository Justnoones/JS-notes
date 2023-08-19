// export var name = "Wai Yan Ye Yint";
// export var age = 17;
// export function about () {
//     return "I'm " + name + " and " + age + " years old";
// }

var name = "Wai Yan Ye Yint";
var age = 17;
var about = (name, age) => {
    return `${name} is ${age} years old. `
}

export {name, age}
export default about

// export with alias
// export {name as userName, age as userAge}