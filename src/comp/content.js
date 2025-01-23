import React from 'react';
import styles from "./header.module.css";

// Gallery page and Long Link Text
const Content = ({pageName, txt}) => {
  return (
    <div id="pageintro" className="hoc clear">
    <article>
      <h3 className="heading">  {pageName} </h3>
      <p className={styles.title}>
      {txt}
      </p>
    </article>
  </div>
  );
}

export default Content;
