import axios from 'axios';

let serverUri = 'https://finditappapi.azurewebsites.net';


export const getBusiness = () => {
    try {
      return axios.get(serverUri + '/Business/GetAll');
    } catch (error) {
      console.error(error);
    }
  };

  export const getWeather = () => {
    try {
      return axios.get('http://api.openweathermap.org/data/2.5/weather?q=Trollh%C3%A4ttan&units=metric&APPID=430e77b06ba15e65d8e31f41dbfbb1fc');
    } catch (error) {
      console.error(error);
    }
  };