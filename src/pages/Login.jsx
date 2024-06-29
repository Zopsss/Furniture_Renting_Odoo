import { Link } from "react-router-dom";
import google from "../image/google-Icon.svg";
const Login = () => {
  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(./image/admin-bg-light.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        minHeight: '650%'
      }}
    >
      <div
        className="row justify-content-center"
      >
        <div className="col-xl-5">
          <div className="edit-profile">
            <div className="edit-profile__logos">
              <a href="index-2.html">
                <img className="dark" src="img/logo-dark.png" alt="" />
                <img className="light" src="img/logo-white.png" alt="" />
              </a>
            </div>
            <div className="card border-0">
              <div className="card-header">
                <div className="edit-profile__title">
                  <h6>Sign In</h6>
                </div>
              </div>
              <div className="card-body">
                <div className="edit-profile__body">
                  <div className="form-group mb-25">
                    <label htmlFor="username" style={{ float: "left" }}>
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div className="form-group mb-15 mt-2">
                    <label htmlFor="password-field" style={{ float: "left" }}>
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      />
                      <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></div>
                    </div>
                  </div>
                  <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center mt-2">
                    <button className="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn ">
                      sign in
                    </button>
                  </div>
                </div>
              </div>
              <div className="px-20">
                <p className="social-connector social-connector__admin text-center">
                  <span>Or</span>
                </p>
                <div className="button-group d-flex align-items-center justify-content-center">
                  <button
                    className="btn text-dark google"
                    style={{ backgroundColor: "#f06548" }}
                  >
                    <img className="svg" src={google} alt="img" />
                  </button>
                </div>
              </div>
              <div className="admin-topbar">
                <p className="mb-0">
                  Don't have an account?
                  <Link to="/sign_up" className="color-primary">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
