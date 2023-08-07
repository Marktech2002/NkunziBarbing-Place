import express , { Express , Request , Response} from "express";
import dotenv from "dotenv";
import { Color } from "colors";
import { connectDb } from "./config/db";
import userRoute from "./routes/userRoute";
import subRoute from "./routes/subRoute";
import planRoute from "./routes/planRoute";
import { errorHandler , notFoundMiddleware} from "./middlewares/errorMiddleware";
dotenv.config();
const app : Express = express();
const PORT : string | undefined = process.env.PORT;


connectDb();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/nkunzi/user', userRoute);
app.use('/nkunzi/plan', planRoute);
app.use('/nkunzi/subscription' , subRoute)
app.use(errorHandler)
app.use(notFoundMiddleware)

app.listen(PORT , () :void => {
   console.log(`Oya oya i dey on port ${ PORT }`)
})
   





/*
https://medium.com/@chiragmehta900/how-to-send-mail-in-node-js-with-nodemailer-in-typescript-889cc46d1437 
*/