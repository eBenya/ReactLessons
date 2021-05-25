import React from 'react';

function App() {
  const isAdult = true;
  const isAdmin = true;
  let text;
  let adminContent;

  if (isAdmin) {
    adminContent = (
      <>
        <h5>Admin content:</h5>
        <p>text</p>
      </>
    );
  }
  if (isAdult) {
    text = <p>Is once paragraph</p>
  }
  else {
    text = <p>Is another paragraph</p>
  }

  const isAuth = false;

  return (
    <>
      <div>
        <h5>Content:</h5>
        {text}
      </div>
      <div>
        {adminContent}
      </div>
      <div>
        {!isAuth && <p>ternary operator</p>}
      </div>
    </>
  );
}

export default App;
