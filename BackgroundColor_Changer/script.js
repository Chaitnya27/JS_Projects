const button = document.querySelectorAll(".buttons");
const body = document.querySelector("body");
const h2 = document.querySelector(".h2");

button.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id === "Yellow"){
            body.style.background = e.target.id;
           
        }
       if(e.target.id === 'Orange'){
            body.style.background = e.target.id;
        }
       if(e.target.id === "Brown"){
            body.style.background = e.target.id;
        }
        if(e.target.id === "Blue"){
            body.style.background = e.target.id;
        }
    })

})