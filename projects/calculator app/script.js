let input = document.querySelector("#inputbox");
let buttons = document.querySelectorAll("button");

let string = " ";

let array = Array.from(buttons)

array.forEach((button)=>{
    button.addEventListener('click', function(event){
          let buttonValues = event.target.innerHTML;

          if(buttonValues === "="){
            try{
               string = eval(string);
               input.value = string
            }catch(error){
               input.value = "error"
            }
          }else if(buttonValues === "AC"){
            string = " ";
            input.value = string;
          }else if(buttonValues === "Del") {
             string = string.substring(0, string.length -1)
             input.value = string;
          }
          else{
            string +=  buttonValues;
            input.value = string;
          }
    })
});


