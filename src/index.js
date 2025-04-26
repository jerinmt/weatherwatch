import "./styles.css";
import { searchWeather } from "./searchWeather";


const button = document.querySelector('.searchButton');

button.addEventListener('click',()=> {
    let item = document.querySelector('.searchBar').value;
    searchWeather(item);
},false);


/*
        searchAGif(searchItem);
        const randomButton = document.querySelector('button');
        randomButton.addEventListener('click', ()=>{
            searchAGif(searchItem);
        });
        const searchBar = document.querySelector('input');
        searchBar.addEventListener('input', ()=>{
            searchItem = searchBar.value;
            searchAGif(searchItem);
        });*/