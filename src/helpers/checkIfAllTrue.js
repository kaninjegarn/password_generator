function checkIfAllTrue(checkOne, checkTwo, checkThree) {
  let isAllTrue = false;
  if (checkOne && checkTwo && checkThree) {
    isAllTrue = true;
  }
  return isAllTrue;
}

export default checkIfAllTrue;