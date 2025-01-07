import { useEffect, useState } from 'react'

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
            return <li key={user.id}>{user.firstName}</li>;
          })
        }
       
        </>
  )
}

export default App
// versal to react project  live