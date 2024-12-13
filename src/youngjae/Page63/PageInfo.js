import React from 'react';
import Table from './Table';

function PageInfo() {
    const years = Array.from({ length: 2024 - 2001 + 1 }, (_, i) => 2001 + i);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

    return (
        <div className="page-info">
            <div className="date-info">
                <select>
                    {years.map((year) => (
                        <option key={year}>{year}</option>
                    ))}
                </select>
                <span>년</span>&nbsp;&nbsp;
                <select>
                    {months.map((month) => (
                        <option key={month}>{month}</option>
                    ))}
                </select>
                <span>월</span>&nbsp;&nbsp;
                <select>
                    {days.map((day) => (
                        <option key={day}>{day}</option>
                    ))}
                </select>
                <span>일</span>&nbsp;&nbsp;
                <select>
                    {weekdays.map((weekday, index) => (
                        <option key={index}>{weekday}</option>
                    ))}
                </select>
                <span>요일</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>날씨</span>&nbsp;
                <select>
                    <option>☀️</option>
                    <option>☁️</option>
                    <option>🌧️</option>
                    <option>❄️</option>
                </select>
            </div>
            <Table />
        </div>
    );
}

export default PageInfo;
