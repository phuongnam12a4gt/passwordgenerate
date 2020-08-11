const endpointlowercase = 'http://localhost:8080/lowercase';
const endpointnumber='http://localhost:8080/number';
const endpointuppercase='http://localhost:8080/uppercase';
const endpointsymbol='http://localhost:8080/symbol';
let LOWERCASE_CHAR_CODES=[];
let NUMBER_CHAR_CODES=[];
let UPPERCASE_CHAR_CODES=[];
let SYMBOL_CHAR_CODES=[];
fetch(endpointlowercase).then((response) => response.json()).then((data) => handleData(data));
function handleData(data)
{
for (let i = 0; i < data.length; i++){
  LOWERCASE_CHAR_CODES.push(data[i].char);
}
}

fetch(endpointnumber).then((response) => response.json()).then((data) => handleData1(data));
function handleData1(data)
{
for (let i = 0; i < data.length; i++){
  NUMBER_CHAR_CODES.push(data[i].number);
}
}

fetch(endpointuppercase).then((response) => response.json()).then((data) => handleData2(data));
function handleData2(data)
{
for (let i = 0; i < data.length; i++){
  UPPERCASE_CHAR_CODES.push(data[i].char);
}
}

fetch(endpointsymbol).then((response) => response.json()).then((data) => handleData3(data));
function handleData3(data)
{
for (let i = 0; i < data.length; i++){
  SYMBOL_CHAR_CODES.push(data[i].char);
}
}
const characterAmountRange = document.getElementById('characterAmountRange')
const characterAmountNumber = document.getElementById('characterAmountNumber')
const includeUppercaseElement = document.getElementById('includeUppercase')
const includeNumbersElement = document.getElementById('includeNumbers')
const includeSymbolsElement = document.getElementById('includeSymbols')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')
const strong = document.getElementById('strong')
//const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
//const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
//const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
//const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
//arrayFromLowToHigh(58, 64)
//).concat(
 // arrayFromLowToHigh(91, 96)
//).concat(
  //arrayFromLowToHigh(123, 126)
//)
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
  if(characterAmount>6)
  {
      strong.innerText="PassWordManh"
  }
  else
  {
    strong.innerText="PassWord Low"
  }
})

function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    //passwordCharacters.push(String.fromCharCode(characterCode))
    passwordCharacters.push(characterCode)
  }
  return passwordCharacters.join('')
}
//ham nay tao ra 1 mang
function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(String.fromCharCode(i))
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}
