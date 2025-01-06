import { useState} from 'react';
import './App.css'
import Counter from './Counter';
import AddNumbers from './AddNumbers';
import ToggleVisibility from './ToggleVisibility';
import Title from './Title';

function App() {

  // // Condition --> && Operator
  // const isLogin =true;
  // return (
  //   <>
  //        {isLogin ? <button>LogOut</button> : <button>Login</button>}
  //   </>
  // )
  //-------------------------------------------------------------------------------------------


  
 

  
return (
<>
     <h1>React state</h1>
     {/* <Counter></Counter>
     <AddNumbers></AddNumbers> */}

     <ToggleVisibility/>
     <ToggleVisibility/>
     <ToggleVisibility/>
     <Title/> 

</>

)
}

export default App;
