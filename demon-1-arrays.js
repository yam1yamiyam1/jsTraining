const { numbers, users, products, orders, students } = require('./data/training-data.js');

console.log(numbers.map((n) => n * 2))
console.log(numbers.map((n) => n * 3))
console.log(numbers.map((n) => n ** 2))
console.log(numbers.map((n) => n ** 3))
console.log(numbers.map((n) => n + 100))
console.log(numbers.map((n) => n - 5))
console.log(numbers.map((n, index) => n * index))
console.log(numbers.map((n) => -n))
console.log(numbers.map((n) => String(n)))
console.log(numbers.map((n) => ({value: n, doubled: n * 2})))
console.log(users.map((user) => user.name))
console.log(users.map((user) => user.age))
console.log(users.map((user) => user.role))
console.log(users.map((user) => user.salary))
console.log(users.map((user) => user.id))
console.log(users.map((user) => String(user.name + " (" + user.age + ")")))
console.log(users.map((user) => String(user.name + " - " + user.role )))
console.log(users.map((user) => {
    return {
        ...user,
        age: user.age + 5
    }
}))
console.log(users.map((user) => {
    return {
        ...user,
        salary: parseInt(user.salary * 1.1)
    }
}))
console.log((users.map((user) => {
    return {
        ...user,
        name: user.name.toUpperCase()
    }
})))
console.log((users.map((user) => {
    return {
        id: user.id,
        name: user.name
    }
})))
console.log((users.map((user) => {
    return {
        ...user,
        isAdult: user.age >= 18
    }
})))
console.log((users.map((user) => {
    return {
        ...user,
        salaryGrade: user.salary >= 50000 ? "high" : 
        user.salary >= 30000 ? "medium" : "low"
    }
})))
console.log((users.map((user) => String(user.role + ": " + user.name + " $(" + user.salary + ")"))))
console.log((products.map((product) => product.name)))
console.log((products.map((product) => product.price)))
console.log((products.map((product) => product.category)))
console.log((products.map((product) => {
    return {
        ...product,
        price: product.price * 1.2
    }
})))
console.log((products.map((product) => {
    return {
        ...product,
        price: product.price - 10
    }
})))
console.log((products.map((product) => {
    return {
        ...product,
        priceWithTax: parseInt(product.price * 1.15)
    }
})))
console.log((products.map((product) => String(product.name + " - $" + product.price))))
console.log((products.map((product) => String(product.name + " (" + product.category + ")"))))
console.log((products.map((product) => {
    return {
        ...product,
        name: product.name.toUpperCase()
    }
})))
console.log((products.map((product) => {
    return {
        ...product,
        isExpensive: product.price > 100
    }
})))
console.log((products.map((product) => {
    return {
        ...product,
        stockStatus: product.inStock ? "In stock" : "Out of stock"
    }
})))
console.log((products.map((product) => product.price * product.quantity)))
console.log((products.map((product) => {
    return {
        name: product.name,
        price: product.price,
        category: product.category
    }
})))
console.log((products.map((product) => {
    return {
        ...product,
        quantity: product.quantity + 10
    }
})))
console.log((products.map((product) => String(product.name + ": $" + product.price + " (Qty: " + product.quantity + ")" ))))

console.log((numbers.filter((n) => n % 2 === 0)))
console.log((numbers.filter((n) => n % 2 !== 0)))
console.log((numbers.filter((n) => n > 10)))
console.log((numbers.filter((n) => n < 15)))
console.log((numbers.filter((n) => 5 <= n && n <= 15)))
console.log((numbers.filter((n) => n % 3 === 0)))
console.log((numbers.filter((n) => n % 5 === 0)))
console.log((numbers.filter((n) => n > 5 && n < 15)))
console.log((numbers.filter((n) => n < 5 || n > 15)))
function isPrime(n) {
    if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
};
console.log((numbers.filter((n) => isPrime(n))))
console.log((users.filter((user) => user.isActive === true)))
console.log((users.filter((user) => user.isActive === false)))
console.log((users.filter((user) => user.age > 30)))
console.log((users.filter((user) => user.age < 30)))
console.log((users.filter((user) => 25 <= user.age && user.age <= 35)))
console.log((users.filter((user) => user.role === "admin" )))
console.log((users.filter((user) => user.role === "moderator" )))
console.log((users.filter((user) => user.salary > 45000 )))
console.log((users.filter((user) => user.salary < 45000 )))
console.log((users.filter((user) => user.isActive === true && user.role === "admin" )))
console.log((users.filter((user) => user.isActive === false && user.role !== "admin" )))
console.log((users.filter((user) => user.isActive === true && user.age > 28 )))
console.log((users.filter((user) => user.salary > 50000 || user.role === "admin" )))
console.log((users.filter((user) => user.name.startsWith("A") || user.name.startsWith("E") 
    || user.name.startsWith("I") || user.name.startsWith("O") || user.name.startsWith("E") )))
console.log((users.filter((user) => user.name.length > 5 )))
console.log((users.filter((user) => user.isActive === true && user.salary > 40000 && user.salary < 50000 )))
console.log((users.filter((user) => user.role === "admin" || user.role === "moderator" )))
console.log((users.filter((user) => user.role === "user" && user.age > 25 )))
console.log((users.filter((user) => user.isActive === false && user.salary < 40000 )))
console.log((users.filter((user) => user.age % 5 === 0)))
console.log((products.filter((product) => product.inStock === true)))
console.log((products.filter((product) => product.inStock === false)))
console.log((products.filter((product) => product.price < 100)))
console.log((products.filter((product) => product.price > 100)))
console.log((products.filter((product) => product.category === "weapon" )))
console.log((products.filter((product) => product.category === "armor" )))
console.log((products.filter((product) => product.quantity > 3 )))
console.log((products.filter((product) => product.inStock === true && product.price < 100 )))
console.log((products.filter((product) => product.inStock === false && product.price > 50 )))
console.log((products.filter((product) => product.price > 50 && product.price < 150 )))
console.log((products.filter((product) => product.category === "consumable" || product.category === "accessory" )))
console.log((products.filter((product) => product.inStock === true && (product.category === "weapon" || product.category === "armor" ))))
console.log((products.filter((product) => product.quantity === 0)))
console.log((products.filter((product) => product.name.includes('o') || product.name.includes('a') )))
console.log((orders.filter((order) => order.status === "completed" )))
console.log((orders.filter((order) => order.status === "pending" )))
console.log((orders.filter((order) => order.total > 150)))
console.log((orders.filter((order) => order.userId === 1)))
console.log((orders.filter((order) => order.status === "cancelled" )))

console.log((numbers.find((n) => n > 15 )))
console.log((numbers.find((n) => n % 2 === 0 )))
console.log((numbers.find((n) => n % 7 === 0 )))
console.log((numbers.find((n) => n > 8 && n < 12 )))
console.log((numbers.find((n) => isPrime(n))))
console.log((users.find((user) => user.id === 5 )))
console.log((users.find((user) => user.name === "Charlie" )))
console.log((users.find((user) => user.isActive === false )))
console.log((users.find((user) => user.role === "admin" )))
console.log((users.find((user) => user.age > 35 )))
console.log((users.find((user) => user.salary === 50000)))
console.log((users.find((user) => user.salary > 50000)))
console.log((users.find((user) => user.role === "moderator" )))
console.log((users.find((user) => user.name.startsWith("G") )))
console.log((users.find((user) => user.isActive === true && user.role === "user" )))
console.log((products.find((product) => product.id === 7 )))
console.log((products.find((product) => product.inStock === false )))
console.log((products.find((product) => product.category === "weapon" )))
console.log((orders.find((order) => order.status === "shipped" )))
console.log((orders.find((order) => order.total > 200 )))

console.log((numbers.reduce((sum, n) => sum + n, 0)))
console.log((numbers.reduce((max, n) => n > max ? n : max)))
console.log((numbers.reduce((min, n) => n > min ? min : n)))
console.log((numbers.reduce((sum, n) => sum + n)/numbers.length))
console.log((numbers.reduce(((even, n) => n % 2 === 0 ? even + 1 : even),0)))
console.log((users.reduce((sum, user) => sum + user.age , 0)))
console.log((users.reduce((sum, user) => sum + user.age , 0))/users.length)
console.log((users.reduce((sum, user) => sum + user.salary , 0)))
console.log((users.reduce((max, user) => user.salary > max ? user.salary : max, 0)))
console.log((users.reduce((min, user) => user.salary > min ? min : user.salary)))
console.log((users.reduce((active, user) => user.isActive === true ? active + 1 : active, 0)))
console.log((users.reduce((admin, user) => user.role === "admin" ? admin + 1 : admin, 0)))
console.log((users.reduce((active_totalSalary, user) => user.isActive === true ? active_totalSalary + user.salary : active_totalSalary, 0)))
console.log((users.reduce((role, user) => {
            if (user.role === "admin") {
                return {
                    ...role,
                    admin: role.admin + 1
                }
            } else if (user.role === "moderator") {
                return {
                    ...role,
                    moderator: role.moderator + 1
                }
            } else {
                return {
                    ...role,
                    user: role.user + 1
                }
            }
        },
        {
            admin: 0,
            moderator: 0,
            user: 0
        }
    )))
console.log(users.reduce((active_totalSalary, user) => user.isActive === true ? active_totalSalary + user.salary : active_totalSalary, 0)/
    users.reduce((active, user) => user.isActive === true ? active + 1 : active, 0))
console.log(products.reduce((sum, product) => sum + product.price, 0))
console.log(products.reduce((total, product) => total + (product.price * product.quantity), 0))
console.log(products.reduce((inStock, product) => product.inStock === true ? inStock + 1 : inStock, 0))
console.log(products.reduce((productCategory, product) => {
        if (product.category === "weapon") {
            return {
                ...productCategory,
                weapon: productCategory.weapon + 1
            }
        } else if (product.category === "armor") {
            return {
                ...productCategory,
                armor: productCategory.armor + 1
            }
        } else if (product.category === "consumable") {
            return {
                ...productCategory,
                consumable: productCategory.consumable + 1
            }
        } else {
            return {
                ...productCategory,
                accessory: productCategory.accessory + 1
            }
        }
}, {
    weapon: 0,
    armor: 0,
    consumable: 0,
    accessory: 0
}))
console.log(products.reduce((max, product) => product.price > max ? product.price : max, 0))
console.log(products.reduce((min, product) => product.price > min ? min : product.price))
console.log(products.reduce((sum, product) => sum + product.price, 0)/products.length)
console.log(products.reduce((sum, product) => product.inStock === true ? sum + product.price : sum, 0))
console.log(products.reduce((armor_totalValue, product) => product.category === "armor" ? armor_totalValue + product.price * product.quantity : armor_totalValue, 0))
console.log(products.reduce((quantity, product) => product.quantity > 0 ? quantity + 1 : quantity, 0))
console.log(orders.reduce((sum, order) => sum + order.total, 0))
console.log(orders.reduce((status, order) => {
        if (order.status === "completed") {
            return {
                ...status,
                completed: status.completed + 1
            }
        } else if (order.status === "pending") {
            return {
                ...status,
                pending: status.pending + 1
            }
        } else if (order.status === "shipped") {
            return {
                ...status,
                shipped: status.shipped + 1
            }
        } else {
            return {
                ...status,
                cancelled: status.cancelled + 1
            }
        }
    },
    {
        completed: 0,
        pending: 0,
        shipped: 0,
        cancelled: 0
    }
))
console.log(orders.reduce((sum, order) => sum + order.total, 0)/orders.length)
console.log(orders.reduce((max, order) => order.total > max ? order.total : max, 0))
console.log(orders.reduce((sum_Completed, order) => order.status === "completed" ? sum_Completed + order.total : sum_Completed, 0))

console.log(users.filter((user) => user.isActive === true).map((user) => user.name))
console.log(users.filter((user) => user.age > 30).map((user) => user.salary).reduce((sum, salary) => sum + salary, 0))
console.log(products.filter((product) => product.inStock === true).map((product) => parseInt(product.price * 1.15)).reduce((sum, price) => sum + price, 0 ))
console.log(users.filter((user) => user.role === "admin").map((user) => user.age).reduce((sum, age) => sum + age, 0)/users.filter((user) => user.role === "admin").length)
console.log(numbers.filter((n) => n % 2 === 0).map((n) => n * 2).reduce((sum, n) => sum + n, 0))
console.log(products.filter((product) => product.price < 100).map((product) => product.name))
console.log(users.filter((user) => user.salary > 45000).reduce((count) => count + 1, 0))
console.log(orders.filter((order) => order.status === "completed").reduce((sum, order) => sum + order.total, 0))
console.log(users.filter((user) => user.role === "user").map((user) => user.name).sort())
console.log(products.filter((product) => product.category === "armor" && product.inStock === true).map((product) => totalValue = product.price * product.quantity).reduce((sum, price) => sum + price, 0))
console.log(numbers.filter((n) => n > 10).map((n) => n*n).filter((n) => n % 2 === 0))
console.log(users.filter((user) => user.isActive === true && user.role === "admin").reverse().slice(0,2).map((user) => user.name))
console.log(products.filter((product) => product.inStock === true).map((product) => {
    return {
        ...product,
        price: product.price * 1.25
    }
}).reduce((min, product) => min.price > product.price ? product : min))
console.log(users.filter((user) => user.age > 25 && user.age < 35).map((user) => user.salary).reduce((sum, salary) => sum + salary, 0)/users.filter((user) => user.age > 25 && user.age < 35).length)
console.log(orders.filter((order) => order.total > 100 && order.status === "completed").reduce((sum, order) => sum + order.total, 0))
console.log(products.filter((product) => product.quantity > 0).sort((product1, product2) => product1.price - product2.price).slice(-3).map((product) => product.name).reverse())
console.log(users.filter((user) => user.isActive === false).map((user) => user.age).reduce((max, age) => max > age ? max : age))
console.log(orders.filter((order) => order.userId === 1).reduce((sum, order) => sum + order.total, 0))
console.log(products.filter((product) => product.category === "armor" || product.category === "weapon").reduce((sum, product) =>
    {
        if (product.category === "armor") {
            return {
                ...sum,
                armor: sum.armor + product.price
            }
        } else {
            return {
                ...sum,
                weapon: sum.weapon + product.price
            }
        }
    },
    {
        armor: 0,
        weapon: 0
    }
))
console.log("Active users average salary: " + parseInt(users.filter((user) => user.isActive === true).reduce((totalSalary, user) => totalSalary + user.salary, 0)/users.filter((user) => user.isActive === true).length))
console.log("Inactive users average salary: "+ users.filter((user) => user.isActive === false).reduce((totalSalary, user) => totalSalary + user.salary, 0)/users.filter((user) => user.isActive === false).length)
console.log(numbers.filter((n) => n % 3 === 0).map((n) => (n + 5) * 2).reduce((sum, n) => sum + n, 0))
console.log(users.filter((user) => user.name.length > 5 && user.age > 28).map((user) => user.age).length)
console.log(products.filter((product) => product.inStock === true).reduce((count, product) =>
{
    if (product.category === "weapon") {
        count.weapon++;
    } else if (product.category === "armor") {
        count.armor++;
    } else if (product.category === "consumable") {
        count.consumable++;
    } else if (product.category === "accessory") {
        count.accessory++;
    } else if (product.category === "ammo") {
        count.ammo++;
    }
    return count
},{
    weapon: 0,
    armor: 0,
    consumable: 0,
    accessory: 0,
    ammo: 0
}
))
console.log(numbers.filter((n) => n % 2 === 0).map((n) => n * n).filter((n) => n > 100).slice(-3))
console.log(users.filter((user) => user.isActive === true).sort((a, b) => a.age - b.age).slice(0, 3))
console.log(orders.filter((order) => order.status !== "cancelled").reduce((counts, order) => {
    const { userId } = order;

    if (!counts[userId]) {
      counts[userId] = 0;
    }
    counts[userId]++;
    return counts;
  }, {}));
console.log(products.filter((product) => product.price > 50 && product.price < 150).sort((a ,b) => a.price - b.price).slice(0, 3))
console.log(users.filter((user) => user.age > (users.reduce((age, user) => age + user.age, 0)/users.length)).map((user) => user.name))
console.log((products.filter((product) => product.price < (products.reduce((total, product) => total + product.price, 0)/products.length)).length))
usersAboveAverageSalary = users.filter((user) => user.salary > (users.reduce((totalSalary, user) => totalSalary + user.salary, 0)/users.length))
console.log(usersAboveAverageSalary.reduce((roleCount, user) =>
{
    const { role } = user;

    if (!roleCount[role]) {
      roleCount[role] = 0;
    }
    roleCount[role]++;
    return roleCount;

},{}))

console.log(users.map((user) => {
    if (user.id === 3){
        return {
            ...user,
            age: 40
        }
    }
    return user;
}))
console.log(users.map((user) => {
    if (user.id === 5){
        return {
            ...user,
            isActive: true
        }
    }
    return user;
}))
console.log(users.filter((user) => user.id !== 7))
console.log(...users, {id: 11, name: "Kate", age: 26, isActive: true, role: "user", salary: 44000})
console.log(users.map((user) => {
    if (user.id === 2){
        return {
            ...user,
            salary: user.salary + 5000
        }
    }
    return user;
}))
console.log(users.map((user) => {
    if (user.id === 8){
        return {
            ...user,
            role: "admin"
        }
    }
    return user;
}))
console.log(products.map((product) => {
    if (product.id === 3){
        return {
            ...product,
            inStock: !product.inStock
        }
    }
    return product;
}))

console.log(products.map((product) =>{
    if (product.id === 1){
        return {
            ...product,
            price: product.price + 10
        }
    }
    return product;
}))
console.log(products.map((product) => {
    if (product.id === 2){
        return {
            ...product,
            quantity: product.quantity - 1
        }
    }
    return product;
}))
console.log(orders.map((order) => {
    if (order.id === 2){
        return {
            ...order,
            status: "completed"
        }
    }
    return order;
}))
console.log(users.map((user) =>{
    if (user.id === 4){
        return {
            ...user,
            name: "Diane",
            age: 29
        }
    }
    return user;
}))
console.log(products.map((product) => {
    if (product.id === 5){
        return {
            ...product,
            price: 95,
            inStock: true
        }
    }
    return product;
}))
console.log(users.map((user) => {
    if (user.age > 35){
        return {
            ...user,
            isActive: false
        }
    }   else {
        return {
            ...user,
            isActive: true
        }
    }
}))
console.log(products.map((product) => {
    if (product.category === "weapon"){
        return {
            ...product,
            price: product.price * 1.2
        }
    }
    return product;
}))
console.log(products.map((product) => {
    if (product.inStock === false){
        return {
            ...product,
            quantity: 0
        }
    }
    return product;
}))
console.log(students.map((student) => {
    if (student.id === 1){
        return {
            ...student,
            grades: [...student.grades, 95]
        }
    }
    return student;
}))
console.log(students.map((student) => {
    if (student.id === 2){
        return {
            ...student,
            grades: student.grades.slice(0, -1)
        }
    }
    return student;
}))
console.log(students.map((student) =>{
    if (student.id === 3){
        return {
            ...student,
            grades: student.grades.map((grade, index) => index === 0 ? 100 : grade)
        }
    }
    return student;
}))
console.log(users.map((user) => {
    if (user.salary < 40000){
        return {
            ...user,
            isActive: !user.isActive
        }
    }
    return user;
}))
console.log(products.filter((product) => product.inStock === true))
console.log(orders.filter((order) => order.status !== "cancelled"))
console.log(users.map((user) => {
    if (user.salary > 50000){
        return {
            ...user,
            isPremium: true
        } 
    } else {
        return {
            ...user,
            isPremium: false
        }
    }
}))
console.log(orders.map((order) =>{
    if (order.status === "pending"){
        return{
            ...order,
            status: "shipped"
        }
    }
    return order;
}))
console.log(products.map((product) => {
    if (product.inStock === true){
        return {
            ...product,
            quantity: product.quantity + 5
        }
    }
    return product;
}))
console.log(products.map((product) => {
    if (product.quantity > 5){
        return {
            ...product,
            price: product.price * 0.9
        }
    }
    return product;
}))
console.log(users.map((user) => {
    if (user.isActive === false){
        return {
            ...user,
            role: "user"
        }
    }
    return user;
}))
console.log(...orders, {id: 11, userId: 5, productId: 2, quantity: 2, total: 160, status: "pending"})
console.log(users.map((user) => {
    if (user.name.startsWith("A")){
        return{
            ...user,
            age: 30
        }
    }
    return user;
}))
console.log(users.map((user) => {
    if (user.isActive === true && user.role === "admin"){
        return{
            ...user,
            salary: user.salary + 2000
        }
    }
    return user;
}))
console.log(users.map((user) => {
    if (user.id === 1){
        return {
            ...user,
            age: user.age + 1,
            salary: user.salary * 1.05,
            isActive: !user.isActive 
        }
    }
    return user;
}))



