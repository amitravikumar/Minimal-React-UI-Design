import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import backgroundImage from "../assets/images/hero/blue.svg";
import backgroundImage2 from "../assets/images/shapes/9.svg";
import phoneIcon from "../assets/images/icons/phone.svg";
import navigationIcon from "../assets/images/icons/navigation.svg";
import mailIcon from "../assets/images/icons/mail.svg";
import backgroundImage3 from "../assets/images/shapes/6.svg";
import backgroundImage4 from "../assets/images/shapes/8.svg";
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
        <Head style={{ color: "black" }}>Contact Us Demo UI</Head>
      </div>
    </HeadingStyles>
  );
};

const Contacts = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <Heading />
      {/* Contacts Form 1 */}
      <SectionWrapper classNameName="fdb-block pt-0">
        <div classNameName="container-fluid p-0 pb-md-5">
          <iframe
            classNameName="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
            width="100%"
            height="300"
            frameborder="0"
            allowfullscreen=""
            style={{ border: "0" }}
          ></iframe>
          <div class="container">
            <div class="row mt-5">
              <div class="col-12 col-md-6 col-lg-5">
                <h2>Contact Us</h2>
                <p class="lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove.
                </p>

                <p class="lead">
                  It is a paradisematic country, in which roasted parts of
                  sentences fly into your mouth.
                </p>

                <p class="h3 mt-5">
                  <strong>Email:</strong>{" "}
                  <a href="https://www.froala.com">hello@website.com</a>
                </p>
                <p class="lead">
                  <strong>Phone:</strong>{" "}
                  <a href="https://www.froala.com">+44 123 123 1232</a>
                </p>
              </div>

              <div class="col-12 col-md-6 ml-auto pt-5 pt-md-0">
                <form>
                  <div class="row">
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First name"
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  <div class="row mt-4">
                    <div class="col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div class="row mt-4">
                    <div class="col">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col">
                      <textarea
                        class="form-control"
                        name="message"
                        rows="3"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row mt-4">
                    <div class="col">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Us Form 2 */}
      <Heading />
      <SectionWrapper
        className="fdb-block bg-dark"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <h1>Contact Us</h1>
              <h2>We love to hear from you!</h2>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-12">
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
                  <div className="col-12 col-md mt-4 mt-md-0">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone (optional)"
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
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Form 3 */}
      <Heading />
      <SectionWrapper className="fdb-block">
        <div className="container">
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <h1>Contact Us</h1>
              <p className="lead">
                One day however a small line of blind text by the name of Lorem
                Ipsum decided to leave for the far World of Grammar.
              </p>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-12 col-md-6">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                width="100%"
                height="300"
                frameborder="0"
                allowfullscreen=""
                style={{ border: "0" }}
              ></iframe>
            </div>

            <div className="col-12 col-md-6 pt-5 pt-md-0">
              <form>
                <div className="row">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
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
                  <div className="col">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Us form 4 */}
      <Heading />
      <SectionWrapper className="fdb-block py-0">
        <div
          className="container py-5 my-5"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
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

      {/* Contact Us Form 5 */}
      <Heading />
      <SectionWrapper className="fdb-block pt-0">
        <div className="container-fluid p-0 pb-3">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
            width="100%"
            height="300"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="container">
          <div className="row text-center justify-content-center pt-5">
            <div className="col-12 col-md-7">
              <h1>Contact Us</h1>
            </div>
          </div>

          <div className="row justify-content-center pt-4">
            <div className="col-12 col-md-7">
              <form>
                <div className="row">
                  <div className="col">
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
          <div className="row-100"></div>
        </div>
        <div className="bg-dark">
          <div className="container">
            <div className="row-50"></div>
            <div className="row justify-content-center text-center">
              <div className="col-12 col-md mr-auto ml-auto">
                <img alt="image" height="40" className="mb-2" src={phoneIcon} />
                <p className="lead">+44 (112) 123 752</p>
              </div>

              <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                <img
                  alt="image"
                  height="40"
                  className="mb-2"
                  src={navigationIcon}
                />
                <p className="lead">123 6th St.Melbourne, FL 32904</p>
              </div>

              <div className="col-12 col-md pt-4 pt-md-0 mr-auto ml-auto">
                <img alt="image" height="40" className="mb-2" src={mailIcon} />
                <p className="lead">support@website.com</p>
              </div>
            </div>
            <div className="row-50"></div>
          </div>
        </div>

        <div className="container">
          <div className="row-70"></div>
          <div className="row text-center">
            <div className="col">
              <p className="h2">
                <a href="https://www.froala.com" className="mx-2">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.froala.com" className="mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.froala.com" className="mx-2">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.froala.com" className="mx-2">
                  <i className="fab fa-google"></i>
                </a>
                <a href="https://www.froala.com" className="mx-2">
                  <i className="fab fa-pinterest"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Us Form 6 */}
      <Heading />
      <SectionWrapper className="fdb-block pt-0">
        <div className="container-fluid p-0 pb-5">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
            width="100%"
            height="300"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
          ></iframe>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-12">
              <form>
                <div className="row">
                  <div className="col-12 col-md">
                    <label>First Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-md mt-4 mt-md-0">
                    <label>Last Name</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <label>Your Email</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <label>Subject (optional but helpful)</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <label>How can we help?</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4 text-center">
                  <div className="col">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact us Form 7 */}
      <Heading />
      <SectionWrapper className="fdb-block py-0">
        <div
          className="container py-5"
          style={{ backgroundImage: `url(${backgroundImage3})` }}
        >
          <div className="row text-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <h1>Contact Us</h1>
              <p className="lead">
                If you’re already an active user, please{" "}
                <a href="https://www.froala.com">sign in</a> before contacting
                us.
              </p>
            </div>
          </div>
          <div className="row-50"></div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7">
              <form>
                <div className="row">
                  <div className="col">
                    <label>Your Email Address</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <label>Subject (optional but helpful)</label>
                    <input type="email" className="form-control" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <label>How can we help?</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col text-right">
                    <button type="submit" className="btn btn-dark">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="row-100"></div>
        </div>

        <div className="container-fluid p-0">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
            width="100%"
            height="300"
            frameborder="0"
            style={{ border: "0" }}
            allowfullscreen=""
          ></iframe>
        </div>
      </SectionWrapper>

      {/* Contact Us Form 8 */}
      <Heading />
      <SectionWrapper
        className="fdb-block pt-0"
        style={{ backgroundImage: `url(${backgroundImage4})` }}
      >
        <div className="bg-gray">
          <div className="container">
            <div className="row-100"></div>
            <div className="row text-left">
              <div className="col-8">
                <h1>Contact Us</h1>
                <p className="lead">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row-100"></div>
          </div>
        </div>
        <div className="container bg-r">
          <div className="row-100"></div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-5">
              <h2>Call or email</h2>
              <p className="text-large">
                Support, Sales, and Account Management services are currently
                available in English
              </p>

              <p className="h3 mt-4 mt-lg-5">
                <strong>Support</strong>
              </p>
              <p>+800 3005 4300</p>
              <p>
                <a href="https://www.froala.com">Contact Support</a>
              </p>
              <p>
                Our technical support is available by phone or email from 11am
                to 11pm BST, Monday through Friday.
              </p>

              <p className="h3 mt-4 mt-lg-5">
                <strong>Sales</strong>
              </p>
              <p>+800 3005 4300</p>
              <p>
                <a href="https://www.froala.com">Contact Sales</a>
              </p>
              <p>
                Our technical support is available by phone or email from 11am
                to 11pm BST, Monday through Friday.
              </p>

              <p className="h3 mt-4 mt-lg-5">
                <strong>General inquiries</strong>
              </p>
              <p>
                <a href="https://www.froala.com">hello@website.com</a>
              </p>
            </div>

            <div className="col-12 col-md-6 ml-auto">
              <h2>Drop us a line</h2>
              <form>
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col">
                    <select className="form-control" required="">
                      <option value="">Select Department</option>
                      <option value="1">Support</option>
                      <option value="2">Sales</option>
                      <option value="3">Accounting</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact us Form 9 */}
      <Heading />
      <SectionWrapper class="fdb-block bg-gray">
        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="col-12 col-md-8 col-lg-7">
              <p class="h2">support@website.com</p>
              <p class="lead">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <p>
                <break />
              </p>
              <p class="h2">
                <a href="https://www.froala.com" class="mx-2">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="https://www.froala.com" class="mx-2">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.froala.com" class="mx-2">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="https://www.froala.com" class="mx-2">
                  <i class="fab fa-google"></i>
                </a>
                <a href="https://www.froala.com" class="mx-2">
                  <i class="fab fa-pinterest"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Contact us Form 10 */}
      <Heading />
      <SectionWrapper class="fdb-block">
        <div class="container">
          <div class="row text-center justify-content-center">
            <div class="col-12 col-md-8 col-lg-7">
              <h1>Contact Us</h1>
              <p class="lead">
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
            </div>
          </div>
          <div class="row-70"></div>
          <div class="row">
            <div class="col-12 col-md-8 col-lg m-auto">
              <form>
                <div class="row">
                  <div class="col">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Enter email"
                    />
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="3"
                      placeholder="How can we help?"
                    ></textarea>
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-12 col-md-8 col-lg pt-5 m-auto pt-lg-0">
              <iframe
                class="mb-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.101253041406952!3d44.43635311654287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zR3J1cHVsIFN0YXR1YXIgIkPEg3J1yJthIEN1IFBhaWHIm2Ui!5e0!3m2!1sen!2sro!4v1507381157656"
                width="100%"
                height="200"
                frameborder="0"
                style={{ border: "0" }}
                allowfullscreen=""
              ></iframe>

              <p>
                <strong>Showroom</strong>
              </p>
              <p>
                71 Pilgrim Avenue
                <br />
                Chevy Chase, MD 20815
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </Fragment>
  );
};

export default Contacts;
