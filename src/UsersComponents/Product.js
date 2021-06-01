import React from 'react';
import ProductField from './ProductField';

function Product({ id, name, cost, isEdit, toggleMode, editProd }) {
	return <div>
		name: <ProductField
			id={id}
			text={name}
			type="name"
			isEdit={isEdit}
			editProd={editProd}
		/>,
		cost: <ProductField
			id={id}
			text={cost}
			type="cost"
			isEdit={isEdit}
			editProd={editProd}
		/>

		<button onClick={() => toggleMode(id)}>{isEdit ? 'Save' : 'Edit'}</button>
	</div>;
}

export default Product;