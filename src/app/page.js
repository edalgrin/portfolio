//import jobs from "./jobs.json";
//import Card from "@/components/Card";
import { IoAirplane } from "react-icons/io5";

export default function Home() {
  return (
    <div className="form">
      <div className="form-barcode">
        <img src="/barcode.png" height="100%" />
      </div>
      <div className="form-main">
        <div className="form-head">
          <h1 className="form-title">Let's get started</h1>
          <img src="/stamp.png" />
        </div>
        <div className="form-airplane">
          <span>XLS</span>
          <IoAirplane />
          <span>RNW</span>
        </div>
        <table className="form-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>Seat</th>
              <th>Group</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Now Boarding</td>
              <td>1A</td>
              <td>First Class</td>
            </tr>
          </tbody>
        </table>
        <div className="form-footer">
          <img className="form-qrcode" src="/qrcode.png" />
          <p>
            The sun dipped behind the hills as the city lights flickered on. A
            cat watched from the rooftop, unimpressed by the passing traffic.
            <span className="form-privacy">
              We'll use the information you provide consistent with our{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </p>
        </div>
      </div>
      <div className="form-border"></div>
      <div className="form-side">
        <span>#ACE2105</span>
        <span>DATE: 27 FEB, 2025</span>
        <div>
          <input type="text" name="name" placeholder="First Name" />
        </div>
      </div>
    </div>
  );
}
