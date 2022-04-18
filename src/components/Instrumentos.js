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
                {instrumentos.instrumentos?.map(el => (
                    <Instrumento key={el.id} instrumento={el} />
                ))}
            </div>
        )
    }
}

export default Instrumentos