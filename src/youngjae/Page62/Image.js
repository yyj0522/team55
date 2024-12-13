import React from 'react';
import Buttons from './Buttons';

function Image() {
    return (
        <div className="image-container">
            <div className="image-set">
                <img src="/images/image1.png" alt="시설 1" className="image" />
            </div>
            <div className="facility-set">
                <img src="/images/image2.png" alt="시설 2" className="image" />
            </div>
            <div className="facility-set">
                <img src="/images/image3.png" alt="시설 3" className="image" />
            </div>
            <div className="facility-set">
                <img src="/images/image4.png" alt="시설 4" className="image" />
            </div>
            <div className="facility-set">
                <img src="/images/image5.png" alt="시설 5" className="image" />
            </div>
            <Buttons />
        </div>
    );
}

export default Image;
