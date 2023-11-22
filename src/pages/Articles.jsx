/** @format */

import { Nav } from "../components/Nav";

import React, { useEffect, useState } from "react";

import "./Articles.css";

const url = process.env.REACT_APP_URL;

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const res = await fetch(`${url}/blogs?filterBy=article`, { method: "GET" });
    const data = await res.json();
    setArticles(data);
    return data;
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <>
      <Nav />
      <div
        className="articles_container"
        data-aos="fade-up"
        data-oas-duration="5000"
      >
        <div className="articles">
          {articles.length === 0 ? (
            <h1>Loading Articles</h1>
          ) : (
            articles.map((article) => (
              <div className="article">
                <img src={article.body.image} alt="" />
                <h3>{article.title}</h3>
                <button>Read More</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
