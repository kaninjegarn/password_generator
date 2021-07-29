import React, { useState } from 'react';

const PasswordGen = () => {
  const [generatedPassword, setGeneratedPassword] = useState();
  const [passwordSize, setPasswordSize] = useState();

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
    const random = Math.floor(Math.random() * fullArr.length);
    console.log(random, fullArr[random]);
  }

  // Function that will set the length of the generated passwords array.
  const changeSize = (e) => {
    setPasswordSize(e.target.value)
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
      <h1>{passwordSize}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default PasswordGen;