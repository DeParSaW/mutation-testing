function calculateShippingCost(totalPrice, isVIP) {
    if (totalPrice > 200) {
        return 0;
    }

    if (isVIP) {
        return 10;
    }

    return 25;
}

module.exports = { calculateShippingCost };
