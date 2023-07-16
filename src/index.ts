import express from "express";
import dotenv from "dotenv";
import { Color } from "colors";
import { connectDb } from "./config/db";
const app = express();
const PORT : string | undefined = process.env.PORT;
dotenv.config();

connectDb();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.listen(PORT , () :void => {
   console.log(`Oya oya i dey on port ${ PORT }`)
})






/*
https://medium.com/@chiragmehta900/how-to-send-mail-in-node-js-with-nodemailer-in-typescript-889cc46d1437 
*/