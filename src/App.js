import './App.css';
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {Articles} from "./pages/Articles";
import {About} from "./pages/About";
import {Projects} from "./pages/Projects";

function App() {
    return (
        <div className="App">
            <div className="container"
                 style={
                     {
                         width: "1200px",
                         margin: "0 auto"
                     }
                 }>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/articles'} element={<Articles/>}/>
                    <Route path={'/about'} element={<About/>} />
                    <Route path={'/projects'} element={<Projects/>} />
                </Routes>
            </div>

        </div>
    );
}

export default App;
