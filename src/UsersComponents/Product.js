import React from 'react';

function Product(props){
    return <p>
        name: <span>{props.name}</span>,
		cost: <span>{props.cost}</span>
    </p>;
}

export default Product;