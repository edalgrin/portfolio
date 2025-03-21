"use client";
import { useState } from "react";
import { IoAirplane, IoArrowForward } from "react-icons/io5";

export default function Form() {
  const [formAnimationClass, setFormAnimationClass] = useState(false);
  const [passengerName, setPassengerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPassengerName(e.target.name.value);
    setFormAnimationClass("form-prepared");
    setTimeout(() => {
      setFormAnimationClass("form-prepared form-sending");
    }, 100);
  }

  return (
    <div className={`form d-flex flex-column flex-md-row ${formAnimationClass && formAnimationClass}`}>
      <div className="form-start">
        <img className="form-barcode image-invert-on-dark d-md-none" src="/barcode1.png" alt="barcode" />
        <img className="form-barcode image-invert-on-dark d-none d-md-block" src="/barcode2.png" alt="barcode" />
      </div>
      <div className="form-center d-flex flex-column justify-content-between gap-4">
        <div className="d-flex align-items-start justify-content-between gap-2">
          <h1 className="form-title">
            <div className="form-animation" style={{ "--animationOrder": "2" }}>
              <div className="form-animation-before" aria-hidden={formAnimationClass ? true : false}>Let's get started</div>
              <div className="form-animation-after">Welcome aboard!</div>
            </div>
          </h1>
          <img src="/stamp.png" alt="" />
        </div>
        <div className="d-flex justify-content-between font-weight-700 gap-4">
          <div className="form-animation" style={{ "--animationOrder": "3" }}>
            <div className="form-animation-before" aria-hidden={formAnimationClass ? true : false}>&nbsp;</div>
            <div className="form-animation-after">{passengerName}</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <span>JFK</span>
            <div className="form-animation" style={{ "--animationOrder": "4" }}>
              <div className="form-animation-before" aria-hidden={formAnimationClass ? true : false}>
                <IoAirplane className="font-size-xl" /></div>
              <div className="form-animation-after">
                <IoAirplane style={{ rotate: "-45deg" }} className="font-size-xl color-accent" /></div>
            </div>
            <span>MAD</span>
          </div>
        </div>
        <table className="form-table font-weight-700">
          <thead>
            <tr>
              <th>Status</th>
              <th>Seat</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-animation" style={{ "--animationOrder": "4" }}>
                  <div className="form-animation-before" aria-hidden={formAnimationClass ? true : false}>Now Boarding</div>
                  <div className="form-animation-after color-accent">Taking Off</div>
                </div>
              </td>
              <td>3D</td>
              <td>First Class</td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex align-items-center gap-4">
          <img src="/qrcode.png" className="image-invert-on-dark" alt="qr code" />
          <p>
            Enjoy premium in-flight service with comfortable seating, delicious meals, and top-notch entertainment. Book now for a seamless journey!
          </p>
        </div>
      </div>
      <div className="form-end" aria-hidden={formAnimationClass ? true : false}>
        <form className="d-flex flex-column gap-4" onSubmit={(e) => handleSubmit(e)}>
          <div className="d-flex justify-content-between font-size-s font-weight-700">
            <div className="d-flex gap-1">
              <span className="color-accent">#</span>
              <span>EDL9613</span>
            </div>
            <div className="d-flex gap-1">
              <span className="color-accent">DATE:</span>
              <span>13 MAR, 2025</span>
            </div>
          </div>
          <label className="form-group flex-column">
            <span className="form-label form-label-input">Full Name*</span>
            <input className="form-input" type="text" placeholder="Annie Sammuels" name="name" />
          </label>
          <label className="form-group flex-column">
            <span className="form-label form-label-input">Email*</span>
            <input className="form-input" type="email" placeholder="a.sammuels@ea.com" name="email" />
          </label>
          <label className="form-group flex-column">
            <span className="form-label form-label-input">How did you find us?</span>
            <select className="form-select" name="media" defaultValue="Social Media">
              <option>Social Media</option>
              <option>Newspaper</option>
              <option>From a friend</option>
            </select>
          </label>
          <label className="form-group gap-2 align-items-center justify-content-center">
            <input className="form-checkbox" type="checkbox" name="newsletter" />
            <span className="form-label">Sign up for updates and special offers</span>
          </label>
          <p className="font-size-s text-align-center">
            We'll use the information you provide consistent with our{" "}
            <a href="#privacy-policy">Privacy Policy</a>
          </p>
          <button className="form-submit d-flex align-items-center justify-content-center gap-3" type="submit">
            <span>Get Access</span>
            <span className="form-submit-icon">
              <IoArrowForward />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
