import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

function id() {
    return nanoid();
}

const initProds = [
	{id: id(), name: 'product1', cost: 100, inCart: false},
	{id: id(), name: 'product2', cost: 200, inCart: false},
	{id: id(), name: 'product3', cost: 300, inCart: false},
];

function Products() {
    const [prods, setProds] = useState(initProds);
    const items = prods.map(val => <Product
        key={val.id}
        id={val.id}
        name={val.name}
        cost={val.cost}
        inCart={val.inCart}
        addToCartFunc={addToCart}
    />
    );

    function addToCart(id){
        setProds(prods.map(p=>{
            if(p.id === id){
                p.inCart = true;
            }
                return p;
        }));
    }
    return (
        <div>
            {items}
        </div>
    )
}

export default Products;