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
});