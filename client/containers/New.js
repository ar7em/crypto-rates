import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import Input from "components/Input";

class NewCurrency extends Component {
  render() {
    return (
      <Input />
    );
  }
}

NewCurrency.propTypes = {
};

export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCurrency);
