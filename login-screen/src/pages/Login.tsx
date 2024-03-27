import "./Login.scss";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SecondaryButton from "../components/Buttons/SecondaryButton";

function Login() {
  const [mouseOverSocialMedia, setMouseOverSocialMedia] = useState("");
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className={`login`}>
      {/* <img src="src/assets/logo.svg" className="login__sidebar__logo" /> */}
      <div
        className={`login__sidebar__logo ${isSignIn ? "signIn" : "signUp"}`}
      />
      <div className={`login__sidebar ${isSignIn ? "signIn" : "signUp"}`}>
        <span className="login__sidebar__title">
          {isSignIn ? "Welcome back!" : "Hello, Friend"}
        </span>
        <p>
          {isSignIn
            ? "To keep connected with us please login with your personal info"
            : "Enter your personal details and start a journey with us"}
        </p>
        <SecondaryButton
          onClick={() => {
            setIsSignIn(!isSignIn);
          }}
          text={isSignIn ? "SIGN UP" : "SIGN IN"}
        />
      </div>
      {isSignIn ? (
        <form className={"login__form signIn"}>
          <span className="login__form__title">Sign in to Orchid</span>
          <div className="login__form__social-medias">
            <span
              className="login__form__social-media__icon facebookF"
              onMouseOver={() => setMouseOverSocialMedia("facef")}
              onMouseOut={() => setMouseOverSocialMedia("")}>
              <FontAwesomeIcon
                beat={mouseOverSocialMedia === "facef"}
                icon={faFacebookF}
              />
            </span>
            <span
              className="login__form__social-media__icon googlePlusG"
              onMouseOver={() => setMouseOverSocialMedia("gplus")}
              onMouseOut={() => setMouseOverSocialMedia("")}>
              <FontAwesomeIcon
                beat={mouseOverSocialMedia === "gplus"}
                icon={faGooglePlusG}
              />
            </span>
            <span
              className="login__form__social-media__icon linkedinIn"
              onMouseOver={() => setMouseOverSocialMedia("linkedin")}
              onMouseOut={() => setMouseOverSocialMedia("")}>
              <FontAwesomeIcon
                beat={mouseOverSocialMedia === "linkedin"}
                icon={faLinkedinIn}
              />
            </span>
          </div>
          <p>or use your email account:</p>
          <div className="login__form__input-group">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="login__form__input-group__icon"
            />
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="login__form__input-group">
            <FontAwesomeIcon
              icon={faLock}
              className="login__form__input-group__icon"
            />
            <input type="text" name="password" placeholder="Password" />
          </div>
          <p className="login__form__input-group__forgot-password">
            Forgot your password?
          </p>
          <PrimaryButton
            onClick={() => {}}
            text={isSignIn ? "SIGN IN" : "SIGN UP"}
          />
        </form>
      ) : (
        <form className={"login__form signUp"}>
          <span className="login__form__title">Create Account</span>
          <div className="login__form__social-medias">
            <span
              className="login__form__social-media__icon facebookF"
              onMouseOver={() => setMouseOverSocialMedia("facef")}
              onMouseOut={() => setMouseOverSocialMedia("")}>
              <FontAwesomeIcon
                beat={mouseOverSocialMedia === "facef"}
                icon={faFacebookF}
              />
            </span>
            <span
              className="login__form__social-media__icon googlePlusG"
              onMouseOver={() => setMouseOverSocialMedia("gplus")}
              onMouseOut={() => setMouseOverSocialMedia("")}>
              <FontAwesomeIcon
                beat={mouseOverSocialMedia === "gplus"}
                icon={faGooglePlusG}
              />
            </span>
            <span
              className="login__form__social-media__icon linkedinIn"
              onMouseOver={() => setMouseOverSocialMedia("linkedin")}
              onMouseOut={() => setMouseOverSocialMedia("")}>
              <FontAwesomeIcon
                beat={mouseOverSocialMedia === "linkedin"}
                icon={faLinkedinIn}
              />
            </span>
          </div>
          <p>or use your email for registration:</p>

          <div className="login__form__input-group">
            <FontAwesomeIcon
              icon={faUser}
              className="login__form__input-group__icon"
            />
            <input type="text" name="name" placeholder="Name"></input>
          </div>
          <div className="login__form__input-group">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="login__form__input-group__icon"
            />
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="login__form__input-group">
            <FontAwesomeIcon
              icon={faLock}
              className="login__form__input-group__icon"
            />
            <input type="text" name="password" placeholder="Password" />
          </div>
          <PrimaryButton
            onClick={() => {}}
            text={isSignIn ? "SIGN IN" : "SIGN UP"}
          />
        </form>
      )}
    </div>
  );
}

export default Login;
