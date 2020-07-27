class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}
//type annotation
const arrA = new ArrayOfAnything<string>(['a', 'b', 'c']);
//type inference
const arrI = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printStrings(arr: string[]): void {
  arr.forEach((str) => console.log(str));
}

function printNumbers(arr: number[]): void {
  arr.forEach((num) => console.log(num));
}

function printAnything<T>(arr: T[]): void {
  arr.forEach((each) => console.log(each));
}

//type annotation
printAnything<string>(['a', 'b', 'c']);
//type inference
printAnything(['a', 'b', 'c']);
