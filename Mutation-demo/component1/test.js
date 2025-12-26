const { isAdult } = require("./isAdult.mutated");

function test() {
    if (isAdult(20) !== true) throw new Error();
    if (isAdult(18) !== true) throw new Error();
    if (isAdult(17) !== false) throw new Error();
    console.log("Test passed");
}

test();
