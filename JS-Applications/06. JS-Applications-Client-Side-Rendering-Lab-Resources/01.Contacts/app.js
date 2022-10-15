import {html, render} from 'https://unpkg.com/lit-html?module';
import {contacts} from './contacts.js';

const contactTemplate = (data,onDetails) => html `<div class="contact card">
<div>
    <i class="far fa-user-circle gravatar"></i>
</div>
<div class="info">
    <h2>Name: ${data.name}</h2>
    <button class="detailsBtn" @click=${() => onDetails(data.id)}>Details</button>
    <div class="details" id="${data.id}" style="display: none;">
        <p>Phone number: ${data.phoneNumber}</p>
        <p>Email: max@${data.email}</p>
    </div>
</div>
</div>`;

function start(){
    const container = document.getElementById('contacts');

        onRender();
        function onDetails(dataId){
            const details = document.getElementById(dataId);

            if(details.style.display == 'none'){
               
                return false;
            }
            else{
               return true;
            }
        }

        function onRender(){
            render(contacts.map(c => contactTemplate(c,onDetails)),container);
        }
}

start();