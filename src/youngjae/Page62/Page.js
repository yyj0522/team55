import React from 'react';
import './Style.css';
import PageTitle from './PageTitle';
import Problem from './Problem';

function Page() {
    return (
        <div className="page-container">
            <PageTitle title="층별 시설 기억하기" />
            <Problem />
        </div>
    );
}

export default Page;
