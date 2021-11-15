const toggle1 = document.getElementById('toggle');
toggle1.onclick = function(){
    if (!toggle1.classList.contains('active')) {
        toggle1.classList.add('active');
    } else if(toggle1.classList.contains('active') && !toggle1.classList.contains('active2')) {
        toggle1.classList.add('active2');
    } else if (toggle1.classList.contains('active') && toggle1.classList.contains('active2')) {
        toggle1.classList.remove('active')
        toggle1.classList.remove('active2')
    }
    

    
}

// const toggle1 = document.getElementById('toggle')
// function switchBtn(event) {
    
// }