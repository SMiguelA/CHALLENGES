function duplicated(arr){
  const set = new Set(arr)
  console.log([...set]);
  return [...set];
}

duplicated([1,5,6,5,9,9,1,3,4]);