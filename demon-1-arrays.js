const { numbers, users, products, orders, students } = require('./data/training-data.js');

console.log(users.map(({name}) => name))
console.log(users.map(({age}) => age))
console.log(products.map(({price}) => price))
console.log(users.filter(({isActive}) => isActive))
console.log(products.filter(({inStock}) => inStock))
console.log(orders.filter(({status}) => status === "completed"))
console.log(users.find(({id}) => id === 5))
console.log(users.find(({role}) => role === "admin"))
console.log(products.find(({price}) => price > 100))
console.log(numbers.reduce((sum, n) => sum + n, 0))
console.log(users.reduce((sum ,{age}) => sum + age, 0))
console.log(products.reduce((sum, {price}) => sum + price, 0))
console.log(users.reduce((count, {isActive}) => isActive ? count + 1 : count , 0))
console.log(products.reduce((count, {inStock}) => inStock ? count + 1 : count, 0))
console.log(numbers.reduce((max, x) => max > x ? max : x))
console.log(products.reduce((min, {price}) => min > price ? price : min, Infinity))
console.log(users.some(({age}) => age > 35))
console.log(users.every(({salary}) => salary > 30000))
console.log(products.some(({inStock}) => inStock === false))
console.log(students.every(({attendance}) => attendance > 70))
console.log(users.filter(({age}) => age > 30).map(({name}) => name))
console.log(products.filter(({price}) => price < 100).map(({price}) => price))
console.log(users.filter(({isActive}) => isActive === false).map(({name}) => name))
console.log(products.filter(({inStock}) => inStock === false).map(({category}) => category))
console.log(users.find(({salary}) => salary > 50000))
console.log(products.find(({category}) => category === "weapon"))
console.log(users.filter(({age}) => age < 28).map(({role})=> role))
console.log(orders.filter(({total})=> total > 150).map(({status})=>status))
console.log(users.filter(({isActive})=> isActive).reduce((sum, {salary}) => sum + salary,0))
console.log(products.filter(({inStock}) => inStock).reduce((sum, {price})=> sum + price, 0))
console.log(users.reduce((count, {role}) => role === "admin"? count +1: count, 0))
console.log(orders.filter(({status}) => status === "pending").length)
console.log(users.reduce((max, {salary}) => max > salary ? max : salary))
console.log(products.reduce((min, {quantity}) => min > quantity? quantity: min, Infinity))
console.log(students.filter(({attendance}) => attendance > 90).map(({name}) => name))
console.log(users.some(({salary}) => salary < 40000))
console.log(products.every(({quantity}) => quantity < 100))
console.log(users.map(({name, age}) => `${name} (${age})`))
console.log(products.map(({name, price}) => `${name}: $${price}`))
console.log(users.reduce((sum, {age}) => sum + age, 0)/users.length)
console.log(users.filter(({isActive}) => isActive).map(({name}) => name))
console.log(products.filter(({category}) => category === "armor").map(({price})=> price))
console.log(users.filter(({role}) => role === "admin").map(({salary}) => salary))
console.log(users.filter(({age}) => age > 30).reduce((sum, {salary}) => sum + salary, 0))
console.log(products.filter(({category}) => category === "weapon").reduce((sum, {price})=>sum+price,0))
console.log(users.filter(({salary})=>salary>45000).length)
console.log(users.filter(({role}) => role !== "admin" & role !== "moderator").map(({name})=> name))
console.log(products.filter(({price}) => price < 80).map(({name})=>name))
console.log(users.filter(({role, isActive}) => role === "admin" & isActive === true).map(({name}) => name))
console.log(orders.filter(({total}) => total > 100).map(({status})=> status))
console.log(users.filter(({isActive})=>isActive).reduce((sum, {salary})=> sum + salary, 0)/users.filter(({isActive})=>isActive).length)
console.log(users.filter(({isActive})=>isActive === false).map(({name})=>name.toUpperCase()))
console.log(products.map(({price})=>price*2))
console.log(users.map(({age})=>age).filter((x)=>x>25))
console.log(products.filter(({inStock})=>inStock).map(({name})=>name))
console.log(numbers.filter((x)=>x % 2 === 0))
console.log(users.filter(({salary})=>salary>48000).map(({id})=>id))
console.log(products.filter(({inStock})=>inStock).reduce((sum,{quantity})=>sum + quantity,0))
console.log(users.map(({name})=> name).slice(0,3))
console.log(users.filter(({isActive})=>isActive).map(({name, role})=> {
    return {
        name,
        role
    }
}))
console.log(products.filter(({inStock})=>inStock).map(({price, ...product})=> {
    return {
        ...product,
        price: price * 1.2
    }
}))
console.log(orders.filter(({status})=>status ==="completed").reduce((sum,{total}) => sum + total,0))
console.log(users.filter(({age})=>age > 25).sort((a,b) => a.age - b.age).map(({name})=>name))
console.log(products.filter(({price})=>price < 100).map(({price, ...rest})=>{
    return {
        ...rest,
        price: price * 2
    }
}))
console.log(products.reduce((sum, {price, quantity}) => sum + (price * quantity),0))
console.log(students.map(({grades})=>grades.reduce((sum, x)=> sum +x,0)/grades.length))
console.log(users.reduce((roleCount, {role}) =>{
    if (!roleCount[role]){
        roleCount[role] = 0
    }
    roleCount[role]++;
    return roleCount;
},{}))

console.log(products.reduce((categoryCount, {category}) =>{
    if (!categoryCount[category]){
        categoryCount[category] = 0;
    }
    categoryCount[category]++;
    return categoryCount
},{}))

console.log(users.reduce((oldest, user) => {
    return oldest.age > user.age ? oldest : user
}, users[0]).name)

console.log(products.reduce((max, product) => {
    return max.price > product.price ? max : product
},products[0]).name)

console.log(users.filter(({salary}) => salary > users.reduce((sum, {salary})=>sum + salary, 0)/users.length))

console.log(products.filter(({price}) => price > products.reduce((sum, {price}) => sum + price, 0)/products.length))

console.log(orders.filter(({status}) => status === "completed").reduce((sum, {total}) => sum + total,0))

console.log(orders.reduce((orderCount, {userId}) => {
    if (!orderCount[userId]){
        orderCount[userId] = 0;
    }
    orderCount[userId]++;
    return orderCount;
},{}))

const userOrders = orders.reduce((ordersById, { userId, total }) => {
    const existing = ordersById.find((u) => u.userId === userId);
    if (existing) {
        existing.total += total;
    } else {
        ordersById.push({ userId: userId, total: total });
    }
    return ordersById;
}, []).sort((a,b) => b.total - a.total);
console.log(users.find(({id}) => id === userOrders[0].userId).name)

const unique = [...new Set(products.map(({category}) => category))]
console.log(unique)

const pendingOrders = orders.filter(({status}) => status === "pending").map(({userId}) => userId)
console.log(users.filter(({id}) => pendingOrders.includes(id)))

console.log(products.filter(({category}) => category === "armor")
.reduce((total, {price, quantity}) => total + (price * quantity), 0))

console.log(products.sort((a, b) => a.quantity - b.quantity).slice(0,3))

console.log(users.filter(({salary}) => salary > 45000)
.map((user) => {
    return {
        ...user,
        bonus: parseInt(user.salary *0.10)
    }
}))

console.log(products.filter(({category}) => category === "weapon")
.map((product) => {
    return {
        ...product,
        price: parseInt(product.price*1.15),
        featured: true
    }
}))

console.log(users.map((user) => {
    return {
        ...user,
        isPremium: user.salary > 50000
    }
}).filter(({isPremium})=> isPremium)
.map(({name})=> name))

const ordersUser1 = orders.filter(({userId})=> userId === 1)
.map(({productId, quantity}) => {
    const product = products.find(({id}) => id === productId)
    return `${product.name} x ${quantity}`
})
console.log(ordersUser1)

console.log(orders.filter(({status}) => status === "completed").length / orders.length * 100)

console.log(products.filter(({quantity}) => quantity < 3).map(({name, quantity}) => {
    return {
        name,
        quantity
    }
}))

const getAverage = (arr) => {
    return arr.reduce((sum, x) => sum + x)/arr.length
}
console.log(students.sort((a, b) => getAverage(b.grades) - getAverage(a.grades))
.map((student, index) => {
    return {
        ...student,
        rank: index + 1
    }
}))

console.log(users.reduce((salaryByDept, {role, salary}) => {
    const existing = salaryByDept.find((u) => u.department === role);
    if (existing) {
        existing.salary += salary;
    } else {
        salaryByDept.push({ department: role, salary: salary });
    }
    return salaryByDept;
}, []))

console.log(products.reduce((byCategory, {category, quantity, price}) => {
    const existing = byCategory.find((u) => u.category === category);
    const sumItem = quantity * price;
    if (existing) {
        existing.sum += sumItem;
    } else {
        byCategory.push({category, sum: sumItem});
    }
    return byCategory;
}, []))

console.log(orders.map(({total, userId})=>{
    return {
        userId,
        total
    }
}))

console.log(orders.reduce((byUserId, {userId, total}) => {
    const existing = byUserId.find((u) => u.userId === userId);
    const findUserName = users.find((a) => a.id === userId).name
    if (existing) {
        existing.orderCount++;
        existing.totalSpent += total;
    } else {
        byUserId.push({userId, name: findUserName, orderCount: 1, totalSpent: total});
    }
    return byUserId;
}, []))

console.log(products.filter(({quantity, inStock}) => quantity < 5 || inStock === false).map(({name}) => name))

console.log(students.map(({grades}) => getAverage(grades))
.filter((x) => x > 80).length/students.length*100)

console.log(products.filter(({inStock, quantity}) => quantity > 5 & inStock).sort((a,b) => a.price - b.price))

console.log(users.filter(({isActive}) => isActive)
.map(({name, role, salary}) => {
    return `${name} - ${role} ($${salary})`
}))

console.log(orders.reduce((orderById, {status}, _, arr) => {
    orderById[status] = (orderById[status] || 0) + 1;
    if (_ === arr.length - 1) {
        for (let key in orderById) {
            orderById[key] = (orderById[key] / arr.length) * 100;
        }
    }
    return orderById;
}, {}))

console.log(products.filter(({price}) => (price*0.4) > 50 )
.map(({name, price}) => {
    return {
        name,
        margin: price * 0.4
    }
}))

console.log(orders.reduce((sum, {total}) => sum + total, 0)*0.9)

console.log(products.filter(({category, id}) => 
    id !== 1 &
    category === products.find(({id}) => id === 1).category)
    .sort((a,b) => b.price - a.price))

console.log(users.filter(({role}) => role === "admin")
.map((user) => {
    return {
        ...user,
        salary: user.salary * 1.02
    }
}).filter(({salary}) => salary > 52000).map((user) => {
    return {
        ...user,
        salary: user.salary + 5000
    }
}).sort((a,b) => b.price - a.price).map(({name, salary}) => {
    return `${name}: $${salary}`
}))