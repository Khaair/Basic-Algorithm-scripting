function titleCase(str) {

    var arr = str.split(' ');
  
    var newStr = '';
  
    for (var i = 0; i < arr.length; i++) {
      var lower = arr[i].toLowerCase();
      newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
    }
  
    return newStr.trim();
  }
  
  titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");