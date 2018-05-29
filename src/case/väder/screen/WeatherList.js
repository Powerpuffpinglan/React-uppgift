import React, { Component } from 'react';
import Image from '../component/Image';
import Weather from '../container/Weather';
import { getBusiness, getWeather } from '../../../common/function/API';
const API_KEY= "430e77b06ba15e65d8e31f41dbfbb1fc"; 




class WeatherList extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      Vader: []
    }
  }; 

  componentDidMount(){ 
    getWeather().then((response) => {
      console.log(response.data)
      this.setState({
       city: response.data.name,
       temperature: response.data.main.temp,
       country: response.data.sys.country,
       humidity: response.data.main.humidity,
       description: response.data.weather[0].description
      })
    })
    
 }




  render() {
    return (
        
      <div>
      <br/>
      <br/>
      <br/>
    
      <h1 style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>Vädret i Trollhättan</h1>
      <div class="col">
        <div class="row">
          <div className="col-12" >
          </div>
          <div class="col-12">
      <ul style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}} className ="list-unstyled text-center">  
      <li>{this.state.city}</li>
      <li>{this.state.country}</li>
      <li>{this.state.temperature}</li>
      <li>{this.state.humidity}</li>
      <li>{this.state.description}</li>
      </ul><br/>
      <Image/>
      </div>
      </div>
      </div>
      </div>
            
    );
  }
}

export default WeatherList;

