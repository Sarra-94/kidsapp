import React from "react";

const footer = () => {
  return (
    <div>
      <footer className="pt-5 pb-4" id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">ABOUT US</h5>
              <p className="mb-4">Etiam laoreet in ex quis efficitur.</p>
              <ul className="f-address">
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-map-marker"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Address:</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">
                        Have any questions?
                      </h6>
                      <p>Support@userthemes.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fas fa-phone-volume"></i>
                    </div>
                    <div className="col-10">
                      <h6 className="font-weight-bold mb-0">Address:</h6>
                      <p>+XX (0) XX XX-XXXX-XXXX</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">FRESH TWEETS</h5>
              <ul className="f-address">
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="col-10">
                      <p className="mb-0">
                        @userthemesrel HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="col-10">
                      <p className="mb-0">
                        @userthemesrel HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="row">
                    <div className="col-1">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="col-10">
                      <p className="mb-0">
                        @userthemesrel HTML Version Out Now
                      </p>
                      <label>10 Mins Ago</label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">LATEST UPDATES</h5>
              <ul className="recent-post">
                <li>
                  <label className="mr-3">
                    28 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
                <li>
                  <label className="mr-3">
                    29 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
                <li>
                  <label className="mr-3">
                    30 <br />
                    <span>APR</span>
                  </label>
                  <span>Rendomised words which dont look eveable.</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
              <h5 className="mb-4 font-weight-bold">CONNECT WITH US</h5>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email Address"
                />
                <span className="input-group-addon" id="basic-addon2">
                  <i className="fas fa-check"></i>
                </span>
              </div>
              <ul className="social-pet mt-4">
                <li>
                  <i className="fab fa-facebook-f"></i>
                </li>
                <li>
                  <i className="fab fa-twitter"></i>
                </li>
                <li>
                  <i className="fab fa-google-plus-g"></i>
                </li>
                <li>
                  <i className="fab fa-instagram"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <section className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="text-center text-white">
                &copy; 2018 Your Company. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default footer;
