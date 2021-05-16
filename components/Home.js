import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import backgroundImageCallToAction from "../assets/images/shapes/1.svg";
import backgroundImageContactUs from "../assets/images/shapes/9.svg";
import Navigation from "./Navigation";
import Header from "./Header";

const Home = () => {
  return (
    <Fragment>
      <Header />
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
                <Link className="btn btn-primary" to="/call-to-action">
                  View More
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fdb-block py-0">
        <div
          className="container py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImageContactUs})` }}
        >
          <div className="row py-5">
            <div className="col py-5">
              <div className="fdb-box fdb-touch">
                <div className="row text-center justify-content-center">
                  <div className="col-12 col-md-9 col-lg-7">
                    <h1>Contact Us</h1>
                    <p className="lead">
                      Pityful a rethoric question ran over her cheek, then she
                      continued her way. On her way she met a copy.
                    </p>
                  </div>
                </div>

                <div className="row justify-content-center pt-4">
                  <div className="col-12 col-md-8">
                    <form>
                      <div className="row">
                        <div className="col-12 col-md">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-12 col-md mt-4 mt-md-0">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col">
                          <textarea
                            className="form-control"
                            name="message"
                            rows="3"
                            placeholder="How can we help?"
                          ></textarea>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col text-center">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
