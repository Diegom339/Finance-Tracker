// models/Transaction.js
import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
    category: { type: String },
    type: { type: String, enum: ['income', 'expense'], required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    notes: { type: String },
    tags: [{ type: String }],
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

const Transaction = mongoose.model('Transaction', TransactionSchema);
export default Transaction;
