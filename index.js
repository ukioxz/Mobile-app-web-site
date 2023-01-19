const formSignUp = document.querySelector('.overlay');
const formLogin = document.querySelector('.overlayLogin');
const hideSignUp = document.querySelector('.close');

const showSignUp = () => {
  formSignUp.style.opacity = 1;
  formSignUp.style.visibility = "visible";
  formLogin.style.opacity = 0;
  formLogin.style.visibility = "hidden";
}

const closeSignUp = () => {
  formSignUp.style.opacity = 0;
  formSignUp.style.visibility = "hidden";
  formLogin.style.opacity = 0;
  formLogin.style.visibility = "hidden";
}

const showLogin = () => {
  formLogin.style.opacity = 1;
  formLogin.style.visibility = "visible";
  formSignUp.style.opacity = 0;
  formSignUp.style.visibility = "hidden";
}
