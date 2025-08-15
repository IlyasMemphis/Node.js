import { capitalize, reverseString } from "./stringUtils";
import { Finance } from "./finance";
import { UserManagement } from "./userManagement";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";

// ===== Задание 1 =====
console.log(capitalize("hello world")); // Hello world
console.log(reverseString("TypeScript")); // tpircSpeyT

// ===== Задание 2 =====
const monthlyPayment = Finance.LoanCalculator.calculateMonthlyPayment(100000, 5, 60);
console.log(`Monthly Payment: ${monthlyPayment.toFixed(2)}`);

const tax = Finance.TaxCalculator.calculateTax(50000, 20);
console.log(`Tax: ${tax}`);

// ===== Задание 3 =====
const admin = new UserManagement.Admin.AdminUser("Ilyas", "ilyas@example.com", false);
console.log(admin);
admin.changeAccessRights(true);
console.log(admin);

// ===== Задание 4 =====
console.log("Fibonacci:", generateFibonacci(50));
console.log("Prime Numbers:", generatePrimeNumbers(50));
