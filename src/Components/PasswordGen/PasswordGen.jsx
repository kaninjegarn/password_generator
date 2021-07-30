import React, { useState } from 'react';

const PasswordGen = () => {
  const [generatedPassword, setGeneratedPassword] = useState();
  const [passwordSize, setPasswordSize] = useState();
  const [includeCaps, setIncludeCaps] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // Create array with the alphabet
  const alpha = Array.from(Array(26)).map((e, index) => index + 65);
  const alphabet = alpha.map((item) => String.fromCharCode(item));

  // Create an array that contains lower case alphabet.
  const lowerAlphabet = Array.from(alphabet.toString().toLowerCase());
  const res = Array.from(lowerAlphabet.toString().toLowerCase().replace(/,/g, ""));

  // create an array with 1-9
  const numbers = Array.from(Array(10).keys());

  // Create array with strange symbols
  const otherSymbols = ["/", "-", ".", ",", ":", ";", "§", "'"];

  // Create an array with all the arrays above as one.
  const fullArr = alphabet.concat(res, numbers, otherSymbols)
  console.log(fullArr)

  // Get a random value from the full array
  const handleClick = () => {
    // TODO fix the function that checks if all true
    const fullArr = alphabet.concat(res, numbers, otherSymbols)

    const random = Math.floor(Math.random() * fullArr.length);
    console.log(random, fullArr[random]);
  }

  // Function that will set the length of the generated passwords array.
  const changeSize = (event) => {
    setPasswordSize(event.target.value)
  }

  // Function that handles the checkbox for caps
  function handleCaps(event) {
    setIncludeCaps(!includeCaps);
    console.log(includeCaps)
  }

  function handleNumbers(event) {
    setIncludeNumbers(!includeNumbers);
    console.log(includeNumbers)
  }

  function handleSymbols(event) {
    setIncludeSymbols(!includeSymbols);
    console.log(includeSymbols)
  }
  
  return(
    <div>
      <h1>Password Generator</h1>
      <h4>Size of your password</h4>
      <div>
        <button onClick={changeSize} value={8}>8</button>
        <button onClick={changeSize} value={10}>10</button>
        <button onClick={changeSize} value={12}>12</button>
        <button onClick={changeSize} value={14}>14</button>
        <button onClick={changeSize} value={16}>16</button>
      </div>
      <div>
        <div>
          <label htmlFor="caps">Want both upper/lower case?</label>
          <input type="checkbox" name="caps" value={includeCaps} checked={includeCaps} onChange={handleCaps}/>
          <label htmlFor="caps">eg: ABC</label>
        </div>
        <div>
          <label htmlFor="numbers">Want to include numbers?</label>
          <input type="checkbox" name="numbers" value={includeNumbers} checked={includeNumbers} onChange={handleNumbers}/>
          <label htmlFor="numbers">eg: 1,2,3</label>
        </div>
        <div>
          <label htmlFor="otherSymbols">Want to include other symbols?</label>
          <input type="checkbox" name="otherSymbols" value={includeSymbols} checked={includeSymbols} onChange={handleSymbols} />
          <label htmlFor="otherSymbols">eg: / § - : ;</label>
        </div>
      </div>
      <h1>{passwordSize}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default PasswordGen;