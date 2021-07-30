import React, { useState } from 'react';
import './PasswordGen.scss';
import { checkIfAllTrue } from '../../helpers';

const PasswordGen = () => {
  const [generatedPassword, setGeneratedPassword] = useState();
  const [passwordSize, setPasswordSize] = useState(10);
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
  // const fullArr = alphabet.concat(res, numbers, otherSymbols)
  // console.log(fullArr)

  

  // Get a random value from the full array
  const handleClick = () => {
    var fullArr;
    if (checkIfAllTrue(includeCaps, includeNumbers, includeSymbols)) {
      fullArr = alphabet.concat(res, numbers, otherSymbols)
      const random = Math.floor(Math.random() * fullArr.length);
      console.log(Array.from({ length: passwordSize }, () => fullArr[random]))
      console.log(fullArr)
    }


    // TODO fix the function that checks if all true
    // const fullArr = alphabet.concat(res, numbers, otherSymbols)

    // const random = Math.floor(Math.random() * fullArr.length);
    // console.log(random, fullArr[random]);
    // console.log(checkIfAllTrue(includeCaps, includeNumbers, includeSymbols))
  }

  // Function that will set the length of the generated passwords array.
  const changeSize = (event) => {
    setPasswordSize(parseInt(event.target.getAttribute('size')))
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
      <div className="passwordSize">
        <div onClick={changeSize} size={8}>8</div>
        <div onClick={changeSize} size={10}>10</div>
        <div onClick={changeSize} size={12}>12</div>
        <div onClick={changeSize} size={14}>14</div>
        <div onClick={changeSize} size={16}>16</div>
      </div>
      <div className="container">
        <div>
          <div className="condition">
            <label htmlFor="caps">Want both upper/lower case?</label>
            <input type="checkbox" name="caps" value={includeCaps} checked={includeCaps} onChange={handleCaps}/>
            <label className="helpText" htmlFor="caps">eg: ABC</label>
          </div>
          <div className="condition">
            <label htmlFor="numbers">Want to include numbers?</label>
            <input type="checkbox" name="numbers" value={includeNumbers} checked={includeNumbers} onChange={handleNumbers}/>
            <label className="helpText" htmlFor="numbers">eg: 1,2,3</label>
          </div>
          <div className="condition">
            <label htmlFor="otherSymbols">Want to include other symbols?</label>
            <input type="checkbox" name="otherSymbols" value={includeSymbols} checked={includeSymbols} onChange={handleSymbols} />
            <label className="helpText" htmlFor="otherSymbols">eg: / § - : ;</label>
          </div>
        </div>
        <div className="btnContainer">
          <div className="btn-confirm" onClick={handleClick}>Generate Password</div>
        </div>
      </div>
      <h1>{passwordSize}</h1>
    </div>
  )
}

export default PasswordGen;