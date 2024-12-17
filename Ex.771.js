function printInfo(n, a) {
    console.log(`Name: ${this.firstName}, Age: ${this.lastName}`);
}

let person = {
    firstName: `Jhon`,
    lastName: `Smith`
}

printInfo.call(person)

 

