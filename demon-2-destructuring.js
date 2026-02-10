const { numbers, users, products, orders, students } = require('./data/training-data.js');

// SEC 1

// const {name} = users[0];
// console.log(name);

// const {age} = users[0];
// console.log(age);

// const {name, age} = users[0];
// console.log(name);
// console.log(age);

// const {name, age, role} = users[1];
// console.log(name);
// console.log(age);
// console.log(role);

// const {salary} = users[2];
// console.log(salary);

// const {id, name} = users[3];
// console.log(id);
// console.log(name);

// const {isActive} = users[4];
// console.log(isActive);

// const {id, name, age, isActive, role, salary} = users[0];
// console.log(id);
// console.log(name);
// console.log(age);
// console.log(isActive);
// console.log(role);
// console.log(salary);

// const {name: userName} = users[0];
// console.log(userName);

// const {age: userAge} = users[1];
// console.log(userAge);

// const {role: userRole} = users[2];
// console.log(userRole);

// const {salary: income} = users[3];
// console.log(income);    

// const {name: userName, age: userAge} = users[0];
// console.log(userName + userAge)

// const {name = "Unknown"} = users[0];  
// console.log(name);  

// const {email = "none@email.com"} = users[0];
// console.log(email);

// const {age = 0} = users[0];
// console.log(age);

// const {nickname = "N/A"} = users[1];
// console.log(nickname);

// const {name, country = "USA"} = users[2];
// console.log(name);
// console.log(country);

// const {salary, bonus = 5000} = users[0];
// console.log(salary);
// console.log(bonus);

// const {name, age, ...others} = users[0];
// const otherProps = {name, age, ...others}
// console.log(otherProps);

// const {id, ...userData} = users[1];
// const user = {id, ...userData};
// console.log(id);

// const {name, role, ...rest} = users[2];
// const details = {...rest};
// console.log(name);
// console.log(role);

// const {isActive, ...props} = users[3];
// const info = {...props};
// console.log(info)
// console.log(isActive);

// const {...allData} = users[0];
// console.log(allData);

// const {name: personName = "Anonymous"} = users[0];
// console.log(personName);    

// const {age: years = 0} = users[1];
// console.log(years);

// const {salary: pay = 30000} = users[2];
// console.log(pay);

// const {role: position = "user"} = users[4]; 
// console.log(position);

// const {id: userId, name: fullName} = users[0];
// console.log(userId + " " + fullName)

// SEC 2

// const [first] = numbers;
// console.log(first);

// const [a,b] = numbers;
// console.log(a);
// console.log(b);

// const [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

// const [a,,c] = numbers;
// console.log(a);
// console.log(c);

// const [a,,,d] = numbers;
// console.log(a);
// console.log(d);

// const [a,,c,,d] = numbers;
// console.log(a);
// console.log(c);
// console.log(d);

// const [a, ...rest] = numbers;
// console.log(a);
// console.log(rest);

// const [a,b,...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(rest);

// const [a,b,c,d,e,...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(rest);

// const [...allNumbers] = numbers;
// console.log(allNumbers);

// const [a] = numbers.slice(-1);
// console.log(a);

// const [a = 0] = numbers;
// console.log(a);

// const {100: a = 999} = numbers;
// console.log(a);

// const {grades: [a]} = students[0];
// console.log(a);

// const {grades: [a,b]} = students[0];
// console.log(a);
// console.log(b);

// const {grades: [...rest]} = students[1];
// console.log(rest);

// const {grades: [a,,c]} = students[2];
// console.log(a);
// console.log(c);

// const {grades: [a,...rest]} = students[3];
// console.log(a);
// console.log(rest);

// const {grades: [,a,,d]} = students[0]    
// console.log(a);
// console.log(d);

// const array = [10,20]
// const [a,b] = array;
// console.log(a);
// console.log(b);

// let x = 5, y = 10;
// [x,y] = [y,x];
// console.log(x);
// console.log(y);

// const {0: a, 10:b} = numbers;
// console.log(a);
// console.log(b);

// const {0: a, 5:b, 10:c, 15:d} = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const {10:a} = numbers;
// console.log(a);

// const [a,b,c,...rest] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest.slice(-3));

// const array = [1, [2, 3], 4];
// const [a, [b, c], d] = array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const array = [[1, 2], [3, 4]];
// const [[a, b], [c, d]] = array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const array = [1, 2, [3, 4, [5, 6]]];
// const [a, b, [, , [e]]] = array;
// console.log(a);
// console.log(b);
// console.log(e);

// const {0:a} = numbers;
// console.log(a);
// const {grades: [b]} = students[0];
// console.log(b);

// const [a] = numbers.slice(-1);
// console.log(a);
// const [b] = students[0].grades.slice(-1);
// console.log(b);

// SEC 3

// function getName({name}){
//     return name;
// }
// console.log(getName(users[0]))

// function getAge({age}){
//     return age;
// }
// console.log(getAge(users[1]));

// function getFullInfo({name, age}) {
//     return "Name: " + name + ", Age: " + age;
// }
// console.log(getFullInfo(users[0]));

// function isAdmin({role}){
//     if (role === "admin") {
//         return true;
//     }
//     return false;
// }
// console.log(isAdmin(users[0]));

// function isActive({isActive}){
//     return isActive;
// }
// console.log(isActive(users[0]));

// function getSalaryGrade({salary}){
//     if (salary > 50000) {
//         return "high";
//     }
//     return "low";
// }
// console.log(getSalaryGrade(users[3]));

// function getNameAndRole({name, role}){
//     return {
//         name,
//         role
//     }
// }
// console.log(getNameAndRole(users[0]));

// function getUserDetails({name, age, id}){
//     return{
//         name,
//         age,
//         id
//     }
// }
// console.log(getUserDetails(users[0]));

// function calculateBonus({salary}){
//     return salary * 0.1;
// }
// console.log(calculateBonus(users[1]));

// function getFirstName({name}){
//     return name.split(" ", 1);  
// }
// console.log(getFirstName(users[0]))

// function doubleAge({age}){
//     return age *2;
// }
// console.log(doubleAge(users[0]));

// function hasHighSalary({salary}){
//     if (salary > 45000){
//         return true;
//     }
//     return false;
// }
// console.log(hasHighSalary(users[1]));

// function getNameLength({name}){
//     return name.length;
// }
// console.log(getNameLength(users[0]))

// function isYoung({age}){
//     if (age < 30){
//         return true;
//     }
//     return false;
// }
// console.log(isYoung(users[1]));

// function getRoleUpperCase({role}){
//     return role.toUpperCase();
// }
// console.log(getRoleUpperCase(users[1]));

// function getFirstThreeSum([a,b,c]){
//     return a + b + c;
// }
// console.log(getFirstThreeSum(numbers));

// function getSecondElement([,b]){
//     return b;
// }
// console.log(getSecondElement(students));

// function getLastTwo(arr){
//     const [a, b] = arr.slice(-2);
//     return {a , b};
// }
// console.log(getLastTwo(students))

// function swapFirstTwo([a,b]){
//     return [b, a];
// }
// console.log(swapFirstTwo(students));

// function getUserSummary({name, age, role}){
//     return name + " (" + age + ") " + role
// }
// console.log(getUserSummary(users[0]));

// function compareAges({age: a}, {age: b}){
//     if (a > b){
//         return true;
//     }
//     return false;
// }
// console.log(compareAges(users[0], users[1]));

// function combineNames({name: a},{name: b}){
//     return a + " and " + b;
// }
// console.log(combineNames(users[0], users[1]));

// function   isSameRole({role: a}, {role: b}){
//     if (a === b){
//         return true;
//     }
//     return false;
// }
// console.log(isSameRole(users[2], users[1]));

// function totalSalary({salary: a}, {salary: b}){
//     return a + b;
// }
// console.log(totalSalary(users[0], users[1]));

// function olderUser({age: a}, {age: b}){
//     if (a > b){
//         return a;
//     }
//     return b;
// }
// console.log(olderUser(users[2], users[1]));

// function getProductInfo({name, price}){
//     return name +":"+ "$" + price;
// }
// console.log(getProductInfo(products[0]));

// function isExpensive({price}){
//     if (price > 100){
//         return true;
//     }
//     return false;
// }
// console.log(isExpensive(products[3]));

// function getProductValue({price, quantity}){
//     return price * quantity;
// }
// console.log(getProductValue(products[0]));

// function isInStock({inStock}){
//     return inStock;
// }
// console.log(isInStock(products[2]));

// const [{grades}] = students;
// console.log(grades);

// const [,{attendance}] = students;
// console.log(attendance);

// const [{grades: [a]}] = students;
// console.log(a);

// const [{name, grades:[a]}] = students;    
// console.log(name, a);

// const [,{name, grades: [a,b]}] = students;
// console.log(name, a, b);

// const [,,{name, attendance, grades}] = students;
// console.log(name, grades, attendance);

// const [{name, grades:[,a]}] = students;
// console.log(name, a);

// const[,{name, grades:[,,,a]}] = students;
// console.log(name, a);

// const [,,{grades:[a,,,b]}] = students;
// console.log(a, b);

// const [,,,{grades}] = students;
// console.log(grades.reduce((a,grade) => a + grade, 0)/grades.length); 

// const object = {
//     name: "Test",
//     address: {city: "NYC"}
// }

// const {address:{city}} = object;
// console.log(city);

// const object = 
//     {
//         name: "Test", 
//         profile: {bio: "Hello"}
//     };

// const {profile: {bio}} = object;
// console.log(bio);

// const object = {data: {user: {name: "Alice"}}}
// const {data:{user:{name}}} = object;
// console.log(name);

// const object = [{name: "A"}, {name: "B"}];
// const [{name: a}, {name: b}] = object;
// console.log(a);
// console.log(b);

// const [{name: a}, {name: b}] = users;
// console.log(a);
// console.log(b);

// const [{name}, {age}] = users;
// console.log(name);
// console.log(age);

// const [{id, role}, {name, salary}] = users;
// console.log(id);
// console.log(role);
// console.log(name);
// console.log(salary);

// const [[,,{name}],[{grades:[a]}]] = [users, students];
// console.log(name);
// console.log(a);

// const object = {a: {b: {c: 1}}};
// const {a: {b: {c}}} = object;
// console.log(c);

// const object = {x: [1, {y: 2}]};
// const {x: [a, {y: b}]} = object;
// console.log(a);
// console.log(b);

// const [{name, category}] = products;
// console.log(name);
// console.log(category);

// const [{price}, {quantity}] = products;
// console.log(price);
// console.log(quantity);

// const [{userId, productId}] = orders;
// console.log(userId);
// console.log(productId);

// const [{status, total}] = orders;
// console.log(status);
// console.log(total);

// const [,{...all}] = products;
// console.log(all);

// const [{name: a}, {name: b}, {name: c}] = users;
// console.log(a);
// console.log(b);
// console.log(c);

// const [{price: a}, {price: b}] = products;
// console.log(a);
// console.log(b);

// const [{name}, ...rest] = students;
// const [{attendance}] = rest.slice(-1);   
// console.log(name, attendance)

// const object = {users: [{name: "A"}, {name: "B"}]};
// const {users: [{name: a}, {name: b}]} = object;
// console.log(a);
// console.log(b);

// const object = {data: {items: [1, 2, 3]}};
// const {data: {items: [...rest]}} = object;
// console.log(rest);

// const userNames = users.map(({name}) => name);
// console.log(userNames);

// const ages = users.map(({age}) => age);
// console.log(ages);

// const userIdName = users.map(({name, id}) => name + " " + id);
// console.log(userIdName);

// const namePrice = products.map(({name, price}) => name + ":$" + price);
// console.log(namePrice);

// const admins = users.filter(({role}) => role === "admin");
// console.log(admins);

// const actives = users.filter(({isActive}) => isActive);
// console.log(actives);

// const expensive = products.filter(({price}) => price > 100);
// console.log(expensive);

// const userFive = users.find(({id}) => id === 5);
// console.log(userFive);

// const firstAdmin = users.find(({role}) => role === "admin");
// console.log(firstAdmin);

// const sumAges = users.reduce((sum, {age}) => sum + age, 0);
// console.log(sumAges);

// const sumSalary = users.reduce((sum, {salary}) => sum + salary, 0);
// console.log(sumSalary);

// const sumPrices = products.reduce((sum, {price})=> sum + price, 0);
// console.log(sumPrices);

// const studentGrades = students.map(({grades}) => 
//     grades.reduce((sum, grade) => sum + grade, 0)/grades.length);
// console.log(studentGrades);

// const greater_90 = students.filter(({attendance}) => attendance > 90);
// console.log(greater_90); 

// const activeNames = users.filter(({isActive}) => 
//     isActive).map(({name}) => name);
// console.log(activeNames)

// const adminSalary = users.filter(({role}) => 
//     role === "admin").map(({salary}) => salary);
// console.log(adminSalary)

// const nameAge = users.map(({name, age}) => name + " is " + age + " years old");
// console.log(nameAge);

// const inStockName = products.filter(({inStock}) => inStock).map(({name}) => name);
// console.log(inStockName)

// const activeUsersCount = users.reduce((count, {isActive}) => 
//     isActive ? count + 1 : count, 0);
// console.log(activeUsersCount)

// const addTenPercent = products.map(({price}) => parseInt(price*1.1));
// console.log(addTenPercent)

// const completedOrders = orders.filter(({status}) => status === "completed");
// console.log(completedOrders)

// const orderIdTotal = orders.map(({userId, total}) => {
//     return {
//         userId,
//         total
//     }
// });

// console.log(orderIdTotal)

// const orderTotal = orders.reduce((sum, {total}) => sum + total, 0);
// console.log(orderTotal)

// const over30 = users.filter(({age}) => age > 30).map(({name}) => name);
// console.log(over30)

// const firstWeapon = products.find(({category}) => category === "weapon");    
// console.log(firstWeapon)

// const firstStudent = students[0].grades.map((a) => {
//     return{
//         Grade:  a
//     }
// });    
// console.log(firstStudent)

// const greaterFive = users.filter(({name}) => name.length > 5);
// console.log(greaterFive)

// const usersAddAdult = users.map(({...rest}) => {
//     return {
//         ...rest,
//         isAdult: rest.age >= 18
//     }
// })
// console.log(usersAddAdult)

// const countPerCategory = products.reduce((count, {category}) => {
//     if (!count[category]){
//         count[category] = 0; // create count[category] ex. count.weapon = 0
//     }
//     count[category]++; //add to the created count[category]
//     return count;
// },[])
// console.log(countPerCategory)

// const inStockPriceQty = products.filter(({inStock}) => inStock).map(({price, quantity}) => 
//     price * quantity).reduce((sum, price) => sum + price)
// console.log(inStockPriceQty)

// const [{name, ...rest}] = users;
// console.log({name, rest})

// const [{id,name,...rest}] =products;
// console.log({id,name,rest})

console.log(users.filter(({isActive}) => isActive).map(({isActive, ...rest}) => ({isActive, rest})))

console.log(users.map(({id, ...rest}) => ({
    ...rest,
    id,
    processed: true
})))

// const [a, ...rest] = numbers;
// console.log({a,rest})

// const [a,b,c,...rest] = users;
// console.log({a,b,c,rest})

console.log(products.map(({price, ...rest}) => {
     return {
        ...rest,
        taxedPrice: price * 1.15
    }
}))


// const [{name, attendance, grades: testScores}] = students;
// console.log({name, attendance, testScores})

console.log(users.filter(({role}) => role === "admin")
.map(({name, ...rest}) => ({name, ...rest})))

console.log(orders.map(({status, ...rest}) => ({status, rest, deliveryDate: "2024-01-15"})))

console.log(students.map(({grades: [first, ...rest]}) => ({first, rest})))

console.log(products.filter(({inStock}) => inStock).map(({name, quantity, ...rest}) => ({
    name, quantity, details: rest
})))

// const [{role, salary, ...rest}] = users;
// console.log({
//     role, salary, rest
// })

console.log(orders.map(({userId, ...rest}) => ({
    userId,
    rest,
    customerName: users.find(({id}) => id === userId).name
})))

// const [a,b,...rest] = products;
// console.log({a,b,rest})

console.log(users.filter(({salary}) => salary > 45000).map(({name,...rest}) => ({
    name,
    rest,
    tier: "premium"
})))

// const [,,{id, ...rest}] = products;
// console.log(rest)

console.log(students.map(({name,...rest}) => ({
    name, rest, status: rest.attendance > 90 ? "excellent" : "good"
})))

// const [a,b,c,d,e,...rest] = numbers;
// console.log({a,b,c,d,e,rest})

console.log(orders.filter(({status}) => status === "completed").map(({total, ...rest}) => ({
    rest, total, commission: total * 0.1
})))

// const [,,,{id,name,role,...metadata}] = users;
// console.log({id,name,role,metadata})

console.log(products.filter(({category}) => category === "armor").map(({price,...rest}) => ({
    price,rest
})))

// const [{grades: [a,b,...rest]}] = students;
// console.log({a,b,rest})

console.log(users.filter(({isActive}) => isActive).map(({salary,...rest}) => ({
    rest, salary, bonus: salary * 0.05
})))

console.log(orders.map(({id, status, ...rest}) => ({
    id, status, rest, trackingNumber: `TRK-${id})`
})))

// const copy = {...users[0]}
// console.log({copy})

// const copy = {...products[0],featured: true}
// console.log({copy})

// const copy = {...users[0],age: 26}
// console.log({copy})

// const copy = {...orders[0],status: "delivered", deliveredAt: Date.now()}
// console.log({copy})

// const copy = {...users[0],...users[1]}
// console.log({copy})

// const copy = {...products[0], price: products[0].price * 1.1}
// console.log({copy})

// const copy = [...numbers]
// console.log(copy)

// const copy = [0, ...numbers];
// console.log(copy)

// const copy = [...numbers,21];
// console.log(copy)

// const copy = [...users.slice(0,3),...users.slice(-3)]
// console.log(copy)

// const copy = {...users[0], isActive: !users[0].isActive}
// console.log(copy)

// const copy = {...students[0], grades: [...students[0].grades, 95]}
// console.log(copy)

// const copy = {theme: "dark", fontSize: 14, fontSize: 16, lang: "en"}
// console.log(copy)

// const copy = {...orders[0], quantity: orders[0].quantity + 1, total: orders[0].total + (orders[0].total/orders[0].quantity)}
// console.log(copy)

// const copy = [...numbers.slice(0,10), 999, ...numbers.slice(10)]
// console.log(copy)

// const [,...rest] = users;
// console.log(rest)

// const copy = products.slice(0,-1)
// console.log(copy)

// const [a] = users;
// const copy = {...a, age: 30, salary: 60000, isActive: false}
// console.log(copy)

console.log(students.map(({grades}) => grades).flat())

// const [,a] = products;
// const copy = {...a, discount: 0.2, category: "defense"}
// console.log(copy)

// const copy = {...users[0], id: 99, name: "Clone"}
// console.log(copy)

// const copy = [...products, {id: 11, name: "Dagger", price: 60, category: "weapon", inStock: true, quantity: 7}]
// console.log(copy)

// const [a] = students;
// const copy = {...a, grades: [a.grades.slice(0,-1)]}
// console.log(copy)

// const [a] = users;
// const copy = {...a, name: "Modified"}
// console.log(a)
// console.log(copy)

console.log(users.map(({id,salary, ...user}) => id === 3 ? ({
    id, user, salary: 50000
}): ({id, user, salary})))

console.log(products.map(({inStock,id, ...rest}) => id === 5? ({
    rest, inStock: !inStock
}):({rest, id, inStock})))

console.log(users.map(({isActive, ...rest}) => isActive? ({
    rest, isActive, verified: true
}):({rest,isActive, verified: false})))

console.log(products.map(({category, ...rest}) => category === "weapon"? ({
    rest, category, price: rest.price * 1.15
}):({rest, category})))

console.log(users.map((user) => user.id === 7 ? ({
    ...user, age: 28, salary: 45000, role: "admin"
}) :(user)))

console.log(products.map((product) => product.quantity < 3 ? ({
    ...product,
    lowStock: true
}):(product)))

console.log(orders.map((order) => order.status === "pending"? ({
    ...order,
    status: "processing",
    processedAt: Date.now()
}):(order)))

console.log(students.map((student) => student.attendance < 90? ({
    ...student,
    attendance: student.attendance +5
}):(student)))

console.log(products.map((product) => product.id === 1? ({
    ...product,
    lastUpdated: Date.now()
}) :(product)))

console.log(users.map((user) => user.isActive === false?({
    ...user, role: "user"
}):(user)))

console.log(students.map((student) => student.id === 3? ({
    ...student,
    grades: [...student.grades, 100]
}):(student)))

console.log(products.map((product) => product.id === 6 ? ({
    ...product,
    quantity: product.quantity - 1,
    inStock: product.quantity - 1 > 0
}):(product)))

console.log(products.map((product) => product.price > 100?({
    ...product,
    discount: 0.1
}):(product)))

console.log(users.map((user) => user.id === 4? ({
    ...user,
    salary: user.salary * 1.10,
    promoted: true,
    role: "senior-admin"
}):(user)))

console.log(orders.map((order) => order.status === "completed"? ({
    ...order,
    refundable: true,
    refundDeadline: "2024-12-31"
}):(order)))

console.log(products.map((product) => product.id === 9? ({
    ...product,
    inStock: true,
    quantity: 5
}):(product)))

console.log(users.map((user) => user.age > 35? ({
    ...user,
    seniority: "senior"
}) :(user)))

console.log(products.map((product) => product.category === "armor" ?({
    ...product,
    price: product.price +5,
    durability: "high"
}) :product))

console.log(students.map((student) => student.id === 4? ({
    ...student,
    grades: [80, ...student.grades.slice(1)]
}) :student))

console.log(users.map((user) => user.salary < 40000? ({
    ...user,
    salary: user.salary * 1.1,
    raisedSalary: true
}): user))

console.log(orders.map((order) => order.id === 5? ({
    ...order,
    status: "reinstated",
    total: 90
}):order))

console.log(orders.map((order) => order.total > 150? ({
    ...order,
    priority: "high"
}):order))

const getAvg = (grades) => {
    return grades.reduce((sum, grade) => sum + grade, 0)/grades.length
}
console.log(students.map(({grades, ...rest}) => ({
    rest,
    grades,
    passing: getAvg(grades) > 75
})))

const activeAdmin = users.filter(({role, isActive}) => role === "admin" && isActive)
const addProps = activeAdmin.map((user) => ({
    ...user,
    salary: user.salary * 1.02,
    bonus: user.salary * 0.05,
    tier: "executive"
}))
console.log(addProps.sort((a,b) => b.salary - a.salary).slice(0,2))