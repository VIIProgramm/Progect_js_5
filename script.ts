let N = parseInt(prompt('Enter a number') as string)
console.log(N)
for (let i = 1; i<N; i++){
    if(N%i==0) console.log(i)
}
