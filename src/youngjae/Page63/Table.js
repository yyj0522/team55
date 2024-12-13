import React from 'react';
import './Style.css';

function Table() {
    const tableStyle = {
        width: '100%',
        borderCollapse: 'collapse',
        borderRadius: '12px', 
        overflow: 'hidden',    
        border: '1px solid #000', 
        marginTop: '10px', 
    };

    return (
        <div className="table-container">
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th colSpan="4" className="th1">나의 하루</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="white">방문한 장소</th>
                        <td><textarea className ="textarea1"></textarea></td>
                        <th className="white">오늘 만난 사람</th>
                        <td><textarea></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">구입한 물건</th>
                        <td><textarea className="text1"></textarea></td>
                        <th className="white">지출한 금액</th>
                        <td><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">오늘의 뉴스</th>
                        <td colSpan="3"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="th1">시각</th>
                        <th colSpan="3" className="white">중요한 일</th>
                    </tr>
                    <tr>
                        <th className="white">오전 5시~8시</th>
                        <th className="white">일어나서 한 일</th>
                        <td colSpan="3"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">오전 8시~12시</th>
                        <th className="white">아침식사 후에 한 일</th>
                        <td colSpan="2"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">오후 12시~5시</th>
                        <th className="white">오후에 한 일</th>
                        <td colSpan="2"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">오후 5시~10시</th>
                        <th className="white">저녁식사 후에 한 일</th>
                        <td colSpan="2"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">내일 계획</th>
                        <td colSpan="3"><textarea className="text1"></textarea></td>
                    </tr>
                    <tr>
                        <th className="white">뇌건강을 위한 생활습관</th>
                        <th colSpan="3" className="white">사회활동을 열심히 합시다. <br />단체 활동을 하는 사람이 치매에 걸릴 확률이 1/4로 낮습니다.</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
