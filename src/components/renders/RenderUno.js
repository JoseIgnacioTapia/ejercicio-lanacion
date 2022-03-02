import classes from './RenderUno.module.scss';

const RenderUno = ({ noticia }) => {
  return (
    <article className={classes.card}>
      <figure>
        {noticia.articleImg ? (
          <img src={noticia.articleImg} alt={noticia.title} />
        ) : null}
      </figure>
      <section>
        <h2>
          <a href={noticia.articleUrl}>
            {noticia.volanta ? <em>{noticia.volanta}</em> : null}{' '}
            {noticia.title}
          </a>
        </h2>
        <div>
          <strong>
            <a href={noticia.authorUrl}>{noticia.author}</a>
          </strong>
        </div>
      </section>
    </article>
  );
};

export default RenderUno;
