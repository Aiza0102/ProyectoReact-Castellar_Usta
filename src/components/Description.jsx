const Description = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{props.title}</h3>
                <div className="card-text">
                    <p><strong>Descripción:</strong> {props.description}</p>
                    <p><strong>Cantidad:</strong> {props.cantidad} unidades</p>
                    <p><strong>Precio:</strong> ${props.precio}</p>
                </div>
            </div>
        </div>
    );
};

export default Description;