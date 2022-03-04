//import React, { useState } from 'react';

const Foco = ({propIsBright, propToggleLight}) => {

    return (
        <div>
            <div className={ `foco ${propIsBright ? "focoOn" : "focoOff"}`}></div>
            <button onClick={propToggleLight}>{ propIsBright ? "off" : "on" }</button>
        </div>
    );
};

export default Foco;