let value1 = 0;
let operation = '';
let value2 = 0;
let operationInProgress = false;


function getDisplay(){
    const displayElementQueryResult = document.querySelectorAll('.display') ;
 
    if(displayElementQueryResult.length){
        displayElement = displayElementQueryResult[0];
        return displayElement;
    }
    return null;
    
}

function numClick(num){

    const displayElement = getDisplay()
    if(displayElement.innerHTML == '0' || operationInProgress){
        displayElement.innerHTML = num;
        operationInProgress = false;
    }
    else{
         displayElement.innerHTML += num;
        }

    const btnAcElementResult = document.getElementsByClassName('btn-ac')
    if(btnAcElementResult.length){
        const btnAcElement = btnAcElementResult[0]
        btnAcElement.innerHTML = 'C'
    }
}

function clearDisplay(){

    const displayElement = getDisplay();
    displayElement.innerHTML = '0';
    value1 = 0;
    operation = '';
    value2 = 0;
    operationInProgress = false;
    

    const btnAcElementResult = document.getElementsByClassName('btn-ac')
    if(btnAcElementResult.length){
        const btnAcElement = btnAcElementResult[0]
        btnAcElement.innerHTML = 'AC'
    }

}

function arithmeticOperation(operator){
    const displayElement = getDisplay();
    if(Number(displayElement.innerHTML)){
        value1 = Number(displayElement.innerHTML);
        operation = operator;
        operationInProgress = true;
    }
}

function setValue2(){
    let displayElement = getDisplay();

    if(Number(displayElement.innerHTML)){
        value2 = Number(displayElement.innerHTML);
    }  
}

function getResult(){
    setValue2()
    let result;
  
    if(operation == '+'){
        result = value1 + value2;
        displayElement.innerHTML = result;
    }
    else if(operation == '-'){
        result = value1 - value2;
        displayElement.innerHTML = result;
    }
    else if(operation == '*'){
        result = value1*value2;
        displayElement.innerHTML = result;
    } 
    else if(operation == '/'){
        result = value1/value2;
        displayElement.innerHTML = result;
    }
    
}
