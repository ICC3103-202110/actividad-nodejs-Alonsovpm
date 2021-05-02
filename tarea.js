function fibonacci(n) {
    if (n <= 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
 
var n = prompt("Ingresa un numero: ");
console.log("F("+n+") = "+fibonacci(n));