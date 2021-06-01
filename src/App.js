import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './UsersComponents/Product';
import User from './UsersComponents/User';

function id() {
	return nanoid();
}


function App() {

	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<Product name="p1" cost="100"/>
					<User/>
					<User/>
				</div>
			</div>
		</>
	);
}

export default App;
