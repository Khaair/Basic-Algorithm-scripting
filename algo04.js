function bouncer(arr) {

    var check = arr.filter(function(i) {
      return Boolean(i);
    });
  
    return check;
  }
  
  bouncer([7, "ate", "", false, 9]);