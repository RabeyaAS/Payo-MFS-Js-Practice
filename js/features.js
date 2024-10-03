
// Showing the cash out form when its clicked and hiding the add money form -->
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // show cash out button when clicked
    console.log('show cash out button clicked')
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide the add money form 
    document.getElementById('add-money-form').classList.add('hidden');

})

// Showing the add money form when its clicked and hiding the cash out form -->
document.getElementById('btn-show-add-money').addEventListener('click', function(){

    // show add money button when clicked 
    console.log('Showing the add money button clicked');
    document.getElementById('add-money-form').classList.remove('hidden');

    // Hide the cash out form
    document.getElementById('cash-out-form').classList.add('hidden');

})




