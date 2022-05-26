var nameError = document.getElementById('name-error');
var numberError = document.getElementById('number-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function namevalidation(){
    var name = document.getElementById('valid-name').value;
    
    var pattern = /^[A-Za-z\s]{3,}$/;

    if(name.match(pattern)){
        nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
        return true;
    }else{
        nameError.innerHTML='write proper name';
    }
   
   
}

function numbervalidation(){
    var phone = document.getElementById('valid-number').value;

    if(phone.length == 0){
        numberError.innerHTML = 'phone number is required';
        return false;
    }

    if(phone.length !== 10){
        numberError.innerHTML = 'phone number should be 10 digits';
        return false;

    }

    if(!phone.match(/^[0-9]{10}$/)){
        numberError.innerHTML = 'only digits please';
        return false;

    }

    numberError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function emailvalidation(){
    var email = document.getElementById('valid-email').value;

    

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid'
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}

function messagevalidation(){
    var message = document.getElementById('valid-message').value;
    var required = 10;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters needed';
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){

    if(!namevalidation() || !numbervalidation() || !emailvalidation() || !messagevalidation()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please enter proper details to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;   
    }
}