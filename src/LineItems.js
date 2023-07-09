import React from 'react'
import {  FaTrashAlt } from "react-icons/fa";


const LineItems = ({itemrr,handleCheck,handleCheck2}) => {
  return (
    <li className='item' key={itemrr.id}>
            <input 
            type= "checkbox" 
            onChange={()=>handleCheck(itemrr.id)}         
            checked={itemrr.checked}
            />
            <label style={(itemrr.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>handleCheck(itemrr.id)}>{itemrr.item}</label>
            < FaTrashAlt
            role="button"
            onClick={()=>handleCheck2(itemrr.id)}         
            tabIndex="0"
            aria-label={`Delete  ${itemrr.itemrr}`}
            />
            
    </li>
  )
}

export default LineItems