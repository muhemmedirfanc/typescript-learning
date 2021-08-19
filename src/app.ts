//Basic types

let id:number = 5;
let company:string = 'this is a string';
let isPublished:Boolean = true;

// initilize and assign value later
let age:number

age = 21

//array type
let arr: number[] = [];
arr.push(5)


// Objects 
const user:{ id:number,name:string} = {id:1,  name:"sayed"}

//or

type userOne = {
    id:number,
    name:string
}

const userOne:userOne = {
    id:8,
    name:'favas'
}

// types provided by ts

//any  == it can be any type string number or boolean

let a:any = 'a'
a = 6

//Tuple

let person: [string,number,boolean] = ['a',5,true]


//Tuple array

let employee:[number,string][];

employee = [    
    [5,"ippu"],
    [5,"ippu"],
    [5,"ippu"],
]


//Union types 
let uid: number | string = 5

uid = 'b'


//Enum type
enum directionOne{

    up = 5,
    down
}

console.log(directionOne.up,directionOne.down)

enum directionTwo{
    up = 'UP',
    down = 'DOWN'
}


//type assertion 
let oid:any = 1
let oidNum = <number>oid

console.log(oidNum)



//or

let oidOne :any = 1

let oidNumOne = oidOne as number


// functions

let add = (a:number,b:number):number =>{
    return a+b
}

console.log(add(1,5))

//void

let log = (messgae:string | number):void =>{
    console.log(messgae)
}

//interfaces

interface userInterface {

   readonly id:number,
    name:string,
    age?:number
}

const userTwo: userInterface = {
    id:9,
    name:'yaseen'
}

//interface in function

interface addFunction {
    (a:number,b:number):number
}

const addNum: addFunction = (a:number,b:number): number=>{

    return a+b; 
}


console.log(addNum(8,5))




//classes 


interface PersonInterface {
    id:number,
    name:string,
    register():string
}


class Person implements PersonInterface{

    id:number
    name:string

    constructor(id:number,name:string){
        this.id = id
        this.name = name
    }

    register(){
        return `${this.name} is now registered.`
    }

}

//sub classess

const favas = new Person(8,'favas')

console.log(favas.register())

class Employ extends Person{

    position:string

    constructor(id:number,name:string,position:string){
        super(id,name),
        this.position = position
    }
}

const favasEmployee = new Employ(8,'favas','Developer')

favasEmployee.register()


