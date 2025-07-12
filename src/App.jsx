import { React, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { TiInfoLargeOutline } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

const App = () => {
  const data = useLoaderData();
  const [filtered, setFiltered] = useState(data);
  const cleareTimeOut = useRef(null);
  const handleInputChange = (e) => {
    const searchCountry = e.target.value.toLowerCase();
    cleareTimeOut.current ? clearTimeout(cleareTimeOut.current) : "";
    cleareTimeOut.current = setTimeout(() => {
      const matched = data.filter((Country) =>
        Country.name.common.toLowerCase().includes(searchCountry)
      );
      setFiltered(matched);
    }, 300);
  };
  return (
    <div className="p-3 md:p-10 bg-black min-h-screen">
      <label className="input w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          onChange={handleInputChange}
          type="search"
          required
          placeholder="Search"
        />
      </label>

      <section className="columns-1 lg:columns-3 md:columns-2 md:gap-5 gap-3 md:my-5 my-3">
        {filtered.length === 0 ? (
          <p className="text-red-600 italic font-bold py-2">
            Can't match country name
          </p>
        ) : (
          filtered.map((Country, idx) => (
            <div key={idx} className="card bg-base-100 w-full shadow-sm break-inside-avoid mb-4">
              <figure>
                <img
                  className="object-cover w-full"
                  src={Country.flags.svg}
                  alt={Country.flags.alt}
                />
              </figure>
              <div className="card-body p-2.5">
                <h2 className="card-title">
                  {Country.name.common === "Israel"
                    ? "Fuck Israel"
                    : Country.name.common}
                </h2>
                <div className="flex gap-2">
                  <div className="badge badge-outline badge-accent font-bold h-full">
                    Capital: {Country.capital}
                  </div>
                  <div className="badge badge-outline badge-accent font-bold h-full">
                    Region: {Country.region}
                  </div>
                </div>
                <button
                  className="btn btn-soft"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Details{" "}
                  <TiInfoLargeOutline className="border rounded-full text-0.5xl" />
                </button>
                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box md:max-w-[32rem] max-w-full">
                    <p>{Country.name.common}</p>
                    <div className="">
                      <form method="dialog">
                        <button className="btn btn-soft btn-error w-full">Close Details <RiCloseCircleLine className="text-0.5xl"/></button>
                      </form>
                    </div>
                  </div>
                </dialog>


              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default App;
