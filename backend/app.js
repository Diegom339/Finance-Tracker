require('dotenv').config();
const express = require('express');
const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');
const transactionsRouter = require('./routes/transactions');
const app = express();
app.use(express.json());

// Plaid client
const config = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
                            'PLAID-SECRET':   process.env.PLAID_SECRET } }
});
app.locals.plaidClient = new PlaidApi(config);

// Routes
app.use('/api/transactions', transactionsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
