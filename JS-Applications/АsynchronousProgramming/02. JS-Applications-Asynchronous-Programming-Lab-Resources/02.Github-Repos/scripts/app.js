function loadRepos() {
	const username = document.getElementById('username').value;
	
	const url = `https://api.github.com/users/${username}/repos`;

		makeRequest();
	
	   async function makeRequest(){
			try {
		  		const response = await fetch(url);

		 		 if(response.ok == false){
			  		throw new Error(`${response.status} ${response.statusText}`);
		 		 }
			  
		  		const data = await response.json();
				  console.log(data);

				  const list = document.getElementById('repos');

			  	for (const repo of data) {
					let el = document.createElement('li');
					el.innerHTML = `<a href="${repo.html_url}">${repo.full_name}</a>`;

					list.appendChild(el);
			  	}

	   		
			} catch (error) {
				console.log('Error',error);
			}

	   }
}