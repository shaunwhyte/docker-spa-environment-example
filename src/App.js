import './App.css';
import variables from './config'
console.log(process.env)
function App() {
  return (
    <div className="App">
      <header className="App-header">
       Environment Variable Example {variables.EXAMPLE_VARIABLE}
      </header>
    </div>
  );
}

export default App;
