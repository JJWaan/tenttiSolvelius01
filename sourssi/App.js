import React from "react";
import { Route, Routes } from "react-router-dom"

import Header from "./Header";
import Navbar from "./Navbar";

import Koti from "./Koti";
import LinkkiNelja from "./Linkki4"
import Laskin from "./Laskin";

function App() {
    let komponentti;

    switch (window.location.pathname) {
        case "/Koti":
            komponentti = <Koti />
            break
        case "/Linkki4":
            komponentti = <LinkkiNelja />
            break
        case "/Laskin":
            komponentti = <Laskin />
            break
    };

    return (
        <>
            <Header />
                <Navbar />
                    <div className="komponenttiContainer">
                        <Routes>
                            <Route path="/" element={<Koti />} />
                            <Route path="/Koti" element={<Koti />} />
                            <Route path="/Linkki4" element={<LinkkiNelja />} />
                            <Route path="/Laskin" element={<Laskin />} />
                        </Routes>
                    </div>
        </>
    );
};

export default App;