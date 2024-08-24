import {  useSearchParams } from "react-router-dom";
import DestinationToolbar from "../components/DestinationToolbar";
import {getPageData} from "../scripts/getData";
import { useEffect } from "react";
import { DataType } from "../types/types";

const pageType = "destinations";
function Destination() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: "moon" });
    }
  }, [page]);

  const data = page ? getPageData(pageType, page as DataType) : null;

  if (!data) {
    return <div>Page not found.</div>;
  }

  
  return (
    <main className={`grid-container grid-container--destination`}>
      <h1 className="page-title flex">
        <span aria-hidden="true">01</span>
        Pick your destination
      </h1>

      <img src={data.images.png} alt="destination img" />

      <DestinationToolbar
        page={page}
        changePage={(page: string) => setSearchParams({ page })}
      />

      <section className="info">
        <h2 className="uppercase ff-serif fs-800">{data.name}</h2>

        <p> {data.description}</p>

        <div className="flex additional-info">
          <div>
            <h3 className="text-accent fs-200">AVG. DISTANCE</h3>
            <p className="fs-500 ff-serif uppercase">{data.distance}</p>
          </div>
          <div>
            <h3 className="text-accent fs-200">EST. TRAVEL TIME</h3>
            <p className="fs-500 ff-serif uppercase">{data.travel}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
