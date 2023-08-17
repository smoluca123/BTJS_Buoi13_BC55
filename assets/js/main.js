const $a = document.querySelector.bind(document);
const $all = document.querySelectorAll.bind(document);
var btnSalary = $all('#btnSalary');
var txtSalary = $all('#txtSalary');

// bài 1

var luongNgay = $a('#luong-ngay');
var soNgayLam = $a('#so-ngay-lam');
btnSalary[0].onclick = (e) => {
  e.preventDefault();
  txtSalary[0].innerText = `Lương của ${+soNgayLam.value} ngày làm là : ${
    +luongNgay.value * +soNgayLam.value
  } `;
};

// bài 2
var inputNumers = $all('.form-bai2 input');
btnSalary[1].onclick = (e) => {
  e.preventDefault();
  var average = 0;
  for (var item of inputNumers) {
    average += +item.value;
  }
  txtSalary[1].innerText = `Trung bình : ${average / inputNumers.length}`;
};

// bài 3
var inputBai3 = $a('.form-bai3 input');
var dollarCurrent = 23500;
btnSalary[2].onclick = (e) => {
  e.preventDefault();
  txtSalary[2].innerText = `Quy đổi : ${
    inputBai3.value
  }$ => ${new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(+inputBai3.value * dollarCurrent)}
  `;
};

// Bài 4
var inputBai4 = $all('.form-bai4 input');

btnSalary[3].onclick = (e) => {
  e.preventDefault();
  var S = +inputBai4[0].value * +inputBai4[1].value;
  var C = (+inputBai4[0].value + +inputBai4[1].value) * 2;
  txtSalary[3].innerText = `Diện tích : ${S} - Chu vi : ${C}`;
};

// Bài 5
var inputBai5 = $a('.form-bai5 input');
var result;
btnSalary[4].onclick = (e) => {
  e.preventDefault();
  if (inputBai5.value <= 99) {
    var donVi = +inputBai5.value % 10;
    var chuc = Math.floor(+inputBai5.value / 10);
    txtSalary[4].innerText = `Tổng của ${chuc} + ${donVi} : ${donVi + chuc}`;
    return;
  }
  txtSalary[4].innerText = 'Vui lòng nhập số hợp lệ';
};
