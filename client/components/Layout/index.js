import React from "react";
import PropTypes from "prop-types";

import style from "./style.css";

const Layout = (props) => (
  <div className={style.Layout}>
    { props.children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
