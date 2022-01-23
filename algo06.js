function truncateString(str, num) {
  
    if (str.length > num){
      
      let trunString = str.slice(0, num) + '...';
      return trunString;
  
    }else{
      return str;
    }
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);