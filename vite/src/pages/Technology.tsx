import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getPage, getPageData } from "../scripts/getData";

const pageType = "technology";
function Technology() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: "Launch vehicle" });
    }
  }, [page]);

  const data = getPageData(pageType, page!) as Technology;
  const pages = getPage(pageType);

  if (!data) {
    return <div>Page not found.</div>;
  }

  const handleUrl = (name: string) => {
    navigate("?page=" + name);
  };

  return (
    <main className={`grid-container grid-container--technology`}>
      <h1 className="page-title flex">
        <span aria-hidden="true">03</span>
        Space Launch 101
      </h1>

      <div className="tabs tabs--technology">
        {pages.map((p, i) => (
          <button
            key={p.name}
            className={`${page === p.name ? "active" : ""}`}
            onClick={() => handleUrl(p.name)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <article className="content--technology flow">
        <div className="crow-details flow">
          <h2 className="fs-500 ff-serif uppercase text-gray ">
            The terminology...
          </h2>
          <p className="fs-650 uppercase ff-serif technology-name">
            {data.name}
          </p>
        </div>
        <p className="text-accent">{data.description}</p>
      </article>

      <picture className="image--technology">
        <source srcSet={data.images.landscape} media="(max-width: 50rem)" />
        <img src={data.images.portrait} alt="example" />
      </picture>
    </main>
  );
}

export default Technology;
