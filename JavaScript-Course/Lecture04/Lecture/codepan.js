const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  checkInputs();
})

function checkInputs(){
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const passwordValue2 = password2.value.trim();
  console.log(usernameValue);
  console.log(emailValue);
  console.log(passwordValue);
  console.log(passwordValue2);
  
  if(usernameValue === ''){
    setErrorFor(username, 'Username cannot be blank!');
  }
  else{
    setSuccessFor(username);
  }
  
  if(emailValue === ''){
    setErrorFor(email, 'email cannot be blank!');
  }
  else{
    setSuccessFor(email);
  }
  
  if(passwordValue === ''){
    setErrorFor(password, 'Password cannot be blank!');
  }
  else{
    setSuccessFor(password);
  }
  if(passwordValue2 === ''){
    setErrorFor(password2, 'Password cannot be blank!');
  }
  else if(passwordValue !== passwordValue2){
    setErrorFor(password2, 'Password does not match!');
  }
  else{
    setSuccessFor(password2);
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}