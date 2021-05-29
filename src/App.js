import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];
const initProds = [
	{ id: getNewId(), name: 'prod1', catg: 'catg1', cost: 100 },
	{ id: getNewId(), name: 'prod2', catg: 'catg2', cost: 200 },
	{ id: getNewId(), name: 'prod3', catg: 'catg3', cost: 300 },
];

function getNewId() {
	return nanoid();
}

function App() {
	const [products, setProducts] = useState(initProds);
	const [notes, setNotes] = useState(initNotes);

	/*const renderBodyProductTable = (
		<tbody>
			{
				products.map((val, it) => {
					return (
						<tr key={val.id}>
							<td>{val.id}</td>
							<td>{val.name}</td>
							<td>{val.catg}</td>
							<td>{val.cost}</td>
						</tr>
					);
				})
			}
		</tbody>
	);
	const renderProductTable = (
		<table border="1px">
			{renderTableHead(products[0])}
			{<thead>
				<tr>
					<th>id</th>
					<th>name</th>
					<th>catg</th>
					<th>cost</th>
				</tr>
			</thead>}
			{renderBodyProductTable}
		</table>
	);*/
	function renderTableHead(obj) {
		return (
			<thead>
				<tr>
					{Object.keys(obj).map((val, it) => <th key={it}>{val}</th>)}
				</tr>
			</thead>
		);
	}
	function renderTableRow(keyValuePairs, elementKey) {
		return (
			<tr key={elementKey}>
				{Object.entries(keyValuePairs).map(x => <td key={x[0]}>{x[1]}</td>)}
			</tr>
		);
	}
	function renderTableBody(objects) {
		return (
			<tbody>
				{objects.map((val, it) => renderTableRow(val, it))}
			</tbody>
		);
	}
	function renderTable(objects) {
		if (objects.length > 0) {
			return (
				<table border="1px">
					{renderTableHead(objects[0])}
					{renderTableBody(objects)}
				</table>
			)
		}
		return <span>404 NotFound</span>
	}

	return (
		<>
			<h3>Lesson examples:</h3>
			<div className="borderedExaplesLessonsFromTasks">
				{renderTable(notes)}
			</div>
			<h3>Tasks:</h3>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					{renderTable(products)}
				</div>
			</div>
		</>
	);
}

export default App;
