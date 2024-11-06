var productContainer = document.getElementById("product")
var search = document.getElementById("search")
var products = productContainer.querySelectorAll("div")

search.addEventListener("keyup", function()
{
   var enteredValue= event.target.value.toUpperCase()

   for(count=0;count<products.length;count=count+1)
   {
    var productname= products[count].querySelector("p").textContent

    if(productname.toUpperCase().indexOf(enteredValue)<0)
    {
        products[count].style.display="none"
    }else{
        products[count].style.display="block"
    }
   }
})


//side nav bar

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