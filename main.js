const weatherData = {
    "tempUnit": "C",
    "windSpeedUnit": "m/s",
    "days": [
        { "day": "Mon", "temp": 22, "windDirective": "north-east", "windSpeed": 10, "type": "sunny" },
        { "day": "Tue", "temp": 14, "windDirective": "north-west", "windSpeed": 14, "type": "rainy" },
        { "day": "Wed", "temp": 17, "windDirective": "south-east", "windSpeed": 20, "type": "cloudy" }
    ]
    
}

const myJSON = '{"name":"John", "age":30, "cars":["Ford", "BMW", "Fiat"]}';
const myObj = JSON.parse(weatherData);
var table = document.getElementById('myTable');

for (var i = 0; i < myObj.days.length; ++i) {
    var row = `<tr>
            <td>${myObj.days[i].day}</td>
            <td>${myObj.days[i].temp +" "+ myObj.tempUnit}</td>
            <td>${myObj.days[i].windDirective}</td>
            <td>${myObj.days[i].windSpeed +" "+myObj.windSpeedUnit}</td>
            <td>${myObj.days[i].type}</td>
            </tr>`;


    table.innerHTML += row;
}
