import {html, render} from 'https://unpkg.com/lit-html?module';

const optionTemplate = (items) => html`
<select id="menu">
    ${items.map(i => html`<option value=${i._id}>${i.name}</option>`)}
</select>
`; 

const root = document.querySelector('div');

getData();  

async function getData(){
    const res = await fetch('http://localhost:3030/jsonstore/advanced/dropdown');
    const data = await res.json();
    console.log(Object.values(data));

    update(Object.values(data))

}   


function addItem() {

    const input = document.getElementById('itemText').value;
    const form = document.getElementsByTagName('form')[0].addEventListener('submit',onSubmit);

    function onSubmit(event){
        event.preventDefault();

        console.log(input);
    }
}


function update(items){
    const result = optionTemplate(items);
    render(result,root);
}