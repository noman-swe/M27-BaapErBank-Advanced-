
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

// get previous value
function updateTotalField(totalFieldId, depositAmount){
    //debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    const amount = previousTotal + depositAmount;
    totalElement.innerText = amount;
}

// update balance
function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);
    // new balance from deposit
    if(isAdd == true){
        const newTotalBalance = balanceAmount + amount;
        balanceTotal.innerText = newTotalBalance; 
    }else{
        const newTotalBalance = balanceAmount - amount;
        balanceTotal.innerText = newTotalBalance; 
    }
}

// deposit & balance
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get new deposit 
   const depositAmount = getInputValue('deposit-input');
   // get previous deposit
    updateTotalField('deposit-total', depositAmount);
    // update Balance section
    updateBalance(depositAmount, true);
});

// withdraw & balance
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');   
    // show withdraw amount using function
    updateTotalField('withdraw-total', withdrawAmount);
    // update balance (balance - withdraw)
    updateBalance(withdrawAmount, false);
});