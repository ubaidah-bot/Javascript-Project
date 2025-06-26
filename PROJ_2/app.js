let height = document.getElementById('height');
let weight = document.getElementById('weight');
let button = document.getElementById('button');
let score = document.getElementById('score');
let result = document.querySelector('.result');

button.addEventListener('click', function(){
    let heightValue = +height.value;
    let weightValue = +weight.value;
    
    let heightConv = heightValue / 100;
    let heightSqr = heightConv * heightConv;
    let equal = weightValue / heightSqr;
   
    score.textContent = equal.toFixed(2);
    result.style.display = 'block';
    console.log(typeof heightValue);
})