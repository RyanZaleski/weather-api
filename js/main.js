document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
  let town = document.querySelector('input').value


fetch(`https://goweather.herokuapp.com/weather/${town}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      document.querySelector('#title').innerText = `The weather forecast for ${town}`
      
      document.querySelector('#todaysForecast').innerText = 'Todays Forecast'
      document.querySelector('#todayh3').innerText = data.description
      document.querySelector('#todayh4').innerText = `Temperature: ${data.temperature}`
      document.querySelector('#todayh5').innerText = `Wind: ${data.wind}`

      document.querySelector('#tomorrowsForecast').innerText = 'Tomorrows Forecast'
      document.querySelector('#tomorrowh3').innerText = data.description
      document.querySelector('#tomorrowh4').innerText = `Temperature: ${data.forecast[1].temperature}`
      document.querySelector('#tomorrowh5').innerText = `Wind: ${data.forecast[1].wind}`

      document.querySelector('#finalForecast').innerText = 'Tuesdays Forecast'
      document.querySelector('#finalh3').innerText = data.description
      document.querySelector('#finalh4').innerText = `Temperature: ${data.forecast[2].temperature}`
      document.querySelector('#finalh5').innerText = `Wind: ${data.forecast[2].wind}`

    })
    .catch(err => {
        console.log(`error ${err}`)
    });


}


/*
    //The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drink = document.querySelector('input').value

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.drinks[0].strDrink // prints drink name
      document.querySelector('img').src = data.drinks[0].strDrinkThumb // prints image of cocktail 
      document.querySelector('h3').innerText = data.drinks[0].strInstructions // prints instructions
      
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

} */