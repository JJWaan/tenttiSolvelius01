import React from "react";

const Nappain = (props) => {
    return (
        <div className="nappain-container">
            <button onClick={() =>
                props.nappainPainettu(props.nappainNro)}
                >{props.nappainNro}
            </button>
        </div>
    );
};

export default Nappain;