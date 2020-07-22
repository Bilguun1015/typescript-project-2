const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
//declaring order for the tuple (type alias)
type Drink = [string, boolean, number];
// order is important in tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];
// gives error when you try to change the type
pepsi[0] = 40;
pepsi[2] = 'brown';
// tuple is hard to understand what the values mean
const carSpec: [number, number] = [400, 3354];

const carStats = {
  horsepower: 400,
  weight: 3354,
};
