function canLogin(isActive, failedAttempts) {
    if (!isActive) {
        return false;
    }

    if (failedAttempts >= 3) {
        return false;
    }

    return true;
}

module.exports = { canLogin };
