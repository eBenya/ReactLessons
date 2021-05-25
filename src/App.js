import React from 'react';

function App() {
  const elem = (
    <div>
      <h3>someText</h3>
      <p className="Paragraph1">Paragraph 1</p>
      <p className="Paragraph2">Paragraph 2</p>
      <p className="Paragraph3">Paragraph 3</p>
      <input /><br /><input />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <table border="1">
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>3</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return elem;
}

export default App;
