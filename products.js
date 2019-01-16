const productCart = [
    { productName: 'iphone-x', qty: 10, price: 1000 },
    { productName: 'macbook pro', qty: 200, price: 2000 },
    { productName: 'iwatch', qty: 100, price: 550 },
    { productName: 'macbook air', qty: 100, price: 1000 },
    { productName: 'iphone 8', qty: 300, price: 700 },
    { productName: 'iphone 7', qty: 100, price: 550 },
    { productName: 'ipad Retina', qty: 20, price: 1000 },
    { productName: 'ipad', qty: 10, price: 700 },
    { productName: 'Magic Mouse', qty: 50, price: 300 },
    { productName: 'Magic Trackpad', qty: 75, price: 200 }
];
/**
 * Returns total cost of all products which amount is bigger than given
 * @param {Number} n - maximal quantity of product which will not be added to sum
 * @returns {Number}
 */
function costOfProductForQtyGreaterThan(n) {
    return productCart.reduce((sum, item) => {
        return item.qty > n ? sum + item.price * item.qty : sum;
    }, 0);
}

//usage
costOfProductForQtyGreaterThan(299);//210000

/**
 * Returns cost of all instances of given product
 * @param {String} productName
 * @returns {Number}
 */
function costOfProduct(productName) {
    const item = productCart.find(item => item.productName === productName);
    if (item) {
        return item.price * item.qty;
    }
}

//usage
costOfProduct('ipad');//7000
costOfProduct('Magic Trackpad');//15000