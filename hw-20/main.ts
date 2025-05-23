class Animal { 
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    sound(): void {
        console.log("The animal makes sound");
    }
}

class Dog extends Animal { 
    breed: string;

    constructor(name: string, breed: string) {
        super(name, "Dog")
        this.breed = breed
    }

    sound(): void {
        console.log("The dog barks");
        
    }
}

const a = new Animal("Some animal", "Unknown")
a.sound();

const d = new Dog("Rex", "German Shepherd")
d.sound()

///////////////

class Library {
    static totalBooks: number = 0

    addBook(): void {
        Library.totalBooks++
    }
}

const lib1 = new Library()
lib1.addBook()
lib1.addBook()

const lib2 = new Library()
lib2.addBook()

console.log(Library.totalBooks);

//////////////////

class Vehicle {
    mark: string;
    model: string;

    constructor(mark: string, model: string) {
        this.mark = mark,
        this.model = model
    }
}

class Motorcycle extends Vehicle {
    type: string

    constructor(mark: string, model: string, type: string) {
        super(mark, model)
        this.type = type
    }
}

const moto = new Motorcycle("Yamaha", "MT-07", "Sport")
console.log(moto.mark, moto.model, moto.type);