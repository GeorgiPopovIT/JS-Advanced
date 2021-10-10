function solve() {
  document.getElementById('output').innerHTML = '';
  
  let input = document.getElementById('input').value;

  let resultInP = '';

  let counter = 0;

  let splitted = input.split('.').filter(n => n);

  for (let i = 0; i < splitted.length; i++) {
    
    // resultInP += splitted[i];
    
    if(counter == 3){
      document.getElementById('output').innerHTML += `<p> ${resultInP} </p>`;
      resultInP = '';
      counter = 0;
    }
    counter++;
    resultInP += splitted[i] += '.';
  }
  document.getElementById('output').innerHTML += `<p> ${resultInP} </p>`;
}