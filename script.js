let inputNum = document.querySelector(".inptval input");
let inputType = document.querySelector(".inptval select");
let convertType = document.querySelector(".convert_type select");
let btn = document.querySelector ("button");
let msg = document.querySelector("#result_box p");

btn.addEventListener("click", (evt)=>{
    evt.preventDefault();
    if (inputType.value === "Degree"){
    Dto();
    }
    else if (inputType.value === "Fahrenheit"){
    Fto();
    }
    else if (inputType.value === "Kelvin"){
    Kto();
    }   
})

function Dto (){ 
        let inputVal = inputNum.value;
        if(convertType.value=== "Degree"){
            let resultValue =  inputVal;
            msg.innerText = `${resultValue} ${convertType.value}`
        }
        else if(convertType.value=== "Fahrenheit"){
           let resultValue = eval((inputVal * 9/5 ) +32 );
           msg.innerText = `${resultValue} ${convertType.value}`
        }
        else if(convertType.value=== "Kelvin"){
           let resultValue = eval (inputVal + 273) ;
           msg.innerText = `${resultValue} ${convertType.value}`;   // error 
        }
};
function Fto (){ 
        let inputVal = inputNum.value;
        if(convertType.value=== "Degree"){
            let resultValue =  eval((inputVal - 32 ) * 5/9).toFixed(3);
            msg.innerText = `${resultValue} ${convertType.value}`
        }
        else if(convertType.value=== "Fahrenheit"){
           let resultValue = inputVal;
           msg.innerText = `${resultValue} ${convertType.value}`
        }
        else if(convertType.value=== "Kelvin"){
           let resultValue = eval((inputVal - 32)*5/9 + 273.15).toFixed(3); ;
           msg.innerText = `${resultValue} ${convertType.value}`
        }
};
function Kto (){ 
        let inputVal = inputNum.value;
        if(convertType.value=== "Degree"){
            let resultValue =  eval(inputVal - 273.15);
            msg.innerText = `${resultValue} ${convertType.value}`
        }
        else if(convertType.value === "Fahrenheit"){
           let resultValue = eval((inputVal - 273.15) * 9/5 + 32).toFixed(3);
           msg.innerText = `${resultValue} ${convertType.value}`
        }
        else if(convertType.value === "Kelvin"){
           let resultValue =  inputVal ;
           msg.innerText = `${resultValue} ${convertType.value}`
        }
};