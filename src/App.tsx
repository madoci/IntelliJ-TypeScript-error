import './App.css'

// This line throws an unwanted TypeScript error
new Intl.NumberFormat(undefined, {})
// This is a control line to ensure TypeScript errors are shown in this file
const str: string = 2024

function App() {
  return null
}

export default App
