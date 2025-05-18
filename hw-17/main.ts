function calculateTotal(price: number, quantity: number, discount: number = 0): number {
    const total = price * quantity;
    return total - (total * discount)
}

// ====================================

let id: number | string;

function displayId(id: string | number): void {
    if (typeof id === "string") {
        console.log("ID:", id.toUpperCase());
    } else {
        console.log("ID:", id * 10);
    }
    
}

// ====================================

type OrderStatus = "pending" | "shipped" | "delivered";

type Order = {
    orderId: string,
    amount: number,
    status: OrderStatus
}

const orders: Order[] = [
    { orderId: "001", amount: 100, status: "pending" },
    { orderId: "002", amount: 200, status: "shipped" },
    { orderId: "003", amount: 150, status: "delivered" },
];

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
    return orders.filter(order => order.status === status)
}

// ====================================

type productInfo = [productName: string, price: number, quantity: number]

function updateStock(
    inventory: Record<string, number>,
    productInfo: productInfo
): Record<string, number> {
    const [productName, stockCount] = productInfo
    inventory[productName] = stockCount
    return inventory
}

const inventory = {
    "Laptop": 5,
    "Phone": 10
}

const newProduct: productInfo = ["Phone", 599, 15]

const updatedInventory = updateStock(inventory, newProduct)