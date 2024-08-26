import { useState } from "react";
import IconArrow from "/icon-arrow.svg";

interface IPSearchProps {
  onSearch: (query: string) => void;
}

const IPSearch: React.FC<IPSearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-w-80 max-w-lg mx-auto pb-4 lg:pb-10"
    >
      <div className="relative w-full">
        <input
          type="search"
          className="block rounded-2xl px-4 lg:px-6 py-4 w-full z-20 text-sm lg:text-search-form text-custom-gray focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Search for any IP address or domain"
          aria-label="Input search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 px-6 py-4 h-full bg-black rounded-e-2xl hover:bg-custom-gray transition duration-300 ease-in-out"
        >
          <img src={IconArrow} alt="Arrow icon" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
};

export default IPSearch;
