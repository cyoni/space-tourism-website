
function Home() {
  return (
    <main className={`grid-container grid-container--home`}>
      <div>
        <h1 className="fs-500 text-accent ff-sans-cond uppercase letter-spacing-1">
          So, you want to travel to
          <span className="text-white fs-900">Space</span>
        </h1>

        <p>
          Lets face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because well give you a truly out of this world
          experience!
        </p>
      </div>

      <div>
        <a
          href="explore.html"
          className="large-button uppercase ff-serif fs-600 text-dark bg-white"
        >
          Explore
        </a>
      </div>
    </main>
  );
}

export default Home;
