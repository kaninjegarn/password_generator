import React from 'react';

const PasswordGen = () => {
  // Create array with the alphabet
  const alpha = Array.from(Array(26)).map((e, index) => index + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  // create an array with 1-9
  const numbers = Array.from(Array(10).keys());
  // Create array with strange symbols
  const otherSymbols = ["/", "-", ".", ",", ":", ";", "§", "'"];

  const tempArr = [];

  tempArr.concat(alphabet, numbers, otherSymbols);

  console.log(alphabet.concat(numbers, otherSymbols))


  return(
    <div>

    </div>
  )
}

export default PasswordGen;