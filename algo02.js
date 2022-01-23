function findLongestWordLength(str) {

  let arr = str.split(" ")

let narr = []

for(let i = 0; i <= arr.length-1;i++){
  
  narr.push(arr[i].length)
  
//   console.log(arr[i].length)
}

var max = Math.max(...narr);
  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");