import Header from "./Header"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaClock, FaCocktail, FaParking, FaSnowflake, FaTshirt, FaUtensils } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";


const HotelService = () => {
  return (
    <>
        <Container className = 'mb-2'>
            <Header title={"Our Services"}/>
            <Row>
                <h4 className="text-center">
                    Services at <span className = "hotel-color">lakeSide - </span> Hotel
                    <span className="gap-2">
                        <FaClock/> 24 Hour Front Desk </span>
                </h4>
            </Row>
            <hr/>

            <Row xs={1} md={2} lg={3} className = 'g-4 mt-2'>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="hotel-color">
                                <FaWifi/> WiFi
                            </Card.Title>
                            <Card.Text> Stay connected with high-speed internet access </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="hotel-color">
                                <FaUtensils/> Breakfast
                            </Card.Title>
                            <Card.Text> Start your day with healthy food </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>


                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="hotel-color">
                                <FaTshirt/> Laundry
                            </Card.Title>
                            <Card.Text> Keep your clothes clean and fresh with our laundry service </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="hotel-color">
                                <FaCocktail/> Mini Bar
                            </Card.Title>
                            <Card.Text> Enjoy a refreshing drink or snack from our in-room mini-bar </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="hotel-color">
                                <FaParking/> Parking
                            </Card.Title>
                            <Card.Text> Park your car conveniently in our on-site parking lot </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className="hotel-color">
                                <FaSnowflake/> Air Conditioning
                            </Card.Title>
                            <Card.Text> Stay cool and comfortable with our air conditioning system </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </Container>
    </>
  )
}

export default HotelService