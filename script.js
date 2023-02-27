"use strict";

// variable selection
// DOM elements
const daysC = document.querySelector("#day");
const hoursC = document.querySelector("#hour");
const minsC = document.querySelector("#min");
const secsC = document.querySelector("#sec");
const mainBody = document.querySelector("body");
const mainHeading = document.querySelector('h1');
// date variables
let year = 2024;
let date = new Date(`1/1/${year} 00:00`);

////////////////////////////////////



    // countdown function
    const countdown = function () {
        const newYearDate = new Date(date);
        const dateNow = new Date();
        const milliSeconds = (newYearDate.getTime() - dateNow.getTime()) / 1000;
        const seconds = Math.floor(milliSeconds % 60);
        const minutes = Math.floor((milliSeconds / 60) % 60);
        const hours = Math.floor((milliSeconds / 60 / 60) % 24);
        const days = Math.floor(milliSeconds / 60 / 60 / 24) % 365;
        
        daysC.textContent = days;
        hoursC.textContent = hours;
  minsC.textContent = minutes;
  secsC.textContent = seconds;

    
    
        if (Math.floor(dateNow.getTime())>= Math.floor(newYearDate.getTime())) {
            year++;
            date = new Date(`2/27/${year} 20:34`);
            countdown();
    }
};
countdown();
setInterval(countdown, 1000);


