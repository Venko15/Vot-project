const jokeTextElement = document.getElementById('jokeText');
const btn = document.getElementById('getJokeBtn');
const jokeTypeSelect = document.getElementById('jokeType');

btn.addEventListener('click', async function(ev){
    var type = jokeTypeSelect.value;

    let apiUrl = '/jokes/getJoke'
    if(type !== 'any'){
        apiUrl +=`?type=${type}`
    }

   var resp =  await makeRequest(apiUrl);
    if(resp.code != 200){
        alert(resp.msg);
        return;
    }

   jokeTextElement.textContent = resp.joke;
})