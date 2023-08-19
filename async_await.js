var sync = _ => {
    console.log("1");
    setTimeout(_ => {
        console.log("2");
    }, 1000);
    console.log("3");
}

sync(); // 1, 3, 2


async function logger () {
    try {
        var resquest = await fetch("./json.js");
        var data = await resquest.json();
        console.log(data);
        console.log("Hello Mello");
    } catch (err) {
        console.log(err);
    } finally {
        console.log("done");
    }
}

logger().then