// /* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '&APPID=fcfd80ffbafdd02e1fbd8ac5c2769db4&units=imperial';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// // Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', doAction);

/* Function called by event listener */
function doAction() {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getData(baseURL, zipCode, apiKey).then(function (data) {
        console.log(data);
        postData('/add', { date: newDate, temp: data.main.temp, content: feelings });
        updateUI();
    })
};


/* Function to GET Web API Data*/
const getData = async (baseURL, zipCode, apiKey) => {
    const res = await fetch(baseURL + zipCode + apiKey)
    try {
        const data = await res.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}


/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
};


/* Function to GET Project Data */
const updateUI = async () => {
    const req = await fetch('/all');
    try {
        const allData = await req.json();
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temp}`;
        document.getElementById('content').innerHTML = `Feel: ${allData.content}`;


        // after update text will be clear
        document.getElementById('feelings').value = '';
        document.getElementById('zip').value = '';

    } catch (error) {
        console.log('error', error);
    }
}





