// litreally every function has a return value, least null
// the currying function returns a function inside the function, we can simply just invoke just by typing two parenthesis after funtion call

function rootFunction () {
    console.log('log from root function');
    return function parentFunction () {
        console.log('log from parent function');
        return function childrenFunction () {
            console.log('log from children function');
            return true;
        }
    }
}

const function_call = rootFunction()()()