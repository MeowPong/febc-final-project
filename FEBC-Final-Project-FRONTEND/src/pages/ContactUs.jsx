import React from "react";
import MainLayout from "../components/MainLayout";
import { useTheme } from "../contexts/ThemeContext";

import CallCenter from "../assets/CallCenter.webp";
import PhoneWhiteIcon from "../assets/Material_Icon/phone_white.svg";
import PhoneBlackIcon from "../assets/Material_Icon/phone_black.svg";
import ChatWhiteIcon from "../assets/Material_Icon/chat_white.svg";
import ChatBlackIcon from "../assets/Material_Icon/chat_black.svg";
import MailWhiteIcon from "../assets/Material_Icon/mail_white.svg";
import MailBlackIcon from "../assets/Material_Icon/mail_black.svg";
import YoutubeIcon from "../assets/icon/youtube-icon.webp";
import InstagramIcon from "../assets/icon/instagram-icon.webp";
import FacebookIcon from "../assets/icon/facebook-icon.webp";
import TwitterIcon from "../assets/icon/x-icon.webp";

function ContactUs() {
  const { theme } = useTheme();

  return (
    <MainLayout>
      <div>
        <div className="container pt-5">
          <div className="row align-items-center py-4 g-5">
            <div className="col-12 col-md-6">
              <div className="text-center text-md-start">
                <h1 className="display-md-2 display-4 fw-bold pb-2">
                  Contact Us
                </h1>
                <p className="lead">
                  Have questions or need assistance? We're here to help! Contact
                  us for support, course inquiries, or any feedback. Your
                  learning journey matters to us!
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img
                src={CallCenter}
                className="img-fluid rounded-start-5"
                alt="call center"
              />
            </div>
          </div>
        </div>

        <div className="container my-4 ">
          <div className="row justify-content-center gap-3">
            <div
              className="card align-items-center py-5"
              style={{ width: "18rem" }}
            >
              <img
                src={theme === "light" ? PhoneBlackIcon : PhoneWhiteIcon}
                className="img-fluid"
                style={{ width: "4.5rem" }}
                alt="phone icon"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Call us directly</h5>
                <p className="card-text pt-4 fs-4 fw-medium">+66 2-345-7896</p>
              </div>
            </div>
            <div
              className="card align-items-center py-5"
              style={{ width: "18rem" }}
            >
              <img
                src={theme === "light" ? ChatBlackIcon : ChatWhiteIcon}
                className="img-fluid"
                style={{ width: "4.5rem" }}
                alt="message icon"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Live chat with our team</h5>
                <button className="btn btn-primary mt-4">Chat now</button>
              </div>
            </div>
            <div
              className="card align-items-center py-5"
              style={{ width: "18rem" }}
            >
              <img
                src={theme === "light" ? MailBlackIcon : MailWhiteIcon}
                className="img-fluid "
                style={{ width: "4.5rem" }}
                alt="mail icon"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Send us an Email</h5>
                <p className="card-text pt-4 fs-4 fw-medium">
                  learnMe@email.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-100 my-5 py-5 d-flex justify-content-center gap-4">
          <img
            src={YoutubeIcon}
            className="img-fluid rounded-circle hover-translate-up"
            style={{ width: "3rem" }}
            alt="youtube icon"
          />
          <img
            src={InstagramIcon}
            className="img-fluid rounded-circle hover-translate-up"
            style={{ width: "3rem" }}
            alt="instagram icon"
          />
          <img
            src={FacebookIcon}
            className="img-fluid rounded-circle hover-translate-up"
            style={{ width: "3rem" }}
            alt="facebook icon"
          />
          <img
            src={TwitterIcon}
            className="img-fluid rounded-circle hover-translate-up"
            style={{ width: "3rem" }}
            alt="x icon"
          />
        </div>
      </div>
    </MainLayout>
  );
}

export default ContactUs;
