import React from 'react'
//import { useState } from 'react';
import ItemsList from './ItemsList';

// // Example one(React_useState Hook)

// const Content = () => {
  
//   const [name2 ,setValue] = useState("Earn");
//         function handleNameChange(){
//         const name =["Earn","Grow","Give"];
//         const int =Math.floor(Math.random()*3);
//         //return name[int];
//         setValue(name[int]);
//         }
//         const handleClick =(e)=>{
//           console.log(e.target)
//         }
//         function namee(){
//           return console.log("visit vineescar.in")
//         }

//         const handleClick2 =(name)=>{
//           console.log(`Thanks for the support ${name}`)
//         }
//         const [count, setCount] = useState(99);
//         const[name,setName] = useState(()=>namee());

//         function incrementFunction(){
//           setCount(count+1)
//         }

//         function decrementFunction(){
//           setCount(count-1)
//       }
//   const [items, setItems] = useState([{id:1,checked: true, item:"Practice Coding"},{id:2,checked: false, item:"Play cricket"},{id:3,checked: true, item:"read AI"}]);

//   const numbers=[-2,-1,0,1,2]
//   const itemss=numbers.filter(n => n>=0).map(n =>({number:n}))
//   console.log(itemss)

//   return (
//     <main>
//       <p onDoubleClick={()=>handleClick2("vinu")}>Lets {name2} Money</p>
//       <button onClick={handleNameChange}>Subscribe</button>
//       <button onClick={decrementFunction}>-</button>
//       <span>{count}</span>
//       <button onClick={incrementFunction}>+</button>
//     </main>


//   )

// }

//example two (React_useState Hook)

const Content = ({items,setItems,handleCheck,handleCheck2}) => {
  
  
  // const [items, setItems] = useState([{id:1,checked: true, item:"Practice Coding"},{id:2,checked: false, item:"Play cricket"},{id:3,checked: true, item:"read AI"}]);

  // const handleCheck = (id)=>{
  //   const listItems =items.map((item)=> item.id==id ? {...item,checked: !item.checked}:item)
  //   setItems(listItems)
  //   console.log(listItems)
  //   localStorage.setItem("todo_list",JSON.stringify(listItems))
  // }

  // const handleCheck2 = (id)=>{
  //   const listItems2 =items.filter((item)=> item.id!==id )
  //   setItems(listItems2)
  //   console.log(listItems2)
  //   localStorage.setItem("todo_list",JSON.stringify(listItems2))
  // }


  return (


    <>
      {(items.length) ? (
      <ItemsList 
          items ={items}
          handleCheck={handleCheck}
          handleCheck2={handleCheck2}
      />

      ):(
        <p style={{marginTop:'2rem'}}>Your list is empty</p>
      )}
    </>
  )

}

//example three(React_Props & Prop Drilling)

export default Content