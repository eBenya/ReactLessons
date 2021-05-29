import React, { useState } from 'react';


function App() {

	const [obj, setObj] = useState({
		prop1: 'value1',
		prop2: 'value2',
		prop3: 'value3',
	});
	function changeObj(obj, propName, setFunc, event) {
		let temp = Object.assign({}, obj);
		temp[propName] = event.target.value;
		setFunc(temp);
	}

	const initDate = {
		year: 2025,
		month: 12,
		day: 31,
		toString(){
			return  this.year+'-'+this.month+'-'+this.day;
		}
	}
	const [date, setDate] = useState(initDate);

	return (
		<>
			<div className="borderedDiv">
				<span>{obj.prop1}</span> <button onClick={() => setObj({ ...obj, ...{ prop1: '!' } })}>change</button> <br />
				<span>{obj.prop2}</span> <button onClick={() => setObj({ ...obj, ...{ prop2: '@' } })}>change</button> <br />
				<span>{obj.prop3}</span> <button onClick={() => setObj({ ...obj, ...{ prop3: '#' } })}>change</button> <br />
			</div>

			<div className="borderedDiv">
				<input value={obj.prop1} onChange={e => changeObj(obj, 'prop1', setObj, e)} />
				<input value={obj.prop2} onChange={e => changeObj(obj, 'prop2', setObj, e)} />
				<input value={obj.prop3} onChange={e => changeObj(obj, 'prop3', setObj, e)} />
				<br />
				{obj.prop1}-{obj.prop2}-{obj.prop3}
			</div>

			<div className="borderedDiv">
				<p>
					year: {date.year}; moth: {date.month}; day: {date.day};
					day of weak: {(new Date(date.toString())).getDay()};
					<br/>
					Edit fields:<br/>
					<input value={date.year} onChange={e=>changeObj(date, 'year', setDate, e)} placeholder="year"/>
					<input value={date.month} onChange={e=>changeObj(date, 'month', setDate, e)} placeholder="month"/>
					<input value={date.day} onChange={e=>changeObj(date, 'day', setDate, e)} placeholder="day"/>
				</p>
			</div>
		</>
	);
}

export default App;
