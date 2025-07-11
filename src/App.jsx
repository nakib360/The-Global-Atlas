import { React, useRef, useState } from "react";
import { useLoaderData } from "react-router";

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
    }, 500);
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

      <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-5 gap-3 md:my-5 my-3">
        {filtered.length === 0 ? (
          <p className="text-red-600 italic font-bold py-2">
            Can't match country name
          </p>
        ) : (
          filtered.map((Country, idx) => (
            <div key={idx} className="card bg-base-100 w-full shadow-sm">
              <figure>
                <img
                  className="object-cover md:max-h-40 md:min-h-60 w-full"
                  src={Country.flags.svg}
                  alt={Country.flags.alt}
                />
              </figure>
              <div className="card-body p-2.5">
                <h2 className="card-title">{Country.name.common === "Israel" ? "Fuck Israel" : Country.name.common }</h2>
                <div className="flex gap-2">
                  <div className="badge badge-outline badge-accent font-bold h-full">
                    Capital: {Country.capital}
                  </div>
                  <div className="badge badge-outline badge-accent font-bold h-full">
                    Region: {Country.region}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default App;
