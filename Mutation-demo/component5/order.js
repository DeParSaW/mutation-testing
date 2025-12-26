function processOrder(orderTotal, couponCode, userType, hasDebt) {
    let total = orderTotal;

    if (hasDebt) {
        return { success: false, payableAmount: null };
    }

    if (couponCode === "SAVE20") {
        total -= 20;
    }

    if (userType === "VIP" && total > 300) {
        total *= 0.85;
    }

    if (total < 0) {
        total = 0;
    }

    return { success: true, payableAmount: total };
}

module.exports = { processOrder };
