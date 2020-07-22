class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  // initialize a property
  // color: string = 'red';
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
// this is an error because protected can only be accessed in the class or subclass
// vehicle.honk();

// class Car extends Vehicle {
//   // usage of prive only occurs if you dont want it to be accessed by other devs
//   // drive()can only be accessed in the class
//   private drive(): void {
//     console.log('vroom');
//   }

//   startDrivingProcess(): void {
//     this.drive();
//     this.honk();
//   }
// }

// const mycar = new Car();
// mycar.startDrivingProcess();
