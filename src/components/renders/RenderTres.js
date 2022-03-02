import classes from './RenderTres.module.scss';

const RenderTres = ({ noticia }) => {
  const { volanta, author, title, articleUrl, authorUrl, authorImg } = noticia;

  return (
    <article className={classes.card}>
      <section>
        <h2>
          <a href={articleUrl}>
            {volanta ? <em>{volanta}. </em> : null} {title}
          </a>
        </h2>
      </section>
      <figcaption>
        {authorImg ? (
          <img src={authorImg} alt="Author" className="author__photo" />
        ) : null}
        <div className={classes.author}>
          <strong>{authorUrl ? <a href={authorUrl}>{author}</a> : null}</strong>
        </div>
      </figcaption>
      <div className={classes.border}></div>
    </article>
  );
};

export default RenderTres;
