import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { animateScroll as scroll } from 'react-scroll';

const ItemListContainer = ({ greeting }) => {
useEffect(() => {
    const itemContainer = document.querySelector('.item-list-container');
    const handleScroll = () => {
    if (itemContainer && window.scrollY > itemContainer.offsetTop - window.innerHeight + 50) {
        itemContainer.classList.add('show');
    }
};

    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
}, []);

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
    </Container>
    </div>
    );
};

export default ItemListContainer;