import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import MyButton from '../utilis/MyButton';

function Pricing() {

    const [state, setState] = useState({
        pricing: [100, 150, 250],
        position: ['بالکن', 'وسط', 'جایگاه'],
        desc: [
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
            , 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
            , 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است'
        ],
        linkto: [
            'https://localhost:3000/1',
            'https://localhost:3000/2',
            'https://localhost:3000/3'
        ],
        delay: [500, 0, 500]
    })

    const showBox = () => {
        return state.pricing.map((item, index) => (
            <Zoom
                delay={state.delay[index]}
                key={`${state.position} ${index}`}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>{item} هزار تومان</span>
                            <span>{state.position[index]}</span>
                        </div>
                        <div className="pricing_description">
                            {state.desc[index]}
                        </div>
                        <div className="pricing_buttons">
                            <MyButton
                                text="خرید"
                                bck="#47b7ff"
                                color="#fff"
                                link={state.linkto[index]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    }


    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>قیمت</h2>
                <div className="pricing_wrapper">
                    {showBox()}
                </div>
            </div>
        </div>
    )
}

export default Pricing;
