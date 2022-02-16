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