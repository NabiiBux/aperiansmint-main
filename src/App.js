import { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mint from "./components/mint";
import "./styles/navbar.css";
import "./styles/main.css";
import "./styles/fontawesome.min.css";
import Layout from "./components/layout/Layout";
import Header from "./components/layout/Header";

function App() {
  return (
    <Fragment>
      <Layout>
        <Header />
        <Mint />
      </Layout>
    </Fragment>
  );
}

export default App;
