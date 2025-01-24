/* eslint-disable jsx-a11y/anchor-is-valid */
import Header from '../comp/header';
import "../comp/headline.css"
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
            <title>Home page</title>
            <meta
          name="description"
          content="This is a Web site created using create-react-app for Home page for SEO"
        />
          </Helmet>
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

  <div className="wrapper myFooter">
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
