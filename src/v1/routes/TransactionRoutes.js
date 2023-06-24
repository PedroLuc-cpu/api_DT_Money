const express = require("express");
const transactionController = require("../../controllers/TransactionController")

const router  = express.Router();

router.get('/', transactionController.getAllTransactions)

router.get('/:transactionId',transactionController.getOneTransaction)

router.post('/', transactionController.createNewTransaction);

router.patch('/:transactionId', transactionController.updateOneTransaction);

router.delete('/:transactionId', transactionController.deleteOneTransaction);

module.exports = router;