const icons = document.querySelectorAll('.section-1-icons i')
const menubtn = document.querySelector('.menu')
const navbar= document.querySelector('.navbar')
const navlink=document.querySelectorAll('.navbar-link')
let i = 1
setInterval(()=>{
 const icon = document.querySelector('.section-1-icons .change')
    icon.classList.remove('change')
    i++
    if(i>icons.length){
        icons[0].classList.add('change')
        i=1
    }else {
    icon.nextElementSibling.classList.add('change')
    }
   
   
 
},5000)

menubtn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    menubtn.classList.toggle('active')
    navlink.forEach(navlinks =>{
        navlinks.classList.toggle('active')
    })
})
