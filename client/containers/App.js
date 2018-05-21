import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import New from "containers/New";
import Layout from "components/Layout";
import Header from "components/Header";

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Header />
        <New />
      </Layout>
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
