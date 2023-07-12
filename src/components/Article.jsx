import {Link} from "react-router-dom";

import moment from "moment";

export function Article({key, article}) {
    return (
        <>
            <Link to={`/${article._id}`} className="article">
                <button className="article_button">
                    <h1 className="title">{article.title}</h1>
                    <p>{moment(article.createdAt).format("LL")}</p>
                </button>
            </Link>
        </>
    )
}