import {html, render} from 'https://unpkg.com/lit-html?module';
import {towns} from './towns.js';

const listTemplate = (towns) => html`
<ul>
      ${towns.map(t => html`<li>${t}</li>`)}
</ul>
`;


const list = document.getElementById('towns');
const input = document.getElementById('searchText');
const button = document.querySelector('button').addEventListener('click',onSearch);

function onSearch() {

      const match = input.ariaValueMax.trim();

      const matches = towns.filter(t => match && t.toLocaleLowerCase().includes(match));  
   
}