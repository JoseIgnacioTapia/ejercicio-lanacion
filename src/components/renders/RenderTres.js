import classes from './RenderTres.module.scss';

const RenderTres = () => {
  return (
    <article className={classes.card}>
      <section>
        <h2>
          <a href="#">
            <em>Lead.</em> Title cuando se dieron cuenta, los dos hermanos
            estaban preparándose para alunizar.
          </a>
        </h2>
      </section>
      <figcaption>
        <img src="" alt="" />
        <div className={classes.author}>
          <strong>
            <a href="#">Author full name</a>
          </strong>
        </div>
      </figcaption>
      <div className={classes.border}></div>
    </article>
  );
};

export default RenderTres;
