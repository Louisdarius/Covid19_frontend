import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import moment from "moment";
import Axios from "axios";
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import DeleteForeverRoundedIcon from "@material-ui/icons/DeleteForeverRounded";
import EditIcon from "@material-ui/icons/Edit";

function Read() {
  const [covid19Records, setCovid19Records] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const search = covid19Records.filter(
    (covid19) => covid19.country === country && covid19.state === state
  );

  function getData() {
    Axios.get("https://louis-darius-covid19-server.herokuapp.com/read")
      .then((response) => setCovid19Records(response.data))
      .catch((err) => console.log(err));
  }

  function deleteCovid(id) {
    const confirmation = window.confirm(
      "Are you sure you want to delete this record?"
    );
    if (confirmation === true) {
      Axios.delete(
        "https://louis-darius-covid19-server.herokuapp.com/delete/" + id
      )
        .then((response) => {
          console.log(response.data);
          alert(`Successfully deleted:
                   Country: ${response.data.country}
                   State: ${response.data.state}
                   Cases: ${response.data.cases}
                   Deaths: ${response.data.deaths}
                   Date: ${response.data.date}`);
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <div class="top-head container">
        <h1 class="text-center"> Coronavirus Dashboard </h1>

        <form class="form">
          <div className="row">
            <div className="col">
              <CountryDropdown
                className="form-group"
                value={country}
                onChange={(event) => setCountry(event)}
              />
            </div>
            <div class="col">
              <RegionDropdown
                className="form-group"
                blankOptionLabel="Select Region"
                country={country}
                value={state}
                onChange={(event) => setState(event)}
              />
            </div>
          </div>
        </form>

        <table class="table table-hover">
          <thead class="thead-light">
            <tr>
              <th>Country</th>
              <th>State</th>
              <th>Cases</th>
              <th>Deaths</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {country === "" || state === ""
              ? covid19Records.map((covid) => (
                  <tr key={covid._id}>
                    <td>{covid.country}</td>
                    <td>{covid.state}</td>
                    <td>{covid.cases}</td>
                    <td> {covid.deaths} </td>
                    <td>
                      {moment(covid.date, "YYYY-MM-DD").format("DD-MM-YYYY")}
                    </td>
                    <td>
                      <Link to={"edit/" + covid._id}>
                        {" "}
                        <EditIcon
                          style={{ fill: "black", margin: "5px" }}
                        />{" "}
                      </Link>
                      <Link onClick={() => deleteCovid(covid._id)}>
                        {" "}
                        <DeleteForeverRoundedIcon
                          style={{ fill: "red", margin: "5px" }}
                        />{" "}
                      </Link>
                    </td>
                  </tr>
                ))
              : search.map((covid) => (
                  <tr key={covid._id}>
                    <td>{covid.country}</td>
                    <td>{covid.state}</td>
                    <td>{covid.cases}</td>
                    <td> {covid.deaths} </td>
                    <td> {covid.date} </td>
                    <td>
                      <Link to={"edit/" + covid._id}>
                        <EditIcon style={{ fill: "black", margin: "10px" }} />{" "}
                      </Link>
                      <Link onClick={() => deleteCovid(covid._id)}>
                        <DeleteForeverRoundedIcon
                          style={{ fill: "red", margin: "5px" }}
                        />{" "}
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}
export default Read;
