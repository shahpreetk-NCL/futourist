import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { planets } from '../data/planets.js'

function Home() {
  const navigate = useNavigate()
  const [fromPlanet, setFromPlanet] = useState(null);
  const [toPlanet, setToPlanet] = useState(null);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const onSubmit = (e) => {
    localStorage.setItem('fromPlanet', fromPlanet);
    localStorage.setItem('toPlanet', toPlanet);
    localStorage.setItem('date', `${day} ${month} ${year}`);
    navigate('/options');
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="hero min-h-full lg:mt-5 align-center py-5">
          <div>
            <div className="flex flex-col text-center items-center">
              <h1 className="text-5xl font-bold">Where would you like to go?</h1>
            </div>
          </div>
        </div>
        {fromPlanet ? (<h6 className="text-lg mt-4">Selected From Planet: <span className="font-bold">{fromPlanet}
        </span></h6>) : (<h6 className="text-lg mt-4">Select From Planet: </h6>)}
        <div className="grid grid-cols-4 mx-auto gap-4 justify-center text-center mt-4">
          {
            planets.map((planet) => (
              <div key={planet.id}>
                <button onClick={() => setFromPlanet(planet.name)} className="focus:border-8 focus:border-primary rounded-xl mx-auto hover:border-secondary hover:border-2">
                  <figure><img className="rounded-xl object-contain " src={`/images/${planet.image}`} alt="Titan" width={150} /></figure>
                </button>
              </div>
            ))
          }
        </div>
        {toPlanet ? (<h6 className="text-lg mt-4">Selected To Planet: <span className="font-bold">{toPlanet}
        </span></h6>) : (<h6 className="text-lg mt-4">Select To Planet: </h6>)}
        <div className="grid grid-cols-4 mx-auto gap-4 justify-center text-center mt-4">
          {
            planets.map((planet) => (
              <div key={10+planet.id}>
                <button onClick={() => setToPlanet(planet.name)} className="focus:border-8 focus:border-primary rounded-xl mx-auto hover:border-secondary hover:border-2">
                  <figure><img className="rounded-xl object-contain " src={`/images/${planet.image}`} alt="Titan" width={150} /></figure>
                  <button className="hidden hover:block">{planet.name}</button>
                </button>
              </div>
            ))
          }
        </div>
        <div className="my-4">
          <div className="form-control inline-block">
            <label className="label">
              <span className="text-lg">Select Date: </span>
            </label>
            <div className="inline-block mr-4">
              <label className="input-group">
                <span>Day</span>
                <input type="number" min="1" max="31" placeholder="1" className="input input-bordered" onChange={(e) => setDay(e.target.value)} />
              </label>
            </div>
            <div className="inline-block mx-4">
              <label className="input-group">
                <span>Month</span>
                <select className="select select-bordered" onChange={(e) => setMonth(e.target.value)}>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </label>
            </div>
            <div className="inline-block mx-4">
              <label className="input-group">
                <span>Year</span>
                <input onChange={(e) => setYear(e.target.value)} type="number" min="2150" max="2250" placeholder="2150" className="input input-bordered" />
              </label>
            </div>
          </div>
          <div>
            <span className="label-text text-accent mt-2">from 1 January 2150 to 31 December 2250</span>
            </div>
        </div>
        <div className="text-end mb-4">
          <button aria-label="Next Page" onClick={(e) => onSubmit(e)} className="btn btn-secondary btn-md">
            Next Page &nbsp; <span className="text-xl align-top">&#10148;</span>
            </button>
        </div>
      </div>
    </>
  );
}
export default Home;