import React, { useState } from "react";

const LinkkiNelja = () => {
    // checkboxin tila:
    const [tila, setTila] = useState(false)

    return (
        <>
            <div className="komponenttiHeaderDivi">
                <h1>Event handler stuffia</h1>
            </div>

            {/* checkbox: */}
            <input type="checkbox"
                onChange={(event) => {
                setTila(event.target.checked);
                console.log("cbox tila:", event.target.checked);
            }}/>

            <div>
                <button onClick={()=>{
                    console.log("button click")
                }}>nappi</button>

                    <br />

                <input type="text"
                    onChange={(event) => {
                        console.log("txt:", event.target.value)
                    }}/>

                    <br />

                <div onClick={()=>{
                    console.log("div click")
                }}> -- divi, click it -- </div>

            </div>
        </>
    );
};

export default LinkkiNelja;