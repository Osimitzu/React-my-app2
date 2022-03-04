import React, { useState } from 'react';

const Foco = () => {

    const [ isBright, setIsBright ] = useState (false); 

    const power = () => {
        //console.log ("Funciona")
        setIsBright(!isBright)
    }

    return (
        <div>
            <div className='object'>
                <div className='item'>
                    <div className={ `foco ${isBright ? "focoOn" : "focoOff"}`}></div>
                    <button onClick={power}>{ isBright ? "off" : "on" }</button>
                </div>
                <div className='item'>
                    <div className={ `foco ${isBright ? "focoOn" : "focoOff"}`}></div>
                    <button onClick={power}>{ isBright ? "off" : "on" }</button>
                </div>
                <div className='item'>
                    <div className={ `foco ${isBright ? "focoOn" : "focoOff"}`}></div>
                    <button onClick={power}>{ isBright ? "off" : "on" }</button>
                </div>
                <div className='item'>
                    <div className={ `foco ${isBright ? "focoOn" : "focoOff"}`}></div>
                    <button onClick={power}>{ isBright ? "off" : "on" }</button>
                </div>
                <div className='item'>
                    <div className={ `foco ${isBright ? "focoOn" : "focoOff"}`}></div>
                    <button onClick={power}>{ isBright ? "off" : "on" }</button>
                </div>
                <div className='item'>
                    <div className={ `foco ${isBright ? "focoOn" : "focoOff"}`}></div>
                    <button onClick={power}>{ isBright ? "off" : "on" }</button>
                </div>
            </div>
        </div>
    );
};

export default Foco;