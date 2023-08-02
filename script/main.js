let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;

// to add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);
// initial value
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;
if(inputTypeValue === "php" && resultTypeValue === "usd"){
    result.value = Number(input.value) * 0.018;
}else if(inputTypeValue === "php" && resultTypeValue === "gbp"){
    result.value = Number(input.value) * 0.014;
}else if(inputTypeValue === "php" && resultTypeValue === "php"){
    result.value = input.value;  
}

else if(inputTypeValue === "usd" && resultTypeValue === "gbp"){
    result.value = Number(input.value) * 0.79;
}else if(inputTypeValue === "usd" && resultTypeValue === "php"){
    result.value = Number(input.value) * 55.20;
}else if(inputTypeValue === "usd" && resultTypeValue === "usd"){
    result.value = input.value;
}

else if(inputTypeValue === "gbp" && resultTypeValue === "usd"){
    result.value = Number(input.value) * 1.27;
}else if(inputTypeValue === "gbp" && resultTypeValue === "php"){
    result.value = Number(input.value) *70.25;
}else if(inputTypeValue === "gbp" && resultTypeValue === "gbp"){
    result.value = input.value;
}
}