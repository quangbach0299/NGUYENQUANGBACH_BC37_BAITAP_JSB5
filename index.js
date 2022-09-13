function calcInteger() {
  var a = +document.getElementById("soNguyenTo").value;

  var string = [];
  // var k = 0;
  if (a < 2) {
    document.getElementById("ketQua").innerHTML =
      "Vui lòng nhập số nguyên lớn hơn 2";
  } else if (a == 2) {
    document.getElementById("ketQua").innerHTML = "2";
  } else {
    for (var num = 2; num <= a; num++) {
      var isPrime = true;
      for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        // string[k] = num;
        // k++;
        string.push(num);
        document.getElementById("ketQua").innerHTML = string;
      }
    }
  }
}

function find() {
  var sum = 0;
  var n;
  for (var i = 1; sum <= 1000; i++) {
    n = i;
    sum += i;
  }
  console.log(n);
  document.getElementById("Bai1").innerHTML = "Số nguyên dương nhỏ nhất là 141";
}

find();

function caclcIndex() {
  var sum = 0;
  var x = document.getElementById("soX").value;
  var n = document.getElementById("soN").value;
  for (var i = 1; i <= n; i++) {
    sum = sum + Math.pow(x, i);
  }
  document.getElementById("tinhTong").innerHTML = sum;
}

function caclFactorial() {
  var giaithua = 1;
  var n = document.getElementById("soGiaiThua").value;
  for (var i = 1; i <= n; i++) {
    giaithua = giaithua * i;
  }
  document.getElementById("kqGiaiThua").innerHTML = giaithua;
}
