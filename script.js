const body = document.querySelector('body');

const toggle = document.getElementById('toggle');

const textcolor = document.querySelector('.header');

const output = document.querySelector('.output');

const keypadbg = document.querySelector('.btn-wrapper');

const btn = document.querySelector('.btn');

// change theme when click toggle 
toggle.onclick = function(){
    if (!toggle.classList.contains('active')) {
        toggle.classList.add('active');
        body.classList.add('active');
        textcolor.classList.add('active');
        output.classList.add('active');
        keypadbg.classList.add('active');
        btn.classList.add('active');
        
    } else if(toggle.classList.contains('active') && !toggle.classList.contains('active2')) {
        toggle.classList.add('active2');
        body.classList.add('active2');
        textcolor.classList.add('active2');
        output.classList.add('active2');
        keypadbg.classList.add('active2');
        btn.classList.add('active2');
       
    } else if (toggle.classList.contains('active') && toggle.classList.contains('active2')) {
        toggle.classList.remove('active');
        toggle.classList.remove('active2');
        body.classList.remove('active');
        body.classList.remove('active2');
        textcolor.classList.remove('active');
        textcolor.classList.remove('active2');
        output.classList.remove('active');
        output.classList.remove('active2');
        keypadbg.classList.remove('active');
        keypadbg.classList.remove('active2');
        btn.classList.remove('active');
        btn.classList.remove('active2');

    }   
}

const screen = document.getElementById('screen');
const numberBtn = document.querySelectorAll('[data-number]');
const operator = document.querySelectorAll('[data-operation]');
const resetBtn = document.querySelector('[data-reset]');
const equalBtn = document.querySelector('[data-equal]');

numberBtn.forEach(number => {
    number.onclick = () => 
        (screen.innerText = screen.innerText !== "0" ? screen.innerText + number.innerText : number.innerText); //shorthand if statement
    
})

operator.forEach(number => {
    number.onclick = () => (screen.innerText = screen.innerText + number.innerText);
})

resetBtn.addEventListener('click', () => {
    screen.innerText = '0'
})

// resetBtn.onclick = () => {
//     screen.innerText = '0';
// }












