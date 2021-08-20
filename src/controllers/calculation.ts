import { Request, Response } from "express";
import { doAddTwoNumbers } from "./calculationController";

const addNumber = (req:Request,res:Response):object=>{

   let numberOne:number = parseInt(req.params.numberOne)
   let numberTwo:number = parseInt(req.params.numberTwo)

    let addedNumber = doAddTwoNumbers(numberOne,numberTwo)

    return res.json({status:'ok',result:addedNumber}).status(200)
}




export {addNumber}