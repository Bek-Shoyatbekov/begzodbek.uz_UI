/** @format */

import { useParams } from "react-router-dom";
import { Nav } from "../components/Nav";

export function ArticleById() {
  let { id } = useParams();
  return (
    <>
      <Nav />
      <h1
        style={{
          textAlign: "center",
          padding: "20px",
          color: "white",
          marginTop: "300px",
        }}>
        {" "}
        {id}
      </h1>
    </>
  );
}
