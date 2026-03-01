const {
  numbers,
  users,
  products,
  orders,
  students,
} = require("./data/training-data.js");
const util = require("util");
console.log = (...args) =>
  args.forEach((arg) => {
    // If it's a function, show the code; otherwise, use your pretty-print inspect
    const output =
      typeof arg === "function"
        ? arg.toString()
        : util.inspect(arg, { depth: null, colors: true });

    process.stdout.write(output + "\n");
  });
const { execSync } = require("child_process");
const { count } = require("console");
const { inflate } = require("zlib");
try {
  execSync("cls", { stdio: "inherit" });
} catch (e) {
  // Fallback for non-windows if you ever switch
  process.stdout.write("\x1Bc");
}
// const test = () => "Hello"
// console.log(test())

// const test = (name) => "Hello " + name
// console.log(test('Yuan'))

// const test = (x) => x * 2;
// console.log(test(5));

// const test = (x) => x > 10;
// console.log(test(6));

// const test = (a, b) => a + b;
// console.log(test(5, 6));

// const test = (x) => !x;
// console.log(test(true));

// const test = (str) => str.toUpperCase();
// console.log(test("fds"));

// const test = (arr) => arr.length;
// console.log(test(users));

// const test = (num) => num % 2 === 0;
// console.log(test(8));

// const test = (x) => x || "default";
// console.log(test());

// const test = (age) => (age >= 18 ? "adult" : "minor");
// console.log(test(1));

// const test = (score) => (score > 90 ? "A" : score > 80 ? "B" : "C");
// console.log(test(91));

// const test = (price) => price * 1.1;
// console.log(test(100));

// const test = (str) => str.length > 10;
// console.log(test("dasfadfaasda"));

// const test = (val) => !!val;
// console.log(test(false));

// 16
// const test = (x) => ({ value: x });
// console.log(test(20));

// const test = (name) => ({ name, length: name.length });
// console.log(test("Yuan"));

// const test = (id, name) => ({ id, name });
// console.log(test(3, "Yuan"));

// const test = (price) => ({ price, total: price * 1.2 });
// console.log(test(100));

// const test = (a) => ({ original: a, doubled: a * 2 });
// console.log(test(42));

// const test = (age) => ({ age, isAdult: age >= 18 });
// console.log(test(17));

// const test = (x, y) => ({ x, y, sum: x + y });
// console.log(test(3, 5));

// const test = (str) => ({ text: str, upper: str.toUpperCase() });
// console.log(test("adsf"));

// const test = (count) => ({ count, next: count + 1 });
// console.log(test(3));

// const test = (salary) => ({ salary, tax: salary * 0.2, net: salary * 0.8 });
// console.log(test(1000));

// const test = (quantity) => ({ quantity, inStock: quantity !== 0 });
// console.log(test(0));

// const test = (name) => ({ name, greeting: `Hello ${name}` });
// console.log(test("Bob"));

// const test = (value) => ({ value, isEven: value % 2 === 0 });
// console.log(test(7));

// const test = (width, height) => ({ width, height, area: width * height });
// console.log(test(5, 10));

// const test = (data) => ({ data, timestamp: Date.now() });
// console.log(test("adsf"));

// const test = ({ name }) => name;
// console.log(test({ name: "Alice", age: 25 }));

// const test = ({ name, age }) => ({ name, age: age + 1 });
// console.log(test({ name: "Bob", age: 30 }));

// const test = ({ price }) => price * 2;
// console.log(test({ name: "Sword", price: 100 }));

// const test = ({ name, age }) => `${name} is ${age}`;
// console.log(test({ name: "Alice", age: 25 }));

// const test = ({ x, y }) => x + y;
// console.log(test({ x: 5, y: 10 }));

// const test = ({ price, quantity }) => price * quantity;
// console.log(test({ price: 10, quantity: 5 }));

// const test = ({ isActive }) => !isActive;
// console.log(test({ name: "User", isActive: true }));

// const test = ({ salary }) => salary > 50000;
// console.log(test({ name: "Alice", salary: 55000 }));

// const test = ({ name }) => ({ name, processed: true });
// console.log(test({ name: "Alice", age: 25 }));

// const test = ({ count }) => ({ count, doubled: count * 2 });
// console.log(test({ count: 5 }));

// const test = ({ status }) => status === "active";
// console.log(test({ status: "active" }));

// const test = ({ price }) => ({ price, discount: price * 0.9 });
// console.log(test({ price: 100 }));

// const test = ({ id, name }) => ({ id, name, saved: true });
// console.log(test({ id: 1, name: "Alice" }));

// const test = ({ value }) => value || 0;
// console.log(test({ value: null }));

// const test = ({ role }) => role === "admin";
// console.log(test({ role: "admin" }));

// const test = ({ email }) => email.includes("@");
// console.log(test({ email: "alice@example.com" }));

// const test = ({ quantity }) => (quantity > 0 ? "available" : "sold out");
// console.log(test({ quantity: 0 }));

// const test = ({ firstName, lastName }) => `${firstName} ${lastName}`;
// console.log(test({ firstName: "John", lastName: "Doe" }));

// const test = ({ total }) => ({ total, tax: total * 0.15, final: total * 1.15 });
// console.log(test({ total: 100 }));

// const func = ({ name, age }) => ({
//   name,
//   age,
//   category: age > 64 ? "senior" : age > 24 ? "adult" : "youth",
// });
// console.log(func(users[2]));

// 51
// const func = ({ name }) => name;
// console.log(users.map(func));

// const func = ({ price }) => price;
// console.log(products.map(func));

// const func = ({ age }) => age;
// console.log(users.map(func));

// const func = ({ name }) => name;
// console.log(users.map(func));

// const func = ({ category }) => category;
// console.log(products.map(func));

// const func = ({ id, name }) => ({ id, name });
// console.log(users.map(func));

// const func = ({ name, age }) => `${name} (${age})`;
// console.log(users.map(func));

// const func = ({ price, ...product }) => ({ ...product, price: price * 2 });
// console.log(products.map(func));

// const func = (user) => ({ ...user, processed: true });
// console.log(users.map(func));

// const func = (product) => ({
//   ...product,
//   total: product.price * product.quantity,
// });
// console.log(products.map(func));

// const func = (user) => ({
//   ...user,
//   status: user.isActive ? "online" : "offline",
// });
// console.log(users.map(func));

// const func = ({ name }) => name.toUpperCase();
// console.log(products.map(func));

// const func = ({ name, price }) => `${name}: $${price}`;
// console.log(products.map(func));

// const func = (user, index) => ({ ...user, index: index });
// console.log(users.map(func));

// const func = ({ price, ...product }) => ({ ...product, price: price * 0.9 });
// console.log(products.map(func));

// const func = ({ grades: [firstGrade] }) => firstGrade;
// console.log(students.map(func));

// const func = ({ name, age, ...user }) => ({
//   ...user,
//   name: name.toUpperCase(),
//   age: age * 2,
// });
// console.log(users.map(func));

// const func = ({ id }) => `user-${id}`;
// console.log(users.map(func));

// const func = ({ price }) => price > 100;
// console.log(products.map(func));

// const func = ({ age }) => age;
// console.log(users.map(func));

//71
// const func = ({ isActive }) => isActive;
// console.log(users.filter(func));

// const func = ({ price }) => price > 50;
// console.log(products.filter(func));

// const func = ({ salary }) => salary > 45000;
// console.log(users.filter(func));

// const func = ({ role }) => role === "admin";
// console.log(users.filter(func));

// const func = ({ inStock }) => inStock;
// console.log(products.filter(func));

// const func = ({ isActive, role }) => isActive && role === "admin";
// console.log(users.filter(func));

// const func = ({ age }) => age > 30;
// console.log(users.filter(func));

// const func = ({ category }) => category === "weapon";
// console.log(products.filter(func));

// const func = ({ status }) => status === "completed";
// console.log(orders.filter(func));

// const func = ({ name }) => name.length > 5;
// console.log(users.filter(func));

// const filterIsActive = ({ isActive }) => isActive;
// const mapName = ({ name }) => name;
// console.log(users.filter(filterIsActive).map(mapName));

// const filterUnder = ({ price }) => price < 100;
// const doublePrice = ({ price, ...product }) => ({
//   ...product,
//   price: price * 2,
// });
// console.log(products.filter(filterUnder).map(doublePrice));

// const filterAdmin = ({ role }) => role === "admin";
// const formatNameAdmin = ({ name, role }) => `${name} (${role})`;
// console.log(users.filter(filterAdmin).map(formatNameAdmin));

// const filterInStock = ({ inStock }) => inStock;
// const addAvailable = (product) => ({ ...product, available: true });
// console.log(products.filter(filterInStock).map(addAvailable));

// const filterAge = ({ age }) => age > 25;
// const getNameAge = ({ name, age }) => ({ name, age });
// console.log(users.filter(filterAge).map(getNameAge));

//86
// const plusOne = (user) =>
//   user.id === 3 ? { ...user, age: user.age + 1 } : user;
// console.log(users.map(plusOne));

// const setPrice = (product) =>
//   product.id === 1 ? { ...product, price: 150 } : product;
// console.log(products.map(setPrice));

// const toggleIsActive = (user) =>
//   user.id === 5 ? { ...user, isActive: !user.isActive } : user;
// console.log(users.map(toggleIsActive));

// const addTenPercent = ({ price, ...product }) => ({
//   ...product,
//   price: price * 1.1,
// });
// console.log(products.map(addTenPercent));

// const addSelected = (user) =>
//   user.id === 2 ? { ...user, selected: true } : user;
// console.log(users.map(addSelected));

// const addVerified = (user) => ({ ...user, verified: true });
// console.log(users.map(addVerified));

// const increaseArmor = (product) =>
//   product.category === "armor"
//     ? { ...product, price: product.price * 1.2 }
//     : product;
// console.log(products.map(increaseArmor));

// const addDate = (order) =>
//   order.status === "completed" ? { ...order, processed: Date.now() } : order;
// console.log(orders.map(addDate));

// const changeAdmin = (user) =>
//   user.id === 7 ? { ...user, role: "admin" } : user;
// console.log(users.map(changeAdmin));

// const setZero = (product) =>
//   product.id === 3 ? { ...product, quantity: 0 } : product;
// console.log(products.map(setZero));

// const addBonus = (user) =>
//   user.salary > 45000 ? { ...user, bonus: user.salary * 0.1 } : user;
// console.log(users.map(addBonus));

// const addPriority = (order) =>
//   order.total > 150 ? { ...order, priority: true } : order;
// console.log(orders.map(addPriority));

// const setUppercase = (product) => ({
//   ...product,
//   name: product.name.toUpperCase(),
// });
// console.log(products.map(setUppercase));

// const addDiscount = (product) =>
//   product.price > 100 ? { ...product, discount: 0.15 } : product;
// console.log(products.map(addDiscount));

// const addGrade = (student) =>
//   student.id === 1 ? { ...student, grades: [...student.grades, 95] } : student;
// console.log(students.map(addGrade));

// const removeFirst = ([, ...rest]) => rest;
// console.log(removeFirst(users));

// const newArray = (x, y) => [...x, y];
// console.log(newArray([1, 2, 3], 4));

// const newObject = (obj, key, value) => ({ ...obj, [key]: value });
// console.log(newObject({ name: "Alice" }, "age", 25));

// const mergeObj = (obj1, obj2) => ({ ...obj1, ...obj2 });
// console.log(mergeObj({ a: 1, b: 2 }, { b: 3, c: 4 }));

// const sumAges = (sum, { age }) => sum + age;
// console.log(users.reduce(sumAges, 0));

// const sumProduct = (sum, { price }) => sum + price;
// console.log(products.reduce(sumProduct, 0));

// const countActive = (activeUserCount, { isActive }) =>
//   isActive ? activeUserCount + 1 : activeUserCount;
// console.log(users.reduce(countActive, 0));

// const maxSalary = (max, { salary }) => (salary > max ? salary : max);
// console.log(users.reduce(maxSalary, 0));

// const minPrice = (min, { price }) => (min > price ? price : min);
// console.log(products.reduce(minPrice, Infinity));

// const totalInventory = (total, { price, quantity }) => total + price * quantity;
// console.log(products.reduce(totalInventory, 0));

// const countByRole = (count, { role }) => ({
//   ...count,
//   [role]: (count[role] || 0) + 1,
// });
// console.log(users.reduce(countByRole, {}));

// const groupByCat = (group, { category, ...product }) => ({
//   ...group,
//   [category]: [...(group[category] || []), product],
// });
// console.log(products.reduce(groupByCat, {}));

// const aveAge = (sum, { age }, _, arr) => sum + age / arr.length;
// console.log(users.reduce(aveAge, 0));

// const sumTotal = (sum, { total }) => sum + total;
// console.log(orders.reduce(sumTotal, 0));

// const idByUser = (ids, { id, ...user }) => ({
//   ...ids,
//   [id]: { ...(ids[id] || {}), ...user },
// });
// console.log(users.reduce(idByUser, {}));

// const allStudentGrades = (allGrades, { grades }) => [...allGrades, ...grades];
// console.log(students.reduce(allStudentGrades, []));

// const isStocked = (count, { inStock }) => {
//   const status = inStock ? "inStock" : "outOfStock";
//   return {
//     ...count,
//     [status]: (count[status] || 0) + 1,
//   };
// };
// console.log(products.reduce(isStocked, {}));

// const sumSalaryActiveUsers = (sum, { isActive, salary }) =>
//   sum + (isActive ? salary : 0);
// console.log(users.reduce(sumSalaryActiveUsers, 0  ));

// const allName = (names, { name }) => [...names, name];
// console.log(users.reduce(allName, []));
