import DestinationToolbar from "../components/DestinationToolbar";

function Destination() {
  return (
    <main className={`grid-container grid-container--destination`}>
      <h1 className="page-title flex">
        <span aria-hidden="true">01</span>
        Pick your destination
      </h1>

      <img src="assets/destination/image-moon.png" alt="the moon" />

      <DestinationToolbar />

      <section className="info">
        <h2 className="uppercase ff-serif fs-800">MOON</h2>

        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div className="flex additional-info">
          <div>
            <h3 className="text-accent fs-200">AVG. DISTANCE</h3>
            <p className="fs-500 ff-serif uppercase">1234 KM</p>
          </div>
          <div>
            <h3 className="text-accent fs-200">EST. TRAVEL TIME</h3>
            <p className="fs-500 ff-serif uppercase">3 days</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
