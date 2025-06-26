const randomqoutes = [
    {
        qoutes: "Be yourself; everyone else is already taken.",
        athour:  "Oscar Wilde",
    },
    {
        qoutes: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        athour: "Marilyn Monroe",
    },
    {
        qoutes: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        athour: " Albert Einstein",
    },
    {
        qoutes: "A room without books is like a body without a soul.",
        athour: "Marcus Tullius Cicero",
    },
    {
        qoutes: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        athour: "Bernard M. Baruch",
    },
    {
        qoutes: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        athour: "Maya Angelou",
    }
]
let p = document.getElementById('ranqoutes');
let h2 = document.getElementById('athourName');
let button = document.querySelector('button');


function auto() {
    let qoute = Math.floor((Math.random(randomqoutes) * randomqoutes.length));

    p.innerHTML = randomqoutes[qoute].qoutes;
    h2.innerHTML = randomqoutes[qoute].athour;
}auto();

button.addEventListener('click', auto);