const Image = (props) => {
    return (
        <div className="cardImg">
            <img src={props.imagen} alt="imagen" />
        </div>
    );
};

export default Image;