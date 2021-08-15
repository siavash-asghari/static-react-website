import React from 'react'
import Button from '@material-ui/core/Button';

import TicketIcon from '../../assets/images/icons/ticket.png'


function MyButton(props) {
    return (
        <Button variant="contained" href={props.link} style={{
            backgroundColor: props.bck,
            color: props.color,
            fontSize: '1.2rem'
        }}
        > 
        <img src={TicketIcon} className="iconImage" alt="icon_button"/>
            {props.text}
        </Button>
    )
}

export default MyButton;
