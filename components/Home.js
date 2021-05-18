import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import backgroundImageCallToAction from "../assets/images/shapes/1.svg";
import backgroundImageContactUs from "../assets/images/shapes/9.svg";
import purpleBackground from "../assets/images/hero/purple.svg";
import Navigation from "./Navigation";
import Header from "./Header";
import styled from "styled-components";

const Head = styled.h1`
  font-size: 1.75rem;
  margin-left: 2rem;
  position: center;
  z-index: 2;
  background: greenyellow;
  transform: skew(-7deg);
`;

const HeadingStyles = styled.header`
  padding-bottom: 15px;
  padding-top: 15px;
  .bar {
    border-bottom: 8px solid black;
    display: flex;
    flex-direction: column;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;

const SectionWrapper = styled.section`
  padding: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

const MyTopPicks = () => {
  return (
    <HeadingStyles>
      <div class="bar">
        <Head>My Top Picks from each Category</Head>
      </div>
    </HeadingStyles>
  );
};

const MyTopCallToAction = () => {
  return (
    <HeadingStyles>
      <div class="bar">
        <Head style={{ background: "tomato", color: "white" }}>
          My Top Call-to-action Pick!
        </Head>
      </div>
    </HeadingStyles>
  );
};

const MyTopContactUs = () => {
  return (
    <HeadingStyles>
      <div class="bar">
        <Head style={{ background: "tomato", color: "white" }}>
          My Top Contact-us Pick!
        </Head>
      </div>
    </HeadingStyles>
  );
};

const MyTopContent = () => {
  return (
    <HeadingStyles>
      <div class="bar">
        <Head style={{ background: "tomato", color: "white" }}>
          My Top Content Pick!
        </Head>
      </div>
    </HeadingStyles>
  );
};

const MyTopFeature = () => {
  return (
    <HeadingStyles>
      <div class="bar">
        <Head style={{ background: "tomato", color: "white" }}>
          My Top Feature Pick!
        </Head>
      </div>
    </HeadingStyles>
  );
};

const MyTopFooter = () => {
  return (
    <HeadingStyles>
      <div class="bar">
        <Head style={{ background: "tomato", color: "white" }}>
          My Top Footer Pick!
        </Head>
      </div>
    </HeadingStyles>
  );
};

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <MyTopPicks />
      <MyTopCallToAction />
      <SectionWrapper className="fdb-block py-0">
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
      </SectionWrapper>

      <MyTopContactUs />
      <SectionWrapper className="fdb-block py-0">
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
      </SectionWrapper>

      <MyTopContent />
      <SectionWrapper className="fdb-block">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>Minimal UI Design Blocks</h1>

              <div className="row text-left pt-4">
                <div className="col-12 col-md-6">
                  <p className="lead">
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place far far away.
                  </p>
                </div>
                <div className="col-12 col-md-6">
                  <p className="lead">
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, far far away, behind the word mountains, far
                    from the countries Vokalia and Consonantia, there live the
                    blind texts. Separated they live in Bookmarksgrove right at
                    the coast.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <MyTopFeature />
      <SectionWrapper
        className="fdb-block bg-dark"
        style={{ backgroundImage: `url(${purpleBackground})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>Minimal-UI Design Blocks</h1>
            </div>
          </div>

          <div className="row-70"></div>

          <div className="row text-center justify-content-sm-center no-gutters">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto">
              <div className="fdb-box fdb-touch">
                <h2>Feature 1</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia.
                </p>
                <p className="mt-4">
                  <a href="https://amitravikumar.github.io/">
                    Learn More <i className="fas fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
              <div className="fdb-box fdb-touch">
                <h2>Feature 2</h2>
                <p>
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p className="mt-4">
                  <a href="https://amitravikumar.github.io/">
                    Learn More <i className="fas fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-3 m-auto pt-5 pt-xl-0">
              <div className="fdb-box fdb-touch">
                <h2>Feature 3</h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p className="mt-4">
                  <a href="https://amitravikumar.github.io/">
                    Learn More <i class="fas fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <MyTopFooter />
      <SectionWrapper className="fdb-block footer-small">
        <div className="container">
          <div className="row text-center align-items-center">
            <div className="col-12 col-sm-6 col-md-4 text-sm-left">
              <Header alt="image" height="40" />
            </div>

            <div className="col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center">
              © 2020-2021 Minimal-UI
            </div>

            <div className="col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right">
              <a href="https://amitravikumar.github.io/" className="mx-2">
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://amitravikumar.github.io/" className="mx-2">
                <i className="fab fa-facebook" aria-hidden="true"></i>
              </a>
              <a href="https://amitravikumar.github.io/" className="mx-2">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://amitravikumar.github.io/" className="mx-2">
                <i className="fab fa-pinterest" aria-hidden="true"></i>
              </a>
              <a href="https://amitravikumar.github.io/" className="mx-2">
                <i className="fab fa-google" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Fragment>
  );
};

export default Home;
