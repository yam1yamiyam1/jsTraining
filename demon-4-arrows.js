const { totalmem } = require('os');
const { numbers, users, products, orders, students } = require('./data/training-data.js');
const util = require('util');
console.log = (...args) => args.forEach(arg => 
    process.stdout.write(util.inspect(arg, { depth: null, colors: true }) + '\n')
);
// const generateRandomId = () => Math.random();

// const triple = value => value * 3;

// const multiply = (x,y) => x*y;

// const makeProduct = (title, price) => ({title, price})

// const getProductPrice = ({price}) => price;

// const describeProduct = ({name, price}) => `${name} costs ${price}`;

// const isExpensive = ({price}) => price > 100;

// const getStockStatus = ({quantity}) => quantity > 0 ? "in stock" : "out of stock"

// const sumFirstThree = ([a, b, c]) => a + b + c;

// const summarizeOrder = ({id, total, status}) => ({id,status, total, tax: total * 0.08})
//phase 2

const isCompleted = ({status}) => status === "completed";
const completedOrders = orders.filter(isCompleted);
console.log(completedOrders)

const isExpensive = ({price}) => price > 100;
const expensiveProducts = products.filter(isExpensive);
console.log(expensiveProducts)

const isActive = ({isActive}) => isActive;
const activeUsers = users.filter(isActive);
console.log(activeUsers)

const createCategoryBucket = category => ({
    category,
    items: [],
    totalValue: 0
})

const isPriceAbove = minPrice => ({price}) => price > minPrice;

// const toIdMap = arr => reduce(ac)

console.log(products.reduce((acc, p) => {
    acc[p.id] = p;
    return acc;
},{}))

const toIdMap = arr => arr.reduce((acc, a) => {
    acc[a.id] = a;
    return acc
},{})

const categorySummary = {
    weapon: { category: "weapon", items: 2, totalValue: 190 },
    armor: { category: "armor", items: 4, totalValue: 340 }
};


const extra = ({category, items, totalValue}) => 
    `${category}: ${items} ($${totalValue})`
const formatCategoryReport = obj => 
    Object.values(obj).map(extra)

console.log(formatCategoryReport(categorySummary))
