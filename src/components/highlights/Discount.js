import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

const Discount = (props) => {
    const totalDiscount = 30;
    const [ startCounting, setStartCounting ] = useState(false);
    const [ discount, setDiscount ] = useState(0);

    const computeDate = () => {
        const date = new Date(props.date);
        const discount_date = new Date(date.getFullYear(), date.getMonth(), date.getDate()-30);
        return discount_date.toDateString();
    }

    let timeOut;
    useEffect(() => {
        if(startCounting) {
            timeOut = setTimeout(() => {upPercentage()}, 50);
            if(discount >= totalDiscount) setStartCounting(false);
        }
        return (() => clearTimeout(timeOut));
    })

    const upPercentage = () => {
        if(discount < totalDiscount) {
            setDiscount(discount+1);
        }
    }

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                
                <Fade onReveal = {
                    () => { setStartCounting(true); }
                }>
                <div className="discount_percentage">
                    <span>{discount}%</span>
                    <span>OFF</span>
                </div>
                </Fade>
                
                <Slide right>
                <div className="discount_description">
                    <p>Purchase tickets before {computeDate()}</p>
                    <p>Or bulk purchase with a group of 15+ people!</p>
                    
                    <MyButton 
                        text="Buy Now!"
                        backgroundColor="orange"
                        icon="confirmation_number"
                        link="/"
                    />
                </div>
                </Slide>

            </div>
        </div>
    );
}

export default Discount;

