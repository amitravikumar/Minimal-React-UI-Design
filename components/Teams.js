import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import teamPerson1 from "../assets/images/people/1.jpg";
import teamPerson2 from "../assets/images/people/2.jpg";
import teamPerson3 from "../assets/images/people/3.jpg";
import teamPerson4 from "../assets/images/people/4.jpg";
import teamPerson5 from "../assets/images/people/5.jpg";
import teamPerson6 from "../assets/images/people/6.jpg";
import teamPerson7 from "../assets/images/people/7.jpg";
import teamPerson8 from "../assets/images/people/8.jpg";

const Teams = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      {/* <!-- Teams 1 --> */}
      <section className="fdb-block team-1">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-8">
              <h1>Our Team</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries.
              </p>
            </div>
          </div>

          <div className="row-50"></div>

          <div className="row">
            <div className="col-sm-3 text-left">
              <div className="fdb-box p-0">
                <img
                  alt="image"
                  className="img-fluid rounded-0"
                  src={teamPerson1}
                />

                <div className="content p-3">
                  <h3>
                    <strong>Sara Doe</strong>
                  </h3>
                  <p>Founder</p>
                </div>
              </div>
            </div>

            <div className="col-sm-3 text-left">
              <div className="fdb-box p-0">
                <img
                  alt="image"
                  className="img-fluid rounded-0"
                  src={teamPerson2}
                />

                <div className="content p-3">
                  <h3>
                    <strong>Sara Doe</strong>
                  </h3>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 text-left">
              <div className="fdb-box p-0">
                <img
                  alt="image"
                  className="img-fluid rounded-0"
                  src={teamPerson3}
                />

                <div className="content p-3">
                  <h3>
                    <strong>Sara Doe</strong>
                  </h3>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 text-left">
              <div className="fdb-box p-0">
                <img
                  alt="image"
                  className="img-fluid rounded-0"
                  src={teamPerson6}
                />

                <div className="content p-3">
                  <h3>
                    <strong>Sara Doe</strong>
                  </h3>
                  <p>Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Teams;
