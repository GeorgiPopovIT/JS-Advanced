function attachEvents() {

    document.getElementById('btnCreate').addEventListener('click',onCreate);
    document.getElementById('btnLoad').addEventListener('click',loadContacts);

    list.addEventListener('click',onDelete);
}

const list = document.getElementById('phonebook');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

attachEvents();

async function onDelete(event){
    const id = event.target.dataset.id; 
    if(id != undefined){
        await deleteContact(id);
        event.target.parentElement.remove();
    }
}

async function onCreate(){
    const person = personInput.value;
    const phone = phoneInput.value;

  const result =   await createContact({person,phone});

    list.appendChild(createLiItem(result));

}

async function createContact(contact){
    const url = `http://localhost:3030/jsonstore/phonebook`;

    const res = await fetch(url,{
        method: 'post',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(contact)
    });

    const result = await res.json();
    console.log(result);


    personInput.value = '';
    phoneInput.value = '';
}
function createLiItem(contact){
    const li = document.createElement('li');
    li.innerHTML = `${contact.person}: ${contact.phone} <button id = ${contact._id}>Delete</button>`;

    return li;

}

async function loadContacts(){
    const res = await fetch('http://localhost:3030/jsonstore/phonebook');
    const data = await res.json();

    list.replaceChildren(...Object.values(data).map(createLiItem));
}

async function deleteContact(id)
{
    const url = `http://localhost:3030/jsonstore/phonebook/${id}`;

    const res = await fetch(url,{
        method : 'delete'
    });

    const result = await res.json();

    return result;

}