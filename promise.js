// Promise
let promise = new Promise((Resolve, Reject) => {
    if (0) {
        Resolve("This is resolve message.");
    } else {
        Reject("This is reject message.");
    }
})

promise
    .then((success) => {
        console.log(success);
    })
    .catch((err) => {
        console.log(err);
    })