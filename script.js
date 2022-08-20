const bill_amount_input = document.querySelector('#bill_amount_input')
const cash_given_input = document.querySelector('#cash_given_input')
const button = document.querySelector('#get_number_of_notes')
const validations = document.querySelector('#validations')
const notes = document.querySelectorAll('.quantities');
const notesValue = [2000, 500, 100, 50, 10, 1];

button.addEventListener('click', validateAmounts);

function validateAmounts(){
    validations.innerHTML ='';
    billAmountValidator();
    cashAmountValidator();
}
function billAmountValidator(){
    if(isNaN(bill_amount_input.value)){
        validationMessage.innerText = 'Bill Amount should be a number'
    }
    if(bill_amount_input.value > 0){
        console.log('bill_amount_input.value = ' + bill_amount_input.value);
    } else {
        let validationMessage = document.createElement('p');
        validationMessage.innerText = 'please enter a number larger than zero'
        validations.appendChildv(validationMessage)
    }
}

function cashAmountValidator(){
    let validationMessage = document.createElement('p');
    if(isNaN(cash_given_input.value)){
        validationMessage.innerText = 'Cash amount should be a number'
        validations.appendChild(validationMessage)
    }
    if(cash_given_input.value > 0 && cash_given_input.value >= bill_amount_input.value){
        console.log('cash_amount_input.value = ' + cash_given_input.value);
        notesNeededCalculator();
    } else {
        let validationMessage = document.createElement('p');
        validationMessage.innerText = 'Enter a number larger than the bill amount'
        validations.appendChild(validationMessage)
    }
}

function notesNeededCalculator(){
    let amountToReturn = cash_given_input.value - bill_amount_input.value;
    for(let i = 0;i< notesValue.length;i++){
        notes[i].innerText = Math.trunc(amountToReturn/notesValue[i]);
        amountToReturn = amountToReturn%notesValue[i];
    }
}