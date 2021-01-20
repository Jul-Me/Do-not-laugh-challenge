const jokesEl = document.getElementById('joke');
const getJoke = document.getElementById('getJoke');

getJoke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const jokeObj = await jokeResponse.json();
  jokesEl.innerHTML = jokeObj.joke;
}
