import React from 'react';
import './App.css';
import axios from 'axios';

const dataset = require('./csv/inspections.json');
const cors = 'https://cors-anywhere.herokuapp.com/'
const servicesLegacyEndpoint = 'https://api.louisvilleky.gov/api/geo/FindQuickServiceLookup?address=121%20FREEMAN%20AVE&city=Louisville';
const metroOnlineServicesEndpoint = 'https://louisvilleky.gov/services/toolbox_services.json?limit=0';
const airQualityApiEndpoint = 'https://aaws.louisvilleky.gov/api/v1/Monitor/CityAQI';
const birdApiEndpoint = 'https://mds.bird.co/gbfs/louisville/free_bikes';
const limeApiEndpoint = 'https://data.lime.bike/api/partners/v1/gbfs/louisville/free_bike_status';
const tripDuration = 'https://data.louisvilleky.gov/api/action/datastore/search.json?resource_id=e36546f6-888b-4e66-8a87-9b68cab471e6&limit=10';

let parsedJson = []

class App extends React.Component {

  parseData() {
    let parsedJson = dataset.map(data => {
      console.log(data)
      // return JSON.parse(data)
    })
    console.log(parsedJson)
  }

  componentDidMount() {
    this.getData()
    console.log(dataset[0])

  }

  getData() {
    axios.get(`${cors}${birdApiEndpoint}`)
      .then(response => { console.log(response.data) })
      .catch(err => { console.log(err) })
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <h1>Louisville Data Hackathon Starter</h1>
        </header>
      </div>
    );
  }
}

export default App;
