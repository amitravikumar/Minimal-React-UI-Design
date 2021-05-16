import React, { Fragment } from "react";
import NotFound from "./NotFound";
import Navigation from "./Navigation";
import Header from "./Header";
import AdobeLogo from "../assets/images/customers/adobe.svg";
import ebayLogo from "../assets/images/customers/ebay.svg";
import samsungLogo from "../assets/images/customers/samsung.svg";
import orangeLogo from "../assets/images/customers/orange.svg";
import ibmLogo from "../assets/images/customers/ibm.svg";
import giftIcon from "../assets/images/icons/gift.svg";
import cloudIcon from "../assets/images/icons/cloud.svg";
import backgroundImage from "../assets/images/shapes/4.svg";
import gitSvg from "../assets/images/draws/git.svg";
import purpleBackground from "../assets/images/hero/purple.svg";
import coffeeSvg from "../assets/images/icons/coffee.svg";
import backgroundImage2 from "../assets/images/shapes/1.svg";
import smileSvg from "../assets/images/draws/smile.svg";
import backgroundImage3 from "../assets/images/hero/blue.svg";
import codeSvg from "../assets/images/draws/code.svg";
import logo from "../assets/images/logo.png";
import syncSvg from "../assets/images/draws/sync.svg";
import syncSvg2 from "../assets/images/draws/sync2.svg";
import rocketSvg from "../assets/images/draws/rocket.svg";
import backgroundImage4 from "../assets/images/hero/red.svg";
import githubSvg from "../assets/images/icons/github.svg";
import compassSvg from "../assets/images/icons/compass.svg";

const callToAction1 = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <p className="lead">
                "Separated they live in Bookmarksgrove right at the coast of the
                Semantics, far far away, behind the word mountains, far from the
                countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast."
              </p>
              <p className="mt-5 mt-sm-4">
                <a
                  className="btn btn-primary"
                  href="https://amitravikumar.github.io/"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Another Call To Action 2 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 text-center">
              <h1>Call to Action</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
              <p className="mt-5 mt-sm-4">
                <a
                  className="btn btn-secondary"
                  href="https://amitravikumar.github.io/"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 3 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-6 text-center">
              <h2>
                <strong>
                  Right at the coast of the Semantics, a large language ocean.
                </strong>
              </h2>
              <p className="mt-5 mt-sm-4">
                <a
                  className="btn btn-outline-primary"
                  href="https://amitravikumar.github.io/"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 4 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 text-center">
              <h1>Call to Action</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
              <p className="mt-5 mt-sm-4">
                <a
                  className="btn btn-primary"
                  href="https://amitravikumar.github.io/"
                >
                  Download
                </a>
              </p>
            </div>
          </div>

          <div className="row pt-5 pb-3">
            <div className="col-12 text-center">
              <p>
                <strong>Fortune 100 companies are using our products</strong>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center">
              <img
                className="ml-3 mr-3 mb-2 mt-2"
                style={{ height: "30px" }}
                src={AdobeLogo}
              />
              <img
                className="ml-3 mr-3 mb-2 mt-2"
                style={{ height: "30px" }}
                src={ebayLogo}
              />
              <img
                className="ml-3 mr-3 mb-2 mt-2"
                style={{ height: "30px" }}
                src={samsungLogo}
              />
              <img
                className="ml-3 mr-3 mb-2 mt-2"
                style={{ height: "30px" }}
                src={orangeLogo}
              />
              <img
                className="ml-3 mr-3 mb-2 mt-2"
                style={{ height: "30px" }}
                src={ibmLogo}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 5 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 text-center">
              <h1>Far far away, behind the word mountains, far from</h1>
              <p className="mt-5">
                <a
                  className="btn btn-secondary"
                  href="https://amitravikumar.github.io/"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 6 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-4 text-center">
              <p className="lead">Follow us and ask more on:</p>
              <p className="h2">
                <a href="https://amitravikumar.github.io/" className="mx-2">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://amitravikumar.github.io/" className="mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://amitravikumar.github.io/" className="mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://amitravikumar.github.io/" className="mx-2">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://amitravikumar.github.io/" className="mx-2">
                  <i className="fab fa-pinterest"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 7 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row text-center pb-0 pb-lg-4">
            <div className="col-12">
              <h1>Call to Action</h1>
            </div>
          </div>
          <div className="row text-center pt-4 pt-md-5">
            <div className="col-12 col-sm-10 col-md-6 col-lg-4 m-sm-auto">
              <img alt="image" className="fdb-icon" src={giftIcon} />
              <h3>First Action</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts
              </p>
              <p className="mt-3">
                <a
                  className="btn btn-light sl-1"
                  href="https://amitravikumar.github.io/"
                >
                  Button
                </a>
              </p>
            </div>

            <div className="col-12 col-sm-10 col-md-6 col-lg-4 ml-sm-auto mr-sm-auto mt-5 mt-md-0">
              <img alt="image" className="fdb-icon" src={cloudIcon} />
              <h3>Second Action</h3>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <p className="mt-3">
                <a
                  className="btn btn-light sl-1"
                  href="https://amitravikumar.github.io/"
                >
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 8 */}
      <section className="fdb-block py-0">
        <div
          className="container py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="row justify-content-center py-5">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <div className="fdb-box">
                <h1>Call to Action</h1>
                <p className="lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                </p>
                <p className="mt-4">
                  <a
                    className="btn btn-primary"
                    href="https://amitravikumar.github.io/"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 9 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-auto">
              <h2>Use Minimal Design Blocks for free in your project</h2>
            </div>
            <div className="col-auto mt-4 mt-sm-0">
              <a
                className="btn btn-primary"
                href="https://amitravikumar.github.io/"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 10 */}
      <section className="fdb-block py-0">
        <div
          className="container py-5 my-5 bg-r"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="row justify-content-end py-5">
            <div className="col-12 col-md-8 col-lg-6 mr-5 text-center">
              <div className="fdb-box">
                <h1>Call to Action</h1>
                <p className="lead">
                  When she reached the first hills of the Italic Mountains, she
                  had a last view back on the skyline of her hometown
                  Bookmarksgrove
                </p>
                <p className="mt-4">
                  <a
                    className="btn btn-secondary"
                    href="https://amitravikumar.github.io/"
                  >
                    Download
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 11 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div class="col-auto text-center">
              <a
                class="btn btn-outline-secondary"
                href="https://amitravikumar.github.io/"
              >
                Download
              </a>
            </div>

            <div class="col-auto mt-4 mt-sm-0">
              <h2>Use Minimal React UI Blocks for free in your project</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 12 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Minimal Design Blocks</h1>
              <p className="h2">
                Far far away, behind the word mountains, far from.
              </p>
            </div>
          </div>
          <div className="row align-items-center pt-2 pt-lg-5">
            <div className="col-12 col-md-8 col-lg-7">
              <h2>Call to action</h2>
              <p className="lead">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
              <p className="mt-4">
                <a
                  className="btn btn-primary"
                  href="https://amitravikumar.github.io/"
                >
                  Take a Tour
                </a>
              </p>
            </div>

            <div className="col-8 col-md-4 m-auto m-md-0 ml-md-auto pt-5">
              <img alt="image" className="img-fluid" src={gitSvg} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 13 */}
      <section
        className="fdb-block fdb-viewport bg-dark"
        style={{ backgroundImage: `url(${purpleBackground})` }}
      >
        <div className="container justify-content-center align-items-center d-flex">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-8">
              <img alt="image" className="fdb-icon" src={coffeeSvg} />
              <h1>Minimal Design Blocks</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p className="mt-5">
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-dark"
                >
                  Call to Action
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 14 */}
      <section className="fdb-block py-0">
        <div
          className="container bg-r py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
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
                  href="https://amitravikumar.github.io/"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 15 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 col-sm-6 col-md-4 col-lg-3 m-auto m-md-0">
              <img alt="image" className="img-fluid" src={smileSvg} />
            </div>

            <div className="col-12 col-md-8 ml-auto pt-5 pt-md-0">
              <h2>Call to action</h2>
              <p className="lead">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country.
              </p>
              <p className="mt-4">
                <a
                  className="btn btn-secondary"
                  href="https://amitravikumar.github.io/"
                >
                  Take a Tour
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 16 */}
      <section
        class="fdb-block bg-dark fdb-viewport"
        style={{ backgroundImage: `url(${backgroundImage3})` }}
      >
        <div class="container align-items-center justify-content-center d-flex">
          <div class="row justify-content-center text-center">
            <div class="col-12 col-md-10 col-lg-8">
              <h1>
                Minimal Design Blocks is Open Source and free to use in your
                apps
              </h1>
              <p class="mt-5">
                <a
                  href="https://amitravikumar.github.io/"
                  class="btn btn-outline-light"
                >
                  Call to Action
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 17 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Minimal Design Blocks</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="row justify-content-center align-items-center pt-5">
            <div className="col-8 col-sm-3">
              <img alt="image" className="img-fluid" src={codeSvg} />
            </div>
            <div className="col-12 col-sm-6 m-auto pt-4 pt-sm-0">
              <h2>
                <strong>Bootstrap</strong>
              </h2>
              <p className="lead">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life.
              </p>
            </div>
            <div className="col-12 col-sm-3 text-center pt-4 pt-sm-0">
              <p>
                <a
                  className="btn btn-outline-primary"
                  href="https://amitravikumar.github.io/"
                >
                  Take a Tour
                </a>
              </p>
              <p>
                <a
                  className="btn btn-primary"
                  href="https://amitravikumar.github.io/"
                >
                  Start Now
                </a>
              </p>
              <p className="h5">
                <em>Some foo text</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 18 */}
      <section className="fdb-block">
        <div className="container align-items-end justify-content-center d-flex">
          <div className="row align-items-top text-left">
            <div className="col-12 col-md-6 col-lg-5">
              <p className="mb-5 mt-5">
                <img alt="image" height="40" src={logo} />
              </p>
              <h1>Design Blocks</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <p className="mt-4">
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-primary"
                >
                  Call to Action
                </a>
              </p>
            </div>

            <div className="col-12 col-sm-4 col-md-6 col-lg-4 m-auto pt-5">
              <img alt="image" className="img-fluid rounded-0" src={syncSvg} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 19 */}
      <section className="fdb-block">
        <div className="container align-items-center justify-content-center d-flex">
          <div className="row align-items-center text-left">
            <div className="col-12 col-sm-6">
              <img alt="image" className="img-fluid" src={syncSvg2} />
            </div>

            <div className="col-12 col-lg-5 ml-auto pt-5 pt-lg-0">
              <h1>Minimal Design Blocks</h1>
              <p className="lead">
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life One day however a
                small line of blind text by the name of Lorem Ipsum decided to
                leave for the far World of Grammar.
              </p>
              <p className="mt-4">
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-secondary"
                >
                  Call to Action
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 20 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row align-items-center text-left">
            <div className="col-12 col-md-8">
              <h1>Minimal Design Blocks</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove.
              </p>
            </div>
            <div className="col-12 col-md-3 ml-auto text-left text-md-right">
              <p>
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-primary"
                >
                  Call to Action
                </a>
              </p>
            </div>
          </div>

          <div className="row pt-5">
            <div className="col-6 offset-3">
              <img alt="image" className="img-fluid" src={rocketSvg} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 21 */}
      <section
        className="fdb-block fdb-viewport bg-dark"
        style={{ backgroundImage: `url(${backgroundImage4})` }}
      >
        <div className="container align-items-center justify-content-center d-flex">
          <div className="row align-items-center text-left">
            <div className="col-12 col-sm-10 col-md-8 col-lg-8">
              <h1>Minimal Design Blocks is build on Boostrap Framework</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there.
              </p>
              <p className="mt-5">
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-light"
                >
                  Call to Action
                </a>
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-dark ml-4"
                >
                  Button
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action 22 */}
      <section className="fdb-block">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-5 text-center pb-md-5">
              <h1>Minimal Design Blocks</h1>
              <p className="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
              <p className="mt-4">
                <a
                  href="https://amitravikumar.github.io/"
                  className="btn btn-primary"
                >
                  Call to Action
                </a>
              </p>
            </div>
          </div>

          <div className="row text-center justify-content-center pt-5">
            <div className="col-12 col-sm-6 col-lg-3">
              <img alt="image" className="fdb-icon" src={cloudIcon} />

              <h3>
                <strong>Feature One</strong>
              </h3>

              <p>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-sm-0">
              <img alt="image" className="fdb-icon" src={giftIcon} />

              <h3>
                <strong>Feature Two</strong>
              </h3>

              <p>Separated they live in Bookmarksgrove right at the coast</p>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
              <img alt="image" className="fdb-icon" src={githubSvg} />

              <h3>
                <strong>Feature Three</strong>
              </h3>

              <p>
                A small river named Duden flows by their place and supplies it
              </p>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 pt-4 pt-lg-0">
              <img alt="image" className="fdb-icon" src={compassSvg} />

              <h3>
                <strong>Feature Four</strong>
              </h3>

              <p>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default callToAction1;
