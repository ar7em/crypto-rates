import React, { Component } from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import CircularProgress from 'material-ui/CircularProgress';

import style from "./style.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      value
    }));
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState(() => ({
      value: ""
    }));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className={style.Input}>
          <div className={style.Input__description}>
            Request cryptocurrency exchange rate:
          </div>
          <div className={style.Input__field}>
            <TextField
              value={this.state.value}
              onChange={this.onChange}
              autoFocus={true}
              hintText="Cryptocurrency code (e.g., ‘BTC’)..."
              errorText={this.props.error}
            />
          </div>
          <div className={style.Input__button}>
            {
              this.props.fetching ?
                <CircularProgress size={35}/> :
                <FlatButton
                  label="Request"
                  primary={true}
                  onClick={this.onSubmit}
                  disabled={!this.state.value}
                />
            }
          </div>
        </div>
      </form>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired
};

export default Input;
