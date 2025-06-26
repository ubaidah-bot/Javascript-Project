let body = document.getElementById('main');

let libtn = document.querySelectorAll('li');

/*let colred = document.querySelector('.red');
colred.addEventListener('click', function(){
    body.style.backgroundColor = ' #d63031';
})

let colgreen = document.querySelector('.green');
colgreen.addEventListener('click', function() {
    body.style.backgroundColor = ' #00b894';
})

let colblue = document.querySelector('.blue');
colblue.addEventListener('click', function() {
    body.style.backgroundColor = ' #0984e3';
})

let colpurple = document.querySelector('.purple');
colpurple.addEventListener('click', function() {
    body.style.backgroundColor = ' #6c5ce7';
})*/


libtn.forEach(function(value) {
    value.addEventListener('click', function(){
        let clName = value.classList[0];
        let color = '';
        if(clName === 'red') {
            color = ' #d63031'
        }
        if (clName === 'green') {
            color = ' #00b894'
        }
        if(clName === 'blue') {
            color = ' #0984e3'
        }
        if(clName === 'purple') {
            color = ' #6c5ce7'
        }

        body.style.backgroundColor = color;


    })
});






































