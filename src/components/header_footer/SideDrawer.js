import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {
    const scrollToElem = (element)=> {
        scroller.scrollTo(element, {
            duration: 500,
            delay: 100,
            smooth: true,
            offset: -70 // to offset the floating header
        });
        props.onClose(false); // after scrolling, close the side drawer
    }

    return (
        <Drawer
            anchor="left" 
            open={props.open}
            onClose={()=> props.onClose(false)}
        >
            <List component="nav" 
                    style={{
                        boxShadow: 'grey',
                        backgroundColor: 'transparent',
                        padding: '2rem'
                    }}>

                <ListItem className="list_item" button onClick={()=> scrollToElem(`featured`)}>
                    Event Main
                </ListItem>
                
                <ListItem className="list_item" button onClick={()=> scrollToElem(`festivalinfo`)}>
                    Festival Info
                </ListItem>
                
                <ListItem className="list_item" button onClick={()=> scrollToElem(`highlights`)}>
                    Highlights
                </ListItem>

                <ListItem className="list_item" button onClick={()=> scrollToElem(`pricing`)}>
                    Pricing
                </ListItem>

                <ListItem className="list_item" button onClick={()=> scrollToElem(`location`)}>
                    Location
                </ListItem>
                 
            </List>

        </Drawer>
    );
};

export default SideDrawer;