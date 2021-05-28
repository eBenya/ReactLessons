import React, { useState } from 'react';


function App() {

	const [notes, setNotes] = useState([1, 2, 3, 4]);
	const renderNotes = notes.map((val, i) => {
		return <input key={i} value={val} onChange={e => setNote(e, i)} />
	});
	function getSum(arr) {
		let sum = 0;

		for (const elem of arr) {
			sum += +elem;
		}

		return sum;
	}
	function setNote(event, iter) {
		var temp = notes.slice();
		temp[iter] = event.target.value;
		setNotes(temp);
	}

	const strings = ['kek', 'a', 'b', 'c', 'd', 'e'];
	const [notes2, setNotes2] = useState(strings);
	const [editNote, setEditNote] = useState(null);
	const renderNotes2 = notes2.map((val, i) => {
		return (
			<li key={i} onClick={() => editVal(i)}>{val} </li>
		);
	})
	const renderUL = (<ul>{renderNotes2}</ul>)
	function editVal(iter) {
		setEditNote({ id: iter, val: notes2[iter] });
	}
	function endEdit() {
		let temp = notes2.slice();

		if (editNote != null && editNote.id != null) {
			if (editNote.val === '') {
				temp.splice(editNote.id, 1);
			}
			else {
				temp[editNote.id] = editNote.val;
			}
		}
		else {
			temp.push(editNote.val);
		}
		setNotes2(temp);
		setEditNote(null);
	}
	function onChangeInput(event) {
		if (editNote != null) {
			setEditNote({ ...editNote, val: event.target.value });
		}
		else {
			setEditNote({ id: null, val: event.target.value });
		}
	}

	return (
		<>
			<div className="borderedDiv">
				{renderNotes}
				<br />
				Sum = {getSum(notes)}
			</div>

			<div className="borderedDiv">
				Put one of the next elements:<br />
				{renderUL}
				<input value={editNote !== null ? editNote.val : ''} onChange={e => onChangeInput(e)} onBlur={endEdit} />
			</div>
		</>
	);
}

export default App;
