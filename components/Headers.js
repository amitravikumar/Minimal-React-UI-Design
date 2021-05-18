import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import styled from "styled-components";

const Head = styled.h1`
  font-size: 1.75rem;
  margin-left: 2rem;
  position: center;
  z-index: 2;
  background: lightgoldenrodyellow;
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

const SectionWrapper = styled.section`
  padding: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

const Heading = () => {
  return (
    <HeadingStyles>
      <div className="bar">
        <Head style={{ color: "black" }}>Headers Demo UI</Head>
      </div>
    </HeadingStyles>
  );
};

const Headers = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Heading />
      <SectionWrapper>
        <div className="container">
          <nav className="navbar">
            <a href="https://amitravikumar.github.io/">
              <Header height="30" alt="image" />
            </a>
          </nav>
        </div>
      </SectionWrapper>

      {/* <!-- Headers 2 --> */}
      <Heading />
      <SectionWrapper>
        <div className="container text-center">
          <nav className="navbar">
            <a
              className="ml-auto mr-auto"
              href="https://amitravikumar.github.io/"
            >
              <Header height="30" alt="image" />
            </a>
          </nav>
        </div>
      </SectionWrapper>

      {/* <!-- Headers 3 --> */}
      <Heading />
      <SectionWrapper>
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav0"
              aria-controls="navbarNav0"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav0">
              <ul className="navbar-nav mr-auto ml-auto">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </SectionWrapper>

      {/* <!-- Headers 4 --> */}
      <Heading />
      <SectionWrapper>
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="https://amitravikumar.github.io/">
              <Header height="30" alt="image" />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav1"
              aria-controls="navbarNav1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav1">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Team
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav justify-content-end d-none d-lg-flex ml-md-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    <i className="fab fa-slack"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
              </ul>

              <a
                className="btn btn-outline-primary ml-md-3"
                href="https://amitravikumar.github.io/"
              >
                Button
              </a>
            </div>
          </nav>
        </div>
      </SectionWrapper>

      {/* <!-- Headers 5 --> */}
      <Heading />
      <SectionWrapper>
        <div className="container">
          <nav className="navbar navbar-expand-md no-gutters">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav2"
              aria-controls="navbarNav2"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="col-4 col-md-2 text-right text-md-center order-lg-6">
              <a href="https://amitravikumar.github.io/">
                <Header height="30" alt="image" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse col-12 col-md-5 order-lg-1"
              id="navbarNav2"
            >
              <ul className="navbar-nav col-5">
                <li className="nav-item active">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://amitravikumar.github.io/"
                  >
                    Team
                  </a>
                </li>
              </ul>
            </div>

            <ul className="navbar-nav justify-content-end col-sm-5 order-lg-12 d-none d-md-flex">
              <li className="nav-item">
                <a className="nav-link" href="https://amitravikumar.github.io/">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://amitravikumar.github.io/">
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://amitravikumar.github.io/">
                  <i className="fab fa-slack"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </SectionWrapper>
    </Fragment>
  );
};

export default Headers;
