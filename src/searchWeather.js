
//tempUnit.textContent = 'C';

function searchWeather(item) {
    let tempF, tempC;
    const card = document.querySelector('.resultCard');
    const location = document.querySelector('h3');
    const current = document.querySelector('.current');
    const temperature = document.querySelector('#temperature');
    const tempUnit = document.querySelector('#unit');
    const celButton = document.querySelector('#celsius');
    const fahrButton = document.querySelector('#fahrenheit');
    const humidity = document.querySelector('#humidity');
    const precChance = document.querySelector('#chance');
    const prediction = document.querySelector('.prediction');
    
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${item}?key=WTA529WMCJRUZ5TPFDALQVV6V`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        document.querySelector('h2').style.visibility = 'hidden';    
        card.style.visibility = 'visible';
        prediction.textContent = response.description;
        current.textContent = response.currentConditions.conditions;
        location.textContent = response.address;
        humidity.textContent = response.currentConditions.humidity;
        precChance.textContent = response.currentConditions.precipprob;
        tempF = response.currentConditions.temp;
        tempC = (tempF - 32) / 1.8;
        tempC = tempC.toFixed(1);
        temperature.textContent = tempC;
    })
    .catch((error) => {
        card.style.visibility = 'hidden';
        alert(error);
    }
    );
    document.querySelector('h2').style.visibility = 'visible';    
    celButton.addEventListener('click',()=> {
        temperature.textContent = tempC;
        tempUnit.textContent = 'C';
        fahrButton.classList.remove('selectedUnit');
        celButton.classList.add('selectedUnit');    
    },false);
    
    fahrButton.addEventListener('click',()=> {
        temperature.textContent = tempF;
        tempUnit.textContent = 'F';
        celButton.classList.remove('selectedUnit');
        fahrButton.classList.add('selectedUnit');    
    },false);    
}

export {searchWeather};