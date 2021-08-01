function generatePassword(emptyNewPassword, fullArr) {
  emptyNewPassword.forEach(function (part, index, theArray) {
    const foundIndex = Math.floor(Math.random() * fullArr.length);
    theArray[index] = fullArr[foundIndex];
  });
  return emptyNewPassword;
}

export default generatePassword;