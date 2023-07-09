import React from 'react'
import LineItems from './LineItems';

const ItemsList = ({items,handleCheck,handleCheck2}) => {
  return (
    <ul>
        {items.map((itemrr)=>(
          <LineItems 
          itemrr={itemrr}
          key={itemrr.id}
          handleCheck={handleCheck}
          handleCheck2={handleCheck2}
          />
        ))}
      </ul>
  )
}

export default ItemsList