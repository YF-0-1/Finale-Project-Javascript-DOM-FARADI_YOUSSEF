//& Header
//* sideBar
const body = document.body
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
    if (!modale.classList.contains('d-none')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }

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
        if (!modale.classList.contains('d-none')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = '';
        }
    })
})



// & main
// * caroussel-1

const BTNS = document.querySelectorAll(".btns_caroussel_1 button")

const caroussel = document.querySelector(".caroussel_1_middle")
const firstimg = caroussel.querySelector(".img-div").offsetWidth;
const carouselChildrens = Array.from(document.querySelectorAll(".caroussel_1_middle .img-div"));
const galleryCardWidth = document.querySelector('.img-div div').offsetWidth;


// carouselChildrens.slice(0, 1).forEach(card => {
//     const clonedCard = card.cloneNode(true);
//     caroussel.appendChild(clonedCard);
// });

BTNS.forEach(btn => {
    btn.addEventListener('click',()=>{
        if (btn.id === "btn-1") {
            let elemt = caroussel.lastElementChild
            const clonedCard = elemt.cloneNode(true);
            caroussel.insertAdjacentElement("afterbegin", clonedCard);
            elemt.style.transform = `translateX(${galleryCardWidth}px)`;

            // caroussel.scrollLeft -= 452
            // caroussel.removeChild(caroussel.lastElementChild);
        }else if((btn.id === "btn-3")){
            caroussel.scrollLeft -= 452
        }else{
            console.log("messi GOAT")
        }
    })
});




