const Transacion = require("../database/trasaction")
const {v4: uuid} = require("uuid");

const getAllTransaction = () => {
try {
 const allTransactions = Transacion.getAllTransactions()
 return allTransactions;
} catch (error) {
 throw error
}
}

const getOneTransaction = (transacionId) => {
try {
 const transacion = Transacion.getOneTransaction(transacionId)
 return transacion;
} catch (error) {
 throw error;
}
}

const createNewTransaction = (newTransaction) => {
 const transacionToInsert = {
  ...newTransaction,
  id: uuid(),
  createdAt: new Date().toLocaleDateString("pt-BR",{timeZone:"UTC"}),
  updatedAt: new Date().toLocaleDateString("pt-BR",{timeZone:"UTC"}),
 };
 try {
   const createTransaction = Transacion.createNewTransaction(transacionToInsert);
   return createTransaction;
 } 
 catch (error) {
  throw error;
  
 }
}

const updateOneTransaction = (transacionId, changes) => {
try {
 const updateTransaction = Transacion.updateOnetransacion(transacionId, changes)
 return updateTransaction;
} catch (error) {
 throw error
}
}

const deleteOneTransaction = (transacionId) => {
try {
  Transacion.deleteOnetransacion(transacionId)
} catch (error) {
 throw error;
}
}


module.exports = {
 getAllTransaction,
 getOneTransaction,
 createNewTransaction,
 updateOneTransaction,
 deleteOneTransaction,
};