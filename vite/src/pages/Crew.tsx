import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getPageData, getPage } from "../scripts/getData";

const pageType = "crew";

function Crew() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pages = getPage(pageType);
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: pages[0].name });
    }
  }, [page]);

  const data = getPageData(pageType, page!) as Crew;

  if (!data) {
    return <div>Page not found.</div>;
  }

  return (
    <main className={`grid-container grid-container--crew`}>
      <h1 className="page-title flex">
        <span aria-hidden="true">01</span>
        Meet your crew
      </h1>

      <div className="tabs tabs--crew">
        {pages.map((p) => (
          <button
            key={p.name}
            className={page === p.name ? "active" : ""}
            onClick={() => setSearchParams({ page: p.name })}
          ></button>
        ))}
      </div>

      <article className="content--crew flow">
        <div className="crow-details flow">
          <h2 className="fs-600 ff-serif uppercase">Commander</h2>
          <p className="fs-700 uppercase ff-serif crew-name">{data.name}</p>
        </div>
        <p className="text-accent">{data.bio}</p>
      </article>

      <img className="image--crew" src={data.images.png} alt="crew" />
    </main>
  );
}

export default Crew;
