const { calculateFinalScore } = require("./score.mutated");

function test() {
    if (calculateFinalScore(90, 20, 0) !== 100) throw new Error();
    if (calculateFinalScore(10, 0, 20) !== 0) throw new Error();
    console.log("Test passed");
}

test();
