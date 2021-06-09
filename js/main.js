const form = document.querySelector('form');
let username = form.querySelector('.name');
let  userEmail = form.querySelector('.email');
let userPhone = form.querySelector('.number');


form.addEventListener('submit' , (e) => {
    e.preventDefault();

     if(username.value !== "" && userEmail.value !== "" && userPhone.value !== ""){
        alert(`Hello ${username.value} , a message has been sent to your phone number ${userPhone.value} and a mail has been sent to email address ${userEmail.value}`);

        username.value = userEmail.value = userPhone.value = "";
     }
     else{
         alert("Input Fields Must Be Filled First");
     }

})