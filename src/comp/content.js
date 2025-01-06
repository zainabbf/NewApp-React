import React from 'react';

const Content = ({pageName, txt}) => {
  return (
    <div id="pageintro" className="hoc clear">
    <article>
      <h3 className="heading">  {pageName} </h3>
      <p>
      {txt}
      </p>
    </article>
  </div>
  );
}

export default Content;
