import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import helpers from '../util/helpers';
import { actionsApi } from '../api/actionsApi';
import { Container, Row, Col } from 'react-bootstrap';


const Stock = ({ stock }) => {

  const [name, setName] = useState('');
  const [stockChartXValues, setStockChartXValues] = useState([]);
  const [stockChartYValues, setStockChartYValues] = useState([]);

  useEffect(() => {
    const fetchStock = async () => {

      const START_DT = helpers.getDateNDaysAgo(100);
      const END_DT = helpers.getDateNDaysAgo(0);

      try {
        const response = await actionsApi.getAggregates(stock.ticker, START_DT, END_DT);
        const data = await response.data;
        console.log(data)

        const stockChartYValuesFunction = [];

        for (const key in data['results']) {
          stockChartYValuesFunction.push(data['results'][key]['o']);
        }

        const arrSize = stockChartYValuesFunction.length;

        setName(stock.ticker + ' - ' + stock.name)
        setStockChartXValues(helpers.getLastNDays(arrSize));
        setStockChartYValues(stockChartYValuesFunction);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStock();
  }, [stock]); 


  return (
    <Container className='m-auto'>
      <Row>
        <Col className='m-auto graph-div'>
      <Plot 
        className='graph m-auto'
        data={[
          {
            x: stockChartXValues,
            y: stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'darkmagenta' },
          },
        ]}
        layout={{ width: '300px', height: '100%', title: name }}
      />
      </Col>
      </Row>
    </Container>
  );
};

export default Stock;
