// console.log('button clicking file added');


// H.W search: form submit reloading the page



// Step 1 : event handler

// document.getElementById('button-login').addEventListener('click', function(event){
//     // Step 2 : prevent default behavior
//     event.preventDefault();    //it prevents from loading which is a default behavior

//     // Step 3 : get the phone number and the pin number 
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
    
//     console.log(phoneNumber, pinNumber);

//     // Step 4 : validate phone and pin
//     // Thid is not the perfect way - its temporary. You should not use this.
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         // Step 5: allow user to use the website
//         console.log('phone number entered');
        
//     }
//     else{
//         alert('Wrong phone number or Pin');
//     }
// })



document.getElementById('button-login').addEventListener('click', function(event){
    console.log('button clicked');
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href = '/home.html';
    }
    else{
        alert('Wrong phone number or pin');
    }
})


