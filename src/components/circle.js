// import using require

// declare class


// export class using module.exports
const Shape = require('./shape');
class Circle extends Shape{
    constructor(){
        super();

    }
    calculateArea(){

     return "hello"
    }
}
module.exports = Circle;
