// Rocket class
class Rocket<T>{
  public code: T;
  public thrusters: any[];
  constructor(code: T, thrusters: any[]) {

    // Throw error
    // @ts-ignore
    if (Rocket.instances >= 99999999 && Rocket.instances < 2) {
      throw new Error("The number instantiated should be between 2 & 99999999!");
    }

    // @ts-ignore
    Rocket.instances++;

    this.code = code;
    this.thrusters = thrusters;
  }

  // Getters
  getCode() {
    return this.code;
  }

  getThrusters() {
    return this.thrusters;
  }

  // Setters
  setCode(value: any) {
    this.code = value;
  }

  setThrusters(value: any) {
    this.thrusters = value;
  }

  // Accelerating Method
  accelerating() {
    for (let i = 0; i < this.thrusters.length; i++) {
      this.thrusters[i] = this.thrusters[i] += 10;
    }
    return this.thrusters;
  }

  // Breaking Method
  braking() {
    for (let i = 0; i < this.thrusters.length; i++) {
      this.thrusters[i] = this.thrusters[i] -= 10;
    }
  }

  // Getting the total speed
  currentPower() {
    let sumSpeed = this.thrusters.reduce(add, 0);
    function add(accumulator: number, a: number) {
      return accumulator + a;
    }
    let result = document.getElementById('output2') as HTMLElement;
    result.innerHTML += `The current power: ${sumSpeed}<br>`;
    // return '';
  }

  // Printing out the result
  toText() {
    let result = document.getElementById('output') as HTMLElement;
    // Phase 1:
    // result.innerHTML += `<br> Rocket ${this.code} has ${this.thrusters.length} thrusters.<br>`;

    // Phase 2:
    // result.innerHTML += `${this.code}: ${this.thrusters}<br>`;

    // Phase 3:
    // result.innerHTML += `Rocket ${this.code}  has ${this.thrusters.length} thrusters  ${this.thrusters} ${this.currentPower()}<br>`;

    // Phase 4:
    result.innerHTML = `Rocket ${this.code} boosters max power: ${this.thrusters}<br>`;
  }

  toText2() {
    let result = document.getElementById('output3') as HTMLElement;
    result.innerHTML = `Rocket ${this.code} boosters max power: ${this.thrusters}<br>`;
  }
}

// @ts-ignore
Rocket.instances = 0;