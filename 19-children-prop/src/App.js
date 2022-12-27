import './App.css'
import Wrapper from './components/Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Hello from wrapper 2</h2>
        <button>Click me</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Hello from wrapper 3</h2>
        <p>Some nonsence text</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
    </div>
  )
}

export default App
