function frankenSplice(arr1, arr2, n) {
  
  
    let arrResults = [...arr2];
  
   
    arrResults.splice(n, 0, ...arr1);
    
    return arrResults;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);