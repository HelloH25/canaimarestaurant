import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import menu from '../pictures/menu/menu'
const Menu = () => {
   const renderMenu = menu.map(({img, principal, precio, acompañamiento, bebida}) =>(
    <Card style={navStyle}>
    <Card.Img variant="top" src={img} style={{"border-radius":"5px"}}/>
    <Card.Body>
      <Card.Title>{principal}</Card.Title>
      <Card.Text>
        Acompañamientos: {acompañamiento}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush" style={{marginLeft:"5px"}}>
      <ListGroupItem>Bebida: {bebida}</ListGroupItem>
      <ListGroupItem>Precio: {precio}</ListGroupItem>
      
    </ListGroup>
    
  </Card>
   ))
    return (
        <div>
            <h1>Menú</h1>
            {renderMenu}
        </div>
    )
}

const navStyle = { 
  width:"10cm", 
  high:"10cm", 
  display:'inline-flex', 
  margin:"5px", 
  alignItems:"center", 
  textAlign:"justify",
  border:"solid",
  "border-radius":"5px",
  "border-color":"rgb(117, 17, 53)"

}

export default Menu
