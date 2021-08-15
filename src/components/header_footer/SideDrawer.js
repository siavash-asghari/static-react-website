import { Drawer, List, ListItem } from '@material-ui/core';
import React from 'react';
import { scroller } from 'react-scroll';
import '../../assets/style.css'
function SideDrawer(props) {
    const { open, onClose } = props

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            affset: -150
        })
        onClose(false)
    }
    return (
        <React.Fragment>
            <Drawer anchor="left" open={open} onClose={() => onClose(false)}>
                <List component="nav">
                    <ListItem button onClick={() => scrollToElement("Featured")}>
                        زمان باقی مانده تا کنسرت
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement("ConcertInfo")}>
                        توضیحات کنسرت
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement("HighLights")}>
                        ویژه ما
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement("Pricing")}>
                        قیمت
                    </ListItem>
                    <ListItem button onClick={() => scrollToElement("Location")}>
                        آدرس
                    </ListItem>
                </List>
            </Drawer>
            <div className="menu">
                <ul>
                    <li><ListItem button onClick={() => scrollToElement("Featured")} >زمان باقی مانده تا کنسرت</ListItem></li>
                    <li><ListItem button onClick={() => scrollToElement("ConcertInfo")}>توضیحات کنسرت</ListItem></li>
                    <li><ListItem button onClick={() => scrollToElement("HighLights")}>ویژه ما</ListItem></li>
                    <li><ListItem button onClick={() => scrollToElement("Pricing")}>قیمت</ListItem></li>
                    <li><ListItem button onClick={() => scrollToElement("Location")}>آدرس</ListItem></li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer;
