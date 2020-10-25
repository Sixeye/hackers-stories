import logo from './logo.svg';
import './App.css'

function getTitle(title) {
    return title
}

function App() {
    const greet = 'Hi'

  return (
    <div>
      <h1> 🚀 {greet} {getTitle('React JS')} </h1>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
    </div>
  )
}

export default App
