import {Nav} from "../components/Nav";

import React, {useEffect, useState} from "react";

import "../styles/article.css";

import {Article} from "../components/Article";


const url = process.env.REACT_APP_URL;


export const Articles = () => {
    const [article, setArticle] = useState([]);

    const fetchArticles = () => {
        fetch(`${url}/blogs?filterBy=article`).then(res => {
            return res.json()
        }).then(data => {
            setArticle(data)
            console.log(data)
        })
    }
    useEffect(() => {
        fetchArticles()
    }, [])
    return (
        <>
            <Nav/>
            <div className="container" data-aos="fade-up"
                 data-aos-duration="1500">
                <h1 className="blog">Articles</h1>
                <div className="content">
                    {
                        article.map(article => {
                            return <Article key={article._id} article={article}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}