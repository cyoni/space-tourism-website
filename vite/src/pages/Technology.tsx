import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {getPageData} from "../scripts/getData";
import data from "../../data.json";
type DataType = keyof typeof data;

const pageType = "technology";
function Technology() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: "technology" });
    }
  }, [page]);

  const data = page ? getPageData(pageType, page as DataType) : null;

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
        <button className="active"></button>
        <button></button>
        <button></button>
        <button></button>
      </div>

      <article className="content--crew flow">
        <div className="crow-details flow">
          <h2 className="fs-600 ff-serif uppercase">Commander</h2>
          <p className="fs-700 uppercase ff-serif crew-name">Douglas Hurley</p>
        </div>
        <p className="text-accent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque
          hic ipsa praesentium voluptatibus aspernatur dicta aperiam? Laborum
          nihil maxime nulla quasi similique fuga perferendis reprehenderit,
          labore molestias provident deleniti.
        </p>
      </article>

      <img
        className="image--crew"
        src="assets/crew/image-anousheh-ansari.png"
        alt="crew"
      />
    </main>
  );
}

export default Technology;
