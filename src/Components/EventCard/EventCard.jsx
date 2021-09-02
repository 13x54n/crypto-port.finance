import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export default function EventCard({
  website,
  screenshot,
  title,
  start_date,
  description,
}) {
  return (
    <Link className="event" to={{ pathname: website }} target="_blank">
      <img src={screenshot} alt="NFT" />
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="date">{start_date}</div>
        <p className="description">{description.slice(0, 72)}...</p>
      </div>
    </Link>
  );
}
