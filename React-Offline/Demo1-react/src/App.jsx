import { useEffect, useState } from 'react'
import Products from './Componant/Products';

function App() {
  const [user, setUser] = useState([])

  async function SendReq(){

    try{
      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json();
      setUser(data.users);
      console.log(data.users);
    
    }catch(error){
      console.log(error)

    }
    
  }

  useEffect(()=>{
    SendReq();
  } ,[]);
 

  return (

        <>
        <h1>Users</h1>
        {user.map((user)=>{
            return <li key={user.id}> First Name :&nbsp;{user.firstName}    LastName :&nbsp;&nbsp;&nbsp;{user.lastName}</li>;
          })
        }
       
        </>
  )
  
}




export default App
// versal to react project  live