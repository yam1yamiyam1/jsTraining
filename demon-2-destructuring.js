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