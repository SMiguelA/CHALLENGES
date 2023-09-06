function palindromo(str){
  const flag = str.toLowerCase().split('').filter(i => i !== ' ' && i !== '.')
  const newStr = [...flag].reverse().join('')
  const sameStr = flag.join('');

  console.log(Boolean(newStr === sameStr));
  return Boolean(newStr === sameStr)
}

palindromo('Somos o no somos')