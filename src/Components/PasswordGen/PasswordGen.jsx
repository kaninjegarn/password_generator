import React, { useState } from 'react';
import './PasswordGen.scss';
import { checkIfAllTrue, generatePassword } from '../../helpers';
import copy from 'copy-to-clipboard';

const PasswordGen = () => {
  const [generatedPassword, setGeneratedPassword] = useState();
  const [passwordSize, setPasswordSize] = useState(0);
  const [includeCaps, setIncludeCaps] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [active, setActive] = useState();
  const [msg, setMsg] = useState("");
  const [copyMsg, setCopyMsg] = useState("Copy");
  // Create array with the alphabet
  const alpha = Array.from(Array(26)).map((e, index) => index + 65);
  // console.log(alpha)
  const alphabet = alpha.map((item) => String.fromCharCode(item));

  // Create an array that contains lower case alphabet.
  const lowerAlphabet = Array.from(alphabet.toString().toLowerCase());
  const caps = Array.from(lowerAlphabet.toString().toLowerCase().replace(/,/g, ""));

  // create an array with 1-9
  const numbers = Array.from(Array(10).keys());

  // Create array with strange symbols
  const otherSymbols = ["/", "-", ".", ",", ":", ";", "§", "'", "!", "?"];

  // Get a random value from the full array
  const handleClick = () => {
    if (passwordSize === 0) {
      setMsg("Need to verify the size.");
    } else {
      setMsg("");
      setCopyMsg("Copy");
      let fullArr;
      const emptyNewPassword = Array.from({ length: passwordSize });
      if (checkIfAllTrue(includeCaps, includeNumbers, includeSymbols)) {
        fullArr = alphabet.concat(caps, numbers, otherSymbols);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * CAPS & NUMBERS ARE TRUE
      } else if (includeCaps && numbers && !includeSymbols) {
        fullArr = alphabet.concat(caps, numbers);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * NUMBERS & SYMBOLS ARE TRUE
      } else if (includeNumbers && includeSymbols && !includeCaps) {
        fullArr = alphabet.concat(otherSymbols, numbers);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * CAPS OCH SYMBOLS ARE TRUE
      } else if (includeCaps && includeSymbols && !includeNumbers) {
        fullArr = alphabet.concat(caps, otherSymbols);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * CAPS ÄR TRUE
      } else if (includeCaps && !includeNumbers && !includeSymbols) {
        fullArr = alphabet.concat(caps);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * NUMBERS ÄR TRUE
      } else if (includeNumbers && !includeCaps && !includeSymbols) {
        fullArr = alphabet.concat(numbers);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * SYMBOLS ÄR TRUE
      } else if (includeSymbols && !includeNumbers && !includeCaps) {
        fullArr = alphabet.concat(otherSymbols);
        setGeneratedPassword(generatePassword(emptyNewPassword, fullArr));
        console.log(generatePassword(emptyNewPassword, fullArr))
        // * INGEN ÄR TRUE
      } else if (!checkIfAllTrue(includeCaps, includeNumbers, includeSymbols)) {
        setGeneratedPassword(generatePassword(emptyNewPassword, alphabet));
        console.log(generatePassword(emptyNewPassword, alphabet))
      }
    }
  }

  // Function that will set the length of the generated passwords array.
  const changeSize = (event) => {
    setPasswordSize(parseInt(event.target.getAttribute('size')));
    setActive(parseInt(event.target.getAttribute('size')))
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

  function copy2Clipboard() {
    copy(generatedPassword.join(""));
    setCopyMsg("Copied!")
  }
  
  return(
    <div>
      <h1>Password Generator</h1>
      <h4>Choose the size of your password</h4>
      {msg && msg.length > 0 &&
        <strong><p className="errorMSG">{msg}</p></strong>
      }
      <div className="passwordSize">
        <div className={`btn-size ${active === 8 ? 'active' : ''}`} onClick={changeSize} size={8}>8</div>
        <div className={`btn-size ${active === 10 ? 'active' : ''}`} onClick={changeSize} size={10}>10</div>
        <div className={`btn-size ${active === 14 ? 'active' : ''}`} onClick={changeSize} size={14}>14</div>
        <div className={`btn-size ${active === 16 ? 'active' : ''}`} onClick={changeSize} size={16}>16</div>
        <div className={`btn-size ${active === 24 ? 'active' : ''}`} onClick={changeSize} size={24}>24</div>
      </div>
      <div className="container">
        <div className="left-section">
          <div className="condition">
            <label htmlFor="caps">Want both upper/lower case?</label>
            <input type="checkbox" name="caps" value={includeCaps} checked={includeCaps} onChange={handleCaps}/>
            <label className="helpText" htmlFor="caps">eg: AaBbCc</label>
          </div>
          <div className="condition">
            <label htmlFor="numbers">Want to include numbers?</label>
            <input type="checkbox" name="numbers" value={includeNumbers} checked={includeNumbers} onChange={handleNumbers}/>
            <label className="helpText" htmlFor="numbers">eg: 1,2,3</label>
          </div>
          <div className="condition">
            <label htmlFor="otherSymbols">Want to include other symbols?</label>
            <input type="checkbox" name="otherSymbols" value={includeSymbols} checked={includeSymbols} onChange={handleSymbols} />
            <label className="helpText" htmlFor="otherSymbols">eg: / § - ! ;</label>
          </div>
        </div>
        <div className="btnContainer">
          <div className="btn-confirm" onClick={handleClick}>Generate Password</div>
        </div>
      </div>
      {generatedPassword && generatedPassword.length > 0 &&
        <div className="final-result">
          <strong><p id="password">{generatedPassword}</p></strong>
          <div className="btn-copy" onClick={copy2Clipboard}>{copyMsg}💾</div>
        </div>
      }
    </div>
  )
}

export default PasswordGen;