const transactionService = require("../services/TransactionService")

const getAllTransactions = (req, res) =>{
try {
  const allTransactions = transactionService.getAllTransaction();
  res.send({status: "OK", data: allTransactions,})
} catch (error) {
  res
  .status(error?.status || 500)
  .send({status: "FAILED", data:{error: error?.message || error}})
}
};

const getOneTransaction = (req, res) => {
 const {
  params:{ transactionId},
 } = req;
 if (!transactionId){
  res
  .status(400)
  .send({
    status: "FAILED",
    data: {error:" parameters ':transactionId' can not be empty"}
  });
 }
try {
  const transacion = transactionService.getOneTransaction(transactionId);
  res.send({status:"OK", data: transacion}) 
} catch (error) {
  res
  .status(error?.status || 500)
  .send({status:"FAILED", data:{error: error?.message || error}})
}
};

const createNewTransaction = (req, res) => {
 const {body} = req;
 if(
  !body.description ||
  !body.price ||
  !body.category ||
  !body.type
 ) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'description', 'price', 'category', 'type'",
        },
      });
    return;
  }
 const newTrasaction = {
  description: body.description,
  price: body.price,
  category: body.category,
  body: body.type
 }
 try {
  const createTrasaction = transactionService.createNewTransaction(newTrasaction);
  res.status(201).send({status:"OK", data: createTrasaction})
 } catch (error) {
  res
  .status(error?.status || 500)
  .send({status:"FAILED", data:{error: error?.message || error}});
 }

};

const updateOneTransaction = (req, res) => {
 const {
  body,
  params:{transactionId},
 }= req
 if(!transactionId){
  res
  .status(400)
  .send({
    status: 'FAILED',
    data:{error: "parameter ':transactionId' can not be empty"}
  })
 }
 try {
  const updateTransaction = transactionService.updateOneTransaction();
  res.send({status: 'OK', data: updateTransaction});
 } catch (error) {
  res
  .status(error?.status || 500)
  .send({status: 'FAILED', data:{error: error?.message || error}})
 }
};

const deleteOneTransaction = (req, res) => {
  const{
  params:{transactionId},
 } = req;
 if(!transactionId){
  res
  .status(400)
  .send({
    status: "FAILED",
    data:{error: "Parameter ':TransactionId' can not be empty"}
  })
 }
try {
  transactionService.deleteOneTransaction(transactionId)
  res.status(204).send({status: 'OK'});
} catch (error) {
  res
  .status(error?.status || 500)
  .send({status: "FAILED", data: {error: error?.message || error}});
}
};

module.exports = {
getAllTransactions,
getOneTransaction,
createNewTransaction,
updateOneTransaction,
deleteOneTransaction,
};
