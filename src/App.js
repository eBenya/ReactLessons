import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Products from './UsersComponents/Products';
import Users from './UsersComponents/Users'

function App() {

	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<Products />
				</div>
			</div>

			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<Users />
				</div>
			</div>
		</>
	);
}

export default App;
