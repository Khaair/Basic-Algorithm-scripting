function getIndexToIns(arr, num) {

    if(arr.indexOf(num) === -1) {
      arr.push(num);
    }
  
    var newArr = arr;
  
    function sortNumber(a,b) {
      return a - b;
    }
  
    newArr.sort(sortNumber);
  
    return newArr.indexOf(num);
  
  }
  
  getIndexToIns([3, 10, 5], 3);