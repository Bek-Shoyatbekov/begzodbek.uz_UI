/** @format */

import React from "react";

import "./Follow.css";

export function Follow() {
  return (
    <>
      <div className="links" data-aos="fade-up" data-aos-duration="3000">
        <ul className="lists">
          <li>
            <a
              href="https://www.linkedin.com/in/bek-shoyatbekov-96507a234"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width={"33px"}
                height={"33px"}
                src={"https://cdn-icons-png.flaticon.com/512/2190/2190367.png"}
                alt="Linkedin"
              />
            </a>
          </li>
          <li>
            <a
              href={"https://github.com/Bek-Shoyatbekov"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                style={{
                  marginTop: "-5px",
                }}
                width="44px"
                height="44px"
                src="https://icons.veryicon.com/png/o/miscellaneous/you-are-my-textbook/github-64.png"
                alt="Github"
              />
            </a>
          </li>
          <li>
            <a
              href={"https://t.me/Bek_Shoyatbekov"}
              target="_blank"
              rel="noreferrer"
            >
              <img
                width={"33px"}
                height={"33px"}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Telegram_2013_logo.svg/1024px-Telegram_2013_logo.svg.png"
                }
                alt="telegram icon"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
