function repeatStringNumTimes(str, num) {
  if(num < 0) return ''

  let z = ''

  for(let i = 1; i <= num;i++){
    z+=str
  }
  let x = z.split().join('')
  
  return x;
}

console.log(repeatStringNumTimes("abc", 3))