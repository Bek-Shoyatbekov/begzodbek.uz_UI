import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Articles } from "./pages/Articles";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Article } from './pages/Article';
import "./App.css"
import { useState } from "react";

const tele = window.Telegram.WebApp;




function App() {
    useState(() => {
        tele.ready();
        tele.expand();
    })
    return (
        <div className="App centered">
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/articles'} element={<Articles />} />
                <Route path={'/about'} element={<About />} />
                <Route path={'/projects'} element={<Projects />} />
                <Route path={'/article'} element={<Article />} />
            </Routes>
        </div>
    );
}

export default App;
