import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState, useEffect } from 'react';
import Searchitem from "./Searchitem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL ="http://localhost:3500/items"
  const [items, setItems] = useState([]);
  const [newItem,setNewItem]=useState('')  
  const[search,setSearch]=useState('')   
  const[fetchError,setfetchError]=useState(null)
  const[isloading,setisloading]=useState(true)
 // useEffect(()=>{JSON.parse(localStorage.getItem("todo_list"))},[])

 useEffect(()=>{
  const fetchItems =async()=>{
    try{
      const response= await fetch(API_URL);
      if(!response.ok) throw Error("Data not received")
      console.log(response)
      const listItems = await response.json();
      console.log(listItems)
      setItems(listItems);
      setfetchError(null)
    } catch (err){
      setfetchError(err.message)

    }finally{
      setisloading(false)
    }
  }
  setTimeout(()=>{
    (async()=>await fetchItems())()
  },2000)

 },[])


  const addItem=async(item)=>{
    const id =items.length ? items[items.length-1].id+1 : 1;
    const addNewItem={id, checked:false, item}
   // const listItems=[...items,addNewItem]
   // setItems(listItems)
   // localStorage.setItem("todo_list",JSON.stringify(listItems))
   const postOption={
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body: JSON.stringify(addNewItem)
   }

   const result = await apiRequest(API_URL,postOption,)
   if(result) setfetchError(result)
 
  }
  
  const  handleSubmit = (e)=>{
    e.preventDefault()
    if (!newItem) return;

    addItem(newItem);

    console.log(newItem)
    setNewItem('')
  }



  const handleCheck = async(id)=>{
    const listItems =items.map((item)=> item.id===id ? {...item,checked: !item.checked}:item)
   // setItems(listItems)
    console.log(listItems)
  //  localStorage.setItem("todo_list",JSON.stringify(listItems))

    const myItem =listItems.filter((item)=>item.id===id)
    const updateOption={
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
     }

     const reqUrl=`${API_URL}/${id}`
  
     const result = await apiRequest(reqUrl,updateOption,)
     if(result) setfetchError(result)
  }

  //delete
  const handleCheck2 = async(id)=>{
    const listItems2 =items.filter((item)=> item.id!==id )
   // setItems(listItems2)
    console.log(listItems2)
    const delOption ={method:'DELETE'}
  //  localStorage.setItem("todo_list",JSON.stringify(listItems2))

    const reqUrl=`${API_URL}/${id}`
    
    const result = await apiRequest(reqUrl,delOption)
    if(result) setfetchError(result)
    }

  return (
  <div className="App">
    <Header title ="List To Do"/>

    <AddItem
    newItem={newItem}
    setNewItem={setNewItem}
    handleSubmit={handleSubmit}
    />

    <Searchitem
    search={search}
    setSearch={setSearch}
    />

    <main>

    {isloading && <p>Loading items...</p>}
    {fetchError && <p>{`Error: ${fetchError}`}</p>}  

    { !isloading && !fetchError && <Content
    items={items.filter((item)=>((item.item)).toLowerCase().includes(search.toLowerCase()))}
   // setItems={setItems}
    handleCheck={handleCheck}
    handleCheck2={handleCheck2}
    />}

    </main>

    <Footer
    length ={items.length}
    />
  
  </div>
  );
}

export default App;
