let userOder = document.getElementById("user-oder_listItem");
let arrUser = JSON.parse(localStorage.getItem("listCard"));
let showPay = document.getElementById("showPay");

function showUserOder() {
  let text = "";
  let price = 0;
  for (let i = 0; i < arrUser.length; i++) {
    text += `
    <tr>
    <td>${i + 1}</td>
    <td><img src="${arrUser[i].img}" /></td>
    <td><button onclick="sub(${i},${arrUser[i].price})">-</button><button>${
      arrUser[i].quantity
    }</button><button onclick="add(${i})">+</button></td>
    <td>${arrUser[i].price * arrUser[i].quantity}</td>
    <td><button onclick="remove(${i})">Xóa</button></td>
  </tr>
  `;
    price += arrUser[i].price * arrUser[i].quantity;
  }

  userOder.innerHTML = text;
  showPay.innerHTML = price;
}
showUserOder();

function sub(index) {
  if (arrUser[index].quantity < 2) {
    remove();
  } else {
    arrUser[index].quantity -= 1;
  }

  showUserOder();
}
function add(index) {
  if (arrUser[index].quantity == 10) {
    arrUser[index].quantity = 10;
  } else {
    arrUser[index].quantity += 1;
  }

  showUserOder();
}
function remove(index) {
  arrUser.splice(index, 1);
  showUserOder();
  localStorage.setItem("listCard", JSON.stringify(arrUser));
}
