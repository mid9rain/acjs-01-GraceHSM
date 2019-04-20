// 定義一個變數叫 numbers，是 5 ~ 15 的奇數陣列
let numbers = [];
let n = 0;
for(let i = 5 ; i <= 15 ; i+=2 ){
    numbers[n] = i;
    n ++;
}


// 這個函式接收一個陣列，回傳一個將原陣列中每個數字加 1 的陣列
function eachAddOne(list) {
  for(let i = 0 ; i < list.length ; i++){
    list[i] += 1;
  }
  return list;
}

// 這個函式接收一個陣列，回傳一個只包含原陣列中偶數部份的陣列
function onlyEven(list) {
  let result = [];
  let j = 0;
  for(let i = 0 ; i < list.length ; i++){
    if(list[i] % 2 === 0){
      result[j] = list[i];
      j++;
    }
  }
  return result;
}

module.exports = {numbers, eachAddOne, onlyEven}
