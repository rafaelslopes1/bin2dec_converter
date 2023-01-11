const inputWarning = document.getElementById('input-warning');
const inputBinary = document.getElementById("binary-number");
const convertBtn = document.getElementById("convert-btn");

inputBinary.addEventListener("keyup", (event) => {
  inputBinary.classList.remove("invalid");
  inputWarning.classList.add('hide');
  if (event.key == "Enter") {
    convertResult();
  }
  if (!isValidInput()) {
    inputBinary.classList.add("invalid");
    inputWarning.classList.remove('hide');
  }
});

convertBtn.addEventListener("click", convertResult);

function bin2dec(binaryNumber) {
  let acc = 0;
  const binLength = binaryNumber.length;
  for (let i = 0; i < binLength; i++) {
    const exp = binLength - 1 - i;
    acc += binaryNumber[i] * 2 ** exp;
  }
  return acc;
}

function convertResult() {
  const binaryNumber = inputBinary.value;
  const decimalNumber = bin2dec(binaryNumber);
  document.getElementById("result").innerHTML = decimalNumber;
}

function isValidInput() {
  const value = inputBinary.value;
  return value.split('').every(char => ["0", "1"].includes(char)); 
}
