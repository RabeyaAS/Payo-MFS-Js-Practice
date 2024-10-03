// add money to the account
/**
 * Step-1 : add an event handler to the add money button inside the form
 *    1.1 : prevent page reload after form submit
 * Step-2 : get money to be added to the account balance
 * 
 */

// Step-1 : add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event){
    // prevent page reload after form submit
    event.preventDefault();

    // Step-2 : get money to be added to the account balance
    const addMoneyInput = document.getElementById('input-add-money');
    console.log(addMoneyInput.value);

    // get the pin number provided
    const pinNumber = document.getElementById('input-pin-number');
    console.log(pinNumber.value);



})

