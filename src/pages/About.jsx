import {Nav} from "../components/Nav";

import "../components/Article.css";
import {Footer} from "../components/Footer";

export function About() {
    return (
        <>
            <Nav/>
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
                <h1 className="blog">About</h1>
            </div>
        </>
    )
}