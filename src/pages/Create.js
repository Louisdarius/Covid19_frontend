import React, { useState } from 'react';
import '../pages/Main.css';
import Footer from '../components/Footer';
import Axios from 'axios';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

function Create(props){

    const [country, setCountry] = useState('');
    const [state, setSate] = useState('');
    const [covid, setCovid] = useState({
        cases: '',
        deaths: '',
        date: ''
    });

   
    function handleChange(event){
        const {name, value} = event.target;
        setCovid(previousCovid =>{
            if(name === 'cases'){
                return{
                    cases: value,
                    deaths: previousCovid.deaths,
                    date: previousCovid.date
                }
            } else if(name === 'deaths'){
                return {
                    cases: previousCovid.cases,
                    deaths: value,
                    date: previousCovid.date
                }
            } else if (name === 'date'){
                return {
                    cases: previousCovid.cases,
                    deaths: previousCovid.deaths,
                    date: value
                }
            }
        });

    }

    function handleSubmit(event){
        event.preventDefault();
         
        const covid19 = {
            country: country,
            state: state,
            cases: covid.cases,
            deaths: covid.deaths,
            date: covid.date
        };
        Axios.post('https://quiet-beyond-90527.herokuapp.com/create', covid19) // No need to write 'http://localhost:5000' coz it is already set on proxy
        .then(response => {
             console.log(response.data);
            alert(`Record successfully created:
                   Country: ${response.data.country}
                   State: ${response.data.state}
                   Cases: ${response.data.cases}
                   Deaths: ${response.data.deaths}
                   Date: ${response.data.date}
                   `);
            props.history.push('/read');      
        })

        .catch(error => console.log(error))
    }
    
     return(          
      <>
<div class="top-head container">
<div class="alert alert-info alert-dismissible mb-5">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Note!</strong> Upon a successful submittion you would be redirected to the Dashboard.
  </div>
  <h2 class = 'text-center'>Create a covid19 record</h2>
  <form class = 'form'>
    <div className="row">
      <div className="col">
      <CountryDropdown className = 'form-group' value = {country} onChange = {event => setCountry(event)} />
      </div>
      <div class="col">
      <RegionDropdown className = 'form-group' blankOptionLabel = 'Select Region' country = {country} value = {state} onChange = {event => setSate(event)} />
      </div>
    </div>
   
    <div className="row pt-3">
      <div className="col">
        <input type="number" className="form-control" name = 'cases' value = {covid.cases} onChange = {handleChange} placeholder = 'Cases:'  />
      </div>
      <div className="col">
      <input type = 'number' name = 'deaths' value = {covid.deaths} onChange = {handleChange} className='form-control' placeholder = 'Deaths:'/> 
      </div>
      <div className="col">
      <input type = 'date' name = 'date' min = '2019-10-01' max = '2025-01-01' value = {covid.date} onChange = {handleChange}  className='form-control'/>
      </div> 
    </div>
    <button class = 'submitButton' onClick = {handleSubmit} >Submit</button>
  </form>
</div>  
<Footer/>
    </>
    );  
     }; 
export default Create;


