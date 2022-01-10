const menuBtn = document.getElementById("menu-button")
const navEl = document.getElementById('nav-element')
const v=document.getElementById("view");
let isShowing = false
output(menuBtn)

menuBtn.addEventListener('click',function() {
    if (isShowing){
        navEl.classList.remove('show');
        navEl.classList.add('hide')
        isShowing=false;
    }
    else{
        navEl.classList.remove('hide');
        navEl.classList.add('show')
        isShowing=true;
    }
    
})

function output(a){
    console.log(a)
}


