import React, { useState } from "react";
import { useLoaderData } from "react-router";

const App = () => {
  const data = useLoaderData();
  const [filtered, setFiltered] = useState(data);
  const handleInputChange = (e) => {
    const searchText = e.target.value.toLowerCase();
    const matched = data.filter((text) =>
      text.title.toLowerCase().includes(searchText)
    );
    setFiltered(matched);
  };
  return (
    <div className="p-10">
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

      <section>
        {filtered.length === 0 ? (
          <p className="text-red-600 italic font-bold py-2">Can't match result</p>
        ) : (
          filtered.map((Text) => (
            <p className="py-2 bg-blue-300 my-2 rounded-2xl text-black px-3 font-bold" key={Text.id}>
              {Text.title}
            </p>
          ))
        )}
      </section>
    </div>
  );
};

export default App;
