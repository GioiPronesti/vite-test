
import './App.css'
import { tasks } from './tasks'



function App() {

const currentArray = tasks.filter((el) =>  {
  el.state === "backlog" || el.state === "in_progress"
})
  
  

  return (
    <>
      <div>
        <header className={"header container"}>
          <h1>Task Manager</h1>
        </header>
        <main className={"main container"}>
          <h2>Current Task ({currentArray.length})</h2>
        <ul>
          <li>{currentArray}</li>
        </ul>
        <hr></hr>
          <h2>Completed Task </h2>
        </main>
      </div>
    </>
     
  )
}

export default App
