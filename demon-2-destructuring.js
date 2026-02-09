const { numbers, users, products, orders, students } = require('./data/training-data.js');

// sec 1
// const {name, age} = users[0];
// console.log({name, age})

// const {name, price} = products[0];
// console.log({name, price})

// const {userId, total} = orders[0];
// console.log({userId, total})

// const {name, attendance} = students[0];
// console.log({name, attendance})

console.log(users.map(({name}) => name))

console.log(products.map(({category}) => category))

console.log(orders.filter(({status}) => status === "completed").map(({total}) => total))

console.log(users.filter(({isActive}) => isActive).map(({name, role}) => {return {name, role}}))

// const {name, salary} = users.find(({role}) => role === "admin")
// console.log({name, salary})

// const [a,b] = users;
// console.log({a,b})

// const [a,b,c] = users;
// console.log({a,b,c})

// const {userId} = orders[0];
// console.log(users.find(({id}) => id === userId).name)

console.log(users.map(({name, age}) => `${name} is ${age}` ))

console.log(products.map(({name, price}) => `${name}: $${price}`))

console.log(products.filter(({inStock}) => inStock).map(({name, quantity}) => {return {name, quantity}}))

console.log(users.reduce((sum, {salary}) => sum + salary, 0))

console.log(products.reduce((total, {price, quantity}) => total + (price * quantity), 0))

console.log(users.filter(({role}) => role === "user").map(({name, salary}) => {return {name, salary}}))

console.log(students.map(({grades}) => grades.reduce((sum, x) => sum + x, 0)/grades.length))

// const [a,b,c,d,e] = numbers;
// console.log([a,b,c,d,e])

// const [a,,c] = users;
// console.log({a,c})

console.log(orders.filter(({status}) => status === "completed").map(({userId, productId}) => ({userId, productId})))

// const {name, category} = products.find(({price}) => price > 100)
// console.log({name, category})

console.log(users.filter(({age}) => age > 30).map(({name}) => name).sort((a,b) => a.name - b.name))

// sec 2
// const {id: userId} = users[0];
// console.log({userId})

// const {price: cost} = products[0];
// console.log({cost})

// const {total: amount, status: orderStatus} = orders[0];
// console.log({amount, orderStatus})

console.log(users.map(({name: fullName, role: position}) => ({fullName, position})))

// const {email = "no-email@example.com"} = users[0];
// console.log({email})

// const {discount = 0} = products[0];
// console.log({discount})

console.log(users.map(({bonus = 0}) => bonus).filter((b) => b !== 0))

// const {salary: income = 0} = users[0];
// console.log({income})

console.log(products.map(({name, rating = 5}) => ({name, rating})))

// const {priority = "normal", notes = "none"} = orders[0];
// console.log({priority, notes})

//36++ down

console.log(users.map(({isActive: active, role: jobTitle}) => ({active, jobTitle})))

console.log(products.filter(({inStock})=> inStock).map(({quantity: stock}) => ({stock})))

// const {awards = []} = students[0];
// console.log({awards})

console.log(orders.map(({total, tax = 0}) => total + tax))

// const {age: years = 188} = users[1];
// console.log({years})

console.log(products.map(({inStock: available, price: value}) => ({available, value})))

// const {userId: customerId, productId: itemId, quantity: count} = orders[2];
// console.log({customerId, itemId, count})

console.log(users.filter(({isActive}) => isActive).map(({salary: pay, bonus = 0}) => ({pay, bonus})))

// const {category: type = "misc"} = products[0];
// console.log({type})

console.log(students.map(({attendance: presence = 0}) => ({presence})))

// const {name: employeeName, role: department, isActive: employed} = users[3];
// console.log({employeeName, department, employed})

console.log(orders.map(({status: state = "unknown"}) => ({state})))

console.log(products.filter(({price}) => price < 100).map(({name: productName, price: cost}) => ({productName, cost})))

// const {grades: scores = []} = students[0];
// console.log({scores})

console.log(users.filter(({age}) => age > 25)
.map(({name: person, age: years, seniority = "junior"}) => ({person, years, seniority}) ))

// sec 3
// const {address:{city}} = { name: "Test", address: { city: "NYC", zip: "10001" } } 
// console.log({city})

// const {profile: {bio}} = { name: "Alice", profile: { bio: "Developer", age: 25 } }
// console.log({bio})

// const {grades: [a]} = students[0];
// console.log(a)

// const {name, grades: [g1,g2]} = students[0];
// console.log({name, g1, g2}) 

console.log(students.map(({name, grades: [,,,last]}) => ({name, last})))

// const {customer: {name :customerName}} = { id: 1, customer: { name: "Alice", email: "alice@test.com" }, total: 100 }
// console.log({customerName})

// const {supplier: {location: {city}}}= { name: "Sword", supplier: { name: "Forge Co", location: { city: "Boston" } } }
// console.log({city})

// const [{name: userName}] = users;
// console.log({userName})

// const [{name: firstName},{name: secondName}] = users;
// console.log({firstName, secondName})

// const [{name: productName},{price}] = products;
// console.log({productName, price})

console.log(students.map(({name, grades}) => ({name, avg: grades.reduce((sum, x) => sum + x,0)/grades.length})))

// const {user: {profile: {settings: {theme}}}} = { user: { profile: { settings: { theme: "dark" } } } }
// console.log({theme})

// const [{grades: [a]},{grades: [b]}] = students;
// console.log({a,b})

// const [{name, role}] = users.filter(({isActive}) => isActive)
// console.log({name, role})

console.log(orders.map(({id: orderId, userId}) => ({orderId, 
    customerName: users.find(({id}) => id === userId).name})))

// const data = [{ outer: { inner: 1 } }, { outer: { inner: 2 } }]
// console.log(data.map(({outer: {inner}}) => inner))

// const [{name, grades: [a,b,c]}] = students;
// console.log({name, a,b,c})

// const {items: [{name: firstName}]} = { items: [{ id: 1, name: "First" }, { id: 2, name: "Second" }] }
// console.log({firstName})

// const [{name}] = products.filter(({inStock}) => inStock)
// console.log({name})

// const [{name},,{age},,{role}] = users;
// console.log({name,age,role})

// const {items: [{quantity: qty}]} = { id: 1, items: [{ product: "Sword", quantity: 2 }] }
// console.log({qty})

console.log(orders.map(({productId}) => products.find(({id}) => id === productId).name))

// const [{name: student1},{name: student2}] = students.filter(({attendance}) => attendance > 90)
// console.log({student1, student2})

// const {settings: {theme: appTheme, lang: language}} = { settings: { theme: "dark", lang: "en" } }
// console.log({appTheme,language})

console.log(students.map(({name, grades: topGrade}) => ({name, topGrade: topGrade.filter((x) => x > 80).slice(0,1)})))