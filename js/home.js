// add money to the account
/**
 * Step-1 : add an event handler to the add money button inside the form
 *    1.1 : prevent page reload after form submit
 * Step-2 : get money to be added to the account balance
 *    2.2 : get the pin number
 * Step 3 : Verify the pin number
 * 
 * Make sure the money value type is in number when calculating if its a string then it
 * won't calculate. So to convert a string into a number you use parseFloat --> incase
 * the result has decimals then it will include them too.
 * 
 */

// Step-1 : add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // Step-2 : get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    // Step-3 ; verify pin number 
    // wrong way to validate pin number
    if(pinNumberInput === '1234'){
        console.log('adding money to your account')

        // Step-4 : get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(typeof balance);

        // Step-5 : add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);

        // Step-6 : update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please try again')
    }


})

