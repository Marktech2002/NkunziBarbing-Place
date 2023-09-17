import app from "./app";

const PORT : string | undefined = process.env.PORT;
app.listen(PORT , () :void => {
   console.log(`Oya oya i dey on port ${ PORT }`)
})
   