import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";
import "../index.css";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [theme, setTheme] = useState("light"); // State to track the current theme

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light"); // Toggle between light and dark theme
    };

    const resultNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
    };

    useEffect(() => {
        resultNews();
    }, []);

    const fetchData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${nextPage}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
        const data = await fetch(url);
        const parsedData = await data.json();
        setArticles([...articles, ...parsedData.articles]);
    };

    return (
        // <div className={`app ${theme === "light" ? "light" : "dark"}`}>
        //     <button onClick={toggleTheme}>Toggle Theme</button>
            <div className="container"> {/* Apply container styling */}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchData}
                    hasMore={articles.length < totalResults}
                    loader={<h4 className="text-center">Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: "center" }}>
                            <b>Loading...!</b>
                        </p>
                    }
                >
                    <div className="row">
                        {articles.map((element, index) => (
                            <div key={index} className="col-md-4 mb-3">
                                <NewsItem
                                    sourceName={element.source.name}
                                    title={element.title}
                                    desc={element.description}
                                    imageURL={element.urlToImage || Image}
                                    newsUrl={element.url}
                                />
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        // </div>
    );
}

export default News;
