import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-reveal';
import MyButton from '../utilis/MyButton';



function Discount() {
    const [isInitial, setIsInitial] = useState(true);
    const [discountStart, setDiscountStart] = useState(0);
    const discountEnd = 30;

    const percentage = () => {
        setIsInitial(false);
        if (discountStart < discountEnd) {
            setDiscountStart((prevState) => prevState + 1)
        }
    };


    useEffect(() => {
        if (!isInitial) {
            setTimeout(() => {
                percentage()
            }, 30);
        }
    }, [discountStart])

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade onReveal={percentage}>
                    <div className="discount_percentage">
                        <span>{discountStart}</span>
                        <span>تخفیف</span>
                    </div>
                </Fade>
                <Slide left>
                    <div className="discount_description">
                        <h1>خرید قبل از 1 مهر</h1>
                        <p>
                            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.
                        </p>
                        <MyButton
                            text="خرید"
                            bck="#47b7ff"
                            color="#fff"
                            link="#"
                        />
                    </div>
                </Slide>
            </div>

        </div>
    )
}

export default Discount;
