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

	function renderTableHead(obj) {
		return (
			<thead>
				<tr>
					{Object.keys(obj).map((val, it) => <th key={it}>{val}</th>)}
				</tr>
			</thead>
		);
	}
	function renderTableRow(keyValuePairs, elementKey, stateObj, changeStateFunction) {
		return (
			<tr key={elementKey}>
				{Object.entries(keyValuePairs).map(x => <td key={x[0]}>{x[1]}</td>)}
				{
					changeStateFunction ?
						<td><button onClick={() => delElementOnNumber(stateObj, elementKey, changeStateFunction)}>del</button></td>
						: null
				}
			</tr>
		);
	}
	function renderTableBody(objects, changeStateFunction) {
		return (
			<tbody>
				{objects.map((val, it) => renderTableRow(val, it, objects, changeStateFunction))}
			</tbody>
		);
	}
	function renderTable(objects, changeStateFunction) {
		if (objects.length > 0) {
			return (
				<table border="1px">
					{renderTableHead(objects[0])}
					{renderTableBody(objects, changeStateFunction)}
				</table>
			)
		}
		return <span>404 NotFound</span>
	}

	function delElementOnNumber(stateObj, key, changeStateFunc){
		let temp = stateObj.slice();		
		temp.splice(key,1);
		changeStateFunc(temp);
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
					{renderTable(products, setProducts)}					
				</div>
			</div>
		</>
	);
}

export default App;
