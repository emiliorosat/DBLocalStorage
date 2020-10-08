'use strict'

let _input = {
    num1: document.getElementById("primerNumero"),
    num2: document.getElementById("segundoNumero"),
    listHistory: document.getElementById("list"),
    resultDisplay: document.getElementById("result")
}

document.getElementById("btn-sum")
.addEventListener('click', ()=>Execute("+"))

document.getElementById("btn-divide")
.addEventListener('click', ()=>Execute("/"))

document.getElementById("btn-subtraction")
.addEventListener('click', ()=>Execute("-"))

document.getElementById("btn-multiply")
.addEventListener('click', ()=>Execute("*"))

document.getElementById("btn-clear")
.addEventListener("click", ()=>{
    db.Clear()
    UpdateHistory()
})

function Execute(operation){
    let result
    let num1 = _input.num1.value 
    let num2 = _input.num2.value
    switch (operation) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break;
        case "/":
            result = num1 / num2
            break;
        default:
            break;
    }

    db.Add({
        result,
        num1,
        num2,
        operation
    })
    _input.resultDisplay.innerHTML = ""
    _input.resultDisplay.innerHTML = `Resultado: ${result}`
    UpdateHistory()
}

function UpdateHistory(){
    let data = db.GetData()
    _input.listHistory.innerHTML = ""
    for(let i in data){
        CreateElement(data[i])
    }
}

function CreateElement(obj){
    let li = document.createElement("li")
    li.innerHTML = `${obj.num1} ${obj.operation} ${obj.num2} = ${obj.result}`
    _input.listHistory.appendChild(li)
}

UpdateHistory()