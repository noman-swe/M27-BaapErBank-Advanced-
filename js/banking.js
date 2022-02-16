
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



// deposit & balance
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get new deposit 
   const depositAmount = getInputValue('deposit-input');


   // get previous deposit
    updateTotalField('deposit-total', depositAmount);
   /* 
    const totalDeposit = document.getElementById('deposit-total');
    const previousDepositAmountText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotalAmount = previousDepositAmount + depositAmount;
    //totalDeposit.innerText = newDepositAmount;
    totalDeposit.innerText = newDepositTotalAmount;
    */

    // update Balance section
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    // new balance from deposit
    const newTotalBalance = balanceAmount + depositAmount;
    balanceTotal.innerText = newTotalBalance; 
});

// withdraw & balance
document.getElementById('withdraw-btn').addEventListener('click', function(){
     
    const withdrawAmount = getInputValue('withdraw-input');

    // show withdraw amount 
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    const totalWithdrawAmount = previousWithdrawAmount + withdrawAmount;
    withdrawTotal.innerText = totalWithdrawAmount; */
    
    // show withdraw amount using function
    updateTotalField('withdraw-total', withdrawAmount);
    

    // update balance (balance - withdraw)
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - withdrawAmount;

    // set the value in balance section
    balanceTotal.innerText = newBalanceTotal; 


    // clear inputs
    // withdrawInput.value = '';
});