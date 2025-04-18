import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./check.css";

function Check_in() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <>
      <div className="main-container">
        <div className="header-div shadow p-3 mb-5 bg-white rounded">
          <div className="container text-center">
            <div className="row d-flex align-items-center gap-1">
              <div className="col">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Check in"
                  className="form-control w-100 mb-3"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="col">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Check out"
                  className="form-control w-100 mb-3"
                  dateFormat="dd/MM/yyyy"
                />
              </div>
              <div className="col">
                <select className="form-select w-100 mb-3" aria-label="Select Adults">
                  <option selected>Adult</option>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                </select>
              </div>
              <div className="col">
                <select className="form-select w-100 mb-3" aria-label="Select Children">
                  <option selected>Child</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                </select>
              </div>
              <div className="col">
                <Button variant="warning" size="lg" className="w-100 btn-class" id="btn">
                  SUBMIT
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Check_in;
