import Header from '../comp/header';

const Gallery = () => {
  return (
<div>
    <Header></Header>
    <div id="pageintro" className="hoc clear">
      <article>
        <h3 className="heading">  Gallery page </h3>
        <p>
        Gallery page
        </p>
        <footer>
          <a className="btn" href="#">
            Turpis egestas
          </a>
        </footer>
      </article>
    </div>

</div>
  );
}

export default Gallery;
