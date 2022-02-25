import classes from './RenderUno.module.scss';

const RenderUno = () => {
  return (
    <article className={classes.card}>
      <figure>
        <img src="#" alt="Title" />
      </figure>
      <section>
        <h2>
          <a href="#">
            <em>Volanta.</em> Esto es un titulo de la novedad con unas cuantas
            lineas que ocupar, esto es un titulo de la novedad
          </a>
        </h2>
        <div>
          <strong>
            <a href="#">Marquee / Author</a>
          </strong>
        </div>
      </section>
    </article>
  );
};

export default RenderUno;
