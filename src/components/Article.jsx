/** @format */

import { Link } from "react-router-dom";

import moment from "moment";

import "./Article.css";

export function Article({ key, article }) {
  return (
    <>
      <Link to={`/articles/${article._id}`}>
        <button className="article_button">
          <span className="title">{article.title}</span>
          <p>{moment(article.createdAt).format("LL")}</p>
        </button>
      </Link>
    </>
  );
}
