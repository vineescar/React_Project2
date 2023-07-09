import React from 'react'


// const Footer = () => {
// const year = new Date();
//   return (
//     <footer>Copyright &copy; {year.getFullYear()}</footer>
//   )
// }

//example 2
const Footer = ({length}) => {
  
    return (
      <footer>{length} List {length===1? "item" :"items"}</footer>
    )
  }
  

export default Footer