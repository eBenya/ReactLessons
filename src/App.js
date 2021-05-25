import React from 'react';

function App() {
  const attr = 'block';
  return (
    <>
      <div id={attr}>
        text id
      </div>
      <div className={attr}>
        text class
      </div>
    </>
  );
}

export default App;
