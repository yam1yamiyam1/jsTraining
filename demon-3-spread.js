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

// const f = (name, age,salary) => { /MUST REPEAT
//     console.log(name, age, salary)
// }
// const argList = [users[0].name, users[0].role, users[0].salary];
// f(...argList)

// const defaults = { disabled: false, value: "" }; 
// const computed = { value: "hello" }
// const a = {...defaults, ...computed};
// console.log(a)

// const baseStyle = { color: "red", fontSize: 14 }; 
// const override = { fontSize: 16 }
// const a = {...baseStyle, ...override};
// console.log(a)

// const source1 = { q: "sword" }; 
// const source2 = { limit: 10 }
// const a = {...source1, ...source2};
// console.log(a)

// const cart = [{ id: 1, qty: 2 }] 
// const add = { id: 2, qty: 1 }
// const a = [...cart, add];
// console.log(a)

// const cart = [{ id: 1, qty: 2 }] 
// const a = [...cart.map(({id})=> id === 1 && {id, qty: 3})];
// console.log(a)

// const defaultRenderProps = { color: "blue" }; 
// const userRenderProps = { size: "lg" }
// const a = {...defaultRenderProps, ...userRenderProps};
// console.log(a)

// const baseChildren = [users[0], users[2]]; 
// const extra = users[4]
// const a = [...baseChildren, extra];
// console.log(a)

// const  cardA = { title: "Shipped", data: orders.filter(o => o.status === "shipped") }; 
// const cardB = { color: "green" }
// const a = {...cardA, ...cardB};
// console.log(a)


// const usersList = users.map(({id, name, age}) => id+ " " + name + " " + age).join("\n")
// console.log(["name" , "age", "id"], usersList)