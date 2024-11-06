/**Side Nav Bar Session */

let navbarmenutoggle = document.querySelector(".navbar-menu-toggle")
let sidenavbar = document.getElementById("side-navbar")

navbarmenutoggle.addEventListener("click",function()
{
    sidenavbar.style.left= "0";
})

let closesidenavbar = document.getElementById("close-side-navbar")

closesidenavbar.addEventListener("click",function()
{
    sidenavbar.style.left="-80%";
})
/**Home Session */
let sidenavlinkhome = document.getElementById("home-link");

sidenavlinkhome.addEventListener("click",function()
{
    sidenavbar.style.left =" -80%";
})






// contact session



let contactbtn = document.querySelector(".contact-button");

contactbtn.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    
    let contactInputs = document.querySelectorAll(".contact-input");
    let isFormValid = true;
    
    contactInputs.forEach(function(input) {
        if (input.value.trim() === "") {
            isFormValid = false;
        }
    });
    if (isFormValid) {
        alert("Your Message Was Submitted Successfully....");
        window.location.reload();
    } else {
        alert("Please fill out all the fields....");
    }
});
