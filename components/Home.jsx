import { Card, Button, Container, Col, Row } from "react-bootstrap"
import books from '../BOOKS/horror.json'


const Home = () => (
  <Container> 
    <Row>
      {
books.map(book => ( 
<Card style={{ width: '12rem' }}>
  <Card.Img variant="top" src={book.img} />
  <Card.Body>
    <Card.Title>{book.title}</Card.Title>
    <Card.Text>Category: {book.category}</Card.Text>
    <Button variant="danger m-1">{book.price}</Button>
    
  </Card.Body>
</Card>
))
   }

</Row>
</Container>
)

export default Home
