import React from 'react';
import ProductField from './ProductField';

function Product({ id, name, cost, catg, editProd }) {
	return <tr>
		<ProductField
			id={id}
			text={name}
			type="name"
			editProd={editProd}
		/>
		<ProductField
			id={id}
			text={cost}
			type="cost"
			editProd={editProd}
		/>
		<ProductField
			id={id}
			text={catg}
			type="catg"
			editProd={editProd}
		/>
	</tr>
}

export default Product;