import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Product from './UsersComponents/Product';
import Employee from './UsersComponents/Employee';
import User from './UsersComponents/User';

function id() {
	return nanoid();
}
const prods = [
	{ id: id(), name: 'product1', cost: 100 },
	{ id: id(), name: 'product2', cost: 200 },
	{ id: id(), name: 'product3', cost: 300 },
];

const users = [
	{ id: id(), name: 'user1', surn: 'surn1', age: 30 },
	{ id: id(), name: 'user2', surn: 'surn2', age: 31 },
	{ id: id(), name: 'user3', surn: 'surn3', age: 32 },
];

function App() {
	const name = 'product';
	const cost = '100';

	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<Product name={name} cost={cost} />
					<Employee name="Kek" salary="1" />
					<Employee name="Puc" surName="Sec" salary="10" />
					<Employee name="Lol" surName="Drol" patronymic="bjec" salary="100" />
				</div>
			</div>

			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<table border="1px">
						<tbody>
							<User name={users[0].name} surname={users[0].surn} age={users[0].age} />
							{users.map((val,key)=> <User key={key} name={val.name} surname={val.surn} age={val.age}/>)}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}

export default App;
