"use strict";
// let hasValue = true;
// let count = 10;
// let float = 3.14;
// let negative = -1;
// let single = 'hello';
// let double = "hello";
// let back = `hello`;
// let hello: string;
exports.__esModule = true;
// const person = {
//     name: {
//         first: "jack",
//         last: 'smith',
//     },
//     age: 21,
// }
// const fruit = ['Apple', 'Banana', 'Grape'];
// const book: [string, number, boolean] = ['business', 1500, false];
// enum CoffeeSize {
//     SHORT,
//     TALL,
//     GRANDE,
//     VENITE,
// }
// const coffee = {
//     hot: true,
//     size: CoffeeSize.TALL
// }
// coffee.size = CoffeeSize.SHORT
// let unionType: number | string = 10;
// let unionTypes: (number | string)[] = [21, 'sit'];
// type ClothSize = 'small' | 'medium' | 'large'
// const apple = 'apple';
// let clothSize: 'small' | 'medium' | 'large' = 'large';
// const cloth: {
//     color: string,
//     size: ClothSize
// } = {
//     color: 'white',
//     size: 'medium'
// }
// cloth.size = 'large'
// function add(num1: number, num2: number): number {
//     return num1 + num2;
// }
// function sayHello(): void {
//     console.log('Hello');
// }
// console.log(sayHello());
// let tmp = null;
// const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number) {
//     return num1 + num2;
// };
// const doubleNumber: (num: number) => number = num => num * 2;
// function doubleAndHandle(num: number, cb: (num: number) => void): void {
//     const doubleNum = cb(num * 2);
//     console.log(doubleNum);
// }
// doubleAndHandle(21, doubleNum => {
//     return doubleNum
// });
// let unknownInput: unknown;
// let anyInput: any;
// let text: string;
// unknownInput = 'hello'
// unknownInput = 11;
// unknownInput = true;
// text = anyInput;
// if (typeof unknownInput === 'string') {
//     text = unknownInput;
// }
// function  error(message:string){
//     throw new Error(message);
// }
// console.log(error('this is error'))
// interface Bread {
//     calories: number
// }
// interface Bread {
//     type: string
// }
// const francePan: Bread = {
//     calories: 300,
//     type: 'hard'
// }
// type MaboDofu = {
//     calories: number
//     spicyLevel: number
// }
// type Rice = {
//     calories: number
//     gram: number
// }
// type MaboDon = MaboDofu & Rice
// const maboDon: MaboDon = {
//     calories: 500,
//     spicyLevel: 10,
//     gram: 350
// }
// interface Book {
//     page: number
//     title: string
// }
// interface Magazine extends Book {
//     cycle: 'daily' | 'weekly' | 'monthly' | 'yearly'
// }
// const jump: Magazine = {
//     page: 300,
//     title: 'weekly jump',
//     cycle: 'weekly'
// }
// type BookType = {
//     page: number
//     title: string
// }
// interface HandBook extends BookType {
//     theme: string
// }
// const cotrip: HandBook = {
//     page: 30,
//     title: 'Cotrip',
//     theme: 'green trip'
// }
// class Comic implements Book {
//     page: number
//     title: string
//     constructor(page: number, title: string, private publishYear: string) {
//         this.page = page
//         this.title = title
//     }
//     getPublishYear() {
//         return this.title + " is published at " + this.publishYear +"."
//     }
// }
// const popularComic = new Comic(200, "badman", "1940")
// console.log(popularComic.getPublishYear())
function genericsBasicSample() {
    var stringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics a: ", stringReduce(['may', 'the', 'force', 'be', 'with', 'you'], ''));
    var numberReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("Generics b: ", numberReduce([100, 200, 300], 1000));
    var genericStringReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("generics 3 : ", genericStringReduce(["aaa", 'bbb', 'ccc'], ""));
    var genericNumberReduce = function (array, initialValue) {
        var result = initialValue;
        for (var i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    };
    console.log("generics 3 : ", genericNumberReduce([100, 2000, 3000], 0));
}
exports["default"] = genericsBasicSample;
genericsBasicSample();
