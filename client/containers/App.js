import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

App.propTypes = {
};

export const mapStateToProps = (state) => ({
});

export const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
