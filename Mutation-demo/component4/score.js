function calculateFinalScore(score, bonus, penalty) {
    let finalScore = score;

    if (bonus > 0) {
        finalScore += bonus;
    }

    if (penalty > 0) {
        finalScore -= penalty;
    }

    if (finalScore < 0) {
        finalScore = 0;
    }

    if (finalScore > 100) {
        finalScore = 100;
    }

    return finalScore;
}

module.exports = { calculateFinalScore };
    