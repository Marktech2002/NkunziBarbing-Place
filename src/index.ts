import express , { Express , Request , Response} from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db";
import userRoute from "./routes/userRoute";
import subRoute from "./routes/subRoute";
import planRoute from "./routes/planRoute";
import appointmentRoute from "./routes/appointmentRoute";
import { errorHandler , notFoundMiddleware} from "./middlewares/errorMiddleware";
dotenv.config();
const app : Express = express();
const PORT : string | undefined = process.env.PORT;

//conect db
connectDb();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/nkunzi/user', userRoute);
app.use('/nkunzi/plan', planRoute);
app.use('/nkunzi/subscription' , subRoute);
app.use('/nkunzi/appointment', appointmentRoute);
app.use(errorHandler)
app.use(notFoundMiddleware)

app.listen(PORT , () :void => {
   console.log(`Oya oya i dey on port ${ PORT }`)
})
   