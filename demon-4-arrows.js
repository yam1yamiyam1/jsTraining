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
const { count, time } = require("console");
const { inflate } = require("zlib");
const { CLIENT_RENEG_LIMIT } = require("tls");
const { totalmem } = require("os");
const { join } = require("path");
const { get } = require("http");
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

//121
// const returnAdd1= (x) => () => x+1
// console.log(returnAdd1(6)())

// const logName = (name) =>() => console.log(name)
// console.log(logName("alice")())

// const timesThree = (x) =>() => console.log(x*3)
// timesThree(5)()

// const addPrefix = (str) =>() =>  `${str} World`
// console.log(addPrefix("Hello")())

// const threshold = (x) =>(y) => y > x
// console.log(threshold(10)(15))

// const applyDiscount = (discount) => (price) => (1 - discount) * price;
// console.log(applyDiscount(0.1)(100));

// const filterAdmin = (arr) => (roleFilter) =>
//   arr.filter(({ role }) => role === roleFilter);
// console.log(filterAdmin(users)("admin"));

// const extractor = (key) => (obj) => obj[key];
// const getName = extractor("name");
// console.log(getName({ name: "Alice", age: 25 }));

// const returnValue = (x) => () => x;
// console.log(returnValue(42)());

// const removeById = (idX) => (arr) => arr.filter(({ id }) => id !== idX);
// const removeThree = removeById(3);
// console.log(removeThree(products));

// const triple = (x) => (y) => (z) => x + y + z;
// console.log(triple(1)(2)(3));

// const createCounter = (x) => ({
//   increment: () => x + 1,
// });
// const counterObj = createCounter(5);
// console.log(counterObj.increment());

// const add = (initial) => (toAdd) => initial + toAdd;
// const setInitial = add(5);
// console.log(setInitial(2));

// const setTax = (taxValue) => (toBeTaxed) => toBeTaxed + taxValue * toBeTaxed;
// const toTax = setTax(0.2);
// console.log(toTax(100));

// const setCategory = (categoryFilter) => (arr) =>
//   arr.filter(({ category }) => category === categoryFilter);
// const filterByWeapon = setCategory("weapon");
// console.log(filterByWeapon(products));

// const filterBy = (filterKey) => (joinBy) => () =>
//   users
//     .filter((obj) => obj[filterKey])
//     .map(({ name }) => name)
//     .join(joinBy);

// const getActiveNames = filterBy("isActive")(", ");
// console.log(getActiveNames());

// const setMinPrice = (minPrice) => (increaseRate) =>
//   products
//     .filter(({ price }) => price > minPrice)
//     .map(({ price }) => price + price * increaseRate);
// const setIncrease = setMinPrice(100);
// console.log(setIncrease(0.15));

// const filterByRole = (role) => (sortOrder, sortBy) => (outputCount) => {
//   const ascending = (a, b) =>
//     typeof a[sortBy] === "number"
//       ? a[sortBy] - b[sortBy]
//       : a[sortBy].localeCompare(b[sortBy]);
//   const descending = (a, b) =>
//     typeof a[sortBy] === "number"
//       ? b[sortBy] - a[sortBy]
//       : b[sortBy].localeCompare(a[sortBy]);
//   return users
//     .filter((user) => user.role === role)
//     .sort(sortOrder === "asc" ? ascending : descending)
//     .slice(0, outputCount);
// };
// console.log(filterByRole("user")("asc", "salary")(3));

// const sumTotal = (sum, total) => sum + total;
// const inventoryTotal = ({ price, quantity }) => price * quantity;
// const getAllInventory = (filterKey) => (filter) =>
//   products
//     .filter((product) => product[filterKey] === filter)
//     .map(inventoryTotal)
//     .reduce(sumTotal, 0);
// console.log(getAllInventory("inStock")(true));

// const groupUsers = (groupBy) =>
//   users.reduce(
//     (group, user) => ({
//       ...group,
//       [user[groupBy]]: (group[user[groupBy]] || 0) + 1,
//     }),
//     {},
//   );
// console.log(groupUsers("role"));

// const getAverage = (sum, { salary }, _, arr) => sum + salary / arr.length;
// const filterBy = (filterKey, filterValue) =>
//   users.filter((user) => user[filterKey] === filterValue).reduce(getAverage, 0);
// console.log(filterBy("role", "admin"));

// const highestSalary = () =>
//   users.reduce((high, user) => (high.salary > user.salary ? high : user), {});
// console.log(highestSalary());

// const top3Products = (sortBy, sortOrder) => {
//   const ascending = (a, b) =>
//     typeof a[sortBy] === "number"
//       ? a[sortBy] - b[sortBy]
//       : a[sortBy].localeCompare(b[sortBy]);
//   const descending = (a, b) =>
//     typeof a[sortBy] === "number"
//       ? b[sortBy] - a[sortBy]
//       : b[sortBy].localeCompare(a[sortBy]);
//   return products
//     .sort(sortOrder === "asc" ? ascending : descending)
//     .slice(0, 3);
// };
// console.log(top3Products("price", "desc"));

// const aveIsActive = () =>
//   users.reduce(
//     (count, { isActive }, _, arr) =>
//       isActive ? count + (1 / arr.length) * 100 : count,
//     0,
//   );
// console.log(aveIsActive());

// const joinValues = (joinBy, joinWith) =>
//   users.map((user) => user[joinBy]).join(`${joinWith} `);
// console.log(joinValues("name", ","));

// const getByRole = (roleFilter) => {
//   const list = users.reduce(
//     (collection, { role, name }) =>
//       role === roleFilter ? [...collection, name] : collection,
//     [],
//   );
//   return list.length !== 0 ? list : `No ${roleFilter}s`;
// };
// console.log(getByRole("super admin"));

// const mergeUsers = (maxIteration) =>
//   users.slice(0, maxIteration).reduce(
//     (merged, user) =>
//       Object.keys(users[0]).reduce(
//         (collection, key) => ({
//           ...collection,
//           [key]: [...(collection[key] || []), user[key]],
//         }),
//         merged,
//       ),
//     {},
//   );
// console.log(mergeUsers());

// const uniqueCategories = () => {
//   const unique = [...new Set(products.map(({ category }) => category))];
//   return unique;
// };
// console.log(uniqueCategories());

// const lookupIds = () =>
//   users.reduce(
//     (lookupIndex, { id, name }) => ({ ...lookupIndex, [id]: name }),
//     {},
//   );
// console.log(lookupIds());

const filterRole =
  (roleFilter) =>
  ({ role }) =>
    role === roleFilter;
const salaryIncrease = (rate, bonus) => (user) => ({
  ...user,
  salary: user.salary * (1 + rate),
  bonus: bonus,
});
const sortingOption = (sortOrder) =>
  sortOrder === "asc"
    ? (a, b) => a.salary - b.salary
    : (a, b) => b.salary - a.salary;

const minimumSalary =
  (minSalary) =>
  ({ salary }) =>
    salary > minSalary;

const boss =
  (roleFilter) =>
  (salaryIncreaseRate, bonusValue) =>
  (minSalary) =>
  (sortOrder, topCount) =>
    users
      .filter(filterRole(roleFilter))
      .map(salaryIncrease(salaryIncreaseRate, bonusValue))
      .filter(minimumSalary(minSalary))
      .sort(sortingOption(sortOrder))
      .slice(0, topCount);
console.log(boss("admin")(0.1, 5000)(50000)("asc", 2));
