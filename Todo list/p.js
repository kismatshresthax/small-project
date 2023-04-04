let input = document.getElementById("input")
let button = document.getElementById("button")
let ul = document.getElementById("ull")

const createElement = ()=>{
    const listitems =document.createElement("li")
    const label =document.createElement("label")
    const del = document.createElement("button")
    del.innerText="delete"
    del.addEventListener("click", (e)=>{
   listitems.remove
    })
   label.innerText= input.value;
   listitems.appendChild(label)
   label.appendChild(del)
   console.log(listitems)
   return listitems

}
const additem = ()=>{
    console.log("i am clicked")
    let iteam =createElement()
    ul.appendChild(listiteams)
}


button.addEventListener("click",additem)
