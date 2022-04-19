import { Component } from "react";
import Instrumento from "./Instrumento";

const styles = {
    productos: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}

class Instrumentos extends Component {
    render() {
        const { instrumentos } = this.props;
        return (
            <div style={styles.productos}>
                {instrumentos.map(instrumento => (
                    <Instrumento key={instrumento.id} instrumento={instrumento} />
                ))}
            </div>
        )
    }
}

export default Instrumentos