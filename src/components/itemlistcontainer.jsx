import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';
import Card from '../js/card';
import { Link } from 'react-router-dom';

const ItemListContainer = ({ greeting, category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        const filteredProducts = data.filter((product) =>
          category ? product.category.toLowerCase() === category.toLowerCase() : true
        );

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, [category]);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuad',
    });
  };

  return (
    <div className="item-list-container">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h2>{greeting}</h2>
            <p>Explora nuestra colección exclusiva y descubre ofertas increíbles.</p>
            <Button variant="primary" size="lg" className="show" onClick={scrollToTop}>
              Ver Productos
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          {products.map((product) => (
            <Col key={product.id} lg={4} md={6} sm={12}>
              <Card
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemListContainer;