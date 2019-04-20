// 這個函式會回傳兩個數字相加
function add(a, b) {
  return a + b;
}

// 這個函式會回傳兩個數字相減
// 注意參數的部份是不是有少什麼，補上需要的東西
function sub(a,b) {
  return a - b;
}

// 實作 mul 及 div 兩個函式
function mul(a,b){
  return a * b;
}

function div(a,b){
  return a / b;
}
module.exports = {add, sub, mul, div};
