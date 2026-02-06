const { numbers, users, products, orders, students } = require('./data/training-data.js');

// const listA = [ products[0], products[1] ]; 
// const listB = [ products[2], products[3] ];
// const a = [...listA, ...listB];
// console.log(a)

// const baseUser = users[0];
// const a = {...baseUser, lastLogin: "2026-02-01"}
// console.log(a)

// const targetUser = users[1];
// const a = {...targetUser, salary: 42000};
// console.log(a)

// const part1 = orders.slice(0, 5); 
// const part2 = orders.slice(5);
// const a = [...part1,...part2];
// console.log(a)

// const propsA = { a: 1, b: true }; 
// const propsB = { c: "x" };
// const a = {...propsA, ...propsB}
// console.log(a)

// const defaultProps = { color: "blue", size: "md" }; 
// const provided = { size: "lg" };
// const a = {...defaultProps, ...provided}
// console.log(a)

// const userSlice = users[2];
// const a = {...userSlice, role: [userSlice.role, "member"]}
// console.log(a)

// const uiA = { title: "Shop", theme: "light" }; 
// const uiB = { subtitle: "Deals" }
// const a = {...uiA, ...uiB};
// console.log(a)

// const classA = [85, 92]
// const classB = [78, 88]
// const a = [...classA,...classB];
// console.log(a)

// const student = students[0];
// const a = {...student, average: student.grades.reduce((sum, x)=>sum+x,0)/student.grades.length}
// console.log(a)

// const userSettings = { theme: "dark", layout: { sidebar: true } }; 
// const update = { sidebar: false };
// const a = {...userSettings, layout: update}
// console.log(a)

// const item = products[1]; 
// const a = {...item, key: "shield"};
// console.log(a)

// const filtered = products.filter(({inStock})=> inStock)
// const augment = {inStock: true}
// console.log([...filtered, augment])

