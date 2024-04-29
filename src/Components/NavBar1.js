// NewsItem.js
import React from "react";
import "../App.css";
import "./NewsItem.css"; // Import NewsItem.css

function NewsItem(props) {
    const { desc, title, imageURL, newsUrl, sourceName, isFirst } = props;
    return (
        <div className={`card my-3 ${isFirst ? 'first-card' : ''}`}>
            
            <div style={{}}>
                <img src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/breaking-news-banner-design-template-43d6dcbf37ca0a7d1450cb20f76b96fb_screen.jpg?ts=1624954813"} className="card-img-top" alt="News" />
            </div>
            {/* <div className="card-body">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                </div> */}
                {/* <div className="text-end">
                    {/* <p className="fs-6 text-body-secondary">- {sourceName}</p> */}
                    {/* <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Read More...</a> */}
                {/* </div> */} 
            </div>
        // </div>
    );
}

export default NewsItem;
