import './App.scss';
import RenderDos from './components/renders/RenderDos';
import RenderTres from './components/renders/RenderTres';
import RenderUno from './components/renders/RenderUno';
import { noticiaUno, noticiaDos } from './db';

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
          <div className="modulo__body-area modulo__body-area_one">
            <RenderUno noticia={noticiaUno} />
          </div>
          <div className="modulo__body-area modulo__body-area_two">
            <RenderDos noticia={noticiaDos} />
            <RenderDos noticia={noticiaDos} />
          </div>
          <div className="modulo__body-area modulo__body-area_three">
            <RenderTres noticia={noticiaUno} />
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}

export default App;
