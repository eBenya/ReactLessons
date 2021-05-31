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
	const [inputState, setInputState] = useState(null);

	function renderTableHead(obj) {
		return (
			<thead>
				<tr>
					{Object.keys(obj).map((val, it) => <th key={it}>{val}</th>)}
				</tr>
			</thead>
		);
	}
	function renderTableRow(obj, elementKey, stateObjs, changeStateFunction, inputState, inputStateChangeFunc) {
		return (
			<tr key={elementKey}>
				{Object.entries(obj).map(x => <td key={x[0]}>{x[1]}</td>)}
				{
					changeStateFunction ?
						<td>
							<button onClick={() => delElementOnNumber(stateObjs, elementKey, changeStateFunction)}>del</button>
							<button onClick={() => inputStateChangeFunc(obj)}>Edit</button>
						</td>
						: null
				}
			</tr>
		);
	}
	function renderTableBody(objects, changeStateFunction, inputState, inputStateChangeFunc) {
		return (
			<tbody>
				{objects.map((val, it) => renderTableRow(val, it, objects, changeStateFunction, inputState, inputStateChangeFunc))}
			</tbody>
		);
	}
	function renderAddForm(objsCollection, changeObjStateFunc, inputState, inputStateChangeFunc) {
		return (
			<>
				{
					Object.entries(objsCollection[0])
						.map(x => {
							if (x[0] !== 'id') {
								return (
									<span key={x[0]}>
										{x[0]}:
										<input
											value={inputState !== null ? inputState[x[0]] : ''}
											onChange={e => changePropInputFormObj(inputState, inputStateChangeFunc, x[0], e.target.value)}
										/>{' '}
									</span>
								);
							}
						})
				}
				<button onClick={() => addNewElement(objsCollection, changeObjStateFunc, inputState, inputStateChangeFunc)}>Add new</button>
			</>
		);
	}
	function changePropInputFormObj(objState, changeFunctionState, keyName, newValue) {
		var temp = Object.assign({}, objState);
		if (!('id' in temp)) {
			temp.id = ' ';
		}
		temp[keyName] = newValue;
		changeFunctionState(temp);
	}
	function renderTable(objects, changeStateFunction, inputObjState, changeInputFormFunc) {
		if (objects.length > 0) {
			return (
				<>
					{((inputObjState || inputState === null) && changeInputFormFunc && changeStateFunction) ? renderAddForm(objects, changeStateFunction, inputObjState, changeInputFormFunc) : null}
					<table border="1px">
						{renderTableHead(objects[0])}
						{renderTableBody(objects, changeStateFunction, inputObjState, changeInputFormFunc)}
					</table>
				</>
			)
		}
		return <span>404 NotFound</span>
	}

	function delElementOnNumber(stateObj, key, changeStateFunc) {
		let temp = stateObj.slice();
		temp.splice(key, 1);
		changeStateFunc(temp);
	}
	function addNewElement(objCollection, changeCollectionStateFunc, newObj, clearInputFunc) {
		if (objCollection[0].id) {
			newObj.id = getNewId();
		}
		changeCollectionStateFunc([...objCollection, newObj]);
		clearInputFunc(null);
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
					{renderTable(products, setProducts, inputState, setInputState)}
				</div>
			</div>
		</>
	);
}

export default App;
