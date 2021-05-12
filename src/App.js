import React from 'react'
import './App.css';
import foto from './components/images/bg.png'

function App() {
  const [counter, setCounter] = React.useState(0)
  const [min, setMin] = React.useState(false)

  function handleMinus () {
    if(counter === 0) return setMin(true)
    setCounter(counter -1)
    setMin(false)
  }

  function handlePlus () {
    if(min === true) setMin(false) 
    setCounter(counter +1)
  }

  function handleReset () {
    if(min === true) setMin(false) 
    setCounter(0)
  }

  return (
    <>
    <main>
    <section className='first-sec'>
      {counter <= 1 && <p>{counter} Foosh Foosh</p>}
      {counter > 1 && <p>{counter} Fooshies Fooshies</p>}
      {min && <p>Não pode ter menos que 0 fooshies fooshies!</p>}
    </section>

    <section className='second-sec'>
      <button className='inc-btn' type='button' onClick={handleMinus}>-1</button>
      <button className='res-btn' type='button' onClick={handleReset}>Reset</button>
      <button className='dec-btn' type='button' onClick={handlePlus}>+1</button>
    </section>

    <section>
      <img src={foto} alt="foto" className="foto"/>
    </section>
    </main>
    </>
  );
}

export default App;
