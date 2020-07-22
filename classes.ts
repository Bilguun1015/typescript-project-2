class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga');
  // }

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.honk();

class Car extends Vehicle {
  // usage of prive only occurs if you dont want it to be accessed by other devs
  // drive()can only be accessed in the class
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const mycar = new Car();
mycar.startDrivingProcess();
