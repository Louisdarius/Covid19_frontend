import React from "react";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div class="top-head container">
        <h1 class="text-center mb-5"> Coronavirus information and guideline</h1>

        <div class="container session mb-5">
          <div class="card">
            <div class="card-header">
              <h3 class="text-center">
                {" "}
                Get a test if you have coronavirus symptoms
              </h3>
            </div>
            <div class="card-body bg-info">
              <p>
                {" "}
                Anyone with coronavirus symptoms can get a test. Coronavirus
                symptoms are:
                <ul>
                  <li> a high temperature </li>
                  <li> a new, continuous cough</li>
                  <li>a loss or change to your sense of smell or taste.</li>
                </ul>
              </p>

              <p>
                You can get a test for someone you live with if they have these
                symptoms. Do not get tests for people you live with who do not
                have these symptoms. Please only get a test if you have
                coronavirus symptoms or have been asked to get tested. This will
                help make sure people who need a test can get one. If you’re
                getting a test because you have symptoms, you and anyone you
                live with must self-isolate until you get your result. This also
                applies to anyone in your support bubble (where someone who
                lives alone - or just with their children - can meet people from
                1 other household). You must also self-isolate if you cannot get
                a test because it’s more than 5 days since your symptoms
                started.
              </p>
            </div>
          </div>
        </div>

        <div class="container session mb-5">
          <div class="card">
            <div class="card-header">
              <h3 class="text-center">
                {" "}
                How to avoid catching and spreading coronavirus (social
                distancing){" "}
              </h3>
            </div>
            <div class="card-body bg-info">
              <p>
                Everyone should do what they can to stop coronavirus spreading.{" "}
                <br />
                It is particularly important for people who:
                <ul>
                  <li>are 70 or over</li>
                  <li>have a long-term condition</li>
                  <li> are pregnant </li>
                  <li> have a weakened immune system </li>
                </ul>
              </p>

              <p>
                Please also follow advice issued by Public Health England and
                the NHS. The current advice is to:
                <ul>
                  <li>
                    wash your hands with soap and water often – do this for at
                    least 20 seconds
                  </li>
                  <li>always wash your hands when you get home or into work</li>
                  <li>
                    {" "}
                    use hand sanitiser gel if soap and water are not available
                  </li>
                  <li>
                    {" "}
                    cover your mouth and nose with a tissue or your sleeve (not
                    your hands) when you cough or sneeze
                  </li>
                  <li>
                    put used tissues in the bin straight away and wash your
                    hands afterwards
                  </li>
                  <li>try to avoid close contact with people who are unwell</li>
                  <li>
                    avoid touching your face or eyes, nose and mouth unless your
                    hands are clean
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <div class="container session mb-5">
          <div class="card">
            <div class="card-header">
              <h3 class="text-center">
                {" "}
                What organisations are involved in dealing with this?{" "}
              </h3>
            </div>
            <div class="card-body bg-info">
              <p>
                The local NHS and Southend-on-Sea Borough Council are working
                closely with Public Health England and the Department for Health
                & Social Care to respond to the national situation.
              </p>

              <p>
                We work together with slightly different roles:
                <ul>
                  <li>
                    Department for Health & Social Care: the Chief Medical
                    Officer for England confirms each incident
                  </li>
                  <li>
                    Public Health England co-ordinate the response, information
                    and advice on the Coronavirus (Covid-19)
                  </li>
                  <li>
                    NHS: local and national NHS services are working on the
                    front line to test individuals, and provide advice through
                    calls to NHS 111
                  </li>
                  <li>
                    {" "}
                    Borough Councils provide local public health leadership,
                    working in partnership to safeguard the borough
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Home;
