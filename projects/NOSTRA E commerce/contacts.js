var navbarmenutoggle=document.querySelector(".navbar-menu-toggle")
var sidenavbar=document.querySelector(".side-navbar")


navbarmenutoggle.addEventListener("click",function()
{
    sidenavbar.style.left="0"
})

var closesidenavbar=document.getElementById("close-side-navbar")


closesidenavbar.addEventListener("click",function()
{
    sidenavbar.style.left="-60%"
})

var contactbutton = document.querySelector(".Contact-button")

contactbutton.addEventListener("click",function()
{
    alert("Your Responce Received Succesfully")
})