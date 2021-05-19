import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import backgroundImage from "../assets/images/shapes/1.svg";
import backgroundImage2 from "../assets/images/hero/red.svg";
import backgroundImage3 from "../assets/images/shapes/2.svg";
import backgroundImage4 from "../assets/images/shapes/8.svg";
import styled from "styled-components";

const Head = styled.h1`
  font-size: 1.75rem;
  margin-left: 2rem;
  position: center;
  z-index: 2;
  background: lightcyan;
  transform: skew(-7deg);
`;

const HeadingStyles = styled.header`
  padding-bottom: 15px;
  .bar {
    border-bottom: 8px solid black;
    display: flex;
    flex-direction: column;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

const Heading = () => {
  return (
    <HeadingStyles>
      <div className="bar">
        <Head style={{ color: "black" }}>Pricing Demo UI</Head>
      </div>
    </HeadingStyles>
  );
};

const Pricings = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      {/* <!-- Pricings 1 --> */}
      <Heading />
      <section
        className="fdb-block"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1 className="text-light">Pricing</h1>
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center">
              <div className="fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded">
                <h2>Hobby</h2>
                <p className="lead">
                  <strong>$9 / month</strong>
                </p>
                <p className="h3 font-weight-light">
                  Even the all-powerful Pointing has no control about.
                </p>

                <ul className="text-left mt-5 mb-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p>
                  <a
                    href="https://www.froala.com"
                    className="btn btn-outline-primary mt-4"
                  >
                    Subscribe
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
              <div className="fdb-box shadow pb-5 pt-5 pl-3 pr-3 fdb-touch rounded">
                <h2 className="text-primary">Professional</h2>
                <p className="lead">
                  <strong>$19 / month</strong>
                </p>
                <p className="h3 font-weight-light">
                  Far far away, behind the word mountains, far from.
                </p>

                <ul className="text-left mt-5 mb-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p>
                  <a
                    href="https://www.froala.com"
                    className="btn btn-primary mt-4"
                  >
                    Subscribe
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
              <div className="fdb-box shadow pb-5 pt-5 pl-3 pr-3 rounded">
                <h2>Business</h2>
                <p className="lead">
                  <strong>$49 / month</strong>
                </p>
                <p className="h3 font-weight-light">
                  Wild Question Marks, but the Little Blind Text didn’t listen.
                </p>

                <ul className="text-left mt-5 mb-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p>
                  <a
                    href="https://www.froala.com"
                    className="btn btn-outline-primary mt-4"
                  >
                    Subscribe
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pricings 2 --> */}
      <Heading />
      <section className="fdb-block">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1>Pricing</h1>
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">
              <div className="fdb-box fdb-touch p-5 rounded">
                <h2>
                  Hobby{" "}
                  <strong className="float-xl-right d-lg-block d-xl-inline">
                    $99
                  </strong>
                </h2>
                <p className="lead">
                  <em>Copy Writers ambushed her, made her drunk.</em>
                </p>

                <ul className="text-left pl-3 mt-5 mb-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p className="text-left pt-4">
                  <a href="https://www.froala.com" className="btn btn-primary">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
              <div className="fdb-box fdb-touch p-5 rounded">
                <h2>
                  Advanced{" "}
                  <strong className="float-xl-right d-lg-block d-xl-inline">
                    $349
                  </strong>
                </h2>
                <p className="lead">
                  <em>Separated they live in Bookmarks right.</em>
                </p>

                <ul className="text-left pl-3 mt-5 mb-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p className="text-left pt-4">
                  <a href="https://www.froala.com" className="btn btn-primary">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
              <div className="fdb-box fdb-touch p-5 rounded">
                <h2>
                  Business{" "}
                  <strong className="float-xl-right d-lg-block d-xl-inline">
                    $849
                  </strong>
                </h2>
                <p className="lead">
                  <em>A small river named Duden their place.</em>
                </p>

                <ul className="text-left pl-3 mt-5 mb-5">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p className="text-left pt-4">
                  <a href="https://www.froala.com" className="btn btn-primary">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pricings 3 --> */}
      <Heading />
      <section
        className="fdb-block"
        style={{ backgroundImage: `url(${backgroundImage2})` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1 className="text-white">Pricing</h1>
            </div>
          </div>

          <div className="row mt-5 align-items-center">
            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center">
              <div className="fdb-box p-4">
                <h2>Hobby</h2>
                <p className="lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia.
                </p>

                <p className="h1 mt-5 mb-5">$99</p>

                <p>
                  <a href="https://www.froala.com" className="btn btn-dark">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
              <div className="fdb-box px-4 pt-5">
                <h2>Advanced</h2>
                <p className="lead">
                  Separated they live in Bookmarksgrove right at the coast, a
                  large language ocean.
                </p>

                <p className="h1 mt-5 mb-5">$299</p>

                <p>
                  <a
                    href="https://www.froala.com"
                    className="btn btn-secondary"
                  >
                    Buy Now
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center pt-4 pt-lg-0">
              <div className="fdb-box p-4">
                <h2>Business</h2>
                <p className="lead">
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost life.
                </p>

                <p className="h1 mb-5 mt-5">$799</p>

                <p>
                  <a href="https://www.froala.com" className="btn btn-dark">
                    Buy Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pricings 4 --> */}
      <Heading />
      <section className="fdb-block py-0">
        <div
          className="container pt-5 my-5"
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        >
          <div className="row text-center py-5">
            <div className="col">
              <h1>Pricing Plans</h1>
            </div>
          </div>

          <div className="row py-5 align-items-top">
            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left">
              <div className="bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow">
                <h2 className="font-weight-light">Startup</h2>
                <hr />
                <p className="h2">
                  <strong>$9.90</strong>
                </p>
                <p className="h4">
                  Far far away, behind the word mountains, far from the
                  countries.
                </p>
                <hr />
                <p className="text-right">
                  <em>Unlimited calls</em>
                </p>
                <p className="text-right">
                  <em>Free hosting</em>
                </p>
                <p className="text-right">
                  <em>40MB of storage</em>
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <br />
                </p>
                <p>
                  <br />
                </p>
                <p className="text-center pt-4">
                  <a href="https://www.froala.com" className="btn btn-primary">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
              <div className="bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow">
                <h2 className="font-weight-light">Standard</h2>
                <hr />
                <p className="h2">
                  <strong>$29.90</strong>
                </p>
                <p className="h4">
                  The copy warned the Blind Text, that it would have been
                  rewritten
                </p>
                <hr />
                <p className="text-right">
                  <em>Unlimited calls</em>
                </p>
                <p className="text-right">
                  <em>Free hosting</em>
                </p>
                <p className="text-right">
                  <em>1GB of storage</em>
                </p>
                <p className="text-right">
                  <em>10 hours of support</em>
                </p>
                <p className="text-right">
                  <em>Custom domain</em>
                </p>
                <p>
                  <br />
                </p>
                <p className="text-center pt-4">
                  <a href="https://www.froala.com" className="btn btn-primary">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-left pt-4 pt-lg-0">
              <div className="bg-gray pb-5 pt-5 pl-4 pr-4 rounded shadow">
                <h2 className="font-weight-light">Professional</h2>
                <hr />
                <p className="h2">
                  <strong>$59.90</strong>
                </p>
                <p className="h4">
                  {" "}
                  the headline of Alphabet Village and the subline of her own
                  road.
                </p>
                <hr />
                <p className="text-right">
                  <em>Unlimited calls</em>
                </p>
                <p className="text-right">
                  <em>Free hosting</em>
                </p>
                <p className="text-right">
                  <em>1GB of storage</em>
                </p>
                <p className="text-right">
                  <em>20 hours of support</em>
                </p>
                <p className="text-right">
                  <em>Custom domain</em>
                </p>
                <p className="text-right">
                  <em>Analytics and SEO</em>
                </p>

                <p className="text-center pt-4">
                  <a href="https://www.froala.com" className="btn btn-primary">
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Pricings 5 --> */}
      <Heading />
      <section
        className="fdb-block"
        style={{ backgroundImage: `url(${backgroundImage4})` }}
      >
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1>Pricing Plans</h1>
            </div>
          </div>

          <div className="row mt-5 align-items-center no-gutters">
            <div className="col-12 col-sm-10 col-md-8 m-auto col-lg-4 text-center shadow">
              <div className="bg-white pb-5 pt-5 pl-4 pr-4 rounded-left">
                <h2 className="font-weight-light">Basic</h2>

                <p className="h1 mt-5 mb-5">
                  <strong>$19</strong> <span className="h4">/month</span>
                </p>

                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p className="text-center pt-4">
                  <a
                    href="https://www.froala.com"
                    className="btn btn-outline-dark"
                  >
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 sl-1 pt-0 pt-lg-3 pb-0 pb-lg-3 bg-white fdb-touch rounded shadow">
              <div className="pb-5 pt-5 pl-4 pr-4">
                <h2 className="font-weight-light">Standard</h2>

                <p className="h1 mt-5 mb-5">
                  <strong>$49</strong> <span className="h4">/month</span>
                </p>

                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p className="text-center pt-4">
                  <a
                    href="https://www.froala.com"
                    className="btn btn-primary btn-shadow"
                  >
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-10 col-md-8 ml-auto mr-auto col-lg-4 text-center mt-4 mt-lg-0 shadow">
              <div className="bg-white pb-5 pt-5 pl-4 pr-4 rounded-right">
                <h2 className="font-weight-light">OEM</h2>

                <p className="h1 mt-5 mb-5">
                  <strong>$99</strong> <span className="h4">/month</span>
                </p>

                <ul className="text-left">
                  <li>Item 1</li>
                  <li>Item 2</li>
                  <li>Item 3</li>
                </ul>

                <p className="text-center pt-4">
                  <a
                    href="https://www.froala.com"
                    className="btn btn-outline-dark"
                  >
                    Choose Plan
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Pricings;
