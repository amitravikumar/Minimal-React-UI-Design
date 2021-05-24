import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import people1 from "../assets/images/people/1.jpg";
import people2 from "../assets/images/people/3.jpg";
import backgroundImage from "../assets/images/hero/red.svg";

const Testimonials = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />

      {/* Testemonial UI 1 */}
      <section class="fdb-block">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-12 col-md-10 col-lg-8">
              <p class="lead">
                "Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean."
              </p>

              <p class="lead">
                <strong>Person Name</strong>{" "}
                <em class="ml-4">Co-founder at Company</em>
              </p>
            </div>
            <div class="col-8 col-sm-6 col-md-2 col-lg-3 col-xl-2 mt-4 mt-md-0 ml-auto mr-auto mr-md-0">
              <img alt="image" class="img-fluid rounded-circle" src={people1} />
            </div>
          </div>
        </div>
      </section>

      {/* Testemonial 2 */}
      <section
        class="fdb-block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div class="container">
          <div class="fdb-box">
            <div class="row align-items-center justify-content-center">
              <div class="col-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 m-auto">
                <img
                  alt="image"
                  class="img-fluid rounded-circle"
                  src={people2}
                />
              </div>

              <div class="col-12 col-md-8 ml-auto mr-auto mt-4 mt-md-0">
                <p class="lead">
                  "Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name of Lorem Ipsum decided to
                  leave for the far World of Grammar."
                </p>

                <p class="h3 mt-4 mt-lg-5">
                  <strong>Person Name</strong>
                </p>
                <p>
                  <em>Co-founder at Company</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonials;
