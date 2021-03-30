import { useState } from 'react';
import './App.css';
import Canvas from './component/Canvas';

function App() {

  const [ state, setState ] = useState({
    isDone: false,
    startPaint: false
  })

  const startPainting = () => {
    setState(prev => ({...prev, startPaint: true}))
  }

  const setDone = (val) => {
    setState(prev => ({...prev, isDone: val}))
  }

  const resetApp = () => {
    setState({
      isDone: false,
      startPaint: false
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {
          state.startPaint && 
          <>
            <Canvas width={256} height={128} setDone={setDone}/>
            <p>
              {state.isDone ? 'Done rendering': 'Canvas is rendering'}
            </p>
          </>
        }
        {
          !state.startPaint &&
          <p>
            In this demo we are going to see how canvas is creating
            a 256px X 128px all RGB coloured image.<br/>
            the process is slowed down to visualize the data points<br/>
            click the button to start
          </p>
        }
        {
          !state.isDone &&
          <button 
            disabled={state.startPaint} 
            onClick={startPainting}>
            Click here to start painting
          </button>
        }
        {
          state.isDone &&
          <button 
            onClick={resetApp}>
            Reset
          </button>
        }
      </header>
    </div>
  );
}

export default App;
