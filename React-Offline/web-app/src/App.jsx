import './App.css'
import { Demo } from './Demo';
import  {TestComponent}  from './TestComponent';

function App() {
const name ="Ajay ";
  return (
  // react fragments
    <> 
        <div className='container'>
         <Demo></Demo>
         <h2>{name} </h2>
       <TestComponent/>
        </div>
    </>
  )
}



export default App
