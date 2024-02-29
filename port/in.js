const API_URL = "http://localhost:5000/";

fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data));
