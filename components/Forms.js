import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import backgroundImage from "../assets/images/hero/blue.svg";
import backgroundImage1 from "../assets/images/shapes/6.svg";
import backgroundImage2 from "../assets/images/shapes/4.svg";

const Forms = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />

      {/* Forms UI 1  */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h1>Subscribe</h1>
              <div className="input-group mt-4 mb-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    Submit
                  </button>
                </div>
              </div>

              <p className="h4">
                Find us on{" "}
                <a href="https://amitravikumar.github.io/">Facebook</a> and{" "}
                <a href="https://amitravikumar.github.io/">Twitter</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form UI 2 */}
      <section
        className="fdb-block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="fdb-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-12 col-lg-6">
                <h2>Join us!</h2>
                <p className="lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.{" "}
                </p>
              </div>
              <div className="col-12 col-lg-5 text-center">
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form UI 3 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8 text-center">
              <div className="row">
                <div className="col">
                  <h1>Register</h1>
                  <p className="lead">
                    When she reached the first hills, she had a last view back
                    on the skyline of her hometown.
                  </p>
                </div>
              </div>
              <div className="row align-items-center">
                <div className="col-12 col-md-5 mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12 col-md-5 mt-4">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12 col-md-2 mt-4">
                  <button className="btn btn-secondary" type="button">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form UI 4 */}
      <section className="fdb-block py-0">
        <div
          className="container py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImage1})` }}
        >
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7 col-xl-5 text-left">
              <div className="row">
                <div className="col">
                  <h1>Sign Up</h1>
                  <p className="lead">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia.{" "}
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col mt-4">
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
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <button className="btn btn-primary" type="button">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form UI 4 */}
      <section className="fdb-block py-0">
        <div
          className="container py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
        >
          <div className=" row justify-content-end">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 text-left">
              <div className="fdb-box">
                <div className="row">
                  <div className="col">
                    <h1>Log In</h1>
                    <p className="lead">
                      Right at the coast of the Semantics, a large language
                      ocean. A small river named Duden.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-4">
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
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button className="btn btn-secondary" type="button">
                      Submit
                    </button>
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

export default Forms;
