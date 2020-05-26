import React from 'react';
import './highlights.css';
import Description from './Description';
import Discount from './Discount';

const Highlights = (props) => {
    return (
        <div className="highlight_wrapper">
            <Description/>
            <Discount date={props.date}/>
        </div>
    );
};

export default Highlights;