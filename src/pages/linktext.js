const Linktext = () => {
  return (
    <>
    
    <div className="wrapper row0">
    <div id="topbar" className="hoc clear">
      <ul className="nospace">
        <li>
          <i className="fa fa-envelope-o" /> info@domain.com
        </li>
        <li>
          <a href="index.html">
            <i className="fa fa-lg fa-home" />
          </a>
        </li>
        <li>
          <a href="#" title="Help Centre">
            <i className="fa fa-life-bouy" />
          </a>
        </li>
        <li>
          <a href="#" title="Login">
            <i className="fa fa-lg fa-sign-in" />
          </a>
        </li>
        <li>
          <a href="#" title="Sign Up">
            <i className="fa fa-lg fa-edit" />
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div className="wrapper row1">
    <header id="header" className="hoc clear">
      <section>
        <div>
          <i className="fa fa-phone" /> +00 (123) 456 7890
        </div>
        <div>
          <h1 id="logo">
            <a href="index.html">Nalpure</a>
          </h1>
        </div>
        <div>
          <form className="clear" method="post" action="#">
            <fieldset>
              <legend>Search:</legend>
              <input type="search" defaultValue="" placeholder="Search Here…" />
              <button className="fa fa-search" type="submit" title="Search">
                <em>Search</em>
              </button>
            </fieldset>
          </form>
        </div>
      </section>
      <nav id="mainav">
        <ul className="clear">
          <li className="active">
            <a href="index.html">Home</a>
          </li>
          <li>
            <a className="drop" href="#">
              Pages
            </a>
            <ul>
              <li>
                <a href="pages/gallery.html">Gallery</a>
              </li>
              <li>
                <a href="pages/full-width.html">Full Width</a>
              </li>
              <li>
                <a href="pages/sidebar-left.html">Sidebar Left</a>
              </li>
              <li>
                <a href="pages/sidebar-right.html">Sidebar Right</a>
              </li>
              <li>
                <a href="pages/basic-grid.html">Basic Grid</a>
              </li>
            </ul>
          </li>
          <li>
            <a className="drop" href="#">
              Dropdown
            </a>
            <ul>
              <li>
                <a href="#">Level 2</a>
              </li>
              <li>
                <a className="drop" href="#">
                  Level 2 + Drop
                </a>
                <ul>
                  <li>
                    <a href="#">Level 3</a>
                  </li>
                  <li>
                    <a href="#">Level 3</a>
                  </li>
                  <li>
                    <a href="#">Level 3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Level 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Link Text</a>
          </li>
          <li>
            <a href="#">Link Text</a>
          </li>
          <li>
            <a href="#">Link Text</a>
          </li>
          <li>
            <a href="#">Long Link Text</a>
          </li>
        </ul>
      </nav>
    </header>
  </div>

    <div id="pageintro" className="hoc clear">
      <article>
        <h3 className="heading">  Link Text page </h3>
        <p>
        Texxt here 
        </p>
        <footer>
          <a className="btn" href="#">
            Turpis egestas
          </a>
        </footer>
      </article>
    </div>
    
    </>
  );
}

export default Linktext;
