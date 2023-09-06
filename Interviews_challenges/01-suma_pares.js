function sumaPares (n) {
  let sum = 0;
  for(let i = 0; i < n + 1; i+=2){
    sum += i
  }
  console.log(sum);
  return sum;
}

sumaPares(6)