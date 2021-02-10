let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -1;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello: string;

const person = {
    name: {
        first: "jack",
        last: 'smith',
    },
    age: 21,
}

const fruit = ['Apple', 'Banana', 'Grape'];
const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
    SHORT,
    TALL,
    GRANDE,
    VENITE,
}
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'sit'];

type ClothSize = 'small' | 'medium' | 'large'

const apple = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'large';
const cloth: {
    color: string,
    size: ClothSize
} = {
    color: 'white',
    size: 'medium'
}
cloth.size = 'large'


function add(num1: number, num2: number): number {
    return num1 + num2;
}

function sayHello(): void {
    console.log('Hello');
}
console.log(sayHello());
let tmp = null;

const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number) {
    return num1 + num2;
};

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => void): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello'
unknownInput = 11;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}

function  error(message:string){
    throw new Error(message);
}

console.log(error('this is error'))
