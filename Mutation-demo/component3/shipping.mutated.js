function calculateShippingCost(totalPrice, isVIP) {
    if (isVIP) {
        return 10;
    }

    if (totalPrice > 200) {
        return 0;
    }

    return 25;
}

module.exports = { calculateShippingCost };
