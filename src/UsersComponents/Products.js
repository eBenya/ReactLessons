import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './Product';

function id() {
    return nanoid();
}

const initProds = [
	{id: id(), name: 'product1', cost: 100, isEdit: false},
	{id: id(), name: 'product2', cost: 200, isEdit: false},
	{id: id(), name: 'product3', cost: 300, isEdit: false},
];

function Products() {
    const [prods, setProds] = useState(initProds);
    const items = prods.map(val => <Product
        key={val.id}
        id={val.id}
        name={val.name}
        cost={val.cost}
        isEdit={val.isEdit}
        toggleMode={toggleMode}
        editProd={editProd}
    />
    );

    function toggleMode(id){
        setProds(prods.map(prod => {
            if (prod.id === id) {
                prod.isEdit = !prod.isEdit;
            }
            
            return prod;
        }));
    }
    function editProd(id, propName, newValue){
        setProds(prods.map(prod=>{
            if(prod.id==id){
                prod[propName] = newValue;
            }
            return prod;
        }));
    }

    return (
        <div>
            {items}
        </div>
    )
}

export default Products;