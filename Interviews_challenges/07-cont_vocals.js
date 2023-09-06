function contVocals(str){
  if(!str) return null
  let data = str.toLowerCase().split('').filter(abc => abc !== " ")
  let cont = 0;
  for(let i = 0; i < data.length; i++){
    if(/[aeiouáéíóú]/.test(data[i])) cont++;
  }
  console.log(cont);
  return cont;
}

contVocals('la lechuzaui');