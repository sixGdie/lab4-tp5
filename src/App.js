import { Component } from "react";
import Instrumentos from "./components/Instrumentos";
import Layout from "./components/Layout";
import data from './data/instrumentos.json'

class App extends Component {
  state = {
    instrumentos: [],
  };

  constructor(props) {
    super(props)
    this.state = { instrumentos: data.instrumentos }
  }

  render() {
    return (
      <div>
        <Layout>
          <Instrumentos instrumentos={this.state.instrumentos} />
        </Layout>
      </div>
    );
  }
}

export default App;
