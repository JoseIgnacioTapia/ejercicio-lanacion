import classes from './RenderDos.module.scss';

const RenderDos = ({ noticia }) => {
  const { volanta, author, title, articleUrl, authorUrl, authorImg } = noticia;

  return (
    <figure className={classes.card}>
      <blockquote>
        <a href={articleUrl}>
          {volanta ? <em>{volanta}. </em> : null}
          {title}
        </a>
      </blockquote>
      <figcaption>
        {authorImg ? (
          <img src={authorImg} alt="Author" className="author__photo" />
        ) : null}
        <div>
          <strong>
            <a href={authorUrl}>{author}</a>
          </strong>
        </div>
      </figcaption>
    </figure>
  );
};

export default RenderDos;
