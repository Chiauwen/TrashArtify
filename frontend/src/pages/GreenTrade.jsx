import React from 'react'

const GreenTrade = () => {
  return (
    <div className="greentrade">
      <h2>Green Trade</h2>
      <p>Trade in Recyclable Goods and Earn!</p>

      {/* Each goods' prices */}
      <div className="price"></div>

      {/* Recycle Lorry will come to each area once a week to pick up */}
      <div className="area-selection"></div>

      {/* Trade in user info */}
      <div className="user-info"></div>

      <button>Confirm</button>
    </div>
  )
}

export default GreenTrade
