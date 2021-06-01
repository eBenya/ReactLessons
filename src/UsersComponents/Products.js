import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

function id() {
    return nanoid();
}

const initProds = [
    { id: id(), name: 'product1', cost: 100 },
    { id: id(), name: 'product2', cost: 200 },
    { id: id(), name: 'product3', cost: 300 },
];

function Products() {
    const [prods, setProds] = useState(initProds);
    const items = prods.map(val => <Product
        key={val.id}
        name={val.name}
        cost={val.cost}
    />
    );
    return (
        <div>
            {items}
        </div>
    )
}

export default Products;