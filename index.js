/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")
let length1El = document.getElementById("length1-el")
let volume1El = document.getElementById("volume1-el")
let mass1El = document.getElementById("mass1-el")
const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(2)} feet` 
    volumeEl.textContent = `${baseValue} liter = ${baseValue * literToGallon} gallon` 
    massEl.textContent = `${baseValue} kilo = ${(baseValue * kiloToPound).toFixed(2)} pound` 
    length1El.textContent = `${baseValue} feet = ${(baseValue / meterToFeet).toFixed(2)} meter` 
    volume1El.textContent = `${baseValue} gallon = ${(baseValue / literToGallon).toFixed(2)} liter` 
    mass1El.textContent = `${baseValue} pound = ${(baseValue / kiloToPound).toFixed(2)} kilo` 
})

