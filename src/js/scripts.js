const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = (e) => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
};

function iconVisibility(e) {
  var icon = e.previousElementSibling;
  if (icon.type === "password") {
    icon.type = "text";
  } else { 
    icon.type = "password";
  }
}

function validateEmail(email) {
  const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return !email.match(emailPattern); 
} 

function validatePassword(password) {
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return !password.match(passwordPattern);
}

function validatePhone(phone) {
  const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return !phone.match(phonePattern);
}

function formAlert(object, message) {
  const errorSide = document.getElementById(object.id + "-error");
  errorSide.innerHTML = message;
  object.style.borderColor = "#a50303";
}

function resetInput(input) {
  input.style.borderColor = "#F3F3F3";
  const errorSide = document.getElementById(input.id + "-error");
  errorSide.innerHTML = "";
}

function activeButton() {
  const submitButton = document.getElementById("sign-submit-button");
  submitButton.disabled = !submitButton.disabled;
}

function loginSubmitForm(e) {
  e.preventDefault();

const form = document.getElementById("login-form");
const emailInput = document.getElementById("login-email");
const passwordInput = document.getElementById("login-password");

  if (!emailInput.value || emailInput.value.trim()=="") {
    formAlert(emailInput, "Bu Alan Boş Bırakılamaz.");
    return; 
  }
  if (!passwordInput.value || passwordInput.value.trim()=="") {  
    formAlert(passwordInput, "Bu Alan Boş Bırakılamaz.");
    return;
  }
  if (validateEmail(emailInput.value)) {
    formAlert(emailInput, "Geçersiz E-mail Adresi. Lütfen Geçerli E-mail Adresinizi Giriniz.");
    return;
  }
  if (validatePassword(passwordInput.value)) {
    formAlert(passwordInput, "Geçersiz Şifre. Lütfen Geçerli Bir Şifre Giriniz.");
    return;
  }

  form.submit();
}

function signUpSubmitForm(event) {

  event.preventDefault();

  const form = document.getElementById("sign-up-form");
  const nameInput = document.getElementById("sign-name");
  const surnameInput = document.getElementById("sign-surname");
  const emailInput = document.getElementById("sign-email");
  const phoneInput = document.getElementById("sign-phone");
  const passwordInput = document.getElementById("sign-password");
  const passwordAgainInput = document.getElementById("sign-again-password");
  const loginCheckbox = document.getElementById("signCheck");

  
  if (!nameInput.value || nameInput.value.trim()=="" ) {
    formAlert(nameInput, "Bu alan boş bırakılamaz.");
    return;
  } 
  
 if (nameInput.value.length < 3 || nameInput.value.length > 10) {
    console.log(nameInput.value.length);
    formAlert(nameInput, "Adınız 3 harften az, 10 harften fazla olamaz");
    return;
  }
  
  if (!surnameInput.value || surnameInput.value.trim()=="") {
    formAlert(surnameInput, "Bu alan boş bırakılamaz.");
    return;
  }
  if(surnameInput.value.length < 3 || surnameInput.value.length > 10){
    console.log(surnameInput.value.length);
    formAlert(surnameInput, "Soyadınız 3 harften az, 10 harften fazla olamaz");
    return;
  }
  if (!emailInput.value || emailInput.value.trim()=="") {
    formAlert(emailInput, "Bu alan boş bırakılamaz.");
    return;
  }

  if (validateEmail(emailInput.value)) {
    formAlert(emailInput, "Geçersiz E-mail adresi");
    return;
  }

  if (!phoneInput.value || phoneInput.value.trim()=="") {
    formAlert(phoneInput, "Bu alan boş bırakılamaz.");
    return;
  }
  if(phoneInput.value.length<10 ||phoneInput.value.length>10){
    formAlert(phoneInput,"Geçersiz Telefon Numarası. Başında 0 Olmadan 10 Haneli Rakam Giriniz.");
    return;
  }

  if (validatePhone(phoneInput.value) ) {
    formAlert(phoneInput,"Geçersiz Telefon Numarası Lütfen 10 Haneli Rakam Giriniz.");
    return;
  }

  if (!passwordInput.value || passwordInput.value.trim()=="" ) {
    formAlert(passwordInput, "Bu alan boş bırakılamaz.");
    return;
  }

  if (validatePassword(passwordInput.value)) {
    formAlert(passwordInput, "Geçersiz Şifre");
    return;
  }

  if (!passwordAgainInput.value || passwordAgainInput.value.trim()=="") {
    formAlert(passwordAgainInput, "Bu alan boş bırakılamaz.");
    return;
  }

  if (passwordInput.value != passwordAgainInput.value) {
    formAlert(passwordAgainInput, "Şifreler birbiriyle uyuşmamaktadır");
    return;
  }
  try {
    if(loginCheckbox.checked){
      form.submit();
    }
  } catch (error) {
    console.log(error);
  }
  
  
  
}
