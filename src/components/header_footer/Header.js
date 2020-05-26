import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import './header_footer.css';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerShow: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll');
    }

    handleScroll = () => {
        if(window.scrollY) 
            this.setState({ headerShow: true })
        else 
            this.setState({ headerShow: false })
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value 
        })
    }

    render() {
        return (
            <AppBar 
                    style={{
                        backgroundColor: this.state.headerShow? '#2f2f2f': 'transparent',
                        boxShadow: 'white',
                        padding: '0.5rem'
                    }}>
                <Toolbar>
                    <IconButton
                        aria-label="Menu"
                        color="inherit"
                        onClick={()=> this.toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <div className="header_logo">
                        <div className="font_righteous header_logo_main">The Lantern Festival</div>
                        <div className="header_logo_title">NYC Winter Family Events</div>
                    </div>

                    <SideDrawer
                        open={this.state.drawerOpen} 
                        onClose={(value)=> this.toggleDrawer(value)}
                    />
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;