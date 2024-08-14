function fib(n){
  const fibArray = [0,1]
  for(i = 2; i < n; i++){
    const nextFib = fibArray[i - 1] + fibArray[i -2]
    fibArray.push(nextFib)
  }
  return fibArray
}
