import React from "react";

// importataan kysymykset erillisestä tiedostosta
import kysymykset from "./Kysymykset";

const Koti = () => {
    return (
        <>
            <div className="komponenttiHeaderDivi"><p>Kotisivu</p></div>
            <KysymyksetUI kys={kysymykset} />

            {/* <Kysymykset2UI kys={kysymykset2} /> */}
        </>
    );
};

// komponentti mikä mappaa erillisen tiedoston kysymykset
// ja tulostaa ne (ul -> li)
const KysymyksetUI = (props) => {
    let importedKysymykset = props.kys.map( kysymykset =>
        <li key={kysymykset.id}>{kysymykset.kysymys}</li> );
    return (<ul>{importedKysymykset}</ul>)
};

// tässä sama, mutta kysymykset suoraan tässä tiedostossa
// --- --- ---
// const kysymykset2 = [
//     { kysymys2: "kysymys", id: 1 },
//     { kysymys2: "kysymys kaks", id: 2 },
//     { kysymys2: "kysymys kaks", id: 2 },
//     { kysymys2: "kysymys kaks", id: 2 },
//     { kysymys2: "kysymys kaks", id: 2 },
//     { kysymys2: "kysymys kaks", id: 2 },
//     { kysymys2: "kysymys kaks", id: 2 },
// ];

// const Kysymykset2UI = (props) => {
//     let kyssarit = props.kys.map( kysymykset2 =>
//         <li key={kysymykset2.id}>{kysymykset2.kysymys2}</li> );
//     return (<ul>{kyssarit}</ul>)
// };

export default Koti;