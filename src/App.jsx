
import './App.css'
import Header from './components/Header'
import Elements from './components/Elements'
import data from './data'
function App() {
  const Elementdata = data.map((res)=>
      <Elements 
          key={res.id}
          res={res}
      />

  )
  
  return (
    <div className="App">
        <Header />
       {Elementdata}
    </div>
  )
}

export default App
