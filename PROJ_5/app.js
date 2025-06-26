/*let counter = document.querySelector('.counter');

let count = 1;

setInterval(() => {
    if(count < 75) {
        count++;
        counter.innerText = count;
    }
},50);*/

let counter = document.querySelectorAll('.counter');
let time = 300;

counter.forEach(cont => {

    let updateCount = () => {
        let count = +cont.getAttribute('data-target')
        let counts = +cont.innerText;

        let increment = count / time;

        if(counts < count){
            cont.innerText = Math.ceil(counts + increment); 
            setTimeout(updateCount, 1);
        } else {
           cont.innerText = count;
        }

    }; updateCount();

})
