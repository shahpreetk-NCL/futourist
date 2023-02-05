import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [success, setSuccess] = useState(false);

  const sendMessage = (e) => {
    setSuccess(false);
    console.log("Sending Message", mobileNumber);
    axios.post("http://localhost:5010/api/sendMessage", {
      fromPlanet: localStorage.getItem("fromPlanet"),
      toPlanet: localStorage.getItem("toPlanet"),
      date: localStorage.getItem("date"),
      price: localStorage.getItem("price"),
      flight: localStorage.getItem("flight"),
      time: localStorage.getItem("time"),
      noOfPeople: localStorage.getItem("noOfPeople"),
      name: localStorage.getItem("name"),
      phoneNumber: mobileNumber,
    }).then((res) => {
      console.log(res.status + " " + res.statusText);
    }).catch((err) => {
      console.log(err);
    });
    navigate('/')
  }

  return (
    <>
      {!success ? <div className="container min-h-screen mx-auto mt-20">
        <div className="container block justify-center mt-0 px-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Please Enter your Card Details
            </h1>
            <p className="py-6 text-lg">
              Total Amount Payable: {localStorage.getItem("price")}
            </p>
          </div>
          <div className="card min-w-md shadow-2xl bg-base-100 mx-auto">
            <div className="card-body grid grid-cols-2 pb-3">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Card Number</span>
                </label>
                <input
                  type="text"
                  placeholder="4153 2453 5675 8796"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Card Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Please enter Name as on Card"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Expiry Date</span>
                </label>
                <input
                  type="month" min="2150-01"
                  placeholder="Please enter Name as on Card"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">CVV</span>
                </label>
                <input
                  type="text"
                  placeholder="xxx"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control mx-8 mt-0">
              <label className="label">
                <span className="label-text">Space Membership ID:</span>
              </label>
              <input
                type="text"
                placeholder="Please enter your Space Membership ID"
                className="input input-bordered"
              />
              <span className="label-text text-accent mt-2">If you have a Space Membership ID, enter it now to earn 1500 Spacial points</span>
            </div>
            <div className="text-end m-6">
              <button className="btn btn-primary" onClick={() => setSuccess(true)}>Confirm Payment</button>
            </div>
          </div>
        </div>
      </div> : (
        <div className="container min-h-screen mx-auto mt-20">
            <div className="container block justify-center mt-0  px-40">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-primary mb-4">
                Payment Successful!!
              </h1>
            </div>
            <div className="card min-w-md shadow-2xl bg-base-100 mx-auto mt-10">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="+447483958294"
                    className="input input-bordered"
                    />
                    <span className="label-text text-accent mt-2">We will only use your number to send the booking details</span>
                </div>

              </div>
              <div className="text-end m-6">
                <button className="btn btn-primary" onClick={(e) => sendMessage(e)}>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
