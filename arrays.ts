const carMakers = ['ford', 'toyota', 'chevy'];
//use annotations when we initiliaze array with an empty array
const newArray: string[] = [];
const arrayOfArrays: string[][] = [];

const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
const aCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values to add
carMakers.push(100);

// Help with 'map' other methods
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
