import React from 'react'
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
          <p>with at least RM20 of total items</p>

          <div className="dropdown">
            <label>
              State <br />
              <select>
                <option>Melaka</option>

                <option>Selangor</option>

                <option>Johor Bahru</option>
              </select>
            </label>
            <label>
              Area
              <br />
              <select>
                <option>Bukit Baru (pickup of every Thursday)</option>

                <option>Bukit Beruang (pickup of every Tuesday)</option>

                <option>Bukit Katil (pickup of every Wednesday)</option>
              </select>
            </label>
          </div>

          {/* Trade in user info */}
          <Form className="user-input">
            <h3>Pick Up User Information</h3>
            <Form.Group controlId="email">
              <Form.Control type="email" placeholder="E-mail" />
            </Form.Group>

            <Form.Group controlId="name">
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>

            <Form.Group controlId="contact">
              <Form.Control type="number" placeholder="Contact Number" />
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
          <h5>Find our Machine at Location below:</h5>
          {/* Vending machine simulator */}
          <iframe id='map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.0191743468265!2d102.27610689574796!3d2.2502012794730684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d1e56b9710cf4b%3A0x66b6b12b75469278!2sMultimedia%20University!5e0!3m2!1sen!2smy!4v1702746012724!5m2!1sen!2smy"
            width="1000"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </div>
  )
}

export default GreenTrade
