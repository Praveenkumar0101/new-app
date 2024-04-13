import React from "react";
import "./NewsItem.css"; // Import CSS file for NewsItem component

function NewsItem({ sourceName, title, desc, imageURL, newsUrl }) {
    const shareNews = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: title,
                    text: desc,
                    url: newsUrl,
                });
            } else {
                throw new Error('Web Share API not supported');
            }
        } catch (error) {
            console.error('Error sharing news:', error);
            // Fallback to some other method if sharing fails
        }
    };

    return (
        <div className="card-news-item"> {/* Add news-item class for styling */}
            <img src={imageURL} className="card-img-top" alt="news" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="card-text">{sourceName}</p>
                    <div>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                        {navigator.share && <button className="btn btn-sm btn-primary ml-2" onClick={shareNews}>Share</button>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;
