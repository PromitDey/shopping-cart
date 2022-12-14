import React from "react";
import {Container, ListGroup, ListGroupItem, Button, CardHeader, Card, CardBody,CardFooter, Col, Row} from "reactstrap"

const Cart = ({cartItem, removeItem, buyNow}) => {
    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice)
    })

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img height = {80}
                            src = {item.tinyImage}
                            />
                            </Col>
                            <col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price : ${item.productPrice}</span>
                                <Button color="danger" onClick = {()=>removeItem(item)}>Remove
                                </Button>
                            </col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* If your cart is empty */}
            {
                cartItem.length >= 1 ?(
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total 
                        </CardHeader>
                        <CardBody>
                            Your Amount for {cartItem.length} product is {amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>
                                Pay Here
                            </Button>
                        </CardFooter>
                        
                    </Card>
                ) : (
                    <h1 className = "text-warning">Your Cart is Empty !</h1>
                
            )}
        </Container>
    )
}
export default Cart