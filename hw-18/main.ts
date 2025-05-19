type Admin = {
    name: string,
    permission: string[]
}

type User = {
    name: string, 
    email: string
}

type AdminUser = Admin & User;

const adminUser: AdminUser = {
    name: "Ilyas",
    permission: ["read", "write", "delete"],
    email: "ilasnavaz981@gmail.com",
}

//////////////////////////////

type Car = {
    mark: string, 
    model: string,
    engine: Engine,
    year?: number
}

type Engine = {
    type: string,
    horsepower: number
}

function CarInfo(car: Car): void {
    console.log(`Car: ${car.mark} ${car.model}`);
    console.log(`Engine: ${car.engine.type} ${car.engine.horsepower} HP`);
    if (car.year) {
        console.log(`Year: ${car.year}`);
        
    }
    
    
}

const car: Car = {
    mark: "Toyota",
    model: "Supra",
    engine: {
        type: "V12", 
        horsepower: 900
    },
    year: 2004,
};

////////////////////////////////

interface Product {
    name: string,
    price: number,
}

interface CalculateDiscount {
    (product: Product, discount: number): number 
}

const calculateDiscount: CalculateDiscount = (product, discount) => {
    return product.price - product.price * (discount / 100)
}

const item: Product = {name: "Phone", price: 1000 }
console.log(calculateDiscount(item, 10));

////////////////////////

interface Employee {
    name: string, 
    salary: number
}

const employees: Employee[] = [
    { name: "John", salary: 3000 },
    { name: "Jane", salary: 4000 },
    { name: "Bob", salary: 3500 },
  ];

  function getSalaries(employees: Employee[]): number[] {
    return employees.map(emp => emp.salary)
  }

  ////////////////////////////

  interface Person { 
    firstName: string,
    lastName: string
  }

  interface Student extends Person { 
    grade: number
  }

  const student: Student = {
    firstName: "Ilyas",
    lastName: "Navaz", 
    grade: 95
  }

  function StudentInfo(student: Student): void {
    console.log(`Student: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
    
  }