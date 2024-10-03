/**
 * 1. Add event listener to the add Money button (form submit)
 * - if its in a form then, make sure to preventDefault so that your page doesn't reload
 * 
 * 2. Get the money amount that the user wants to add --> if its a string then convert it into a number and save it in another variable
 * - also, get the pin number provided
 * (Note: When you Get something you have save it in an variable, 
 * and when you Set something you can just go on with it without having to save it in a variable.)
 * 
 * 3. Verify the pin number using an IF condition. 
 * - for wrong pin number --> 'failed to add' in an alert
 * - for right pin number --> allow to add the number in the account balance
 * 
 * 4. For the right condition --->
 * - Get the current balance --> if the number is a string then make sure to convert it into a number 
 *                               and save it in another variable.
 * 
 * 5. Make a new variable to do the calculation of --> Add the money to be added with the current balance
 * 
 * 6. Display/Update the current balance in the DOM/UI 
 * 
 */

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    
    const addMoneyInput = document.getElementById('input-add-money').value;
    const addMoneyNumber = parseFloat(addMoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value;

    if(pinNumberInput === '12345'){
        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);
        
        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please Try again.')
    }
})



