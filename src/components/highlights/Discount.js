import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
    
    state = {
        discountStart: 0,
        discountEnd: 30,
    }
    
    computeDate() {
        const date = new Date(this.props.date);
        const discount_date = new Date(date.getFullYear(), date.getMonth(), date.getDate()-30);
        return discount_date.toDateString();
    }

    upPercentage = () => {
        if(this.state.discountStart < this.state.discountEnd) {
            this.setState({ 
                discountStart: this.state.discountStart +1,
            })
        }
    }

    componentDidUpdate() {
        setTimeout(()=> {
            this.upPercentage();
        }, 30);
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    
                    <Fade
                        onReveal = {()=> this.upPercentage()}
                    >
                    <div className="discount_percentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                    </Fade>
                    
                    <Slide right>
                    <div className="discount_description">
                        <p>Purchase tickets before {this.computeDate()}</p>
                        <p>Or bulk purchase with a group of 15+ people!</p>
                        
                        <MyButton 
                            text="Buy Now!"
                            backgroundColor="orange"
                            icon="confirmation_number"
                            link="https://www.showclix.com/event/nyc-winter-lantern-festival-2019"
                        />
                    </div>
                    </Slide>

                </div>
            </div>
        );
    }
}

export default Discount;