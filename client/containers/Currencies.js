import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import CurrenciesList from "components/Currencies";
import * as actions from "actions/currencies";

class Currencies extends Component {
  componentDidMount() {
    this.props.requestAll();
    this.refreshHandler = setInterval(this.props.requestAll, 60 * 5 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.refreshHandler);
  }

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
  remove: PropTypes.func.isRequired,
  requestAll: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  currencies: state.currencies.all
});

const mapDispatchToProps = (dispatch) => ({
  remove: (_id) => dispatch(actions.remove(_id)),
  requestAll: () => dispatch(actions.requestAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
