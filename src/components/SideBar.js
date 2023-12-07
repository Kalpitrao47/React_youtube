import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg col-span-3">
      <ul>
        <div className="flex">
          <div style={{ width: "30%", height: "20%", fill: "currentcolor" }}>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              height="8"
              viewBox="0 0 24 24"
              width="8"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <g>
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
              </g>
            </svg>
            </Link>
          </div>

          <div>
            <li className="text-left">
              <Link to="/">Home</Link>
            </li>
          </div>
        </div>

        <div className="flex">
          <div style={{ width: "30%", height: "20%", fill: "currentcolor" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.20 3.72 1.14.71 1.34.20 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </svg>
          </div>
          <div>
            <li className="text-left">Shorts</li>
          </div>
        </div>

        <div className="flex">
          <div style={{ width: "30%", height: "20%", fill: "currentcolor" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "100%",
                height: "100%",
              }}
            >
              <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.20 3.72 1.14.71 1.34.20 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
            </svg>
          </div>
          <div>
            <li className="text-left">Subscriptions</li>
          </div>
        </div>
      </ul>
      <hr />
      <h1 className="font-extrabold text-left mt-4">YOU {">"}</h1>
      <ul>
        <li className="text-left">Your Channel</li>
        <li className="text-left">History</li>
        <li className="text-left">Your Videos</li>
        <li className="text-left">Watch Later</li>
        <li className="text-left">Liked Videos </li>
      </ul>
      <hr />
      <h1 className="font-extrabold pt-5 text-left">More From Youtube {">"}</h1>
      <ul>
        <li className="text-left">Youtube Premium</li>
        <li className="text-left">Youtube Studio</li>
        <li className="text-left">Youtube Music</li>
        <li className="text-left">Youtube Games</li>
        <li className="text-left">Youtube Kids</li>
      </ul>
      <hr />

      <ul className="mt-5">
        <li className="text-left font-semibold">Settings</li>
        <li className="text-left font-semibold">Report History</li>
        <li className="text-left font-semibold">Help</li>
        <li className="text-left font-semibold">Send Feedback</li>
      </ul>
    </div>
  );
};

export default SideBar;
