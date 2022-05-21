const KEY = "yorha_member";
const INITIALIZING_CLASS_NAME = "initializing";
const INACTIVE_CLASS_NAME = "inactive";
const loginModal = document.querySelector(".js-login-modal");
const loginForm = document.querySelector(".js-login-form");
const loginID = loginForm.querySelector(".js-login-id");
const loginPassword = loginForm.querySelector(".js-login-password");
const logoutTab = document.querySelector('.js-logout');

let userTodo;

const findUser = () => {
  const loadedUser = localStorage.getItem(KEY);
  if(loadedUser) {
    loadData(loadedUser);
    toggleLogoutTab('login');
  } else {
    showLogin();
  }
}

const validateInput = (id, password) => {
  let isValid = true;
  if(id.trim().length <= 0) {
    loginID.placeholder = "ENTER YOUR ID";
    isValid = false;
  }
  if (password.trim().length <= 0 ) {
    loginPassword.placeholder = "ENTER YOUR P/W";
    isValid = false;
  }
  return isValid;
}

const showLogin = () => {
  loginModal.classList.add(ACTIVE_CLASS_NAME);
}

const loadData = (loadedUser) => {
  userTodo = JSON.parse(localStorage.getItem(loadedUser));
  console.log(userTodo);
}

const registerUser = (id) => {
  const userTodo = {
    todo: []
  }
  localStorage.setItem(KEY, id);
  localStorage.setItem(id, JSON.stringify(userTodo));
}

const showAnimation = () => {
  loginModal.classList.add(INITIALIZING_CLASS_NAME);
  setTimeout(() => {
    loginModal.classList.remove(ACTIVE_CLASS_NAME);
    loginModal.classList.remove(INITIALIZING_CLASS_NAME);
  }, 300);
}

const toggleLogoutTab = (mode) => {
  if (mode === 'login') {
    logoutTab.classList.remove(INACTIVE_CLASS_NAME);
    logoutTab.addEventListener("click", logout);
  } else {
    logoutTab.classList.add(INACTIVE_CLASS_NAME);
  }
}

const logout = () => {
  localStorage.removeItem(KEY);
  toggleLogoutTab('logout');
  showLogin();
  playCancelSound();
}

const login = (e) => {
  e.preventDefault();
  const inputID = loginID.value;
  const inputPassword = loginPassword.value;

  if(!validateInput(inputID, inputPassword)) {
    playAlarmSound();
    return;
  }

  loginID.value = "";
  loginPassword.value = "";

  showAnimation();
  playMenuOpenSound();
  registerUser(inputID);
  toggleLogoutTab('login');
}

loginForm.addEventListener("submit", login);

findUser();