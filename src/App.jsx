import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/qualification";
import Footer from "./components/Footer/Footer";
import Work from "./components/work/Work";

const App = () => {
    return (
        <>
        <header />

        <main className="main">
            <Home />
            <About />
            <Skills />
            <Qualification />
            <Work />
            <Footer />
            <Header />
        </main>
        </>
    )
}

export default App
