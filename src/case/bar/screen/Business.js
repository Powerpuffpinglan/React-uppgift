import React, { Component } from 'react';
import Weather from '../container/Weather';
import ListGroup from '../container/ListGroup';
import Image from '../component/Image';
import { getBusiness, getWeather } from '../../../common/function/API';
const API_KEY= "430e77b06ba15e65d8e31f41dbfbb1fc"; 




class Business extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      Bar: [],
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
    getBusiness().then((response) => {
     console.log(response.data)
     this.setState({
       ...this.state,
       Bar: response.data,
      })
    
    });
 }




  render() {
    return (
        
      <div>
      <br/>
      <br/>
      <br/>
      <h1 style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>Barer</h1>
      <div class="col">
        <div class="row">
          <div className="col-12" >
          </div>
          <div class="col-12" style={{fontFamily: '"Comic Sans MS", cursive, sans-serif'}}>
              {this.state.Bar.map((row)=>{
                return <ListGroup 
                data={[
                  { info: row.verified ? 'Verifierad!' : 'Inte Verifierad'},
                  { info: row.telephone},   
                  { info: row.adress},
                  { info: row.city},
                  { info: row.zipcode}, 
                  ]}/> 
              })}
               
            </div>
          </div>
        </div>
      </div>
            
    );
  }
}

export default Business;
