function sumAll(arr) {
    let k = arr.sort(function(a, b){return a - b});
  
  
  
  let x = k[0]
  let y = k[arr.length-1]
  
  let sum = 0
  
  for(let i = x; i <= y; i++){
    sum += i
  }
    return sum;
  }
  
  sumAll([1, 4]);