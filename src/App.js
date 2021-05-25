import React from 'react';

function App() {
  function getEvent(name, e, age){
    console.log(e.target);
    console.log(name + ' ' + age);
  }
	
	return <div>
		<button onClick={kek => getEvent('user', kek, 16)}>button</button>
	</div>;
}

export default App;
