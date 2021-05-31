import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function id() {
	return nanoid();
}

const initNotes = [
	{ text: 'note1', isEdit: false },
	{ text: 'note2', isEdit: false },
	{ text: 'note3', isEdit: true },
];

function App() {
	const [value, setValue] = useState('text');
	const [isEdit, setIsEdit] = useState(true);

	let par;
	if (isEdit) {
		par = <p><input value={value} onChange={e => setValue(e.target.value)} onBlur={() => setIsEdit(!isEdit)} /></p>
	}
	else {
		par = <p onClick={() => setIsEdit(!isEdit)}>{value}</p>
	}

	const [value2, setValue2] = useState('text2');
	const [isEdit2, setIsEdit2] = useState(false);

	let par2;
	if (isEdit2) {
		par2 = <p>
			<input value={value2} onChange={e => setValue2(e.target.value)} /><br />
			<button onClick={() => setIsEdit2(true)}>Edit</button>
			<button onClick={() => setIsEdit2(false)}>View</button>
		</p>
	}
	else {
		par2 = <p>
			{value2}<br />
			<button onClick={() => setIsEdit2(true)}>Edit</button>
			<button onClick={() => setIsEdit2(false)}>View</button>
		</p>;
	}

	const [notes, setNotes] = useState(initNotes);
	const result = notes.map((note, index) => {
		let elem;
		if(note.isEdit){
			elem = <input value={note.text} onChange={e=>changeInput(index, e, notes, setNotes)} onBlur={()=>endEdit(index, notes, setNotes)}/>
		}
		else{
			elem = <span onClick={()=>startEdit(index, notes, setNotes)}>{note.text}</span>
		}
		return <li key={index}>{elem}</li>;
	});

	function startEdit(index, objs, func){
		var temp = Object.assign([], objs);
		temp[index].isEdit = true;
		func(temp);
	}
	function endEdit(index, objs, func){
		var temp = Object.assign([], objs);
		temp[index].isEdit = false;
		func(temp);
	}
	function changeInput(index, event, objs, func){
		var temp = Object.assign([], objs);
		temp[index].text = event.target.value;
		func(temp);
	}

	const [notes2, setNotes2] = useState(initNotes);
	const renderNotes2 = notes2.map((note, index)=>{
		let el;
		if(note.isEdit){
			el = <input value={note.text} onChange={e=>changeInput(index, e, notes2, setNotes2)}/>
		}
		else{
			el = <span>{note.text}</span>
		}
		
		return(
			<li key={index}>
				{el}
				<button onClick={()=>startOrEndEdit(index, notes2, setNotes2)}>{note.isEdit ? 'End edit' : 'Start edit'}</button>
			</li>
		);
	});
	function startOrEndEdit(index, objss, func){
		var temp = Object.assign([], objss);
		temp[index].isEdit = !temp[index].isEdit;
		func(temp);
	}

	return (
		<>
			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					{par}
				</div>
				<div className="borderedDiv">
					<ul>
						{result}
					</ul>
				</div>
			</div>

			<div className="borderedExaplesLessonsFromTasks">
				<div className="borderedDiv">
					{par2}
				</div>
				<div className="borderedDiv">
					<ul>
						{renderNotes2}
					</ul>
				</div>
			</div>
		</>
	);
}

export default App;
