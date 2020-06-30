"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Phase 1 & 2  ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating Rocket function
function createRockets(code, thrusters) {
    var newRocket = new Rocket(code, thrusters);
    return newRocket.toText();
}
// createRockets('32WESSDS', [10, 30, 80]);
// createRockets('LDSFJA32', [30, 40, 50, 50, 30, 10]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Phase 3  //////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating Rocket function
var newRocket01;
var newRocket02;
function calcSpeed(code, thrusters) {
    newRocket01 = new Rocket('32WESSDS', [0, 0, 0]);
    newRocket02 = new Rocket('LDSFJA32', [0, 0, 0, 0, 0, 0]);
    // 4.	Accelerar amb els coets tres cops
    for (var i = 1; i <= 3; i++) {
        newRocket01.accelerating();
        newRocket02.accelerating();
    }
    // 6.	Frenar cinc cops amb el primer coet (“32WESSDS”) i accelerar set amb el segon coet.
    for (var i = 1; i <= 5; i++) {
        newRocket01.braking();
    }
    for (var i = 1; i <= 7; i++) {
        newRocket02.accelerating();
    }
    // 8.	Accelerar 15 cops amb els dos coets.
    for (var i = 1; i <= 15; i++) {
        newRocket01.accelerating();
        newRocket02.accelerating();
    }
    // Show results
    return newRocket01.toText(), newRocket02.toText();
}
// Invoke the function
// calcSpeed();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Phase 4  /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables
var newRocket1;
var newRocket2;
var rocketArray = [];
///////////////////////////////////////////////////////  Rockets 1  ////////////////////////////////////////////////////////
function rocket1(code, thruster) {
    // alert('Rocket 1 is created!');
    newRocket1 = new Rocket(code = '32WESSDS', thruster = [0, 0, 0]);
    rocketArray.push(newRocket1);
    return newRocket1;
}
// Accelerating Rocket 1
function acceleratingRocket1() {
    newRocket1.accelerating();
    printingRocket1();
}
// Breaking Rocket 1
function breakingRocket1() {
    newRocket1.braking();
    printingRocket1();
}
// Printing Rocket 1
function printingRocket1() {
    if (newRocket1 === undefined) {
        alert('Rocket is not created!');
    }
    else {
        for (var i = 0; i < rocketArray.length; i++) {
        }
        rocketArray[0].toText();
    }
}
///////////////////////////////////////////////////////  Rockets 2  ////////////////////////////////////////////////////////
function rocket2(code, thruster) {
    // alert('Rocket 2 is created!');
    newRocket2 = new Rocket(code = 'LDSFJA32', thruster = [0, 0, 0, 0, 0]);
    rocketArray.push(newRocket2);
    return newRocket2;
}
// Accelerating Rocket 2
function acceleratingRocket2() {
    newRocket2.accelerating();
    printingRocket2();
}
// Breaking Rocket 2
function breakingRocket2() {
    newRocket2.braking();
    printingRocket2();
}
// Printing Rocket 2
function printingRocket2() {
    if (newRocket2 === undefined) {
        alert('Rocket is not created!');
    }
    else {
        for (var i = 0; i < rocketArray.length; i++) {
        }
        rocketArray[1].toText2();
    }
}
// Printing All Rocket
function printingAllRocket() {
    // if (newRocket1 === undefined || newRocket2 === undefined) {
    //   alert('No Rocket is not created!');
    // } else {
    // for (let i = 0; i < rocketArray.length; i++) {
    rocketArray[0].toText();
    rocketArray[1].toText2();
    // }
    // }
}
