import mongoose, { Schema, Document, Types } from "mongoose"; 
interface Plan {
    name : string ;
    amount : number ;
    interval : string ;
    plan_code : string ;
    id : number ;
}
const planSchema : Schema<Plan> = new Schema<Plan>({
      name : {
        type : String,
        required : [true , "Please provde the plan name"],
        trim : true ,
      },
      amount : {
        type : Number ,
        required : [true , "Please enter an amount"],
      },
      interval : {
        type : String ,
        required : [true , "Please provide an interval"],
        unique : true,
      },
      plan_code : {
        type : String ,
        required : [ true , "Please specify a plan code"],
      },
      id : {
       type : Number ,
       required : [true , "An id please"]
      }
})

export const planModel = mongoose.model<Plan>("Plan" , planSchema)