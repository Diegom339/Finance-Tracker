import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Spinner, Row, Col, Alert } from 'react-bootstrap';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/transactions/summary');
        setSummary(response.data);
      } catch (err) {
        setError('Could not load dashboard summary.');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-4" />;
  if (error) return <Alert variant="danger" className="mt-4">{error}</Alert>;

  return (
    <div className="container">
      <h2 className="mb-4">Dashboard Overview</h2>
      <Row>
        <Col md={4}>
          <Card bg="primary" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Total Transactions</Card.Title>
              <Card.Text>{summary.total}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Total Income</Card.Title>
              <Card.Text>${summary.income.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="danger" text="white" className="mb-4">
            <Card.Body>
              <Card.Title>Total Expenses</Card.Title>
              <Card.Text>${summary.expenses.toFixed(2)}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
