import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css'; 
import Login from './BongMin/pages/Login';
import Page1 from './BongMin/pages/Page1';
import Page58 from './sangjee/Page58/Page58';
import Page59 from './sangjee/Page59/Page59';
import App60 from './deokyup/60page.1/App';
import FriendConversation from './deokyup/61page/friendConversation';
import Page62 from './youngjae/Page62/Page';
import Page63 from './youngjae/Page63/Page';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    '/',
    '/page1',
    '/page58',
    '/page59',
    '/app60',
    '/friendConversation',
    '/page62',
    '/page63',
  ];

  const handleNext = () => {
    const currentIndex = pages.indexOf(location.pathname);
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = pages.indexOf(location.pathname);
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1]);
    }
  };

  const showNavigation = location.pathname !== "/";  
  const showPreviousButton = location.pathname !== "/page1" && location.pathname !== "/"; 
  const showNextButton = location.pathname !== "/page63";  

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page58" element={<Page58 />} />
        <Route path="/page59" element={<Page59 />} />
        <Route path="/app60" element={<App60 />} />
        <Route path="/friendConversation" element={<FriendConversation />} />
        <Route path="/page62" element={<Page62 />} />
        <Route path="/page63" element={<Page63 />} />
      </Routes>

      {showNavigation && (
        <div className="navigation-buttons">
          {showPreviousButton && (
            <button className="previous-button" onClick={handlePrevious}>이전 페이지</button>
          )}
          {showNextButton && (
            <button className="next-button" onClick={handleNext}>다음 페이지</button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
