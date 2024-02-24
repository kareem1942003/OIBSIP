const emailUser = document.getElementById("email");
const passwordUser = document.getElementById("password");
const signUpBtn = document.getElementById("signup");
const loginBtn = document.getElementById("login");
const loginForm = document.querySelector(".loginForm");
const signupForm = document.querySelector(".signupForm");
const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const securityPage = document.querySelector(".sectionAfterLogin");
const section = document.getElementById("section");

let users;

if (localStorage.users != null) {
  users = JSON.parse(localStorage.users);
} else {
  users = [];
}

// localStorage.clear();
signUpBtn.onclick = function (e) {
  e.preventDefault();
  if (emailUser.value !== "" && passwordUser.value !== "") {
    let userObject = {
      emailUser: emailUser.value,
      passwordUser: passwordUser.value,
    };
    users.push(userObject);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    emailUser.value = "";
    passwordUser.value = "";
  }
};

loginBtn.onclick = function (e) {
  e.preventDefault();
  let usersInLocal = JSON.parse(localStorage.users);
  if (
    emailLogin.value === usersInLocal[0].emailUser &&
    passwordLogin.value === usersInLocal[0].passwordUser
  ) {
    section.style.display = "none";
    securityPage.style.display = "flex";
  } else {
    alert("Wrong User Or Password");
  }
  emailLogin.value = "";
  passwordLogin.value = "";
};
