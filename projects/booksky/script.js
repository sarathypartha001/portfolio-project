//popupoverlay
//button
//popupbox

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelpopup = document.getElementById("cancel-popup")
var addbook = document.getElementById("add-book")

cancelpopup.addEventListener("click", function(event)
{
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

addbook.addEventListener("click", function(event)
{
  event.preventDefault()
  booktitleinput.textContent

})






var container         =   document.querySelector(".container")
var addbook        =      document.getElementById("add-book")
var booktitleinput =      document.getElementById("book-title-input")
var bookauthorinput=      document.getElementById("book-Author-input")
var bookdescriptioninput= document.getElementById("book-description-input")


addbook.addEventListener("click", function(event){
  event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML= `<h2>${booktitleinput.value}</h2>
            <h3>${bookauthorinput.value}</h3>
            <p>${bookdescriptioninput.value}</p>
            <button onclick="deletebook(event)">Delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})

function deletebook(event)
{
  event.target.parentElement.remove()
}