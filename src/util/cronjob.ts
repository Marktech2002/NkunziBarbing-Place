import { SubscriptionModel } from "../models/subscriptionModel";

export const updateSubscriptionStatus = async () => {
     const oneMonthAgo = new Date() ;
     const id : string = "64d41359bff723b7a36c1cfc";
     const sub = await SubscriptionModel.findById(id)

   let date = sub.createdAt 
   console.log(oneMonthAgo.getUTCMonth() + 1)
   console.log(date.getUTCMonth() + 1)
}  

