

document.addEventListener('scroll',navchange)

function navchange(){

    let move = document.querySelector('.ul')

        if(window.scrollY>50){
            
            move.classList.add('scrolled')
        }
        else{
            move.classList.remove('scrolled')
        }
}



function slide_close(){

    let nav_slide = document.querySelector('.nav_slide')
    
    nav_slide.classList.remove('slide_active')
}
function slide_open(){

    let nav_slide = document.querySelector('.nav_slide')

    nav_slide.classList.add('slide_active')
}
