"use strict";
// Rocket class
var Rocket = /** @class */ (function () {
    function Rocket(code, thrusters) {
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
    Rocket.prototype.getCode = function () {
        return this.code;
    };
    Rocket.prototype.getThrusters = function () {
        return this.thrusters;
    };
    // Setters
    Rocket.prototype.setCode = function (value) {
        this.code = value;
    };
    Rocket.prototype.setThrusters = function (value) {
        this.thrusters = value;
    };
    // Accelerating Method
    Rocket.prototype.accelerating = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i] = this.thrusters[i] += 10;
        }
        return this.thrusters;
    };
    // Breaking Method
    Rocket.prototype.braking = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            this.thrusters[i] = this.thrusters[i] -= 10;
        }
    };
    // Getting the total speed
    Rocket.prototype.currentPower = function () {
        var sumSpeed = this.thrusters.reduce(add, 0);
        function add(accumulator, a) {
            return accumulator + a;
        }
        var result = document.getElementById('output2');
        result.innerHTML += "The current power: " + sumSpeed + "<br>";
        // return '';
    };
    // Printing out the result
    //////////////// Para ver los resultados de los fases, descomente aquí y en controller.ts!//////////////
    Rocket.prototype.toText = function () {
        var result = document.getElementById('output');
        // Phase 1:
        // result.innerHTML += `<br> Rocket ${this.code} has ${this.thrusters.length} thrusters.<br>`;
        // Phase 2:
        // result.innerHTML += `${this.code}: ${this.thrusters}<br>`;
        // Phase 3:
        // result.innerHTML += `Rocket ${this.code}  has ${this.thrusters.length} thrusters  ${this.thrusters} ${this.currentPower()}<br>`;
        // Phase 4:
        result.innerHTML = "Rocket " + this.code + " boosters max power: " + this.thrusters + "<br>";
    };
    Rocket.prototype.toText2 = function () {
        var result = document.getElementById('output3');
        result.innerHTML = "Rocket " + this.code + " boosters max power: " + this.thrusters + "<br>";
    };
    return Rocket;
}());
// @ts-ignore
Rocket.instances = 0;
