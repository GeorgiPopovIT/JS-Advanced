import {html, render} from 'https://unpkg.com/lit-html?module';

const listTemplate = (towns) => html`
<ul>
    ${towns.map(t => html`<li>${t}</li>`)}
</ul>`;

document.querySelector('form').addEventListener('click',onSubmit);

function onSubmit(event)
{
    event.preventDefault();

    const towns = document.getElementById('towns').value.split(',').map(t => t.trim());

    const result = listTemplate(towns);

    render(result,document.getElementById('root'));

}