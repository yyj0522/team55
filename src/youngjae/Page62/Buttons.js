import React, { useState } from 'react';

function Buttons() {
    const [buttonColors, setButtonColors] = useState(Array(10).fill(null));

    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

    const handleButtonClick = (index) => {
        setButtonColors((prevColors) => {
            const newColors = [...prevColors];
            const currentColor = newColors[index];
            const currentIndex = colors.indexOf(currentColor);
            const nextIndex = (currentIndex + 1) % colors.length;
            newColors[index] = colors[nextIndex];
            return newColors;
        });
    };

    const handleFinishButtonClick = () => {
        if (buttonColors.slice(5, 10).includes(null)) {
            alert('색깔을 지정해주세요!');
        } else if (
            buttonColors[5] !== 'orange' ||
            buttonColors[6] !== 'blue' ||
            buttonColors[7] !== 'yellow' ||
            buttonColors[8] !== 'red' ||
            buttonColors[9] !== 'green'
        ) {
            alert('다시 생각해보세요!');
        } else {
            alert('참 잘했어요!');
        }
    };

    return (
        <div className="element-wrapper">
            <div className="Button-left">
                <div className="buttons-left-set">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            className="color-button"
                            style={{ backgroundColor: color }}
                        >
                        </button>
                    ))}
                </div>
            </div>
            <div className="Button-right">
                <div className="buttons-right">
                    <button
                        key={5}
                        className="floor-button"
                        style={{ backgroundColor: buttonColors[5] || 'transparent' }}
                        onClick={() => handleButtonClick(5)}
                    >
                        5층
                    </button>
                    <button
                        key={6}
                        className="floor-button"
                        style={{ backgroundColor: buttonColors[6] || 'transparent' }}
                        onClick={() => handleButtonClick(6)}
                    >
                        4층
                    </button>
                    <button
                        key={7}
                        className="floor-button"
                        style={{ backgroundColor: buttonColors[7] || 'transparent' }}
                        onClick={() => handleButtonClick(7)}
                    >
                        3층
                    </button>
                    <button
                        key={8}
                        className="floor-button"
                        style={{ backgroundColor: buttonColors[8] || 'transparent' }}
                        onClick={() => handleButtonClick(8)}
                    >
                        2층
                    </button>
                    <button
                        key={9}
                        className="floor-button"
                        style={{ backgroundColor: buttonColors[9] || 'transparent' }}
                        onClick={() => handleButtonClick(9)}
                    >
                        1층
                    </button>
                </div>
            </div>
            <div className="finish-button-container">
                <button className="finish-button" onClick={handleFinishButtonClick}>
                    정답 확인하기
                </button>
            </div>
        </div>
    );
}

export default Buttons;
