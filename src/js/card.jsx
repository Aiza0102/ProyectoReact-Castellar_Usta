import React from 'react';
import { Link } from 'react-router-dom';
import { Card as BootstrapCard, Button } from 'react-bootstrap';
import '../styles/index.css'

const Card = ({ id, image, title, price }) => {
  return (
    <BootstrapCard className="mb-4 custom-card">
      <BootstrapCard.Img variant="top" src={image} alt={title} className="card-image" />
      <BootstrapCard.Body>
        <BootstrapCard.Title className="card-title">{title}</BootstrapCard.Title>
        <BootstrapCard.Text className="card-text">{`Precio: $${price}`}</BootstrapCard.Text>
        <Link to={`/product/${id}`} className="btn-link">
          <Button variant="primary">Detalles del Producto</Button>
        </Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
};

export default Card;