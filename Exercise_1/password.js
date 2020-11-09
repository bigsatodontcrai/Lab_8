document.addEventListener('DOMContentLoaded',() => {
    
    let validate = document.getElementById('validate');

    

    validate.addEventListener('click', () => {
        let pass1 = document.getElementById('password');
        let pass2 = document.getElementById('verify');
        let firstPassword = pass1.value;
        let secondPassword = pass2.value;
        if(firstPassword.length < 8){
            alert('Invalid: Must be 8 characters long');
        }
        else if(firstPassword == secondPassword){
            alert('Validated!');
        } else {
            alert('Invalid: The passwords are not the same');
        }
    });
    
});