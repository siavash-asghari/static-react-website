import React from 'react'

function Location() {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5445.987327107016!2d51.37765338342579!3d35.745804152959806!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0710d5918403%3A0x74f5290b67841378!2z2KjYsdisINmF24zZhNin2K_igI4!5e0!3m2!1sfa!2s!4v1628666579177!5m2!1sfa!2s"
                width="99.8%"
                height="500px"
                allowfullscreen></iframe>
            <div className="location_tag">
                <div>موقعیت مکانی</div>
            </div>
        </div>
    )
}

export default Location;
