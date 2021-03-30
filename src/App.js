import './App.css';
import Canvas from './component/Canvas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas width={256} height={128}/>
        <p>
          Canvas rendered 256X128 resolution image<br/>
          Image rendered contains all RGB color combination in 15bit color scheme.
        </p>
      </header>
    </div>
  );
}

export default App;
