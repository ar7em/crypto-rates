import React from "react";
import Icon from "material-ui/svg-icons/action/trending-up";
import { cyan500 } from "material-ui/styles/colors";

import style from "./style.css";

const Header = () => (
  <div className={style.Header}>
    <Icon style={{color: cyan500}} className={style.Header__icon} />
    <div className={style.Header__label} >
      Cryptocurrencies exchange rates
    </div>
  </div>
);

export default Header;
