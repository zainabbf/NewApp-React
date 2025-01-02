const Home = () => {
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
  <div
    className="bgded"
    style={{ backgroundImage: 'url("images/demo/backgrounds/01.png")' }}
  >
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
  </div>
  <div className="wrapper row3">
    <main className="hoc container clear">
      {/* main body */}
      <div className="sectiontitle">
        <h6 className="heading">Donec tortor eget mauris sagittis</h6>
        <p>Convallis morbi eget leo elit praesent at libero et arcu</p>
      </div>
      <div className="group">
        <div className="one_half first">
          <img
            className="inspace-15 borderedbox"
            src="images/demo/474x356.png"
            alt=""
          />
        </div>
        <div className="one_half">
          <ul className="nospace group inspace-15">
            <li className="one_half first btmspace-50">
              <article>
                <h6 className="heading">
                  <a href="#">Pretium commodo</a>
                </h6>
                <p className="nospace">
                  Nec ipsum integer in tincidunt ligula ut nec magna ac nisl
                  facilisis ultricies nam sed aliquet nisl aliquam…
                </p>
              </article>
            </li>
            <li className="one_half btmspace-50">
              <article>
                <h6 className="heading">
                  <a href="#">Commodo rhoncus</a>
                </h6>
                <p className="nospace">
                  Sapien vitae euismod urna condimentum eu sed sodales leo eget
                  urna fermentum fermentum vivamus auctor…
                </p>
              </article>
            </li>
            <li className="one_half first">
              <article>
                <h6 className="heading">
                  <a href="#">Amet orci facilisis</a>
                </h6>
                <p className="nospace">
                  Aliquet phasellus rhoncus imperdiet metus id malesuada
                  curabitur pharetra eu turpis non bibendum suspendisse…
                </p>
              </article>
            </li>
            <li className="one_half">
              <article>
                <h6 className="heading">
                  <a href="#">Aliquam facilisis</a>
                </h6>
                <p className="nospace">
                  Iaculis justo in dignissim suspendisse potenti integer eu enim
                  sed felis faucibus ultricies vivamus tellus justo…
                </p>
              </article>
            </li>
          </ul>
        </div>
      </div>
      {/* / main body */}
      <div className="clear" />
    </main>
  </div>
  <div className="wrapper row2">
    <section className="hoc container clear">
      <div className="sectiontitle">
        <h6 className="heading">Laoreet vitae faucibus</h6>
        <p>Mollis nunc curabitur dapibus lacus a eros fermentum et</p>
      </div>
      <ul className="nospace group overview services">
        <li className="one_third">
          <article>
            <a href="#">
              <i className="fa fa-500px" />
            </a>
            <h6 className="heading">
              <a href="#">Imperdiet arcu sodales</a>
            </h6>
            <p>
              Curabitur finibus ligula in eleifend semper est enim viverra
              tellus quis pretium…
            </p>
            <footer>
              <a href="#">View Details »</a>
            </footer>
          </article>
        </li>
        <li className="one_third">
          <article>
            <a href="#">
              <i className="fa fa-angellist" />
            </a>
            <h6 className="heading">
              <a href="#">Massa dui eget turpis</a>
            </h6>
            <p>
              Maecenas a nunc rhoncus imperdiet quam vitae vulputate quam
              curabitur auctor…
            </p>
            <footer>
              <a href="#">View Details »</a>
            </footer>
          </article>
        </li>
        <li className="one_third">
          <article>
            <a href="#">
              <i className="fa fa-bug" />
            </a>
            <h6 className="heading">
              <a href="#">Imperdiet lorem congue</a>
            </h6>
            <p>
              Metus tempor viverra class aptent taciti sociosqu ad litora
              torquent per conubia…
            </p>
            <footer>
              <a href="#">View Details »</a>
            </footer>
          </article>
        </li>
        <li className="one_third">
          <article>
            <a href="#">
              <i className="fa fa-eercast" />
            </a>
            <h6 className="heading">
              <a href="#">Nostra inceptos himenaeos</a>
            </h6>
            <p>
              Maecenas dapibus mauris finibus pharetra a cras mi ut pharetra
              faucibus commodo…
            </p>
            <footer>
              <a href="#">View Details »</a>
            </footer>
          </article>
        </li>
        <li className="one_third">
          <article>
            <a href="#">
              <i className="fa fa-graduation-cap" />
            </a>
            <h6 className="heading">
              <a href="#">Donec placerat tincidunt</a>
            </h6>
            <p>
              Volutpat phasellus et imperdiet augue vivamus finibus dolor
              molestie consequat…
            </p>
            <footer>
              <a href="#">View Details »</a>
            </footer>
          </article>
        </li>
        <li className="one_third">
          <article>
            <a href="#">
              <i className="fa fa-wpexplorer" />
            </a>
            <h6 className="heading">
              <a href="#">Ipsum ligula tristique</a>
            </h6>
            <p>
              Tellus in egestas odio velit feugiat neque phasellus non pulvinar
              quam fringilla…
            </p>
            <footer>
              <a href="#">View Details »</a>
            </footer>
          </article>
        </li>
      </ul>
      <footer className="center">
        <a className="btn" href="#">
          Vestibulum molestie
        </a>
      </footer>
    </section>
  </div>
  <div className="wrapper row3">
    <figure className="hoc container clear">
      <figcaption className="sectiontitle">
        <h6 className="heading">Purus vehicula pulvinar</h6>
        <p>Imperdiet vel duis aliquet urna vel urna molestie sit amet</p>
      </figcaption>
      <ul className="nospace group overview">
        <li className="one_third">
          <a href="#">
            <img src="images/demo/320x240.png" alt="" />
          </a>
        </li>
        <li className="one_third">
          <a href="#">
            <img src="images/demo/320x240.png" alt="" />
          </a>
        </li>
        <li className="one_third">
          <a href="#">
            <img src="images/demo/320x240.png" alt="" />
          </a>
        </li>
        <li className="one_third">
          <a href="#">
            <img src="images/demo/320x240.png" alt="" />
          </a>
        </li>
        <li className="one_third">
          <a href="#">
            <img src="images/demo/320x240.png" alt="" />
          </a>
        </li>
        <li className="one_third">
          <a href="#">
            <img src="images/demo/320x240.png" alt="" />
          </a>
        </li>
      </ul>
    </figure>
  </div>
  <div className="wrapper row2">
    <section className="hoc container clear testimonials">
      <div className="sectiontitle">
        <h6 className="heading">Dapibus magna viverra</h6>
        <p>Amet gravida sem sed sit amet risus nisl curabitur mattis</p>
      </div>
      <article className="btmspace-80">
        <blockquote>
          Id neque nec ornare donec varius turpis vel ante accumsan lacinia
          aenean aliquet orci lacinia lorem auctor faucibus vel vel ligula
          aliquam elit ligula rutrum vitae dui at ultricies facilisis ex
        </blockquote>
        <figure className="clear">
          <img src="images/demo/60x60.png" alt="" />
          <figcaption>
            <h6 className="heading">John Doe</h6>
            <em>Chairman</em>
          </figcaption>
        </figure>
      </article>
      <footer className="center">
        <a className="btn" href="#">
          View More Testimonials »
        </a>
      </footer>
    </section>
  </div>
  <div className="wrapper row3">
    <section className="hoc container clear">
      <div className="sectiontitle">
        <h6 className="heading">Morbi vitae vestibulum</h6>
        <p>Et orci a nunc ullamcorper lobortis sit amet vel mi etiam</p>
      </div>
      <div className="group latest">
        <article className="one_half first">
          <a href="#">
            <img src="images/demo/474x356.png" alt="" />
          </a>
          <div className="excerpt">
            <h6 className="heading">Arcu leo volutpat a libero</h6>
            <p>
              Nec sodales tincidunt elit sed in vestibulum justo cras sed ipsum
              quis justo pulvinar hendrerit non nec orci in a quam…
            </p>
            <div className="clear">
              <footer className=" fl_right">
                <a href="#">Read More</a>
              </footer>
              <ul className="nospace meta fl_left">
                <li>
                  <i className="fa fa-user" /> <a href="#">Admin</a>
                </li>
                <li>
                  <i className="fa fa-tag" /> <a href="#">Tag Name</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article className="one_half">
          <a href="#">
            <img src="images/demo/474x356.png" alt="" />
          </a>
          <div className="excerpt">
            <h6 className="heading">Varius blandit purus</h6>
            <p>
              Sed ultrices velit etiam eleifend nulla vestibulum dapibus ex nec
              luctus est donec lectus lacus varius vitae ut viverra…
            </p>
            <div className="clear">
              <footer className=" fl_right">
                <a href="#">Read More</a>
              </footer>
              <ul className="nospace meta fl_left">
                <li>
                  <i className="fa fa-user" /> <a href="#">Admin</a>
                </li>
                <li>
                  <i className="fa fa-tag" /> <a href="#">Tag Name</a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <footer className="center">
        <a className="btn" href="#">
          View More Posts »
        </a>
      </footer>
    </section>
  </div>
  <div className="wrapper coloured">
    <article className="hoc cta clear">
      <h6 className="three_quarter first">
        Nec eros maecenas sed ligula enim proin fermentum
      </h6>
      <footer className="one_quarter">
        <a className="btn" href="#">
          Viverra vehicula »
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
