import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from '../assets';
import { PiArrowElbowDownLeft } from "react-icons/pi";

const Demo = () => {
  
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  const handleSubmit = async (e) => {
    alert('Submitted');
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
          >
            <img 
              src={linkIcon}
              alt="link_icon"
              className="absolute left-0 my-2 ml-3 w-5"
              />

            <input
              type="url"
              placeholder="Enter URL"
              value={article.url}
              onChange={(e) => setArticle({ ... article,  url: e.target.value })}
              required
              className="url_input"
            />

            <button
              type="submit"
              className="submit_btn
              peer-focus:border-gray-700
              peer-focus:text-gray-700"
            >
              <PiArrowElbowDownLeft />
            </button>
        </form>

        {/* Browser URL History */}
      </div>

      {/* Display Browser URL History Results */}
    </section>
  );
};

export default Demo;