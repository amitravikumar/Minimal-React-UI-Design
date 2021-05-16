import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <section class="fdb-block p-2" id="navigator">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-md">
            <button
              class="navbar-toggler mr-auto ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav0"
              aria-controls="navbarNav0"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse mt-2 mt-md-0" id="navbarNav0">
              <p class="m-auto">
                <Link class="btn btn-outline-primary m-1" to="/call-to-action">
                  Call to action
                </Link>
                <Link class="btn btn-outline-primary m-1" to="/contacts">
                  Contacts
                </Link>
                <a class="btn btn-outline-primary m-1" href="contents.html">
                  Contents
                </a>
                <a class="btn btn-outline-primary m-1" href="features.html">
                  Features
                </a>
                <a class="btn btn-outline-primary m-1" href="footers.html">
                  Footers
                </a>
                <a class="btn btn-outline-primary m-1" href="forms.html">
                  Forms
                </a>
                <a class="btn btn-outline-primary m-1" href="headers.html">
                  Headers
                </a>
                <a class="btn btn-outline-primary m-1" href="pricings.html">
                  Pricings
                </a>
                <a class="btn btn-outline-primary m-1" href="teams.html">
                  Teams
                </a>
                <a class="btn btn-outline-primary m-1" href="testimonials.html">
                  Testimonials
                </a>
              </p>
            </div>
          </nav>
        </div>
      </section>
    </Fragment>
  );
};

export default Navigation;
