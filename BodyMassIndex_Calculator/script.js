const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const result = document.querySelector("#results");

if(height === "" || height<0 || isNaN(height)){
    result.innerHTML = "please Enter a Valid Height";
}else if(weight === ""|| weight<0 || isNaN(weight)){
    result.innerHTML = "Please Enter a valid Weight";
}
else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    

    
    if(bmi <  18.6){
        
        result.innerHTML = `<span>${bmi}</span>  -Under Weight`;

    }
     if(18.6 >=bmi <=24.9){
        
        result.innerHTML = `<span>${bmi}</span>  -Normal Range`;
    }
    if(bmi >24.9){
        
        result.innerHTML=`<span>${bmi}</span>  -Overweight`;
    }
}


})
