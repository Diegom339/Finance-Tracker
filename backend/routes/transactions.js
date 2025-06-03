// routes/transactions.js
import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

// GET all transactions
router.get('/', async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

// POST new transaction
router.post('/', async (req, res) => {
  const newTransaction = new Transaction(req.body);
  const saved = await newTransaction.save();
  res.json(saved);
});

// DELETE a transaction
router.delete('/:id', async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
