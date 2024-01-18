//& Header
//* sideBar
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

//* modale

const connexion = document.querySelector('.connexion');
const modale  = document.querySelector('.modale');
const signinDiv = document.querySelector('.signin')
const signupDiv = document.querySelector('.signup')
const signin = document.querySelector('.signinbtn')
const signup = document.querySelector('.signupbtn')
const clear = document.querySelector('.clear')
const signin2 = document.querySelector('.signinbtn2')
const signup2 = document.querySelector('.signupbtn2')

modale.addEventListener("click", (event) => {
    event.stopPropagation();
});
connexion.addEventListener("click", ()=> {
    event.stopPropagation();
    if(navElements.classList.contains('nav-elements')){
        navElements.classList.remove('nav-elements');
        navElements.classList.add('nav-hide');
    }
    modale.classList.toggle('d-none');
    signin.addEventListener("click", () => {
        event.stopPropagation();
        if(signinDiv.classList.contains('d-none')){
            signinDiv.classList.remove('d-none');
            signupDiv.classList.add('d-none');
        }
    })
    signup.addEventListener("click", () => {
        event.stopPropagation();
        if(signupDiv.classList.contains('d-none')){
            signupDiv.classList.toggle('d-none');
            signinDiv.classList.add('d-none');
        }
    })
    signin2.addEventListener("click", () => {
        event.stopPropagation();
        if(signinDiv.classList.contains('d-none')){
            signinDiv.classList.remove('d-none');
            signupDiv.classList.add('d-none');
        }
    })
    signup2.addEventListener("click", () => {
        event.stopPropagation();
        if(signupDiv.classList.contains('d-none')){
            signupDiv.classList.toggle('d-none');
            signinDiv.classList.add('d-none');
        }
    })
    

    clear.addEventListener("click", () =>{
        modale.classList.add('d-none');
    })
})



// & main
// *section 1
