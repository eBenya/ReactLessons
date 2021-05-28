import React, { useState } from 'react';


function App() {
	const arr = ['', '', ''];
	const languages = ['HTML', 'CSS', 'JS'];
	const [value, setValue] = useState(1);
	const [language, setLanguage] = useState(1);

	function renderRadio(nameR, val, iterator, state, setVal) {
		return (
			<span key={iterator}>
				{val}
				<input
					type="radio"
					name={nameR}
					value={iterator}
					checked={state == iterator ? true : false}
					onChange={(e) => setVal(e.target.value)}
				/>{'   '}
			</span>
		);
	}
	let op = arr.map((val, i) => {
		return renderRadio('radio', val, i, value, setValue);
	});
	let langs = languages.map((val, i) => {
		return renderRadio('lang', val, i, language, setLanguage);
	});

	const [deffault, setDeffault] = useState('kek');

	return (
		<>
			<div className="borderedDiv">
				<p>
					{op} <br />
					You put: {Number(value) + 1}
				</p>
			</div>
			<div className="borderedDiv">
				<p>
					{langs} <br />
						Your favorite language:{languages[language]} <br />
					{languages[language] === languages[2] ? 'Krasauchegg!!!' : ''}
				</p>
			</div>
			<div className="borderedDiv">
				Set value without OnChange:<input value={deffault}/> <br/>
				Set defaultValue without OnChange:<input defaultValue={deffault}/> <br/><br/>

				Set value with OnChange:<input value={deffault} onChange={e=>setDeffault(e.target.value)}/> <br/>
				Set defaultValue with OnChange:<input defaultValue={deffault} onChange={e=>setDeffault(e.target.value)}/><br/>
			</div>
		</>
	);
}

export default App;
