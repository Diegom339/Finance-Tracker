import React, { useEffect, useState } from 'react';
import { fetchTransactions, addTransaction } from '../services/api';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions()
      .then((res) => setTransactions(res.data))
      .catch((err) => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((tx) => (
          <li key={tx._id}>
            {tx.date} - {tx.description} - ${tx.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}
