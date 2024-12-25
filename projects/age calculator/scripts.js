let inputDate = document.querySelector(".input-date");
inputDate.max = new Date().toISOString().split("T")[0];
let btn = document.querySelector(".btn");
let results = document.querySelector(".result");

function click(){
    let birthdayDate = new Date(inputDate.value);
    
    let d1 = birthdayDate.getDate();
    let m1 = birthdayDate.getMonth();
    let y1 = birthdayDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth();
    let y2 = today.getFullYear();

    let d3,m3,y3;
    y3 = y2-y1;

    if (m2 >= m1){
        m3 = m2-m1;
    }else{
        y3--;
        m3 = 12 + m2 - m1;
    }
    if(d2 >= d1){
        d3 = d2-d1;
    }else{
        m3--;
        d3 = getDateinmonth(y1,m1)+d2-d1;
    }
    if(m3 < 0){
        m3 = 11;
        y3--;
    }
    results.innerHTML= `You are <span>${y3}</span> Years, <span>${m3}</span> Months and <span>${d3}</span> days old`;

};
function getDateinmonth(year,month){
    return  new Date (year,month,0).getDate();
}
btn.addEventListener("click", function(){
    click();
})