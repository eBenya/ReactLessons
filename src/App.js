import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function id() {
	return nanoid();
}

const initNotes = [
	{
		id: id(),
		name: 'name1',
		desc: 'long description 1',
		showDescr: false,
	},
	{
		id: id(),
		name: 'name2',
		desc: 'long description 2',
		showDescr: false,
	},
	{
		id: id(),
		name: 'name3',
		desc: 'long description 3',
		showDescr: false,
	},
];

const initProds = [
	{
		id: id(),
		name: 'prod1',
		cost: 'cost1',
		desc: 'long description 1',
		comm: 'my super comment 1',
		showDescr: false,
		showComm: false
	},
	{
		id: id(),
		name: 'prod2',
		desc: 'long description 2',
		comm: 'my super comment 2',
		showDescr: false,
		showComm: false
	},
	{
		id: id(),
		name: 'prod3',
		desc: 'long description 3',
		comm: 'my super comment 3',
		showDescr: false,
		showComm: false
	},
];

function App() {
	const [visible1, setVisible1] = useState(false);
	let elem1;
	if (visible1) {
		elem1 = <p>text1</p>;
	}

	const [visible2, setVisible2] = useState(false);
	let elem2;
	if (visible2) {
		elem2 = <p>text2</p>;
	}

	const [visible3, setVisible3] = useState(false);
	let elem3;
	if (visible3) {
		elem3 = <p>text3</p>;
	}

	const [notes, setNotes] = useState(initNotes);
	const renderNotes = notes.map(x => {
		let desc;
		if (x.showDescr) {
			desc = <i>{x.desc}</i>;
		}
		return (
			<p key={x.id}>
				{x.name},
				<button onClick={() => ShowDescr(x.id, notes, setNotes)}>{x.showDescr ? 'Hide' : 'Show'}</button>
				{desc}
			</p>
		);
	});
	function ShowDescr(id, objs, func) {
		func(objs.map(obj => obj.id === id ? { ...obj, showDescr: !obj.showDescr } : obj));
	}

	const [products, setProducts] = useState(initProds);
	const renderProducts = <ul>
		{
			products.map(x => {
				let desc;
				if (x.showDescr) {
					desc = <i>{x.desc}</i>;
				}

				let comm;
				if (x.showComm) {
					comm = <i>{x.comm}</i>;
				}

				return <li key={x.id}>
					{x.name}
					<button onClick={() => ShowDescr(x.id, products, setProducts)}>Description:</button>
					{desc}
					<button onClick={() => ShowComm(x.id, products, setProducts)}>Comments:</button>
					{comm}
				</li>
			})
		}
	</ul>;

	function ShowComm(id, objs, func) {
		func(objs.map(obj => obj.id === id ? { ...obj, showComm: !obj.showComm } : obj));
	}


	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					<button onClick={() => setVisible1(!visible1)}>{visible1 ? 'Hide 1' : 'Show 1'}</button>
					<button onClick={() => setVisible2(!visible2)}>{visible2 ? 'Hide 2' : 'Show 2'}</button>
					<button onClick={() => setVisible3(!visible3)}>{visible3 ? 'Hide 3' : 'Show 3'}</button>
					{elem1}
					{elem2}
					{elem3}
				</div>

				<div className="borderedDiv">
					{renderNotes}
				</div>
			</div>

			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					{renderProducts}
				</div>
			</div>
		</>
	);
}

export default App;
