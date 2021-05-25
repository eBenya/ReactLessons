import React from 'react';
import Nanoid, { nanoid } from 'nanoid';

function App() {
	const users = [
		{ id: 1, name: 'user1', surn: 'surn1', age: 30 },
		{ id: 2, name: 'user2', surn: 'surn2', age: 31 },
		{ id: 3, name: 'user3', surn: 'surn3', age: 32 },
	];
	const resUl = users.map(item => {
		return (
			<li key={item.id}>
				{item.name} {item.surn}, age: {item.age};
			</li>
		)
	});
	const resTable = users.map(item => {
		return (
			<tr key={item.id}>
				<td>{item.id}</td>
				<td>{item.name}</td>
				<td>{item.surn}</td>
				<td>{item.age}</td>
			</tr>
		);
	});

	function id(){
		return nanoid();
	}

	return (
		<div>
			nanoid generate key: {id()}
			<h3>React attribyte "KEY":</h3>
			<div>
				<h5>List:</h5>
				<ul>
					{resUl}
				</ul>
			</div>
			<div>
				<h5>Table:</h5>
				<table border="1">
					<thead>
						<tr>
							<th>id</th>
							<th>name</th>
							<th>surename</th>
							<th>age</th>
						</tr>
					</thead>
					<tbody>
						{resTable}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
