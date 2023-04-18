var N = parseInt(prompt('Enter a number'));
console.log(N);
for (var i = 1; i < N; i++) {
    if (N % i == 0)
        console.log(i);
}
