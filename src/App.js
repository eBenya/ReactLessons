import React, { useState } from 'react';


function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

	const res = notes.map((val, i) => {
		return <p key={i}>{val}</p>;
	});

	function addElement() {
		setNotes([...notes, notes.length + 1]);
	}
	function removeElement() {
		let temp = notes.slice();
		temp.pop();
		setNotes(temp);
	}
	let [elementNumber, setElementNumber] = useState(0);
	let [newValue, setNewValue] = useState(0);
	function removeConcreeteElement() {
		let temp = notes.slice();
		temp.splice(elementNumber, 1);
		setNotes(temp);
		//setNotes([...notes.slice(0, elementNumber), ...notes.slice(elementNumber,1)]); // Надо изучить деструтуризацию!!!
	}
	function editElement() {
		let temp = notes.slice();
		temp[elementNumber] = newValue;
		setNotes(temp);
	}
	function sort() {
		let temp = notes.slice().sort();
		setNotes(temp);
	}
	function reverse() {
		let temp = notes.slice().reverse();
		setNotes(temp);
	}

	const [charArr, setCharArr] = useState(['a', 'b', 'c', 'd', 'e']);
	const [inputText, setInputText] = useState('');
	const ULContent = charArr.map((val, i) => {
		return (
			<li key={i}>{val} <button onClick={()=>removeIndex(i)}>remove</button></li>
		);
	});
	function addULElemnt() {
		setCharArr([...charArr, inputText])
		setInputText('');
	}
	function removeIndex(index){
		let temp = charArr.slice()
		temp.splice(index, 1);
		setCharArr(temp);
	}
	return (
		<>
			<div className="borderedDiv">
				<button onClick={addElement}>add</button>
				<button onClick={removeElement}>remove last</button> <br />

				number of element: <input type="number" value={elementNumber} onChange={e => setElementNumber(e.target.value)} /> <br />
				new value of element: <input type="number" value={newValue} onChange={e => setNewValue(e.target.value)} /> <br />
				<button onClick={removeConcreeteElement}>remove element</button>
				<button onClick={editElement}>edit element</button> <br />
				<button onClick={sort}>sort</button>
				<button onClick={reverse}>reverse</button>
				{res}
			</div>

			<div className="borderedDiv">
				<input value={inputText} onBlur={addULElemnt} onChange={e => setInputText(e.target.value)} />
				<br />
				<ul>
					{ULContent}
				</ul>
			</div>
		</>
	);
}

export default App;
