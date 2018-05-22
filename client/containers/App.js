import React from "react";
import New from "containers/New";
import Currencies from "containers/Currencies";
import Layout from "components/Layout";
import Header from "components/Header";

const App = () => (
  <Layout>
    <Header />
    <New />
    <Currencies />
  </Layout>
);

export default App;
