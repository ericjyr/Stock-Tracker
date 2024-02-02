import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import Search from './components/Search';
import Stock from './components/Stock';
import { Header } from "./components/Header";



const App = () => {
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = (result) => {
    setSearchResult(result);
    console.log(result.symbol)
 


  };

  return (
    <Container>
      <Header />
      <Row>
        <Col xl={5} lg={12}>
          <Search onSearchResult={handleSearchResult} />
        </Col>
        <Col xl={7} lg={12} className='graph-col'>
          {searchResult && <Stock stock={searchResult} />}
        </Col>
      </Row>
    </Container>
  );
};

export default App;
