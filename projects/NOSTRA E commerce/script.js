var sidenavbar= document.querySelector(".side-navbar")
var navbarmenutoggle=document.querySelector(".navbar-menu-toggle")




navbarmenutoggle.addEventListener("click",function()
{
    sidenavbar.style.left="0"
})

var closesidenavbar= document.getElementById("close-side-navbar")


closesidenavbar.addEventListener("click",function()
{
    sidenavbar.style.left="-60%"
})


    

//collection section

