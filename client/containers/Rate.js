import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import Rate from "components/Rate";

class ExchangeRate extends Component {
  render() {
    return (
      <Rate />
    );
  }
}

ExchangeRate.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ExchangeRate);
