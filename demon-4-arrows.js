const { numbers, users, products, orders, students } = require('./data/training-data.js');
const util = require('util');
console.log = (...args) => args.forEach(arg => 
    process.stdout.write(util.inspect(arg, { depth: null, colors: true }) + '\n')
);
console.clear()

const a = ({name}) => name


const isHigher = minPrice => ({price}) => price > minPrice
console.log(products.filter((isHigher(10))))