const express = require('express')
const app = express()

const cookieParser = require("cookie-parser")


app.use(express.json())
app.use(cookieParser())

/**
 *  -Routes Required
 */
const authRouter = require('./routers/auth.routes')
const accountRouter = require('./routers/account.routes')
const transactionRoutes = require('./routers/transaction.routes')

/**
 *  - Use Routes
 */
app.get('/', (req, res)=>{
  res.send("Ledger Service is up and running")
})

app.use('/api/auth', authRouter)
app.use('/api/accounts', accountRouter)
app.use('/api/transactions', transactionRoutes)

module.exports = app;