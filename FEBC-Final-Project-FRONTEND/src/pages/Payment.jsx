import React from "react";
import "../styles/Payment.css"
import MainLayout from "../components/MainLayout";
import { useTheme } from "../contexts/ThemeContext";
import CreditCardIconWhite from "../assets/Material_Icon/credit_card_white.svg";
import CreditCardIconBlack from "../assets/Material_Icon/credit_card_black.svg";
import QrCodeIconWhite from "../assets/Material_Icon/qr_code_scanner_white.svg";
import QrCodeIconBlack from "../assets/Material_Icon/qr_code_scanner_black.svg";
import VisaIcon from "../assets/icon/visa-icon.svg"
import MastercardIcon from "../assets/icon/mastercard-icon.svg"

function Payment() {
  const { theme } = useTheme();

  return (
    <MainLayout>
      {/* warning */}
      <div
        className="bg-warning d-flex align-items-center"
        style={{ height: "2rem", width: "100vw", marginTop: "-1rem" }}
      >
        <div className="container fs-6 fw-medium text-center text-truncate">
          !! หน้า Payment เป็นเพียงแค่หน้า mockup เท่านั้น
          ไม่สามารถใช้งานได้จริง
        </div>
      </div>

      {/* Payment */}
      <div className="container d-flex justify-content-center align-items-center">
        <form
          className="row g-3 rounded-3 mt-5 shadow p-3 mb-5 bg-body-tertiary"
          style={{ maxWidth: "25rem" }}
        >
          <div className="d-flex justify-content-start gap-3">
            <button
              className="shadow-sm p-2 bg-body rounded btn active d-flex align-items-center gap-3 w-50"
              style={{ height: "3.5rem" }}
              type="button"
            >
              <img
                src={
                  theme === "light" ? CreditCardIconBlack : CreditCardIconWhite
                }
                alt="credit card icon"
                style={{ width: "1.25rem" }}
              />{" "}
              Credit / Debit
            </button>

            <button
              className="shadow-sm p-2 bg-body rounded btn d-flex align-items-center gap-3 w-50"
              style={{ height: "3.5rem" }}
              type="button"
              disabled
              data-bs-toggle="button"
            >
              <img
                src={theme === "light" ? QrCodeIconBlack : QrCodeIconWhite}
                alt="QR Code icon"
                style={{ width: "1.25rem" }}
              />{" "}
              QR PromtPay
            </button>
          </div>

          <div className="col-12">
            <label for="cardNumber" className="form-label">
              Card Number
            </label>
            <div className="form-control d-flex justify-content-between">
            <input
              type="number"
              className="w-100 CardNumber"
              id="cardNumber"
              placeholder="1234 1234 1234 1234"
            />
            <div className="d-flex gap-2">
            <img src={VisaIcon} alt="visa icon" style={{width:"1.3rem"}}/>
            <img src={MastercardIcon} alt="mastercard icon" style={{width:"1.3rem"}}/>
            </div>
            </div>
          </div>

          <div className="col-md-6">
            <label for="Expiry" className="form-label">
              Expiry
            </label>
            <input type="number" className="form-control" id="Expiry" placeholder="MM/YY"/>
          </div>
          <div className="col-md-6">
            <label for="CVC" className="form-label">
              CVC / CVV
            </label>
            <input
              type="number"
              className="form-control"
              id="CVC"
              placeholder="***"
            />
          </div>
         
          <div className="col-12">
            <label for="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-6">
            <label for="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Thailand</option>
              <option>Japan</option>
              <option>China</option>
              <option>Korea</option>
            </select>
          </div>
          <div className="col-6">
            <label for="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100 mt-4 mb-2">
              Pay
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default Payment;
