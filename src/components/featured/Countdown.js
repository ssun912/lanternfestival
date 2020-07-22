import React, { useState, useEffect } from 'react';
import Slide from 'react-reveal/Slide';

const Countdown = ({ deadline }) => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    const time = Date.parse(deadline) - Date.parse(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDays(Math.floor(time / 1000 / 60 / 60 / 24));
            setHours(Math.floor(time / 1000 / 60 / 60 % 24));
            setMinutes(Math.floor(time / 1000 / 60 % 60));
            setSeconds(Math.floor(time / 1000 % 60));
        }, 1000);

        return () => clearInterval(interval);
    })

    return (
        <Slide left delay={1000}>

            <div className="countdown_wrapper">
                <div className="countdown_top">
                    ONLY:
            </div>

                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {days}
                        </div>
                        <div className="countdown_tag">
                            Days
                    </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {hours}
                        </div>
                        <div className="countdown_tag">
                            Hrs
                    </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {minutes}
                        </div>
                        <div className="countdown_tag">
                            Min
                    </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {seconds}
                        </div>
                        <div className="countdown_tag">
                            Sec
                    </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}


export default Countdown;