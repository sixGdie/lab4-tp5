import { Component } from "react";
import Instrumentos from "./components/Instrumentos";
import Layout from "./components/Layout";

class App extends Component {
  state = {
    instrumentos: [],
  };

  componentDidMount() {
      fetch('./data/instrumentos.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({ instrumentos: data })
        })
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
