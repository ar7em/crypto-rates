import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import CurrenciesList from "components/Currencies";
import actions from "actions/currencies";

class Currencies extends Component {
  render() {
    return (
      <CurrenciesList />
    );
  }
}

Currencies.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
