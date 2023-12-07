import React from "react";

const VideCard = ({ info }) => {
  console.log("info", info);
  const { snippet, statistics } = info;
  console.log("snippet", snippet);
  console.log("statistics", statistics);
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-80">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideCard;
