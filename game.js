var randomNumber=Math.round(Math.random()*100);
console. log(randomNumber);
var submitButton = document.getElementById("submit");
var message=document.getElementById("message");
var msg;
let lives=document.getElementById("lives");
let s=10;
submitButton.onclick =() => {
    let r=s;
    console. log();
    let inputNumber =document.getElementById("number-input").value;
    s--;
    if(inputNumber==randomNumber)
    {
         location.href="./Win.html";
    }
    else if(inputNumber>randomNumber){
        msg="Oops! You guess is high!"
    }
    else if(inputNumber<randomNumber){
          msg="Oops! You guess is low!"
    }
    if(s==0)
    {
       submitButton.onclick=() =>{
        location.href="./loss.html";
       }
    }
message.style.display="inherit";
   message.innerHTML = msg;
   lives.innerHTML=s,"lives";
}