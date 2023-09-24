function startRegister() {
  document.getElementById("wrapper").style.marginTop = "100px";
  document.getElementById("loginUser").style.display = "none";
  document.getElementById("registerUser").style.display = "block";
}

let userName = document.getElementById("userName");
let passWord = document.getElementById("passWord");

let userNameLogin = document.getElementById("userNameLogin");
let passWordLogin = document.getElementById("passWordLogin");
let address = document.getElementById("address");
let phoneNumber = document.getElementById("phoneNumber");
let newUserString;

let arrUser = JSON.parse(localStorage.getItem("userList")) || [
  { username: "admin", password: "admin" },
];
console.log(arrUser);
function CheckPassword(passVal) {
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,20}$/;
  if (passVal.match(passw)) {
    return true;
  } else {
    alert("Mật khẩu không hợp  lệ");
    return false;
  }
}
function CheckUsername() {
  let passw = /^[a-zA-Z0-9]{7,100}$/;
  if (userName.value.match(passw)) {
    return true;
  } else {
    alert("Tên  đăng  nhập không hợp  lệ!");
    return false;
  }
}
function CheckPhonenumber() {
  let passw = /((09|03|07|08|05)+([0-9]{5})\b)/g;
  if (phoneNumber.value.match(passw)) {
    return true;
  } else {
    alert("Số điện  thoại không hợp lệ không hợp  lệ!");
    return false;
  }
}

function register() {
  let CheckUser = CheckUsername();
  let CheckPass = CheckPassword(passWord.value);

  //   CheckPhonenumber();

  if (CheckUser == true && CheckPass == true) {
    alert("dang ki thanh cong");
    document.getElementById("loginUser").style.display = "block";
    document.getElementById("registerUser").style.display = "none";
    let objUser = {
      username: userName.value,
      password: passWord.value,
      address: address.value,
      phonenumber: phoneNumber.value,
      cart: [],
    };
    arrUser.push(objUser);
    localStorage.setItem("userList", JSON.stringify(arrUser));
  } else {
    (userName.value = ""), (passWord.value = "");
  }
}

function login() {
  arrUser = JSON.parse(localStorage.getItem("userList"));
  let check = false;

  for (let i = 0; i < arrUser.length; i++) {
    if (
      arrUser[i].username == userNameLogin.value &&
      arrUser[i].password == passWordLogin.value
    ) {
      check = true;
      break;
    }
  }
  if (check) {
    alert("dang nhap thanh  cong");
  } else {
    alert("tai khoan  mat khau sai");
    userNameLogin.value = "";
    passWordLogin.value = "";
  }
}
// forgot password
function forgotPassword() {
  document.getElementById("forgotPassword").style.display = "block";
  document.getElementById("loginUser").style.display = "none";
  User;
}
let indexResset;
function searchUser() {
  let check = false;
  let userNameSearch = document.getElementById("userNameSearch");

  arrUser = JSON.parse(localStorage.getItem("userList"));

  for (let i = 0; i < arrUser.length; i++) {
    if (arrUser[i].username == userNameSearch.value) {
      check = true;
      indexResset = i;
      break;
    }
  }
  console.log(indexResset);
  if (check) {
    alert("da tim thay");
    document.getElementById("forgotPassword").style.display = "none";
    document.getElementById("resetPassword").style.display = "block";
  } else {
    alert("ko  tim thay tai khoan");
  }
}
let resetPass = document.getElementById("resetPass");
let retypePass = document.getElementById("retypePass");
function savePassword() {
  CheckPassword(resetPass.value);
  arrUser = JSON.parse(localStorage.getItem("userList"));
  arrUser[indexResset].password = resetPass.value;
  localStorage.setItem("userList", JSON.stringify(arrUser));
  document.getElementById("resetPassword").style.display = "none";
  document.getElementById("loginUser").style.display = "block";
}
