import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './GreenTrade.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Header } from '../components'

const AnyReactComponent = ({ text }) => <div>{text}</div>
const position = [51.505, -0.09] // Initial map position

const GreenTrade = () => {
  return (
    <div className="greentrade">
      <Header />
      <Container>
        <h2>Green Trade</h2>
        <h4>Trade in Recyclable Goods and Earn!</h4>

        {/* Each goods' prices */}
        <div className="price">
          <Row>
            <Col id="pickup-bottle">
              <h4>10 PET bottles</h4>
              <p>Rm0.10</p>
            </Col>

            <Col id="pickup-paper">
              <h4>1kg Recycle Paper/Cardboard</h4>
              <p>RM0.40</p>
            </Col>

            <Col id="pickup-can">
              <h4>10 Aluminium can</h4>
              <p>RM0.10</p>
            </Col>

            <Col id="pickup-glass">
              <h4>10 Glass Type Item</h4>
              <p>Rm0.50</p>
            </Col>
          </Row>
        </div>

        {/* Recycle Lorry will come to each area once a week to pick up */}
        <div className="area-selection">
          <h4>Door-to-Door Pickup</h4>
          <p>with at least x items</p>
          <Row>
            <Col>
              <Dropdown className="area">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  State
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Melaka</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Selangor</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Seremban</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>

            <Col>
              <Dropdown className="area">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Area
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Bukit Baru (Every Thursday)
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Bukit Beruang (Every Monday)
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Ayer Keroh (Every Tuesday)
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          {/* Trade in user info */}
          <Form className="user-input">
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>

            <Link to="/">
              <Button variant="primary" type="submit">
                Confirm
              </Button>
            </Link>
          </Form>
        </div>

        <div className="vending-machine">
          <h3>Trade In with GreenTrade Vending Machine</h3>
          <p>
            Only PET Bottle, Aluminium Can and Biodegradeble waste are
            Applicable
          </p>
          <h5>Find our Machine at Location below</h5>
          {/* Vending machine simulator */}
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          ,
        </div>
      </Container>
    </div>
  )
}

export default GreenTrade
