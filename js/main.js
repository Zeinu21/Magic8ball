function generate_random(max_number) {
    return Math.round(Math.random()*max_number)
}
//select the element to interact with
let button = document.querySelector('button');
let answer = document.querySelector('#answer');

//add a click event to the button
button.addEventListener('click', function () {
    let randomNumber = generate_random(4);
    
    let answerText = '';
    if (randomNumber == 0) {
        answerText='yes definately'
    }
    else if(randomNumber == 1){
        answerText='no,certainly not'
    }
    else if (randomNumber == 2) {
        answerText='ask agian later'
    }
    else  {
        answerText='I really do not care'
        
    }
    answer.innerHTML=answerText;
})