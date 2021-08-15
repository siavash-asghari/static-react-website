import React, { useEffect, useState } from 'react'
import Slide from 'react-reveal/Slide';


function Countdown() {
    const deadline = "Dec, 10, 2021";
    const [days, setDays] = useState("0")
    const [hours, setHours] = useState("0")
    const [minutes, setMinutse] = useState("0")
    const [seconds, setSeconde] = useState("0")

    const countDawnCalculator = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0) {
            console.log("date passed")
        } else {
            const seconds = Math.floor((time / 1000) % 60)
            const minutes = Math.floor((time / 1000 / 60) % 60)
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
            const days = Math.floor(time / (1000 * 60 * 60 * 24))

            setSeconde(seconds)
            setMinutse(minutes)
            setHours(hours)
            setDays(days)
        }
    }

    useEffect(() => {
        setInterval(() => {
            countDawnCalculator(deadline)
        }, 1000);
    }, []);

    return (
        <Slide right delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">شروع کنسرت در</div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">{days}</div>
                        <div className="countdown_tag">روز</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">{hours}</div>
                        <div className="countdown_tag">ساعت</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">{minutes}</div>
                        <div className="countdown_tag">دقیقه</div>
                    </div>
                    <div className="countdown_item">
                        <div className="countdown_time">{seconds}</div>
                        <div className="countdown_tag">ثانیه</div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}

export default Countdown;