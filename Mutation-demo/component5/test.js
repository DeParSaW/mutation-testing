const { processOrder } = require("./order.mutated");

function test() {
    if (processOrder(400, null, "VIP", false).payableAmount !== 340) throw new Error();
    if (processOrder(400, null, "NORMAL", false).payableAmount !== 400) throw new Error();
    if (processOrder(50, "SAVE20", "NORMAL", false).payableAmount !== 30) throw new Error();
    console.log("Test passed");
}

test();
