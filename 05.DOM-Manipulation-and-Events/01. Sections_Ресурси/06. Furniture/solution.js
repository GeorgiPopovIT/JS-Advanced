function solve() {

  const[input,output] = Array.from(document.querySelectorAll('textarea'));

  const[generateBtn,buyBtn] = Array.from(document.querySelectorAll('button'));

  const table = document.getElementsByTagName('tbody')[0];


  generateBtn.addEventListener('click',generate);

  buyBtn.addEventListener('click',buy);
  
       
       function generate(е){
        

         const data = JSON.parse(input.value);

          for (const item of data) {

            const row = document.createElement('tr');

            const imgCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const priceCell = document.createElement('td');
            const defactorCell = document.createElement('td');
            const checkCell = document.createElement('td');


            const img = document.createElement('img');
            img.src = item.img;
            imgCell.appendChild(img);

            const name = document.createElement('p');
            name.textContent = item.name;
            nameCell.appendChild(name);

            const price = document.createElement('p');
            price.textContent = item.price;
            priceCell.appendChild(price);

            const defactor = document.createElement('p');
            defactor.textContent = item.decFactor;
            defactorCell.appendChild(defactor);

            const typeCheckBox = document.createElement('input');
            typeCheckBox.type = 'checkbox';
            checkCell.appendChild(typeCheckBox);


            row.appendChild(imgCell);
            row.appendChild(nameCell);
            row.appendChild(priceCell);
            row.appendChild(defactorCell);
            row.appendChild(checkCell);


            table.appendChild(row);

            input.value = '';

          }

      }

      function buy(e){
        
        let names = [];
        let totalPrice = 0;
        let totalDecFactor = 0;

        const furniture = Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
        .map(b => b.parentElement.parentElement)
        .map(r => ({
          name : r.children[1].textContent,
          price: Number(r.children[2].textContent),
          defactor: Number(r.children[3].textContent)
        }));

       for (const item of furniture) {
          names.push(item.name);
          totalPrice += item.price;
          totalDecFactor += item.defactor;
       }

        totalDecFactor = totalDecFactor / furniture.length;

       const result = `Bought furniture: ${names.join(', ')}` + '\n'
        + `Total price: ${totalPrice.toFixed(2)}` + '\n' +  `Average decoration factor: ${totalDecFactor}`;

          output.value =result;

  
      }
      
               
}