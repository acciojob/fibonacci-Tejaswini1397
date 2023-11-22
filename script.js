function fibonacci(num) {
// your code here
	 const fibonacciArray = [0, 1];

    for (let i = 2; i <= num; i++) {
        const nextFibonacci = fibonacciArray[i - 1] + fibonacciArray[i - 2];
        fibonacciArray.push(nextFibonacci);
    }

    return fibonacciArray;
	
}

module.exports = fibonacci;
