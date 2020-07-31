import {Example1} from './example1';
class Example2 extends Example1{
    constructor(inp){
     super(inp)
      console.log("I am in Child",inp);
    }
}

let child=new Example2("Diwesh");