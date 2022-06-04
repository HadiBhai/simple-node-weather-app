const request = require("request");

const weather = (location, callback) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=e974c3fb86bf4c2db73153034222805&q=${location}&aqi=no`;

  request({ url: url, json: true }, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      callback(
        `${response.body.location.name}, ${response.body.location.country}.
        It is currently ${response.body.current.temp_c} degrees outside and there is a ${response.body.current.cloud} % chance of rain.`
      );
    } else if (response.body.error) {
      callback(response.body.error.message);
    } else {
      callback(error);
    }
  });
};

// const city = process.argv[2];
// if (city) weather(city);
module.exports = weather;
