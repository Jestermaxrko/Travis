
const factorial = (n) => {
    let product = 1;
    for(let i = 1; i <= n; i++){
        product *= i; 
    }
    return product;
  }

module.exports = factorial;