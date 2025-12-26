const { calculateShippingCost } = require("./shipping.mutated");

function test() {
    if (calculateShippingCost(300, false) !== 0) throw new Error();
    if (calculateShippingCost(150, true) !== 10) throw new Error();
    if (calculateShippingCost(150, false) !== 25) throw new Error();
    console.log("Test passed");
}

test();
