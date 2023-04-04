let input = document.getElementById("input")
let button = document.getElementById("button")
let ul = document.getElementById("ull")

const createElement = ()=>{
    const listitems =document.createElement("li")
    const label =document.createElement("label")
    const del = document.createElement("button")
    const edi = document.createElement("button")
    edi.innerText="edit"
    edi.className= 'editt'
    del.innerText="delete"
    del.className= "deletee"

   label.innerText= input.value;
   listitems.appendChild(label)
   listitems.appendChild(del)
   listitems.appendChild(edi)
   console.log(listitems)
   return listitems

}

function  handleEdit(){
let listitems = this.parentNode;
let label = listitems.querySelector("label")
console.log(label ,"this is label")
button.innerText="update";
input.value = label.textContent;
let ul = listitems.parentNode;
ul.removeChild(listitems)


}
function handleDelete(){
    console.log(this,"hello")
    let listitems = this.parentNode;
    // console.log(listitems,"hello this is listitesm")
    let ul = listitems.parentNode;
    ul.removeChild(listitems)
  
    
}

const handleEvents = (listitems) =>{
    console.log(listitems,"this is iteam")
    deletebutton = listitems.querySelector(".deletee")
    deletebutton.onclick = handleDelete;
    console.log(deletebutton, "deletebutton")
    editbutton = listitems.querySelector(".editt")
    editbutton.onclick = handleEdit;
}
const additem = ()=>{
    console.log("i am clicked")
    let listitems =createElement()
    if(input.value!==""){
    ul.appendChild(listitems)
    }else{
        alert("enter value")
    }
    handleEvents(listitems)
    input.value = "";
    button.innerText= "Add"
  
}
button.addEventListener("click",additem)


// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     let subcontainer = document.querySelector('.subcontainer');
//     Array.from(subcontainer).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("ul")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block"
//         }
//         else{
//             element.style.display = "none";
//         }
       
//     })
// })
