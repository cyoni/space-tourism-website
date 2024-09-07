import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getPageData } from "../scripts/getData";

const pageType = "technology";
function Technology() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: "Launch vehicle" });
    }
  }, [page]);

  const data = getPageData(pageType, page!) as Technology;

  if (!data) {
    return <div>Page not found.</div>;
  }

  return (
    <main className={`grid-container grid-container--technology`}>
      <h1 className="page-title flex">
        <span aria-hidden="true">03</span>
        Space Launch 101
      </h1>

      <div className="tabs tabs--technology">
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
      </div>

      <article className="content--technology flow">
        <div className="crow-details flow">
          <h2 className="fs-500 ff-serif uppercase text-gray ">The terminology...</h2>
          <p className="fs-650 uppercase ff-serif technology-name">
            {data.name}
          </p>
        </div>
        <p className="text-accent">{data.description}</p>
      </article>

      <img
        className="image--technology"
        src={data.images.portrait}
        alt="technology"
      />
    </main>
  );
}

export default Technology;
