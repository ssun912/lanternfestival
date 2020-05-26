import React from 'react';

import Icon from '@material-ui/core/Icon';
import Zoom from 'react-reveal/Zoom';
import './festival.css';

const FestivalInfo = (props) => {
    return (
        <div className="bg_black">
            <div className="center_wrapper">
                <div className="festinfo_wrapper">
                    
                    <Zoom duration={500}>
                    <div className="festinfo_item">
                        <div className="festinfo_outer">
                            <div className="festinfo_inner">
                                <Icon className="festinfo_icon color_red">event</Icon>                                
                                <div className="festinfo_title">Festival Date & Time</div>
                                <div className="festinfo_desc">{props.date} <br></br>  {props.time}</div>
                            </div>
                        </div>
                    </div>
                    </Zoom>

                    <Zoom delay={500} duration={500}>
                    <div className="festinfo_item">
                        <div className="festinfo_outer">
                            <div className="festinfo_inner">
                                <Icon className="festinfo_icon color_yellow">location_on</Icon>  
                                <div className="festinfo_title">Festival Location</div>
                                <div className="festinfo_desc">{props.location}</div>
                            </div>
                        </div>
                    </div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default FestivalInfo;