const form = document.getElementById('form');
const username = document.getElementById('username');
const affl = document.getElementById('affl');
const fullName = document.getElementById('fullName');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const dob = document.getElementById('dob');
const address = document.getElementById('address');

const user = new Object();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces
  const usernameValue = username.value.trim();
  // console.log(usernameValue);
  const afflValue = affl.value.trim();
  // console.log(afflValue);
  const fullNameValue = fullName.value.trim();
  // console.log(fullNameValue);
  const emailValue = email.value.trim();
  // console.log(emailValue);
  const passwordValue = password.value.trim();
  // console.log(passwordValue);
  const password2Value = password2.value.trim();
  // console.log(password2Value);
  const dobValue = dob.value.trim();
  // console.log(dobValue);
  const addressValue = address.value.trim();
  // console.log(addressValue);

  if (usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
    return;
  } else {
    saveUserInfo(usernameValue, 1);
    setSuccessFor(username);
  }

  if (afflValue === '--None--') {
    console.log('Error ' + afflValue);
    setErrorFor(affl, 'Affiliation cannot be None');
    return;
  } else {
    saveUserInfo(afflValue, 2);
    setSuccessFor(affl);
  }

  if (fullNameValue === '') {
    setErrorFor(fullName, 'Full Name cannot be blank');
    return;
  } else {
    saveUserInfo(fullNameValue, 3);
    setSuccessFor(fullName);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not a valid email');
  } else {
    saveUserInfo(emailValue, 4);
    setSuccessFor(email);
  }

  if (passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank');
  } else if (passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords do not match');
  } else {
    saveUserInfo(password2Value, 5);
    setSuccessFor(password2);
  }

  if (document.getElementById('male').checked === true) {
    setSuccessFor(document.getElementById('male'));
    saveUserInfo(document.getElementById('male'), 6);
  } else if (document.getElementById('female').checked === true) {
    saveUserInfo(document.getElementById('female'), 6);
    setSuccessFor(document.getElementById('female'));
  } else if (document.getElementById('other') === true) {
    saveUserInfo(document.getElementById('other'), 6);
    setSuccessFor(document.getElementById('other'));
  } else {
    setErrorFor(document.getElementById('gender'), 'Please select one');
  }

  if (dobValue === '') {
    setErrorFor(dob, 'Please select DoB');
    return;
  } else {
    saveUserInfo(dobValue, 7);
    setSuccessFor(dob);
  }

  if (addressValue === '') {
    setErrorFor(address, 'Address cannot be None');
    return;
  } else {
    saveUserInfo(addressValue, 8);
    setSuccessFor(address);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email,
  );
}

function saveUserInfo(value, opt) {
  if (opt === 1) {
    user.name = value;
    console.log('User name is ' + user.name);
  } else if (opt === 2) {
    user.affl = value;
    console.log('User affiliation is ' + user.affl);
  } else if (opt === 3) {
    user.fullName = value;
    console.log('User full name is ' + user.fullName);
  } else if (opt === 4) {
    user.email = value;
    console.log('User email is ' + user.email);
  } else if (opt === 5) {
    user.password = value;
    console.log('User password is ' + user.password);
  } else if (opt === 6) {
    user.gender = value;
    console.log('User gender is ' + user.gender);
  } else if (opt === 7) {
    user.dob = value;
    console.log('User dob is ' + user.dob);
  } else if (opt === 8) {
    user.address = value;
    console.log('User address is ' + user.address);
  } else {
    console.log(
      'The input option value is out of range. Option value should be between 0 and 9.',
    );
    return;
  }
}

function retrieveUserInfo() {}
