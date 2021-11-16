const body = document.querySelector('body');

const toggle = document.getElementById('toggle');

const textcolor = document.querySelector('.header');

const output = document.querySelector('.output');

// change theme when click toggle 
toggle.onclick = function(){
    if (!toggle.classList.contains('active')) {
        toggle.classList.add('active');
        body.classList.add('active');
        textcolor.classList.add('active');
        output.classList.add('active');
        
    } else if(toggle.classList.contains('active') && !toggle.classList.contains('active2')) {
        toggle.classList.add('active2');
        body.classList.add('active2');
        textcolor.classList.add('active2');
        output.classList.add('active2');
       
    } else if (toggle.classList.contains('active') && toggle.classList.contains('active2')) {
        toggle.classList.remove('active');
        toggle.classList.remove('active2');
        body.classList.remove('active');
        body.classList.remove('active2');
        textcolor.classList.remove('active');
        textcolor.classList.remove('active2');
        output.classList.remove('active');
        output.classList.remove('active2');

    }
    

    
}

// const toggle1 = document.getElementById('toggle')
// function switchBtn(event) {
    
// }