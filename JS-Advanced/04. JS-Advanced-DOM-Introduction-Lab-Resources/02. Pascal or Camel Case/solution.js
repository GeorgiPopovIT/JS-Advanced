function solve() {


  const input = document.getElementById('text').textContent;

  const typeNaming = document.getElementById('naming-convention').value;

  let result =  input.split(' ');

  if(typeNaming == 'Camel Case'){

    for(let i = 0;i < 0;i++){
      
    }
  }
  else if(typeNaming === 'Pascal Case'){
    result = input.replace(/(\w)(\w*)/g,
    function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
  }
  else{
    result = 'Error!';
  }

  document.getElementById('result').value = result;
}