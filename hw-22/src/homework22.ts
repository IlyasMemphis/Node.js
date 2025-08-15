// =======================
// Задание 1
// =======================
abstract class Animal {
    abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound(): string {
        return "Bark";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow";
    }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach(a => console.log(a.makeSound()));

// =======================
// Задание 2
// =======================
abstract class Shape {
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    abstract color: string;
}

class ColoredCircle extends ColoredShape {
    radius: number;
    color: string;
    constructor(radius: number, color: string) {
        super();
        this.radius = radius;
        this.color = color;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class ColoredRectangle extends ColoredShape {
    width: number;
    height: number;
    color: string;
    constructor(width: number, height: number, color: string) {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

const shapes: ColoredShape[] = [
    new ColoredCircle(5, "Red"),
    new ColoredRectangle(4, 6, "Blue")
];

shapes.forEach(s => {
    console.log(`Area: ${s.calculateArea()}, Color: ${s.color}`);
});

// =======================
// Задание 3
// =======================
abstract class Appliance {
    abstract turnOn(): void;
    abstract turnOff(): void;
}

class WashingMachine extends Appliance {
    turnOn(): void {
        console.log("Washing machine is now ON");
    }
    turnOff(): void {
        console.log("Washing machine is now OFF");
    }
}

class Refrigerator extends Appliance {
    turnOn(): void {
        console.log("Refrigerator is now ON");
    }
    turnOff(): void {
        console.log("Refrigerator is now OFF");
    }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];
appliances.forEach(a => {
    a.turnOn();
    a.turnOff();
});

// =======================
// Задание 4
// =======================
abstract class Account {
    balance: number;
    constructor(balance: number) {
        this.balance = balance;
    }
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
    interestRate: number;
    constructor(balance: number, interestRate: number) {
        super(balance);
        this.interestRate = interestRate;
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
    addInterest(): void {
        const interest = this.balance * this.interestRate;
        this.balance += interest;
        console.log(`Interest added: ${interest}. New balance: ${this.balance}`);
    }
}

class CheckingAccount extends Account {
    fee: number;
    constructor(balance: number, fee: number) {
        super(balance);
        this.fee = fee;
    }
    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    withdraw(amount: number): void {
        const total = amount + this.fee;
        if (total <= this.balance) {
            this.balance -= total;
            console.log(`Withdrew ${amount} with fee ${this.fee}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

const savings = new SavingsAccount(1000, 0.05);
savings.deposit(200);
savings.addInterest();
savings.withdraw(300);

const checking = new CheckingAccount(500, 5);
checking.deposit(100);
checking.withdraw(50);

// =======================
// Задание 5
// =======================
abstract class Media {
    abstract play(): void;
}

class Audio extends Media {
    play(): void {
        console.log("Playing audio");
    }
}

class Video extends Media {
    play(): void {
        console.log("Playing video");
    }
}

const mediaArray: Media[] = [new Audio(), new Video()];
mediaArray.forEach(m => m.play());
