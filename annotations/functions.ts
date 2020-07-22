const add = (a: number, b: number): number => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  // void can return undefined or null
  // return undefined;
  // return null;
};

//never -- exists the function early (it returns anything ever)
const throwError = (message: string): never => {
  throw new Error(message);
};
//common way to throw error
const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};
