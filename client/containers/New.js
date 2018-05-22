import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import Input from "components/Input";
import * as actions from "actions/currencies";

class NewCurrency extends Component {
  render() {
    return (
      <Input
        onSubmit={this.props.request}
        error={this.props.error}
        fetching={this.props.fetching}
      />
    );
  }
}

NewCurrency.propTypes = {
  request: PropTypes.func.isRequired,
  error: PropTypes.string,
  fetching: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
  error: state.currencies.error,
  fetching: state.currencies.fetchingNew
});

const mapDispatchToProps = (dispatch) => ({
  request: (code) => {
    if (code) {
      dispatch(actions.requestNew(code.toUpperCase()));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCurrency);
