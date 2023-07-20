/** @format */

import React from "react";

import { Nav } from "../components/Nav";

import "../components/Home.css";

import { Footer } from "../components/Footer";

import { Follow } from "../components/Follow";

export function Home() {
  return (
    <>
      <div className="root">
        <Nav />
        <div className="container">
          <div className="content">
            <div className="about">
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500">
                <img
                  src={require("../images/my_image_edited_version.jpg")}
                  className="my_image"
                  alt={"my_image"}
                />
              </div>
              <div
                className="about_text"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1500">
                <h1 className="name">Bek Shoyatbekov</h1>
                <h2 className="title">Software Engineer</h2>
                <p className="description">
                  I'm a dedicated programmer and write about technical and
                  non-technical stuff
                </p>
              </div>
            </div>
            <Follow />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
