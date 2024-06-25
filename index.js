let todo=document.querySelector(".taskinfo");
let tasklist=document.querySelectorAll(".tasklist");
let add=document.querySelector(".btn");
let newtask=document.querySelector(".newtask");



add.addEventListener("click", function(){
    var para=document.createElement("p");
    para.classList.add("para1");
    para.innerText=todo.value ;
    newtask.appendChild(para);
    todo.value=" ";
    para.addEventListener("click", function(){
        para.style.textDecoration="line-through";

       
    })
    para.addEventListener("dblclick", function(){
       newtask.removeChild(para);

       
    })

  
})






