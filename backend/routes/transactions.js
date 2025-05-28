const router = require('express').Router();
const { startTransactionsSync } = require('../controllers/transactions');

// Exchange public_token for access_token
router.post('/exchange', startTransactionsSync);

// Fetch transactions
router.get('/', async (req, res) => {
  // Query DB and return saved transactions
});

module.exports = router;
