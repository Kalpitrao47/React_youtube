import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SERACH_API } from "../utils/constants";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);

  console.log(searchQuery);

  useEffect(() => {
    //make an api call  after every key press.
    //but if the difference between 2 api calls is <200ms decline the api call.
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SERACH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSuggestionClick = (selectedSuggestion) => {
    setSearchQuery(selectedSuggestion);
    setShowSuggestions(false);
  };

  return (
    <>
       <div className="grid grid-cols-12 p-2 m-2 shadow-lg">
      <div className="col-span-1 flex items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-12 mx-2"
          alt="youtube-logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
      </div>

      <div className="col-span-10 flex items-center justify-between px-10">
        <div className="relative w-1/2 flex">
          <input
            className="w-full px-4 py-2 border border-gray-400 rounded-l-full focus:outline-none"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-5 py-2 border border-gray-400 rounded-r-full bg-gray-100">Search</button>

          {showSuggestions && (
            <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg right-1 mt-11">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    onClick={() => handleSuggestionClick(s)}
                    className="py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="col-span-1 flex items-center">
          <img
            className="h-8"
            alt="user-icon"
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          />
          
        </div>
      </div>
    </div>
    </>
  );
};

export default Head;
