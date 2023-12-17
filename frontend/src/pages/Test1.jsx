import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown } from 'react-bootstrap'

const Test1 = () => {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap Dropdown Component</h4>
      <div>
        <label>
          What do we eat?
          <select>
            <option value="fruit">Fruit</option>

            <option value="vegetable">Vegetable</option>

            <option value="meat">Meat</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Test1
