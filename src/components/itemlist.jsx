import React from 'react';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
return (
    <ul>
    {items && Array.isArray(items) ? (
        items.map((item) => (
        <li key={item.id}>
            <Link to={`/item/${item.id}`}>{item.name}</Link>
        </li>
        ))
    ) : (
        <li>No hay items disponibles.</li>
    )}
    </ul>
    );
};

export default ItemList;