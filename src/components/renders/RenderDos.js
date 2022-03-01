import classes from './RenderDos.module.scss';

const RenderDos = () => {
  return (
    <figure className={classes.card}>
      <blockquote className="">
        <a href="#">
          <em>Análisis. </em>Title esto es un titulo de la novedad con unas
          cuantas lineas que ocupar
        </a>
      </blockquote>
      <figcaption className="">
        <img src="#" alt="Author" className="author__photo" />
        <div className="">
          <strong>
            <a href="#">Author full name</a>
          </strong>
        </div>
      </figcaption>
    </figure>
  );
};

export default RenderDos;
