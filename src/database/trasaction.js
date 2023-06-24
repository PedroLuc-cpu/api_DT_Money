const DB = require("./db.json");
const {saveToDatabase} = require('./utils')

const getAllTransactions = () =>{
try {
   return DB.transations;
} catch (error) {
  throw error
}
}

const getOneTransaction = (transactionId) =>{
try {
const transacion = DB.transations.find(trasaction => trasaction.id === transactionId)
  if(!transacion){
  throw {
    status: 400,
    message: `cant find transaction with id ${transactionId}`
  };
}
return transacion
} catch (error) {
    throw {status: error?.status || 500, message: error?.message || error}
}
}


const createNewTransaction = (newTransaction) =>{
 const isAlreadyAdded = DB.transations.findIndex((trasaction) => trasaction.description === newTransaction.description) > -1;
 if(isAlreadyAdded){
  throw {
    status: 400,
    message: `Transaction with the description ${newTransaction.description} already exists`
  };
 }
 try {
  DB.transations.push(newTransaction);
  saveToDatabase(DB);
  return newTransaction;
 } catch (error) {
  throw { status: 500 , message: error?.message || error}
 }
}

const updateOnetransacion = (transacionId, changes) => {
try {
    const indexForUpdate = DB.workouts.findIndex(
    (transacion) => transacion.id === transacionId
  );
  if (indexForUpdate === -1) {
    throw{
      status: 400,
      message: `Can't find transacion with the id ${transacionId}`
    }
  }
  const updatedtransacion = {
    ...DB.transations[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("pt-BR", { timeZone: "UTC" }),
  };
  DB.workouts[indexForUpdate] = updatedtransacion;
  saveToDatabase(DB);
  return updatedtransacion;
} catch (error) {
  throw {status: error?.status || 500, message: error?.message || error}
}
};

const deleteOnetransacion = (transacionId) => {
try {
    const indexForDeletion = DB.workouts.findIndex(
    (transacion) => transacion.id === transacionId
  );
  if (indexForDeletion === -1) {
    throw {
    status: 400,
    message: `Can't find workout with the id '${transacionId}'`
    }
  }
  DB.transations.splice(indexForDeletion, 1);
  saveToDatabase(DB);
} catch (error) {
  throw {status: error?.status || 500, message: error?.message || error}
}
};


module.exports = {
getAllTransactions,
createNewTransaction,
getOneTransaction,
updateOnetransacion,
deleteOnetransacion,
}