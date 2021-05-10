//Define UI vars for AP
const formAp = document.querySelector('#ap')
const firstTermAp = document.querySelector('#first-term-ap')
const commonDifference = document.querySelector('#common-difference')
const nAp = document.querySelector('#n-ap')
const resultsAp = document.querySelector('#resultsAp')

loadEventListeners();

function loadEventListeners(){
  formAp.addEventListener('submit', calculateAp);

}

calculate
function calculateAp(e){
  e.preventDefault();
  calculateNthTermAp();
  calculateSumAp();
}

function calculateNthTermAp(e){
  //e.preventDefault();
  if(firstTermAp.value === '' || commonDifference.value === '' || nAp.value === ''){
    alert("Add required details")
  }
  let aAp = Number(firstTermAp.value)
  let d = Number(commonDifference.value);
  let NAp = Number(nAp.value)

  let nthTermAp = aAp +((NAp-1)*d)
 const li = document.createElement('li');
 li.className = 'collection-item'
 li.appendChild(document.createTextNode(`the nth term is ${nthTermAp}`));

 resultsAp.appendChild(li);
}

function calculateSumAp(e){
  //e.preventDefault();
  if(firstTermAp.value === '' || commonDifference.value === '' || nAp.value === ''){
    alert("Add required details")
  }
  let aAp = Number(firstTermAp.value)
  let d = Number(commonDifference.value);
  let NAp = Number(nAp.value)

  let sumAp = ((NAp)*((2*aAp)+(NAp-1)*d))/2
 const li = document.createElement('li');
 li.className = 'collection-item'
 li.appendChild(document.createTextNode(`the sum is ${sumAp}`));

 resultsAp.appendChild(li);
}



//Define UI vars for GP
const formGp = document.querySelector('#gp')
const firstTermGp = document.querySelector('#first-term-gp')
const commonRatio = document.querySelector('#common-ratio')
const nGp = document.querySelector('#n-gp')
const resultsGp = document.querySelector('#resultsGp')

loadEventListeners();

function loadEventListeners(){
  formGp.addEventListener('submit', calculateGp);

}

function calculateGp(e){
  e.preventDefault();
  calculateNthTermGp();
  calculateSumGp();
}

function calculateNthTermGp(e){
  //e.preventDefault();
  if(firstTermGp.value === '' || commonRatio.value === '' || nGp.value === ''){
    alert("Add required details")
  }
  let aGp = Number(firstTermGp.value)
  let r = Number(commonRatio.value);
  let NGp = Number(nGp.value)

  let x = NGp-1;
  let y = Math.pow(r,x)
  let nthTermGp = (aGp * y)
  console.log(x);
  console.log(y);
  console.log(nthTermGp);
 const li = document.createElement('li');
 li.className = 'collection-item'
 li.appendChild(document.createTextNode(`the nth term is ${nthTermGp}`));

 resultsGp.appendChild(li);
}

function calculateSumGp(e){
  //e.preventDefault();
  if(firstTermGp.value === '' || commonRatio.value === '' || nGp.value === ''){
    alert("Add required details")
  }
  let aGp = Number(firstTermGp.value)
  let r = Number(commonRatio.value);
  let NGp = Number(nGp.value)
  let sumGp;

  if(r<1){
    let v = Math.pow(r,NGp) - 1 
    sumGp = (aGp * v) / (r-1)
  }
   else if(r>1){
    let v = Math.pow(r,NGp) - 1 
    sumGp = (aGp * v) / (r-1)
  }
 const li = document.createElement('li');
 li.className = 'collection-item'
 li.appendChild(document.createTextNode(`the sum is ${sumGp}`));

 resultsGp.appendChild(li);
}
