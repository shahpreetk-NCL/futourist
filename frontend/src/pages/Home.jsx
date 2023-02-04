import {planets} from '../data/planets.js'

function Home() {
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
        <h6 className="text-lg italic">Select From Planet: </h6>
        <div className="grid grid-cols-4 mx-auto gap-4 justify-center text-center mt-4">
          {
            planets.map((planet) => (
              <div id={planet.id}>
                <button className="focus:border-4 focus:border-primary rounded-xl mx-auto">
                  <figure><img className="rounded-xl object-contain " src={`/images/${planet.image}`} alt="Titan" width={150} /></figure>
                </button>
              </div>
            ))
          }
        </div>
        <h6 className="text-lg italic mt-4">Select To Planet: </h6>
        <div className="grid grid-cols-4 mx-auto gap-4 justify-center text-center mt-4">
          {
            planets.map((planet) => (
              <div id={planet.id}>
                <button className="focus:border-4 focus:border-primary rounded-xl mx-auto">
                  <figure><img className="rounded-xl object-contain " src={`/images/${planet.image}`} alt="Titan" width={150} /></figure>
                </button>
              </div>
            ))
          }
        </div>

      </div>
    </>
  );
}
export default Home;