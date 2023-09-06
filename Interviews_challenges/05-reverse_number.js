function reverseNumber(n){
  let sign = Math.sign(n)
  let number = n > 0 ? n * 1 : n * -1;
  console.log(number.toString().split('').reverse().join('') * sign);
  return number.toString().split('').reverse().join('') * sign
}

reverseNumber(-52365236);