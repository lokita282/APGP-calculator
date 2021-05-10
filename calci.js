//Define UI vars 
const form = document.querySelector('#ap')
const firstTerm = document.querySelector('#first-term')
const commonDifference = document.querySelector('#common-difference')
const n = document.querySelector('#n')
const results = document.querySelector('#results')

loadEventListeners();

function loadEventListeners(){
  form.addEventListener('submit', calculate);
}

//calculate
function calculate(e){
  if(firstTerm.value === '' || commonDifference.value === '' || n.value === ''){
    alert("Add required details")
  }
  
  let nthTerm = firstTerm.value + n.value*commonDifference.value - commonDifference.value
  console.log(nthTerm)
  console.log(firstTerm.value)
  console.log(n.value)
  console.log(commonDifference.value)
  return nthTerm;

  e.preventDefault();
}
console.log(calculate)
