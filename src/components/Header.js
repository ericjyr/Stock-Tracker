import { Container, Row, Col } from "react-bootstrap";

export const Header = () => {

    return (
        <section className="header" id="home">
          <Container>
            <Row className="aligh-items-center ">
                <Col className="header-col">
                    <div className="header-div m-auto">
                        <h1>StockSavvy</h1>
                    </div>
                </Col>
            </Row>
          </Container>
        </section>
      )
}