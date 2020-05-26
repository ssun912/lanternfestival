import React from 'react';
import './featured.css'
import Carrousel from './Carrousel';
import Countdown from './Countdown';

const Featured = (props) => {
    const time = Date.parse(props.deadline) - Date.parse(new Date());
    if(time >= 0) {
        return (
            <div>
                
                <Carrousel/>
    
                <div className="light_up">
                    <div className="wrapper">
                        STEP INTO THE WORLD OF LIGHT
                    </div>
                </div>
    
                <Countdown deadline={props.deadline} />
                 
            </div>
        );
    }
    else {
        return (
            <div>
                
                <Carrousel/>
    
                <div className="light_up">
                    <div className="wrapper">
                        STEP INTO A WHIMSICAL WORLD OF LIGHT
                    </div>
                </div>

            </div>
        );
    }
    
};

export default Featured;
