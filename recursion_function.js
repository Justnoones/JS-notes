var counter = 3;

let recrusionFunction = () => {
    console.log(counter);
    counter -= 1;
    if ( counter === 0 ) {
        return;
    }
    recrusionFunction();
}

recrusionFunction();