function calculateTotal(price, quantity, discount) {
    if (discount === void 0) { discount = 0; }
    var total = price * quantity;
    return total - (total * discount);
}
// ====================================
var id;
function displayId(id) {
    if (typeof id === "string") {
        console.log("ID:", id.toUpperCase());
    }
    else {
        console.log("ID:", id * 10);
    }
}
var orders = [
    { orderId: "001", amount: 100, status: "pending" },
    { orderId: "002", amount: 200, status: "shipped" },
    { orderId: "003", amount: 150, status: "delivered" },
];
function filterOrdersByStatus(orders, status) {
    return orders.filter(function (order) { return order.status === status; });
}
