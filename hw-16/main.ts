function greetUser(name: string): void {
    console.log(`Привет, ${name}!`);
}

interface Person { 
    name: string, 
    age: number, 
    city: string
}

function printPersonInfo(person: Person): void {
    console.log(`Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`);
    
}

function squareNumber(num: number): number {
    return num * num 
}

function isEven(num: number): boolean {
    return num % 2 === 0
}

interface Student {
    name: string,
    grade: number
}

function printStudentInfo(student: Student): void {
    console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
    
}

function logMessage(message: string): void {
    console.log(message);
    
}

greetUser("Ильяс")

printPersonInfo({ name: "Ильяс", age: 25, city: "Dusseldorf"})

console.log("Квадрат числа 4:", squareNumber(4));

console.log("Число 10 чётное?", isEven(10));

printStudentInfo({ name: "Олег", grade: 5 })

logMessage("Это сообщение будет выведено без возврата значения.")
