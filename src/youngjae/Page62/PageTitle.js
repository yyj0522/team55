import React from 'react';

function PageTitle({ title }) {
    return (
        <div className="page-title">
            <img className="icon" src="images/icon.png" alt="icon" />
            <p>{title}</p>
            <span className="page-number">62</span>
        </div>
    );
}

export default PageTitle;
