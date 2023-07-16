        import React, { useEffect, useState } from 'react';
        import axios from 'axios';
        import './MainPage.css'; // CSS 파일을 import합니다.
        
        const MainPage = ({ username, onLogout }) => {
          const [newsList, setNewsList] = useState([]);
          const [selectedNews, setSelectedNews] = useState(null);
        
          useEffect(() => {
            const fetchNews = async () => {
              try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=d1bdf41741da4f9b92fc2316cbb90bd3'); // 뉴스 API 엔드포인트를 적절히 변경해주세요.
                setNewsList(response.data.articles);
              } catch (error) {
                console.error('Error fetching news:', error);
              }
            };
        
            fetchNews();
          }, []);
        
          const handleNewsClick = (url) => {
            setSelectedNews(url);
          };
        
          const handleClosePopup = () => {
            setSelectedNews(null);
          };
        
          return (
            <div>
              <h2>Welcome, {username}!</h2>
              <p>This is the main page.</p>
              <button onClick={onLogout}>Logout</button>
              <h3>Latest News</h3>
              <ul className="news-list">
                {newsList.map((news) => (
                  <li key={news.id} onClick={() => handleNewsClick(news.url)}>
                    {news.title}
                  </li>
                ))}
              </ul>
        
              {selectedNews && (
                <div className="popup-container">
                  <div className="popup">
                    <button className="close-button" onClick={handleClosePopup}>
                      Close
                    </button>
                    <iframe width='1000' height='1000' src={selectedNews} title="News" />
                  </div>
                </div>
              )}
            </div>
          );
        };
        
        export default MainPage;
        