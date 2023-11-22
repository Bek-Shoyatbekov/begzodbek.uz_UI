/** @format */

import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import queryString from "query-string";

import { Nav } from "../components/Nav";

const url = process.env.REACT_APP_URL;

export function Article() {
  const location = useLocation();
  const { articleId } = queryString.parse(location.search);

  const [articles, setArticles] = useState([]);

  const fetchArticles = () => {
    fetch(`${url}/blogs/${articleId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
      });
  };
  useEffect(() => {
    fetchArticles();
  });
  let renderArticle;
  if (articles.length === 0) {
    renderArticle = <h1>Loading...</h1>;
  } else {
    renderArticle = articles;
  }

  return (
    <>
      <Nav />
      <div className="container_an">
        <h2>{renderArticle.title}</h2>
        <img src={renderArticle.body?.image} alt="article_image" />
        <p>{renderArticle.body?.text}</p>
      </div>
    </>
  );
}
