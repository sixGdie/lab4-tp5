import { Component } from "react";

const styles = {
    instrumento: {
        borderBottom: "1px solid #ccc",
        width: '40%',
        padding: '10px 15px',
    },
    image: {
        width: "30%",
    },
    envio: {
        color: 'orange'
    }
}

class Instrumento extends Component {
    render() {
        const { instrumento } = this.props;
        return (
            <div style={styles.instrumento}>
                <h1>{instrumento.nombre}</h1>
                <img style={styles.image} src={`./img/${instrumento.imagen}`} alt={instrumento.instrumento} />
                <p style={styles.description}>{instrumento.descripcion}</p>
                {instrumento.costoEnvio === 'G'
                    ? <p><img alt='Envío gratis' src='./img/camion.png' />Envio gratis a todo el país</p>
                    : <p style={styles.envio}>Costo de envio: {instrumento.costoEnvio}</p>
                }
                <button>Comprar</button>
            </div>
        )
    }
}

export default Instrumento;