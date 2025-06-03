// models/Transaction.js
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
  name: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  category: String,
  type: String, // income or expense
});

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;
