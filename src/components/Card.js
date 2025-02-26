"use client";
import { useState } from "react";
import classNames from "classnames";
import Image from "next/image";
import {
  IoBookmark,
  IoBookmarkOutline,
  IoCalendarClearOutline,
  IoLocationOutline,
} from "react-icons/io5";

const Card = ({ item }) => {
  const [bookmark, setBookmark] = useState(item.bookmarked | false);
  const ButtonBookmarkText = `${bookmark ? "Remove from" : "Add to"} Bookmarks`;

  return (
    <div
      className={classNames("card", bookmark && "bookmarked")}
      style={{
        "--cardWrpColor": item.colors?.color,
        "--cardWrpBg": item.colors?.bg,
      }}
    >
      <div className="card-wrapper">
        <div className="card-body">
          {item.title && <h3 className="card-title">{item.title}</h3>}
          {item.company && (
            <span className="card-subtitle">{item.company}</span>
          )}
          {item.companyLogo && (
            <Image
              className="card-image"
              src={item.companyLogo}
              width={40}
              height={40}
              alt="Company Logo"
            />
          )}
        </div>
        <div className="card-head">
          {item.date && (
            <span className="card-date">
              <IoCalendarClearOutline />
              {item.date}
            </span>
          )}
          <button
            title={ButtonBookmarkText}
            aria-label={ButtonBookmarkText}
            type="button"
            className="card-button card-bookmark"
            onClick={() => {
              setBookmark(!bookmark);
            }}
          >
            <IoBookmarkOutline aria-hidden="true" />
            <IoBookmark aria-hidden="true" className="card-icon" />
          </button>
        </div>
        {item.tags && (
          <ul className="card-footer">
            {item.tags.map((tag, index) => (
              <li className="card-tag" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="card-info">
        {item.salary && <span className="card-salary">{item.salary}</span>}
        {item.location && (
          <span className="card-location">
            <IoLocationOutline />
            {item.location}
          </span>
        )}
        {item.url ? (
          <a href={item.url} type="button" className="card-details card-button">
            Details
          </a>
        ) : (
          <span className="card-details disabled">Unavailable</span>
        )}
      </div>
    </div>
  );
};

export default Card;
