import './App.css'
import { Sport } from './Sport';
import { Username } from './Username';


function App() {
const names =["Ajay","Jayraj","Ashish","Pranay","Satish"];

// const newArray = names.map((name)=>{
//   return <li key={name}>{name}</li>

// });
  return (
  // react fragments
   
        <div className='container'>
          <h1>Friend</h1>
          {/* <ul>
          {newArray}
          </ul> */}
          {/* <Username name="Salman"/> */}
          <Sport names={names}/>
        </div>
    
  )
}



export default App
