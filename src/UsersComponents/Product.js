import React from 'react';

function Product({ id, name, cost, inCart, addToCartFunc }) {
    return <div>
        name: <span>{name}</span>,
		cost: <span>{cost}</span>,
        <span>{inCart ? <strong>inCart</strong> : <strong>not in cart</strong> }</span>
        {inCart ? '' : <button onClick={()=>addToCartFunc(id)}>add to cart</button>}
    </div>;
}

export default Product;