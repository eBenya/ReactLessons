import React, { useState } from 'react';
import Nanoid, { nanoid } from 'nanoid';

function App() {
	function id() {
		return nanoid();
	}

	let [inputVal1, setInputVal1] = useState(0);
	let [inputVal2, setInputVal2] = useState(0);
	let [sumResult, setSumResult] = useState(inputVal1+inputVal2);
	let [multResult, setMultResult] = useState(inputVal1+inputVal2);

	function calc(){
		calcSum();
		calcMult();
	}
	function calcSum(){
		let res = Number(inputVal1) + Number(inputVal2);
		setSumResult(res);
	}
	function calcMult(){
		let res = Number(inputVal1) * Number(inputVal2);
		setMultResult(res);
	}

	let [date1, setDate1] = useState((new Date()).toISOString().split('T')[0]);
	let [date2, setDate2] = useState((new Date()).toISOString().split('T')[0]);
	let [diffDate, setDiffDate] = useState("");
	function calcDiffInDays(){
		let d1 = new Date(date1);
		let d2 = new Date(date2);
		let res = Math.abs(d1 - d2)/1000/60/60/24;
		setDiffDate(res);
	}

	let [number, setNumber] = useState(0);
	let [sumAllDigits, setSumAllDigits] = useState(0);
	let [multAllDivisors, setMultAllDivisors] = useState(0);
	function calcAll(){
		calcSumAllDigits();
		calcMultAllDivisors();
	}
	function calcSumAllDigits(){
		let num = Math.abs(Number(number));
		let sum=0;
		while(num>0){
			sum += num%10;
			num = parseInt(Math.floor(num/10));
		}
		setSumAllDigits(sum);
	}
	function calcMultAllDivisors(){
		let num = Math.abs(Number(number));
		let res = 1;
		let partNum = parseInt(Math.floor(num/2));
		for(let i = 1; i <= partNum; i++){
			if(num%i == 0){
				res *= i;
			}
		}
		setMultAllDivisors(res);
	}

	return (
		<>
			<div className="borderedDiv">
				<input value={inputVal1} onChange={e=>setInputVal1(e.target.value)}/>
				<input value={inputVal2} onChange={e=>setInputVal2(e.target.value)}/>
				<button onClick={calc}>calc</button> <br></br>

				<span>{inputVal1} + {inputVal2} = {sumResult}</span> <br/>
				<span>{inputVal1} * {inputVal2} = {multResult}</span> <br/>
			</div>		
			<div className="borderedDiv">
				<input value={date1} onChange={e=>setDate1(e.target.value)}/>
				<input value={date2} onChange={e=>setDate2(e.target.value)}/>
				<button onClick={calcDiffInDays}>calc</button> <br></br>

				<span>{date1} - {date2} = {diffDate}</span> <br/>
			</div>		
			<div className="borderedDiv">
				<input value={number} onChange={e=>setNumber(e.target.value)} onBlur={calcAll}/>		
				<br/>
				<span>Sum of all digits = {sumAllDigits}</span> <br/>
				<span>Multiple all divisors = {multAllDivisors}</span> <br/>
			</div>	
		</>
	);
}

export default App;
