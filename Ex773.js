const arr = [
    { age: 17,
      name: `John` },
    { age: 22,
      name: `David`},
    { age: 31,
      name: `Nina` }
]

const filteredAge = arr.filter((arr) => {
    return  arr.age >= 18
});

const filteredName = arr.map((arr) => arr.name);


console.log(filteredAge);
console.log(filteredName);

