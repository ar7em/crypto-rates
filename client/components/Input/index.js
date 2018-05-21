import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

import style from "./style.css";

const Input = (props) => (
  <div className={style.Input}>
    Request cryptocurrency exchange rate:
    <div className={style.Input__field}>
      <TextField
        autoFocus={true}
        hintText="Cryptocurrency code (e.g., ‘BTC’)..."
      />
    </div>
  </div>
);

Input.propTypes = {
};

export default Input;
