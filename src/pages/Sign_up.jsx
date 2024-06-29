import { Link, useNavigate } from "react-router-dom";
import google from "../image/google-Icon.svg";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Sign_up = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pass.length < 6) {
      return alert("Password should be atleast 6 characters long");
    }

    if (pass !== confirmPass) {
      return alert("Both passwords should be same");
    }
    await createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("object");
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Sorry something went wrong!");
      });
  };

  return (
    <div
      className="container-fluid"
      style={{
        backgroundImage: "url(./image/admin-bg-light.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        minHeight: "650%",
      }}
    >
      <div className="row justify-content-center">
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
                  <h6>Sign Up</h6>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} className="edit-profile__body">
                  <div className="form-group mb-25 mt-2">
                    <label htmlFor="username" style={{ float: "left" }}>
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="name@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
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
                        onChange={(e) => setPass(e.target.value)}
                        required
                      />
                      <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></div>
                    </div>
                  </div>
                  <div className="form-group mb-15 mt-2">
                    <label htmlFor="password-field" style={{ float: "left" }}>
                      Confirm Password
                    </label>
                    <div className="position-relative">
                      <input
                        id="password-field"
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder=" Confirm Password"
                        onChange={(e) => setConfirmPass(e.target.value)}
                        required
                      />
                      <br />
                      <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></div>
                    </div>
                  </div>
                  <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center mt-2">
                    <input
                      type="submit"
                      className="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn "
                    />
                  </div>
                </form>
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
                  Already have an account?
                  <Link to="/login" className="color-primary">
                    Sign in
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

export default Sign_up;
