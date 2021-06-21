const items = {
    food: 300,
    coooldrinks: 90
}


function Cart1(name) {
    console.log("hello" + name);
    return 9;
}

// Arrow method another way for declaring functions in ES6 

const Cart2 = (name) => (console.log("hello" + name));
///more simple way
const Cart3 = name => console.log("hello" + name)
Cart1("ANIL");
Cart2("ANIL");
Cart3("ANIL");
// var num = Cart("ANIL");
// console.log(num);