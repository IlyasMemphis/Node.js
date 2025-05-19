const sumEvenNumbers = (numbers: number[]): number => {
    return numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0)
}

console.log(sumEvenNumbers([1,2,3,4,5,]));


/////////


interface StringToBooleanFunction {
    (input: string): boolean
}

const isEmptyString: StringToBooleanFunction = (str) => {
    return str.trim().length === 0 
}

console.log(isEmptyString(""));
console.log(isEmptyString("text"));

/////////

type CompareStrings = (a: string, b: string) => boolean

const areStringEqual: CompareStrings = (a, b) => {
    return a === b 
}

console.log(areStringEqual("hello", "hello"));
console.log(areStringEqual("hello", "world"));

////////////////

function getLastElement<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1]
}

console.log(getLastElement([1,2,3 ]));
console.log(getLastElement(["a", "b", "c"]));

/////////////////////

function makeTriple<T>(a: T, b: T, c:T): T[] { 
    return [a,b,c]
}

console.log(makeTriple(1,2,3));
console.log(makeTriple("x", "y", "z"));

