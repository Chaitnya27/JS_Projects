const randomColor = function(){
    const hex = "0123456788ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];   
    }
return color;

}

let stopcolor;
const startEvent = function(){
    
    stopcolor=setInterval(changingColor,500)
    
     function changingColor(){

     document.body.style.backgroundColor = randomColor();
     }

}
const stopEvent = function(){
    clearInterval(stopcolor);
    stopcolor = null;
}

document.querySelector("#start").addEventListener('click',startEvent);

document.querySelector("#stop").addEventListener('click',stopEvent);


