
import './App.css';

function App() { 
  return(
    <div className="App-header">
      <h1>My Ticking Clock</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
}

export default App;
