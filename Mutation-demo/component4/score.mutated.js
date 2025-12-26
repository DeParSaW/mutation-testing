function calculateFinalScore(score, bonus, penalty) {
    let finalScore = score;

    if (bonus > 0) {
        finalScore += bonus;
    }

    if (penalty > 0) {
        finalScore -= penalty;
    }

    return finalScore;
}

module.exports = { calculateFinalScore };
