import React from 'react';

function App() {
  const num = 123;

  const getDigitsSumWithMapping = (n) =>
    num.toString().split('').map(x => parseInt(x)).reduce((a, b) => a + b);
  const getDigitsSum = (n) => {
    let sum = 0;
    if (n < 0) {
      n *= -1;
    }
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    return sum;
  }

  return (
    <>
      <div>
        summ all numbers {num} with mapping: {getDigitsSumWithMapping(num)}
      </div>
      <div>
        summ all numbers {num}: {getDigitsSum(num)}
      </div>
    </>
  );
}

export default App;
