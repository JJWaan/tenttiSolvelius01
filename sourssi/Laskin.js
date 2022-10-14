import React, { useState } from "react";

const nappaimet = [
    "1", "2", "3", "/",
    "4", "5", "6", "*",
    "7", "8", "9", "-",
    ".", "0", "=", "+",
];

const Nappain = (props) => {
    return (
        <div className="nappain-container">
            <button
                onClick={() =>
                props.nappainPainettu(props.nappainValue)}
                >{props.nappainValue}
            </button>
        </div>
    );
};

const Laskin = () => {
    const [teksti, setTeksti] = useState("");

    const nappainPainettu = (x) => {
        if(x === "=") { setTeksti(eval(teksti)); return }
            setTeksti(teksti+x)
        };

    const nappaimetLista = nappaimet.map((item, index) => (
        <div className="nappain-container">
            <Nappain
                key={index}
                nappainValue={item}
                nappainPainettu={nappainPainettu}
            />
        </div> ))

    const clearNappi = () => setTeksti("");

    return ( <>
        <div className="laskin-render-container">
                <div className="teksti-container">
                    {teksti}
                </div>
                <div className="nappaimet-container">
                    {nappaimetLista}
                </div>
                <button onClick={clearNappi}>C</button>
                
            </div>
        </>
    );
};

export default Laskin;