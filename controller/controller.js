"use strict";
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////// Phase 1 & 2  ////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Creating Rocket function
function createRockets(code, thrusters) {
    var newRocket = new Rocket(code, thrusters);
    return newRocket.toText();
}
// para ver los resultados de la fase 1 o 2, descomente aquí y en (fase 1 o 2 en rocket.ts)!
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
//////// Para ver los resultados de la fase 3, descomente aquí y en (fase 3 en rocket.ts)/////////////
// calcSpeed();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// Phase 4  /////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables
var rocketArray = [];
///////////////////////////////////////////////////////  Rockets 1  ////////////////////////////////////////////////////////
function rocket1(code, thruster) {
    // alert('Rocket 1 is created!');
    newRocket01 = new Rocket(code = '32WESSDS', thruster = [0, 0, 0]);
    rocketArray.push(newRocket01);
    return newRocket01;
}
// Accelerating Rocket 1
var acceleratingRocket1 = function () { newRocket01.accelerating(), printingRocket1(); };
// Breaking Rocket 1
var breakingRocket1 = function () { newRocket01.braking(), printingRocket1(); };
// Printing Rocket 1
function printingRocket1() {
    if (newRocket01 === undefined) {
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
    newRocket02 = new Rocket(code = 'LDSFJA32', thruster = [0, 0, 0, 0, 0]);
    rocketArray.push(newRocket02);
    return newRocket02;
}
// Accelerating Rocket 2
var acceleratingRocket2 = function () { newRocket02.accelerating(), printingRocket2(); };
// Breaking Rocket 2
var breakingRocket2 = function () { newRocket02.braking(), printingRocket2(); };
// Printing Rocket 2
function printingRocket2() {
    if (newRocket02 === undefined) {
        alert('Rocket is not created!');
    }
    else {
        for (var i = 0; i < rocketArray.length; i++) {
        }
        rocketArray[1].toText2();
    }
}
// Printing All Rocket
var printingAllRocket = function () { rocketArray[0].toText(), rocketArray[1].toText2(); };
