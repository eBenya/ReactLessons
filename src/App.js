import React, { useState } from 'react';
import Nanoid, { nanoid } from 'nanoid';

function App() {
	function id() {
		return nanoid();
	}

	const [name, setName] = useState('prod');
	let [cost, setCost] = useState('1000');
	function changeName() {
		setName('xxxxxxx');
	}
	function changeCost() {
		setCost('100500');
	}

	let [inCart, setInCart] = useState(false);
	function addOrRemoveItem() {
		setInCart(!inCart);
	}

	let [count, setCount] = useState(0);

	let [user, setUser] = useState({
		name: 'name',
		sureName: 'sureName',
		age: 9,
		isBanned: false
	});
	function setUserName() {
		setUser({ ...user, name: 'kek' });
	}
	function setUserSurName() {
		setUser({ ...user, sureName: 'lol' });
	}
	function setUserAge() {
		setUser({ ...user, age: 20 });
	}
	function banOrUnBanUser() {
		setUser({ ...user, isBanned: !user.isBanned });
	}

	let [inputValue1, setInputValue1] = useState('someText1');
	function inputChangeHandle(event) {
		console.log(event.target.value);
		setInputValue1(event.target.value);
	}
	let [inputValue2, setInputValue2] = useState('someText2');

	let [inputNum, setInputNum] = useState(15);

	let [age, setAge] = useState('');
	function calcYearOfBirth(value) {
		let year = (new Date).getFullYear();
		return year - age;
	}

	let [fahrDegree, setFahrDegree] = useState(20);
	function convertFahrenheitToСelsius(tf) {
		return (5 * (tf - 32) / 9).toFixed(3);
	}

	let [numbers, setNumbers] = useState([4, 3, 2, 1, 0]);
	function updateNumbers(e) {

		let tempNum = parseInt(e.target.value);

		if (!isNaN(tempNum)) {
			setNumbers({ ...numbers, [e.target.name]: tempNum });
		}
	}
	function averange(arr) {
		if (!Array.isArray(arr)) {
			let temp = Object.values(arr);
			arr = temp.map((item) => parseInt(item));
		}
		return arr.reduce((sum, i) => sum += Number(i), 0) / arr.length;
	}
	// Пока не знаю как решить ошибку по изменению этих инпутов
	/*var numbersInputRender =
		numbers.map((num, i) => {
			return <input key={i} name={i} value={num} onChange={updateNumbers} />
		});*/


	return (
		<>
			<div className="borderedDiv">
				<h4>State:</h4>
				<div>
					<p>
						<span>{name}</span>
						<span>{cost}</span>
					</p>
					<button onClick={changeName}>changeName</button>
					<button onClick={changeCost}>changeCost</button>
				</div>
				<hr />
				<div>
					Cart: <span>{inCart ? 'something is there ' : 'empty'}</span>
					<button onClick={addOrRemoveItem}>{inCart ? 'remove' : 'add'}</button>
				</div>
				<div>
					Clicker: <span>{count}</span>
					<button onClick={() => setCount(count += 1)}>+</button>
				</div>
				<hr />
				<div>
					<p>
						<span>{user.name}</span>
						<span>{user.sureName}</span>
						<span>{user.age}</span>
						<button onClick={setUserName}>change name</button>
						<button onClick={setUserSurName}>change surename</button>
						<button onClick={setUserAge}>change age</button>
						<br />
						<button onClick={() => setUser({ ...user, age: user.age -= 1 })}>-age</button>
						<button onClick={() => setUser({ ...user, age: user.age += 1 })}>+age</button>
					</p>
					<p>
						<span>{user.isBanned ? 'baned' : 'not baned'}</span>
						<button onClick={banOrUnBanUser}>{user.isBanned ? 'UnBan' : 'Ban!'}</button>
					</p>
				</div>
			</div>
			<div className="borderedDiv">
				<h4>Input state:</h4>
				<div>
					<input value={inputValue1} onChange={inputChangeHandle} />
					<input value={inputValue2} onChange={e => setInputValue2(e.target.value)} />
					<p>Paragraph1: {inputValue1}</p>
					<p>Paragraph2: {inputValue2}</p>
				</div>
				<hr />
				<div>
					square {inputNum} = {inputNum ** 2} <br />
					<input value={inputNum} onChange={e => setInputNum(e.target.value)} />
					<p>Sybols in input = {inputNum.length}</p>
				</div>
				<hr />
				<div>
					age:<input value={age} onChange={e => setAge(e.target.value)} />
					<p>
						Years of birth - {calcYearOfBirth(age)}
					</p>
				</div>
				<hr />
				<div>
					fahr temperature: <input value={fahrDegree} onChange={e => setFahrDegree(e.target.value)} />
					<p>
						Tempearture in celsium = {convertFahrenheitToСelsius(fahrDegree)}
					</p>
				</div>
				<hr />
				<div>
					{/*numbersInputRender*/}
					<input name="0" value={numbers[0]} onChange={updateNumbers} />
					<input name="1" value={numbers[1]} onChange={updateNumbers} />
					<input name="2" value={numbers[2]} onChange={updateNumbers} />
					<input name="3" value={numbers[3]} onChange={updateNumbers} />
					<input name="4" value={numbers[4]} onChange={updateNumbers} />
					<p>Averange = {averange(numbers)}</p>
				</div>

			</div>
		</>
	);
}

export default App;
