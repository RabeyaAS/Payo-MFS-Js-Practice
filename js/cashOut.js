
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOutInput);

    const pinNumber = document.getElementById('input-cash-out-pin').value;

    // its wrong way to verify pin but still doing it for learning at beginner level
    if(pinNumber === '123'){
        console.log('cash out success')
        const theBalance = document.getElementById('account-balance').innerText;
        const theBalanceNumber = parseFloat(theBalance);

        const balanceUpdate = theBalanceNumber - cashOutNumber;
        
        document.getElementById('account-balance').innerText = balanceUpdate;
    }
    else{
        alert('Wrong Pin! Try again later.')
    }

})





