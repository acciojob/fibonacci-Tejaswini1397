function fibonacci(num) {
   if (num < 0 || num > 50) {
        return "Invalid input. Please provide a positive integer within the range [0, 50].";
    }

    let a = 0, b = 1, temp;

    for (let i = 2; i <= num; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return a;
}

module.exports = fibonacci;
