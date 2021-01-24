import React, { useEffect, useState } from "react";
import "../pages/Main.css";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Axios from "axios";
import Footer from "../components/Footer";

function Edit(props) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [covid, setCovid] = useState({
    cases: "",
    deaths: "",
    date: "",
  });

  useEffect(() => {
    Axios.get(
      "https://quiet-beyond-90527.herokuapp.com/covid/" + props.match.params.id
    )
      .then((response) => {
        setCountry(response.data.country);
        setState(response.data.state);
        setCovid(response.data);
      })
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  function handleChange(event) {
    const { name, value } = event.target;
    setCovid((previousCovid) => {
      if (name === "cases") {
        return {
          cases: value,
          deaths: previousCovid.deaths,
          date: previousCovid.date,
        };
      } else if (name === "deaths") {
        return {
          cases: previousCovid.cases,
          deaths: value,
          date: previousCovid.date,
        };
      } else if (name === "date") {
        return {
          cases: previousCovid.cases,
          deaths: previousCovid.deaths,
          date: value,
        };
      }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const covid19 = {
      country: country,
      state: state,
      cases: covid.cases,
      deaths: covid.deaths,
      date: covid.date,
    };
    Axios.put(
      "https://quiet-beyond-90527.herokuapp.com/update/" +
        props.match.params.id,
      covid19
    )
      .then((response) => {
        console.log(response.data);
        alert(`Record successfully edited:
                    Country: ${response.data.country}
                    State: ${response.data.state}
                    Cases: ${response.data.cases}
                    Deaths: ${response.data.deaths}
                    Date: ${response.data.date}
                    `);
        props.history.push("/read");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="top-head container">
        <div class="alert alert-info alert-dismissible mb-5">
          <button type="button" class="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Note!</strong> 1. Changes made to this record would affect the
          database. 2. Country and Region fields have been disabled for database
          constraint purposes. If you wish to edit the entire record, simply
          delete it and insert a new record.
        </div>
        <form class="form">
          <div className="row">
            <div className="col">
              <label for="cases">Country</label>
              <CountryDropdown
                className="form-group"
                value={country}
                disabled
                onChange={(event) => setCountry(event)}
              />
            </div>
            <div class="col">
              <label for="cases">State</label>
              <RegionDropdown
                className="form-group"
                blankOptionLabel="Select Region"
                country={country}
                value={state}
                disabled
                onChange={(event) => setState(event)}
              />
            </div>
          </div>

          <div className="row pt-3">
            <div className="col">
              <label for="cases">Cases</label>
              <input
                type="number"
                className="form-control"
                name="cases"
                value={covid.cases}
                onChange={handleChange}
                placeholder="Cases:"
              />
            </div>
          </div>

          <div className="row pt-3">
            <div className="col">
              <label for="deaths">Deaths</label>
              <input
                type="number"
                className="form-control"
                name="deaths"
                value={covid.deaths}
                onChange={handleChange}
                placeholder="Deaths:"
              />
            </div>
          </div>

          <div className="row pt-3">
            <div className="col">
              <label for="date">Date</label>
              <input
                type="date"
                className="form-control"
                name="date"
                value={covid.date}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row pt-3">
            <div className="col">
              <button class="submitButton" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default Edit;
