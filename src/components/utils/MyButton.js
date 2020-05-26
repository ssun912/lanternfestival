import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const MyButton = (props) => {
    return (
        <Button href={props.link} 
                variant="contained"
                startIcon={<Icon>{props.icon}</Icon>}
                style={{
                    background:props.backgroundColor, 
                    color: 'white'
                }}
        >            
            {props.text}
        </Button>
    );
};

export default MyButton;