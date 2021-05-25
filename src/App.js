import React from 'react';

function App() {
  const arr = [1, 2, 3, 4, 5];
  const obj = { name: 'john', surname: 'smit' };

  return (
    <>
      <div>
        <h5>Render result - tag ul that contains tag li with array elements:</h5>
        <ul>
          <li>arr[0]</li>
          <li>arr[1]</li>
          <li>arr[2]</li>
          <li>arr[3]</li>
          <li>arr[4]</li>
        </ul>
      </div>
      <div>
        <h5>Render object:</h5>
        <p>
          {'<p>'}<br />
          name: {'<span>'}<span>{obj.name}</span>{'</span>'}, {'<br/>'}
          <br />
          surname: {'<span>'}<span>{obj.surname}</span>{'</span>'}
          <br/>{'</p>'}
        </p>
      </div>
    </>
  )
}

export default App;
