function canLogin(isActive, failedAttempts) {
    if (!isActive) {
        return false;
    }

    return true;
}

module.exports = { canLogin };
