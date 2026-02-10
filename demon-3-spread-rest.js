const { numbers, users, products, orders, students } = require('./data/training-data.js');
const util = require('util');
console.log = (...args) => args.forEach(arg => 
    process.stdout.write(util.inspect(arg, { depth: null, colors: true }) + '\n')
);

console.log(users.map((user) => ({
    ...user,
    orderCount: orders.filter(({userId}) => userId === user.id).length
})))
console.log(orders.map((order) => ({
    ...order,
    customerName: users.find(({id}) => id === order.userId).name
})))

console.log(orders.map((order) => ({
    ...order,
    productName: products.find(({id}) => id === order.productId).name
})))

console.log(users.map((user) => ({
    ...user,
    totalSpent: orders.filter(({userId}) => userId === user.id)
    .reduce((sumTotal, {total}) => sumTotal + total, 0)
})))

console.log(products.map((product) => ({
    ...product,
    timesOrdered: orders.filter(({productId}) => productId === product.id).length
})))

console.log(users.map((user) => ({
    ...user,
    orderHistory: orders.filter(({userId}) => userId === user.id)
    .map(o => `{id: ${o.id}, total: ${o.total}, status: "${o.status}"}`)
})))

console.log(orders.map((order) => ({
    ...order,
    customerName: users.find(({id}) => id === order.userId).name,
    productName: products.find(({id}) => id === order.productId).name
})))

const getQuantityXTimes = (targetId) =>{
    const times = orders.filter(({productId}) => productId === targetId)
    .reduce((totalQuantity, {quantity}) => totalQuantity + quantity, 0)
    
}
console.log(products.map((product) => ({
    ...product,
    totalRevenue: orders.filter(({productId}) => productId === product.id)
    .reduce((totalQuantity, {quantity}) => totalQuantity + quantity, 0) * product.price
})))

console.log(users.map((user) => ({
    ...user,
    pendingOrders: orders.filter(({status, userId}) => status === "pending" && userId === user.id).length
})))

console.log(users.map((user) => ({
    ...user,
    hasCompletedOrders: orders.some(({status, userId}) => 
        status === "completed" && userId === user.id)
})))

const adminUsers = users.filter(({role}) => role === "admin")
console.log(adminUsers.map((user)=> ({
    ...user,
    avgOrderTotal: orders.filter(({userId}) => userId === user.id)
    .reduce((sum, {total}) => sum + total, 0)/orders
    .filter(({userId}) => userId === user.id).length || "no orders"
})))

const getUserName = (targetUserId) => {
    return users.find(({id}) => id === targetUserId).name
}
console.log(products.map((product) => ({
    ...product,
    buyers: orders.filter(({productId}) => productId === product.id)
        .map(o => getUserName(o.userId))
})))


console.log(users.map((user) => ({
    ...user,
    maxOrder: orders.filter(({userId}) => userId === user.id)
    .reduce((maxOrder, {total}) => maxOrder > total? maxOrder : total, 0)
})))

const inStockProducts = products.filter(({inStock}) => inStock)
console.log(inStockProducts.map((product) => ({
    ...product,
    pendingOrderCount: orders.filter(({status, productId}) => 
    status === "pending" && productId === product.id).length
})))

console.log(orders.map((order) => ({
    ...order,
    productCategory: products.find(({id}) => id === order.productId).category
})))

const getUniqueProducts = (targetId) => {
    const unique = [...new Set(orders.filter(({userId}) => userId === targetId))]
    return unique;
}
console.log(users.map((user) => ({
    ...user,
    uniqueProducts: getUniqueProducts(user.id).length
})))

console.log(products.map((product) => ({
    ...product,
    isPopular: orders.filter(({productId}) => productId === product.id).length >= 2
})))

const completedOrders = orders.filter(({status}) => status === "completed")
console.log(completedOrders.map((order) => ({
    ...order,
    unitPrice: products.find(({id}) => id === order.productId).price
})))

console.log(users.map((user) => ({
    ...user,
    avgQuantity: orders.filter(({userId}) => userId === user.id)
    .reduce((sum, {quantity})=> sum + quantity, 0) / 
    orders.filter(({userId}) => userId === user.id).length || "no orders"
})))

const weaponProducts = products.filter(({category}) => category === "weapon")
console.log(weaponProducts.map((product) => ({
    ...product,
    totalOrdered: orders.filter(({productId}) => productId === product.id)
    .reduce((sum, {quantity}) => sum + quantity, 0)
})))

console.log(users.map((user) => ({
    ...user,
    profile: {
        age: user.age,
        orders: orders.filter(({userId}) => userId === user.id)
    }
})))

console.log(products.map((product) => {
    const productFilterById = orders.filter(({productId}) => productId === product.id)
    return {
    ...product,
    stats: {
        orderCount: productFilterById.reduce((sum, {quantity}) => sum + quantity, 0),
        revenue: productFilterById.reduce((sum, {total}) => sum + total, 0)
    }
}}))

console.log(users.map((user) => ({
    account: {
        id: user.id, 
        name: 
        user.name},
    details: {
        age: user.age, 
        role: user.role, 
        salary: user.salary}
})))

console.log(orders.map((order) => {
    const user = users.find(({id}) => id === order.userId)
    const product =  products.find(({id}) => id === order.productId)
    return {
        ...order,
        customer: {id: user.id, name: user.name},
        product: {id: product.id, name: product.name, price: product.price}
    }
}))

console.log(products.reduce((categoryType, {category, name}) => ({
    ...categoryType,
    [category]: [...(categoryType[category] || []), name] 
}),{}))

console.log(users.map((user) => {
    const orderUser = orders.filter(({userId}) => userId === user.id)
    return {
        ...user,
        orderHistory: orderUser.map(({id, productId, quantity}) => {
            const productOrder = products.find(({id}) => id === productId)
            return {
                orderId: id,
                product: {
                    name: productOrder.name,
                    price: productOrder.price,
                },
                quantity: quantity

            }})
}}))


const activeUsers = users.filter(({isActive}) => isActive).map(({name}) => name)
const inactiveUsers = users.filter(({isActive}) => !isActive).map(({name}) => name)
const noStockProducts = products.filter(({inStock}) => !inStock).map(({name}) => name)
const isStockProducts = inStockProducts.map(({name}) => name)
console.log(activeUsers)
console.log(inactiveUsers)
console.log(isStockProducts)
console.log(noStockProducts)

const ex27 = {
    users: {
        active: activeUsers,
        inactive: inactiveUsers
    },
    products: {
        inStock: isStockProducts,
        outOfStock: noStockProducts
    }
}
console.log(ex27)


console.log(students.map((student) => {
    const ave = student.grades.reduce((sum, x) => sum + x, 0)/student.grades.length
    return {
        ...student,
        performance: {
            grades: student.grades, 
            average: ave,
            attendance: student.attendance,
            status: ave > 85 ? "excellent" : "great"
        }
    }
}))

console.log(orders.map((order) => {
    const product = products.find(({id}) => id === order.productId)
    return {
        ...order,
        item: `${product.name} x ${order.quantity}, Total: ${order.total}`,
        fulfillment: {
            status: order.status,
            estimateDelivery: Date.now(),
            tracking: `TRK-${order.id}`
    }}
}))

console.log(products.map((product) => ({
    id: product.id,
    name: product.name,
    info: {
        price: product.price,
        category: product.category
    },
    inventory: {
        inStock: product.inStock,
        quantity: product.quantity,
        timesOrdered: orders.filter(({productId}) => productId === product.id).length
    }
})))

//41
console.log(users.map((user) => ({
    ...user,
    ...(user.salary > 50000 && {verified: true})
})))

//45 
const count = orders.reduce((productCount, {productId: id}) => {
        productCount[id] = (productCount[id] || 0) + 1;
        return productCount;
},{})
console.log(products.map((product) => ({
    ...product,
    ...(count[product.id] >= 2 && {
        featured: true,
        badge: "bestseller"
    })
})))

//46
const totalSpent = orders.reduce((userTotal, {userId, total}) => {
        userTotal[userId] = (userTotal[userId] || 0) + total;
        return userTotal;
},{})
console.log(users.map((user) => ({
    ...user,
    ...(totalSpent[user.id] > 300 && {vip: true})
})))
console.log(products.reduce((productCatalog, {id, name}) => {
        productCatalog[id] = (productCatalog[id] || {})
        return productCatalog;
},{}))

const productCatalog = products.reduce((acc, product) => {
    acc[product.id] = product; 
    return acc;
}, {}); 


console.log(productCatalog[2])


console.log(products.reduce((acc, {category: targetCategory})=> {
    acc[targetCategory] = (acc[targetCategory] || {
        products: products.filter(({category}) => category === targetCategory).map(({name}) => name),
        totalRevenue: "test",
        unitsSold: "test",
        customers: "test",
        avgPrice: "test",
        performance: "test"
    })
    return acc;
},{}))

console.log(products.reduce((acc, p) => {
    acc[p.id] = p; // Store the whole product object under its ID
    return acc;
}, {}))