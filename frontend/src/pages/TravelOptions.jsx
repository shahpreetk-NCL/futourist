import { useState } from "react";

function TravelOptions() {
  const [flightName, setFlightName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [time, setTime] = useState(0);
  const [noOfPeople, setNoOfPeople] = useState(1);
  const [price, setPrice] = useState(0);

  function saveBookingDetails(flight, time, price) {
    setFlightName(flight);
    setTime(time);
    setPrice(price * noOfPeople);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", firstName + " " + lastName);
    localStorage.setItem("flight", flightName);
    localStorage.setItem("time", time);
    localStorage.setItem("noOfPeople", noOfPeople);
    localStorage.setItem("price", price);
  };
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 mx-auto gap-4 justify-center my-4">
          <div className="inline-block mr-4 form-control">
            <label className="label">
              <span className="text-lg">First Name: </span>
            </label>
            <input
              type="text"
              placeholder="Please enter your First Name"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inline-block mr-4 form-control">
            <label className="label">
              <span className="text-lg">Last Name: </span>
            </label>
            <input
              type="text"
              placeholder="Please enter your Last Name"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inline-block mr-4 form-control">
            <label className="label">
              <span className="text-lg">Number of Travellers: </span>
            </label>
            <input
              type="number"
              placeholder="1"
              min="1"
              className="input input-bordered input-primary w-full max-w-xs"
              onChange={(e) => setNoOfPeople(e.target.value)}
            />
          </div>
        </div>
        <h6 className="text-lg">Travel options: </h6>
        <div className="grid grid-rows-3 mx-auto gap-4 justify-center my-4">
          <button
            className="card md:card-side bg-base-100 shadow-xl hover:border-secondary hover:border-2 focus:border-8 focus:border-primary"
            style={{ width: "90vw" }}
            onClick={() => saveBookingDetails("British Spaceways", 1000, 800)}
          >
            <figure>
              <img
                src="/images/spaceship1.gif"
                style={{ width: "350px" }}
                alt="British Spaceways"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                British Spaceways{" "}
                <div className="badge badge-outline">cheapest</div>
              </h2>
              <div className="card-body text-left p-0">
                <p>Departure Time: 10:00 on {localStorage.getItem("date")}</p>
                <p>Arrival Time: 18:00 on 14 November 2152</p>
                <p className="text-accent">
                  Travel Time: 1 year 8 months 12 days
                </p>
                <p className="text-accent">Price: 800 crypto coins</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => saveBookingDetails("Space India", 1200, 1800)}
            className="card md:card-side bg-base-100 shadow-xl hover:border-secondary hover:border-2 focus:border-8 focus:border-primary"
            style={{ width: "90vw" }}
          >
            <figure>
              <img
                src="/images/spaceship2.gif"
                style={{ width: "350px" }}
                alt="Space India"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Space India</h2>
              <div className="card-body text-left p-0">
                <p>Departure Time: 12:00 on {localStorage.getItem("date")}</p>
                <p>Arrival Time: 16:00 on 12 December 2151</p>
                <p className="text-accent">Travel Time: 9 months 11 days</p>
                <p className="text-accent">Price: 1800 crypto coins</p>
              </div>
            </div>
          </button>
          <button
            onClick={() => saveBookingDetails("Private Spaceship", 1300, 2400)}
            className="card md:card-side bg-base-100 shadow-xl hover:border-secondary hover:border-2 focus:border-8 focus:border-primary"
            style={{ width: "90vw" }}
          >
            <figure>
              <img
                src="/images/spaceship3.png"
                style={{ width: "350px" }}
                alt="Private Spaceship"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Private Spaceship{" "}
                <div className="badge badge-outline">fastest</div>
              </h2>
              <div className="card-body text-left p-0">
                <p>Departure Time: 13:00 on {localStorage.getItem("date")}</p>
                <p>Arrival Time: 21:00 on 14 June 2151</p>
                <p className="text-accent">Travel Time: 3 months 12 days</p>
                <p className="text-accent">Price: 2400 crypto coins</p>
              </div>
            </div>
          </button>
        </div>
        <div className="text-end mb-4">
          <h2 className="text-3xl my-6">Total Amount: {price} crypto coins</h2>
          <a href="/payment"
            aria-label="Next Page"
            onClick={onSubmit}
            className="btn btn-secondary btn-md"
          >
            Next Page &nbsp; <span className="text-xl align-top">&#10148;</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default TravelOptions;
