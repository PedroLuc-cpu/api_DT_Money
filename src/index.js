const express = require("express");

const bodyParser = require("body-parser")
const v1TransactionRouter = require("./v1/routes/TransactionRoutes");


const app = express()
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.use(bodyParser.json());
app.use("/api/v1/transactions", v1TransactionRouter);



app.listen(PORT, () =>{
 console.log(`API is listening on port ${PORT}`)
})