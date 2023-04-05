import React, { useState } from "react";

const Navbar = ({ songSearch }: { songSearch: (search: string) => void }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    console.log(searchTerm);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    songSearch(searchTerm);
  };

  return (
    <div className='bg-zinc-200 px-5 py-3 fixed top-0 left-0 right-0 flex justify-between'>
      <p className="text-3xl font-['pacifico'] text-amber-500">Wooz!k</p>

      <div className='self-center p-2 bg-white rounded-full'>
        <form onSubmit={handleSubmit}>
          <input
            className='focus:outline-0 ps-3'
            type='text'
            placeholder='Search'
            value={searchTerm}
            onChange={handleChange}
          />
          <button>
            <i className='fas fa-search px-3 text-stone-500 hover:text-stone-900'></i>
          </button>
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
