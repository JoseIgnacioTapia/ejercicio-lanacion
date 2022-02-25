import './App.scss';
import RenderDos from './components/renders/RenderDos';
import RenderTres from './components/renders/RenderTres';
import RenderUno from './components/renders/RenderUno';

function App() {
  return (
    <div className="App-header">
      <RenderUno />
      <br />
      <br />
      <RenderDos />
      <br />
      <br />
      <RenderTres />
      <br />
      <br />
    </div>
  );
}

export default App;
