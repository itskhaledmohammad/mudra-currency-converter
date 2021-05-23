import express from 'express';
import { catchErrors } from '@api/v1/utils/errorHandlers'

const { validateInput } = require('@api/v1/symbols/symbols.middleware')
const schemas = require('@api/v1/symbols/symbols.validator')
const { listSymbols, listAllCurrencyRate, convertCurrency } = require('./symbols.controller')
const router:express.Router = express.Router()


router.get('/symbols', catchErrors(listSymbols))
router.get('/symbols/convert', validateInput(schemas.currencyConvertSchema), catchErrors(convertCurrency))
router.get('/latest', catchErrors(listAllCurrencyRate))

module.exports = router;