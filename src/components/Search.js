import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { actionsApi } from '../api/actionsApi';

const Search = ({ onSearchResult }) => {

  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() !== '') {
      try {
        const response = await actionsApi.getStock(searchTerm);
        const stockResult = response.data.results[0];
        onSearchResult && onSearchResult(stockResult);
      } catch (error) {
        console.error('Error searching for stocks:', error);
      }
    }
  };

  const handleQuickSearch = async (symbol) => {
    try {
      const response = await actionsApi.getStock(symbol);
      const stockResult = response.data.results[0];
      onSearchResult && onSearchResult(stockResult);
    } catch (error) {
      console.error(`Error searching for ${symbol}:`, error);
    }
  };


  return (
        <section className="search-box" >
          <Container>
            <Row className="aligh-items-center ">
              <Col size={12} className="text-center m-5">
                <input
                  className='stock-input'
                  type="text"
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder="Enter stock symbol"
                />
                <button className='stock-btn' onClick={handleSearch}>Search</button>
              </Col>
              </Row>
              <Row>
              <Col className="text-center mb-1">
                <button className='stock-ft' onClick={() => handleQuickSearch('AAPL')}>Apple Inc</button>
              </Col>
              <Col className="text-center mb-1">
                <button className='stock-ft' onClick={() => handleQuickSearch('TSLA')}>Tesla Inc</button>
              </Col>
              <Col className="text-center mb-1">
                <button className='stock-ft' onClick={() => handleQuickSearch('AMZN')}>Amazon.com Inc</button>
              </Col>
              <Col className="text-center mb-1">
                <button className='stock-ft' onClick={() => handleQuickSearch('GOOGL')}>Alphabet Inc</button>
              </Col>
              <Col className="text-center mb-1">
                <button className='stock-ft' onClick={() => handleQuickSearch('INTC')}>Intel Corporation</button>
              </Col>
            </Row>
          </Container>
        </section>

  );
};

export default Search;
