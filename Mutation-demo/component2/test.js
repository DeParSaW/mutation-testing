const { canLogin } = require("./canLogin.mutated");

function test() {
    if (canLogin(true, 0) !== true) throw new Error();
    if (canLogin(true, 5) !== false) throw new Error();
    if (canLogin(false, 0) !== false) throw new Error();
    console.log("Test passed");
}

test();
