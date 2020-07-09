import React, { Component } from 'react';
import './pricing.css';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    setting = {
        prices: [15, 30, 40],
        positions: ['Child (3-12)', 'Adult (12+)', 'Parking'],
        desc: [
            'Children under 5 must be accompanied by an adult.',
            'Group Ticket Discounts available.',
            'On-site VIP Parking included. Limited sales, take action fast!'
        ],
        links: '/',
        delay: [500, 0, 500]
    }

    showBoxes = () => (
        this.setting.prices.map((box, i) => (
            <Zoom delay={this.setting.delay[i]} key={i}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.setting.prices[i]}</span>
                        <span>{this.setting.positions[i]}</span>
                    </div>

                    <div className="pricing_description">
                        {this.setting.desc[i]}
                    </div>

                    <div className="pricing_buttons">
                        <MyButton
                            text="Buy Ticket"
                            backgroundColor="orange"
                            icon="confirmation_number"
                            link={this.setting.links}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bg_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;