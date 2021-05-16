import React, { Fragment } from "react";
import backgroundImageCallToAction from "../assets/images/shapes/1.svg";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <Fragment>
      <section class="fdb-block p-2" id="navigator">
        <h1 style={{ textAlign: "center" }}>Minimal React UI Design</h1>
      </section>
      <Navigation />
      <section className="fdb-block py-0">
        <div
          className="container bg-r py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImageCallToAction})` }}
        >
          <div className="row py-5">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 text-left">
              <h1>Call to Action</h1>
              <p className="lead">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="mt-4">
                <a
                  className="btn btn-primary"
                  href="https://eqfor.csb.app/call-to-action"
                >
                  View More
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
