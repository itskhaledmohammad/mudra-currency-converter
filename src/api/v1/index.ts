import express from 'express' 
const symbol_routes:express.Router = require('@api/v1/symbols/symbols.routes')

const router: express.Router = express.Router()

router.use('/v1', symbol_routes)

module.exports = router;