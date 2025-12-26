function isAdult(age) {
    if (age < 0) {
        return false;
    }
    return age >= 18;
}

module.exports = { isAdult };
