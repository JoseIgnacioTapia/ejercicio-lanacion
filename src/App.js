import './App.scss';
import RenderDos from './components/renders/RenderDos';
import RenderTres from './components/renders/RenderTres';
import RenderUno from './components/renders/RenderUno';

function App() {
  return (
    <div className="modulo">
      <section>
        <section className="modulo__titulo">
          <h3>
            <a href="#">Opinión</a>
          </h3>
        </section>
        <div className="modulo__body">
          <div className="modulo__body-area">
            <RenderUno />
          </div>
          <div className="modulo__body-area">
            <RenderDos />
            <RenderDos />
          </div>
          <div className="modulo__body-area">
            <RenderTres />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
