let showItem = document.getElementById("list-item");

let arrItem = JSON.parse(localStorage.getItem("listCard")) || [];
let showNumberOrder = document.getElementById("numberOrder");
let listItem = [
  {
    id: 1,
    name: "Trà Sữa Đậu Đỏ",
    price: 10,
    img: "./img-oder/tra sua-oder/t1.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Trà Sữa Đậu Đỏ",
    price: 20,
    img: "./img-oder/tra sua-oder/t2.png",
    quantity: 1,
  },
  {
    id: 3,
    name: "Trà Sữa Đậu Đỏ",
    price: 15,
    img: "./img-oder/tra sua-oder/t3.png",
    quantity: 1,
  },
  {
    id: 4,
    name: "Trà Sữa Đậu Đỏ",
    price: 1000,
    img: "./img-oder/tra sua-oder/t4.png",
    quantity: 1,
  },
  {
    id: 5,
    name: "Trà Sữa Đậu Đỏ",
    price: 1000,
    img: "./img-oder/tra sua-oder/t5.png",
    quantity: 1,
  },
  {
    id: 6,
    name: "Trà Sữa Đậu Đỏ",
    price: 1000,
    img: "./img-oder/tra sua-oder/t6.png",
    quantity: 1,
  },
  {
    id: 7,
    name: "Trà Sữa Đậu Đỏ",
    price: 1000,
    img: "./img-oder/tra sua-oder/t7.png",
    quantity: 1,
  },
  {
    id: 8,
    name: "Trà Sữa Đậu Đỏ",
    price: 1000,
    img: "./img-oder/tra sua-oder/t8.png",
    quantity: 1,
  },
];

function renderItem() {
  let text = "";

  for (let i = 0; i < listItem.length; i++) {
    text += `
   <div class="card-order">
            <p>${listItem[i].name}</p>
            <img src="${listItem[i].img}" alt="" />
            <div class="buy-item">
              <span>${listItem[i].price}</span>
              <button class="Btn btn-order" onclick="buyItem(${i})">Buy</button>
            </div>
    </div>`;
  }
  showItem.innerHTML = text;
}
renderItem();
let count = 0;
function buyItem(index) {
  let check = true;
  count = count + 1;
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[index] == arrItem[i]) {
      arrItem[i].quantity = arrItem[i].quantity + 1;
      check = false;
      break;
    }
  }
  if (check) {
    arrItem.push(listItem[index]);
  }
  showNumer(count);
  localStorage.setItem("listCard", JSON.stringify(arrItem));
}
console.log(count);
function showNumer(a) {
  showNumberOrder.innerHTML = a;
}
showNumer();
