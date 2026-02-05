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

