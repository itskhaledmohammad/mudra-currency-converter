import express from "express";
const { listSymbols, listAllCurrencyRate, convertCurrency } = require("./symbols.controller")

const router:express.Router = express.Router()

router.get('/symbols', listSymbols)
router.get('/symbols/convert', convertCurrency)
router.get('/latest', listAllCurrencyRate)

module.exports = router;