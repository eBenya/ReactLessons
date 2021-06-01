import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './UsersComponents/Product';
import Employee from './UsersComponents/Employee';

function id() {
	return nanoid();
}


function App() {

	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<Product name="p1" cost="100"/>
					<Employee name="Kek"salary="1"/>
					<Employee name="Puc" surName="Sec" salary="10"/>
					<Employee name="Lol" surName="Drol" patronymic="bjec" salary="100"/>
				</div>
			</div>
		</>
	);
}

export default App;
