import React from 'react';
import { TablaResults } from './components/TablaResults.jsx'
import data from '../../data/datos.json'
import "./style.css"


export const TablaContainer = () => {
    
    return (
        <div className="results-container">
            {data.map((value) => {
                return (
                    <TablaResults key={value.name} {...value}/>
                );
            })}
        </div>
    );
}
