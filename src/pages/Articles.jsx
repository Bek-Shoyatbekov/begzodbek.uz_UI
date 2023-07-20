/** @format */

import { Nav } from "../components/Nav";

import React, { useEffect, useState } from "react";

import "../components/Article.css";

import { Article } from "../components/Article";

import { Follow } from "../components/Follow";

const url = process.env.REACT_APP_URL;

export const Articles = () => {
  const [article, setArticle] = useState([]);

  const fetchArticles = () => {
    fetch(`${url}/blogs?filterBy=article`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticle(data);
      });
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  let renderArticle;
  if (article.length === 0) {
    renderArticle = <h1>Loading...</h1>;
  } else {
    renderArticle = article.map((article) => {
      return <Article key={article._id} article={article} />;
    });
  }
  return (
    <>
      <Nav />
      <div
        className="article_container"
        data-aos="fade-up"
        data-aos-duration="1500">
        <div className="articles">{renderArticle}</div>
        <div className="follow_me">
          <Follow />
        </div>
      </div>
    </>
  );
};
