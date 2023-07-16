import mongoose, {Schema , Document, Types, AnyKeys} from "mongoose";

enum planType {
    Monthly = "monthly",
    Yearly = "yearly",
}

export interface subscription extends Document {
    userId : Types.ObjectId;
    plan : planType;
    price :number ;
    status :string ;
};

const subscriptionSchema = new Schema<subscription>({
    userId : {
        type : mongoose.Schema.Types.ObjectId ,
        ref : 'User',
        required : true,
    },
    plan : {
        type : String , 
        enum : Object.values(planType),
        required : true ,
    },
    price : {
        type : Number ,
        required : true ,
        default : function () : any {
            return this.plan === planType.Monthly ? 30 : 100 ;
        }
    },
    status : {
        type: String,
        required: true,
        default: 'notActive',
    }
})

export const SubscriptionModel = mongoose.model<subscription>('Subscription', subscriptionSchema);