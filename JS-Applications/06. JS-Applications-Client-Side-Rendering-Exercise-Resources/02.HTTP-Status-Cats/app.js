import {html, render} from 'https://unpkg.com/lit-html?module';
import {cats} from './catSeeder.js';

const listCatsTemplate = (cats) => html`
<ul>
    ${cats.map(c => catTemplate(c))}
</ul>
`;

const catTemplate = (cat) => html`
<li>
    <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
    <div class="info">
        <button class="showBtn">Show status code</button>
        <div class="status" style="display: none" id=${cat.id}>
            <h4>Status Code: ${cat.statusCode}</h4>
            <p>${cat.statusMessage}</p>
        </div>
    </div>
</li>
`;

start();
function start(){
    const container = document.getElementById('allCats');

     render(listCatsTemplate(cats),container);

     container.addEventListener('click',(ev) => {
        if(ev.target.tagName == 'BUTTON'){

         const statusField = ev.target.parentNode.querySelector('.status');
         console.log(statusField.style.display);

            if(statusField.style.display = 'none'){
                statusField.style.display = 'block';
                ev.target.textContent = 'Hide status code';
                
            }
            else{
                statusField.style.display = 'none';
                ev.target.textContent = 'Show status code';
            }
            
        }
     });
}
