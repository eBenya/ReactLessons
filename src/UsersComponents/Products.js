import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

function id() {
    return nanoid();
}

const initProds = [
    { id: id(), name: 'product1', cost: 100, catg: 'catg1' },
    { id: id(), name: 'product2', cost: 200, catg: 'catg2' },
    { id: id(), name: 'product3', cost: 300, catg: 'catg3' },
];

function Products() {
    const [prods, setProds] = useState(initProds);
    const items = prods.map(val => <Product
        key={val.id}
        id={val.id}
        name={val.name}
        cost={val.cost}
        catg={val.catg}
        editProd={editProd}
    />
    );
    function editProd(id, propName, newValue) {
        setProds(prods.map(prod => {
            if (prod.id == id) {
                prod[propName] = newValue;
            }
            return prod;
        }));
    }

    return (
        <table border="1px">
            <tbody>
                {items}
            </tbody>
        </table>
    )
}

export default Products;