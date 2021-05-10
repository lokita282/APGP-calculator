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
  e.preventDefault();
  if(firstTerm.value === '' || commonDifference.value === '' || n.value === ''){
    alert("Add required details")
  }
  let a = Number(firstTerm.value)
  let d = Number(commonDifference.value);
  let N = Number(n.value)

  let nthTerm = a+((N-1)*d)
 console.log(nthTerm);


}

