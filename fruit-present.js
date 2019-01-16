const fruits = ['Apple', 'Apricot', 'Avocado', 'banana', 'Blackberry', 'Blueberry', 'Boysenberry', 'Crab apples',
    'Currant', 'Cherry', 'Cherimoya', 'Chico fruit', 'Coconut', 'Cranberry', 'Custard apple', 'Date', 'dragonfruit', 'durian',
    'Elderberry', 'Feijoa', 'Fig', 'Goji berry', 'Gooseberry', 'grape', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry',
    'Jabuticaba', 'Jackfruit', 'Jambul', 'jujube', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
    'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon',
    'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Blood orange', 'Clementine', 'Mandarine',
    'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Prune', 'Pineapple', 'Pluot',
    'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Rambutan', 'Redcurrant', 'Salal berry', 'Salak', 'Salmonberry',
    'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Ugli fruit', 'Yuzu'];

/**
 * Returns if given fruct is presented in the fruits array
 * @param {String} fruit - fruit name
 * @returns {Boolean}
 */
function fruitPresent(fruit) {
    return fruits.some(item => item.toLowerCase() === fruit.toLowerCase());
}

//usage
fruitPresent('Apple');//true
fruitPresent('Miracle fruit');//true
fruitPresent('Banana');//false

/*
It works. But it's not good idea to work with outer variable inside the function. I prefer pure function approach.
*/

/**
 * Returns function which find item in array
 * @param {Array.<String>} fruits - array to search in
 * @returns {Function}
 */
function getFruitPresentFunction(fruits) {
    const obj = fruits.reduce((obj, item) => {
        obj[item.toLowerCase()] = true;
        return obj;
    }, {})
    return function (fruit) {
        return !!obj[fruit.toLowerCase()];
    }
}

/*
We create object because search in hash works faster than in array.
We make currying to do transformation only one time.
*/

//usage
const fruitPresent = getFruitPresentFunction(fruits);
fruitPresent('Apple');//true
fruitPresent('aPPLE');//true
fruitPresent('Miracle fruit');//true
fruitPresent('Tomato');//false
