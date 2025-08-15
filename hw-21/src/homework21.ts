// ===== Задание 1 =====
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

// ===== Задание 2 =====
abstract class Shape {
    abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
    abstract color: string;
}

class ColoredCircle extends ColoredShape {
    constructor(public radius: number, public color: string) {
        super();
    }
    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

class ColoredRectangle extends ColoredShape {
    constructor(public width: number, public height: number, public color: string) {
        super();
    }
    calculateArea(): number {
        return this.width * this.height;
    }
}

const shapes: ColoredShape[] = [
    new ColoredCircle(5, "Red"),
    new ColoredRectangle(4, 6, "Blue")
];
shapes.forEach(s => console.log(`Area: ${s.calculateArea()}, Color: ${s.color}`));

// ===== Задание 3 =====
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

// ===== Задание 4 =====
abstract class Account {
    constructor(public balance: number) {}
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
    constructor(balance: number, public interestRate: number) {
        super(balance);
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
    constructor(balance: number, public fee: number) {
        super(balance);
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

// ===== Задание 5 =====
abstract class Media {
    abstract play(): void;
}

class AudioMedia extends Media {
    play(): void {
        console.log("Playing audio");
    }
}

class VideoMedia extends Media {
    play(): void {
        console.log("Playing video");
    }
}

const mediaArray: Media[] = [new AudioMedia(), new VideoMedia()];
mediaArray.forEach(m => m.play());
