import React, { useState } from 'react';


function App() {
	let cityes = ['city_1', 'city_2', 'city_3', 'city_4', 'city_5', 'city_6', 'city_7', 'city_8', 'city_9', 'city_0'];
	let [city, setCity] = useState('');

	function cityRender(name, i) {
		return (
			<option key={i}>{name}{i}</option>
		);
	}

	const opts = cityes.map((content, i) => {
		return <option key={i} value={i}>{content}</option> // cityRender(content, i);
	});

	const [value, setValue] = useState('');
	return (
		<>
			<div className="borderedDiv">
				<select value={city} onChange={(e) => setCity(e.target.value)}>
					{opts}
				</select>
				<p>
					Yot put: {city}	<br/>
					It number: {city} <br/>
					It value: {cityes[city]}
				</p>
			</div>
			<div className="borderedDiv">
				Your age group:
				<select value={value} onChange={event => setValue(event.target.value)}>
					<option value="1">0-12</option>
					<option value="2">13-17</option>
					<option value="3">18-25</option>
					<option value="4">over 25</option>
				</select>
				<p>
					your age group 
					{value === '1' && ' from 0 to 12'}
					{value === '2' && ' from 12 to 17'}
					{value === '3' && ' from 18 to 25'}
					{value === '4' && ' over 25'}
				</p>
			</div>

		</>
	);
}

export default App;
