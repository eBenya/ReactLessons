import React, { useState } from 'react';

function App() {

	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
		sumAllNumbers();
	}

	let [sum, setSum] = useState(0);
	function sumAllNumbers() {
		let arr = value.split(' ');
		let res = arr.map(x => Number.isNaN(Number(x)) ? 0 : Number(x))
			.reduce((sum, i) => sum += i);
		setSum(res);
	}

	let [isOnline, setIsOnline] = useState(false);
	let [mess, setMess] = useState('');
	function writeToUser() {
		if (isOnline) {
			setMess('Hi');
		}
		else {
			setMess('Bye');
		}
	}

	const htmlName = "HTML";
	const cssName = "CSS";
	const jsName = "JS";
	let [knowCSS, setKnowCSS] = useState(false);
	let [knowJS, setKnowJS] = useState(false);
	let [knowHTML, setKnowHTML] = useState(false);

	let [isAdult, setIsAdult] = useState(false);
	let [message, setMessage] = useState('');
	function adultChangeHandler() {
		setIsAdult(!isAdult);

		if (!isAdult) {
			setMessage('Yes');
		}
		else {
			setMessage('No');
		}
	}
	return (
		<>
			<div className="borderedDiv">
				<textarea value={value} onChange={handleChange} />
				<p>{value}</p>
				<p>Text length: {value.length}</p>
				<p>Sum all numbers = {sum}</p>
			</div>
			<div className="borderedDiv">
				<input type="checkbox" checked={isOnline} onChange={() => setIsOnline(!isOnline)} />
				<button onClick={writeToUser}>write</button>
				<p>{mess}</p>
			</div>
			<div className="borderedDiv">
				{htmlName}:<input type="checkbox" checked={knowHTML} onChange={() => setKnowHTML(!knowHTML)} placeholder="HTML:"></input>
				{cssName}:<input type="checkbox" checked={knowCSS} onChange={() => setKnowCSS(!knowCSS)} placeholder="CSS:"></input>
				{jsName}:<input type="checkbox" checked={knowJS} onChange={() => setKnowJS(!knowJS)} placeholder="JS:"></input>
				<p>
					I know: {knowHTML ? (htmlName + ';') : ''} {knowCSS ? (cssName + ';') : ''} {knowJS ? (jsName + ';') : ''}
				</p>
			</div>
			<div className="borderedDiv">
				Are you 18? <input type="checkbox" checked={isAdult} onChange={adultChangeHandler} />
				 <h2>{message}</h2>				
				<p hidden={!isAdult}>
					Adut content...
				</p>
			</div>
		</>
	);
}

export default App;
