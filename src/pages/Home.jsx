import React from "react";
import {Nav} from "../components/Nav";
import {Link} from "react-router-dom";

import "../styles/home.css";

export function Home() {
    return (
        <>
            <div className="root">
                <Nav/>
                <div className="container" style={
                    {
                        marginTop: "30px"
                    }
                }>
                    <div className="content">
                        <div className="about" style={{
                            display: "flex",
                            flexDirection: "row",
                            textAlign: "start",
                            alignItems: "center",
                            margin: "100px 15px 2px 27px",
                            padding: "100px 100px 30px 0px"
                        }}>
                            <div data-aos="fade-up"
                                 data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                                <img src={require("../images/my_image_edited_version.jpg")}
                                     style={
                                         {
                                             width: "150px",
                                             height: "150px",
                                             borderRadius: "50%",
                                             paddingRight: "10px"
                                         }
                                     }
                                     alt={"my_image"}/>
                            </div>
                            <div className="about_text" data-aos="fade-up"
                                 data-aos-easing="ease-out-cubic" data-aos-duration="1500" style={
                                {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",

                                    color: "white",
                                    margin: "2rem 5rem 2rem 3rem",
                                }
                            }>
                                <h1 className="name" style={{
                                    marginBottom: "10px",
                                    fontStyle: "normal"
                                }}>Bek Shoyatbekov</h1>
                                <h2 className="title" style={{
                                    marginBottom: "10px",
                                    fontFamily: "monospace",
                                }}>Software Engineer</h2>
                                <p className="description" style={
                                    {
                                        width: "55%",
                                    }
                                }>I'm a addicted programmer and write about technical and
                                    non-technical
                                    stuff</p>
                            </div>
                        </div>
                        <div className="links" data-aos="fade-up"
                             data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                            <ul className="flex"
                                style={
                                    {
                                        display: "flex",
                                        listStyle: "none",
                                        margin: "-2rem 5rem 1rem 2rem"
                                    }
                                }>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <li><a href="https://www.linkedin.com/in/bekshoyatbekov/">
                                        <img src={"https://cdn-icons-png.flaticon.com/512/2190/2190367.png"}
                                             style={
                                                 {
                                                     width: "42px",
                                                     height: "42px",
                                                     borderRadius: "10%",
                                                     marginTop: "18px"
                                                 }
                                             }
                                             alt="Linkedin"/>
                                    </a>
                                    </li>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1500">
                                    <li><a href={"https://github.com/Bek-Shoyatbekov"}>
                                        <img
                                            style={
                                                {
                                                    width: "82px",
                                                    height: "82px",
                                                    marginTop: "0px"
                                                }
                                            }
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ei-sc-github.svg/1024px-Ei-sc-github.svg.png"
                                            alt="Github"/></a></li>
                                </div>
                                <div data-aos="fade-up"
                                data-aos-duration="2000">
                                    <li><a href={"https://t.me/Bek_Shoyatbekov"}>
                                        <img
                                            style={
                                                {
                                                    width: "46px",
                                                    height: "46px",
                                                    marginTop: "18px"
                                                }
                                            }
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                                            alt="Github"/></a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

