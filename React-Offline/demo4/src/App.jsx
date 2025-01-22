
import './App.css'
import AddTodo from './components/AddTodo'
import AllTodos from './components/AllTodos'


function App() {

  return (
    <>
    <div className='bg-zinc-100 text-zinc-900 min-h-screen p-8'>
      <AddTodo/>
      <AllTodos/>
    </div>    
    </>
  )
}

export default App
