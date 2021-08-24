import React, { useEffect, useState } from "react";
import Axios from "axios";
import Footer from "../components/Footer";

function Setting() {
  const [computerInfo, setComputerInfo] = useState({});
  useEffect(() => {
    Axios.get("https://louis-darius-covid19-server.herokuapp.com/computerInfo")
      .then((response) => setComputerInfo(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div class="top-head container">
        <div class="alert alert-info alert-dismissible mb-5">
          <button type="button" class="close" data-dismiss="alert">
            &times;
          </button>
          <strong>Note!</strong> Find below information about your computer.
        </div>
        <div class="container">
          <h2 class="text-center mb-6"> Computer Information </h2> <br /> <br />
          <div>
            <table class="table table-dark text-center">
              <tbody>
                <tr>
                  <td>Name</td>
                  <td> {computerInfo.computerName} </td>
                </tr>
                <tr>
                  <td>System</td>
                  <td> {computerInfo.system} </td>
                </tr>
                <tr>
                  <td>Realease</td>
                  <td> {computerInfo.release} </td>
                </tr>
                <tr>
                  <td>Uptime</td>
                  <td> {computerInfo.upTime} </td>
                </tr>
                <tr>
                  <td>User Info</td>
                  <td> {computerInfo.userInfo} </td>
                </tr>
                <tr>
                  <td>Memory</td>
                  <td> {computerInfo.memory} </td>
                </tr>
                <tr>
                  <td>Free Memory</td>
                  <td> {computerInfo.freeMemory} </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Setting;
