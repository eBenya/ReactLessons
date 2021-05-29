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

const testId = 'IWSpfBPSV3SXgRF87uO74';
const newTestElem = {
	id: 'GMNCZnFT4rbBP6cirA0Ha',
	prop1: 'value41',
	prop2: 'value42',
	prop3: 'value43',
};
function getNewId() {
	return nanoid();
}

function App() {
	const [notes, setNotes] = useState(initNotes);
	const [cahngeNode, setChangeNode] = useState(null);
	const renderObjs = notes.map(val => {
		return (
			<p key={val.id} onClick={() => setChangeNode(val)}>
				<span>{val.prop1}</span>
				<span>{val.prop2}</span>
				<span>{val.prop3}</span>
			</p>
		);
	});
	function endEditObj() {
		setNotes(notes.map(note => note.id === cahngeNode.id ? cahngeNode : note));
		setChangeNode(null);
	}
	const renderChangeFormObj = (
		<p>
			<input value={cahngeNode === null ? '' : cahngeNode.prop1} onChange={(e) => setChangeNode({ ...cahngeNode, ...{ prop1: e.target.value } })} />
			<input value={cahngeNode === null ? '' : cahngeNode.prop2} onChange={(e) => setChangeNode({ ...cahngeNode, ...{ prop2: e.target.value } })} />
			<input value={cahngeNode === null ? '' : cahngeNode.prop3} onChange={(e) => setChangeNode({ ...cahngeNode, ...{ prop3: e.target.value } })} />
			<button onClick={endEditObj}>Apply</button>
		</p>
	);

	function generateNewElement() {
		const newElem = {
			id: getNewId(),
			prop1: 'value' + (notes.length + 1) + '1',
			prop2: 'value' + (notes.length + 1) + '2',
			prop3: 'value' + (notes.length + 1) + '3',
		}
		//setNotes([...notes, newElem]);
		return newElem;
	}

	function takeItem() {
		setChangeNode(notes.reduce((res, note) => note.id === testId ? note : res, ''));
	}

	return (
		<>
			<div className="borderedDiv">
				<button onClick={() => setNotes(notes.filter(note => note.id !== testId))}>delete test element</button>
				<button onClick={() => setNotes([...notes, generateNewElement()])}>Add new element</button>
				<br />
				<hr />
				Edit object:<br />
				{renderChangeFormObj}
				<hr />
				<p>
					<input type="button" defaultValue={"get " + testId + " obj"} onClick={takeItem}></input>
					<p>prop1:{cahngeNode === null ? '' : cahngeNode.prop1}</p>
				</p>
				<hr />
				{renderObjs}
			</div>
		</>
	);
}

export default App;
