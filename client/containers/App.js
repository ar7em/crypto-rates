import React, { Component } from "react";
import PropTypes  from "prop-types";
import { connect } from "react-redux";
import New from "containers/New";
import Currencies from "containers/Currencies";
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
        <Currencies />
      </Layout>
    );
  }
}

App.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
