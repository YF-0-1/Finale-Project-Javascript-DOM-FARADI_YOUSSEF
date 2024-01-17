const navbarBtn = document.querySelector('.navbar-toggler')
const navElements = document.querySelector('.navigation')
navbarBtn.addEventListener("click", ()=> {
    if(navElements.classList.contains('nav-hide')){
        navElements.classList.remove('nav-hide');
        navElements.classList.add('nav-elements');
    }else if(navElements.classList.contains('nav-elements')){
        navElements.classList.remove('nav-elements');
        navElements.classList.add('nav-hide');
    }else{
        console.log("check your js code")
    }
})