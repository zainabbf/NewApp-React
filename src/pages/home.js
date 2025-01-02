import Header from '../comp/header';
const Home = () => {
  return (
    <>
  <Header></Header>

    <div id="pageintro" className="hoc clear">
      <article>
        <h3 className="heading">Vestibulum vehicula egestas</h3>
        <p>
          Rhoncus a odio fusce eu lorem vehicula euismod mauris eget sodales mi
          duis habitant morbi tristique senectus et netus et malesuada fames.
        </p>
        <footer>
          <a className="btn" href="#">
            Turpis egestas
          </a>
        </footer>
      </article>
    </div>
  <div className="wrapper row4">
    <footer id="footer" className="hoc clear">
      <div className="one_quarter first">
        <h6 className="heading">Nulla tincidunt eget</h6>
        <ul className="nospace btmspace-30 linklist contact">
          <li>
            <i className="fa fa-map-marker" />
            <address>Street Name &amp; Number, Town, Postcode/Zip</address>
          </li>
          <li>
            <i className="fa fa-phone" /> +00 (123) 456 7890
          </li>
          <li>
            <i className="fa fa-envelope-o" /> info@domain.com
          </li>
        </ul>
        <ul className="faico clear">
          <li>
            <a className="faicon-facebook" href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="faicon-twitter" href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="faicon-dribble" href="#">
              <i className="fa fa-dribbble" />
            </a>
          </li>
          <li>
            <a className="faicon-linkedin" href="#">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>
      </div>
      <div className="one_quarter">
        <h6 className="heading">Elit eros imperdiet</h6>
        <ul className="nospace linklist">
          <li>
            <a href="#">Aenean venenatis leo</a>
          </li>
          <li>
            <a href="#">In nunc elementum sed</a>
          </li>
          <li>
            <a href="#">Commodo nibh congue</a>
          </li>
          <li>
            <a href="#">Donec porttitor nec</a>
          </li>
          <li>
            <a href="#">Ex id egestas in feugiat</a>
          </li>
        </ul>
      </div>
      <div className="one_quarter">
        <h6 className="heading">Placerat enim nulla</h6>
        <article className="btmspace-30">
          <h6 className="nospace font-x1">
            <a href="#">Mollis sed dui tempus</a>
          </h6>
          <time className="smallfont" dateTime="2045-04-06">
            Friday, 6<sup>th</sup> April 2045
          </time>
          <p>Fusce sodales hendrerit neque dictum porttitor curabitur…</p>
        </article>
        <article>
          <h6 className="nospace font-x1">
            <a href="#">Ultrices posuere justo</a>
          </h6>
          <time className="smallfont" dateTime="2045-04-05">
            Thursday, 5<sup>th</sup> April 2045
          </time>
          <p>Id tincidunt tellus consequat volutpat ut finibus libero…</p>
        </article>
      </div>
      <div className="one_quarter">
        <h6 className="heading">Consectetur orci cras</h6>
        <p className="nospace btmspace-15">
          Congue eget dolor ac tristique non sapien vulputate ornare enim eu
          egestas ipsum.
        </p>
        <form method="post" action="#">
          <fieldset>
            <legend>Newsletter:</legend>
            <input
              className="btmspace-15"
              type="text"
              defaultValue=""
              placeholder="Name"
            />
            <input
              className="btmspace-15"
              type="text"
              defaultValue=""
              placeholder="Email"
            />
            <button type="submit" value="submit">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </footer>
  </div>
  <div className="wrapper row5">
    <div id="copyright" className="hoc clear">
      <p className="fl_left">
        Copyright © 2018 - All Rights Reserved - <a href="#">Domain Name</a>
      </p>
      <p className="fl_right">
        Template by
      </p>
    </div>
  </div>
  <a id="backtotop" href="#top">
    <i className="fa fa-chevron-up" />
  </a>
  </>
  );
}

export default Home;
