const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fcf29f68819ab34a9c038cc312cb31bd&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location.", undefined);
    } else {
      const data = response.body.current;
      callback(
        undefined,
        data.weather_descriptions[0] +
          ". It is currently " +
          data.temperature +
          " degree. There is " +
          data.feelslike +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;
