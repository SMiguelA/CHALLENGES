function greaterNumberArr(arr){
  let greaterNumber = arr[0];
  
  if(!arr.length) return null
  
  for(let i = 0; i<arr.length; i++){
    if(arr[i] > greaterNumber) greaterNumber = arr[i]
  }

  console.log(greaterNumber);
  return greaterNumber;
}

greaterNumberArr([2,5,1,50,80,4]);