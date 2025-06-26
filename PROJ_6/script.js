/*function convertTemperature(){


    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");


    if(!isNaN(celsiusInput.value)){

        const celsiusValue = parseFloat(celsiusInput.value);
        const fahrenheitValue = (celsiusValue * 9/5) + 32;

        fahrenheitInput.value = fahrenheitValue.toFixed(2);

    }else if(!isNaN(fahrenheitInput.value)){
        
        const fahrenheitValue = fahrenheitInput.value;
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
       

        celsiusInput.value = celsiusValue.toFixed(2);


    }else{
        alert("Please enter a Valid Number")
    }



}*/

let celsius = document.getElementById('celsius');
let fahrenheit = document.getElementById('fahrenheit');

let button = document.getElementById('button');

button.addEventListener('click', function () {
    let celsiusValue = +celsius.value;
    let fahrenheitValue = +fahrenheit.value;
    
    let celtofah = (celsiusValue * 1.8) + 32;
    let fahtocel = (fahrenheitValue - 32) * 5/9;
    
    if(celsiusValue) {
        
        fahrenheit.value = celtofah.toFixed(2);

    }
    if(fahrenheitValue) {
        
        celsius.value = fahtocel.toFixed(2);

    }


});