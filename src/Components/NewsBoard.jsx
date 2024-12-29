import React, { useState, useEffect } from 'react';

export const NewsBoard = ({category}) => {
    const [getNews, setNews] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
            .then((response) => response.json())
            .then((data) => setNews(data.articles))  // Corrected here
            .catch((error) => console.error('Error fetching news:', error));
    }, [category]);

    return (
        <>
            <div className="text-center py-4 fw-bold fs-2 text-capitalize">
                {category} Latest <span className="btn btn-danger fw-bold">News</span>
            </div>
            <div className="container">
                <div className="row">
                    {getNews.map((news, index) => {
                        return (
                            <div className="col-md-4 gap-3" key={index}>
                                <div className="card shadow  mb-5 bg-body rounded text-justify">
                                    {/* Check if urlToImage exists before displaying */}
                                    <img
                                        src={news.urlToImage}
                                        className="card-img-top"
                                        alt={news.title}
                                        
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{news.title}</h5>
                                        <p className="card-text">{news.description}</p>
                                        <a href={news.url} className="btn btn-primary">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
