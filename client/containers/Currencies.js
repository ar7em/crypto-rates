import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import CurrenciesList from "components/Currencies";
import * as actions from "actions/currencies";

class Currencies extends Component {
  render() {
    if (!this.props.currencies.length) {
      return null;
    }

    return (
      <CurrenciesList currencies={this.props.currencies} remove={this.props.remove} />
    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currencies: state.currencies.all
});

const mapDispatchToProps = (dispatch) => ({
  remove: (code) => dispatch(actions.remove(code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
