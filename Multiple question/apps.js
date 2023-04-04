const num1 = Math.ceil( Math.random()*10)
const num2 = Math.ceil( Math.random()*10)
console.log(num1,num2)

const  questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
questionEl.innerText =`What is ${num1} multiply by ${num2}?`;
const correctAns = num1 * num2;
formEl.addEventListener("submit",()=>{
const userAns = +inputEl.value;
if(userAns ===correctAns){
    score++
}else{
    score--
    console.log("score")
}

})