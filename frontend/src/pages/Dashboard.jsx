import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx._id}>
            {tx.date} - {tx.category} - ${tx.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
