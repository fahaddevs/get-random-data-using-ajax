document.getElementById('getJokes').addEventListener('click', getJokes);

function getJokes(e) {
  let xhr = new XMLHttpRequest;

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

  xhr.onload = function(){
    if(this.status === 200) {
      let jokes = JSON.parse(this.responseText);
      
      document.getElementById('output').innerText = jokes.value;
    }
  }

  xhr.send();
}