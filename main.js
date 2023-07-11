let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random()* 100)]

btn.addEventListener('click',function(){
    let input = document.getElementById('userInput');
    if (input.value == number){
        output.innerHTML = 'You guessed right 🥳, number was '+ number;
    } else if (input.value < number){
        output.innerHTML = 'You guessed too low!'
    } else if(input.value > number){
        output.innerHTML = "You guessed too high!"
    }
    input.value = '';
})