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
const delBtn = document.querySelector('[data-delete]');
const decimal = document.querySelector('.decimal');


numberBtn.forEach(number => {
    number.addEventListener('click', () => {
       screen.innerText = screen.innerText !== "0" ? screen.innerText + number.innerText : number.innerText; 
    })
})

operator.forEach(number => {
    number.onclick = () => {
        if (number.innerText!== 'x') {
            screen.innerText = screen.innerText + number.innerText;
        } else {
            var multiply = '*';
            screen.innerText = screen.innerText + multiply;
        }               
    }
   
})

decimal.addEventListener('click', () => {
    if (!screen.innerText.includes('.')) {
        screen.innerText += '.';
    }   
})

equalBtn.addEventListener('click', () => {
    (screen.innerText) ? screen.innerText = eval(screen.innerText) : false;
})

resetBtn.addEventListener('click', () => {
    screen.innerText = '0';
})

delBtn.addEventListener('click', () => {
    var displayValue = screen.innerText.substring(0, screen.innerText.length - 1);
    if (displayValue === '') {
        screen.innerText = '0';
    } else {
        screen.innerText = displayValue;
    }    
})










