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

// calculation

class Calculator {
    constructor(previousNumText, currentNumText) {
        this.previousNumText = previousNumText;
        this.currentNumText = currentNumText;

        this.reset();
        
    }

    reset() {
        this.currentnum = '';
        this.prevnum = '';
        this.operation = undefined;
        
    }

    delete() {

    }

    appendNumber(number) {
        if (number === '.' && this.currentnum.includes('.')) return //if . contain program stops
        this.currentnum = this.currentnum.toString() + number.toString();
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentNumText.innerText = this.currentnum
    }
}

const numberBtn = document.querySelectorAll('[data-number]');
const operationBtn = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equal]')
const deleteBtn = document.querySelector('[data-delete]')
const resetBtn = document.querySelector('[data-reset]')
const previousNumText = document.querySelector('[data-prevnum]')
const currentNumText = document.querySelector('[data-currentnum]')

const currentnum = document.querySelector('[data-currentnum]').innerHTML;

const calculator = new Calculator(previousNumText, currentNumText)

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationBtn.forEach(button => {
    button.addEventListener('ckick', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})






