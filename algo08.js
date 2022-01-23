function largestOfFour(arr) {


    let resultsArray = [];
    let largestNumber;
  
    //loop through array of arrays
    for (let i = 0; i < arr.length; i++){
  
  
      //loop through sub array
      for (let j = 0; j < arr[i].length; j++){
        
        //Set number holder to first value
        if (j === 0){
          largestNumber = arr[i][j];
          resultsArray[i] = largestNumber;
  
        //Set number holder to next value if larger than currently held value
        }else if (arr[i][j] > largestNumber){
          largestNumber = arr[i][j];
          resultsArray[i] = largestNumber;
        }else{} //Do nothing
      }
    }
  
    return resultsArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);