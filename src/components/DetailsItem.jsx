import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoonLoader from 'react-spinners/ClipLoader';
import Image from './Image';
import Description from './Description';
import ButtonDetalles from './Buttondetalles';
import fetchSimulation from '../utils/fetchSimulation';
import productos from '../utils/products';
import '../styles/index.css';

const DetailsItem = () => {
    const [datos, setDatos] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        setDatos([]);

        fetchSimulation(productos.filter(flt => flt.id == idItem), 2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error));
    }, [idItem]);

    return (
        <div className="detailsItem">
            {datos.length === 0 ? (
                <MoonLoader color="#5b00fb" />
            ) : (
                datos.map(items => (
                    <React.Fragment key={items.id}>
                        <div className="containerLeft">
                            <Image imagen={items.imageProduct.firtsImage} />
                        </div>
                        <div className="containerRigth">
                            <Description
                                title={items.title}
                                description={items.description}
                                cantidad={items.stock}
                                precio={items.price}
                            />
                            <div className="buttons">
                                <ButtonDetalles txt="Agregar al carrito" />
                            </div>
                        </div>
                    </React.Fragment>
                ))
            )}
        </div>
    );
};

export default DetailsItem;