window.addEventListener('load', solve);

function solve() {
   const genreInput = document.getElementById('genre');
   const nameSongInput = document.getElementById('name');
   const authorInput = document.getElementById('author');
   const dateInput = document.getElementById('date');

   const submitBtn = document.getElementById('add-btn').addEventListener('click',submit);


   function submit(ev){
       ev.preventDefault();

       if(genreInput == undefined || nameSongInput == undefined 
        || authorInput == undefined || dateInput == undefined){
            return;
        }

        const genre = genreInput.value;
        const nameSong = nameSongInput.value;
        const author = authorInput.value;
        const date = dateInput.value;


        let collectionField = document.getElementsByClassName('all-hits-container')[0];

        let div = document.createElement('div');
        div.classList.add('hits-info');

        let image = document.createElement('img');
        image.src = './static/img/img.png';


        let h2Genre = document.createElement('h2');
        h2Genre.textContent = `Genre: ${genre}`;

        let h2SongName = document.createElement('h2');
        h2SongName.textContent = `Name: ${nameSong}`;

        let h2Author = document.createElement('h2');
        h2Author.textContent = `Author: ${author}`;

        let h3Date = document.createElement('h3');
        h3Date.textContent = `Date: ${date}`;


        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save song';
        saveBtn.classList.add('save-btn');

        let likeBtn = document.createElement('button');
        likeBtn.textContent = 'Like song';
        likeBtn.classList.add('like-btn');

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');

        div.appendChild(image);
        div.appendChild(h2Genre);
        div.appendChild(h2SongName);
        div.appendChild(h2Author);
        div.appendChild(h3Date);
        div.appendChild(saveBtn);
        div.appendChild(likeBtn);
        div.appendChild(deleteBtn);

        collectionField.appendChild(div);

        genreInput.value = '';
        nameSongInput.value = '';
        authorInput.value = '';
        dateInput.value = '';

        saveBtn.addEventListener('click',save);
        likeBtn.addEventListener('click',like);
        deleteBtn.addEventListener('click',deleteSong);
      
   }
   function save(ev){
        let image = ev.target.parentNode.children[0];
       let genre = ev.target.parentNode.children[1];
       let songName = ev.target.parentNode.children[2];
       let author = ev.target.parentNode.children[3];
       let date = ev.target.parentNode.children[4];
       let deleteBtn = ev.target.parentNode.children[7];

       ev.target.parentNode.remove();


       let savedSongs = document.getElementsByClassName('saved-container')[0];

        let div =  document.createElement('div');
        div.classList.add('hits-info');

        div.appendChild(image);
        div.appendChild(genre);
        div.appendChild(songName);
        div.appendChild(author);
        div.appendChild(date);
        div.appendChild(deleteBtn);

        savedSongs.appendChild(div);
   }
   function like(ev){

    let likeField = document.getElementsByClassName('likes')[0].children[0];
    let arr = likeField.textContent.split(': ');
    let increase = Number(arr[1]) + 1 ;
    
    likeField.textContent = arr[0] + ': ' + increase.toString();

    ev.target.disabled = true;


   }
   function deleteSong(ev){
       let currSong = ev.target.parentNode;

       currSong.remove();

   }
   
}