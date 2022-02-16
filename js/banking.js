// deposit & balance
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get new deposit
    const depositInput = document.getElementById('deposit-input');
    const depositInputText = depositInput.value;
    const newDepositAmount = parseFloat(depositInputText);
    //console.log(newDepositAmount);
    
    // get previous deposit
    const totalDeposit = document.getElementById('deposit-total');
    const previousDepositAmountText = totalDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotalAmount = previousDepositAmount + newDepositAmount;
    //totalDeposit.innerText = newDepositAmount;
    totalDeposit.innerText = newDepositTotalAmount;
    // clear input field
    depositInput.value = '';

    // update Balance section
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const balanceAmount = parseFloat(balanceText);

    // new balance from deposit
    const newTotalBalance = balanceAmount + newDepositTotalAmount;
    balanceTotal.innerText = newTotalBalance; 
});

// withdraw & balance
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);//integer value from input
    console.log(newWithdrawAmount);

    // show withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(withdrawTotalText);
    const totalWithdrawAmounts = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = totalWithdrawAmounts;
    

    // update balance (balance - withdraw)
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // set the value in balance section
    balanceTotal.innerText = newBalanceTotal; 


    // clear inputs
    withdrawInput.value = '';
});