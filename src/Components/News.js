
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import "../App.css";
import "../index.css";

function News(props) {
    const [articles, setArticles] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);

    const resultNews = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`);
            setArticles(response.data.articles);
            setTotalResults(response.data.totalResults);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    useEffect(() => {
        resultNews();
    }, []);

    const fetchData = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${nextPage}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`);
            setArticles((prevArticles) => [...prevArticles, ...response.data.articles]);
        } catch (error) {
            console.error("Error fetching more news:", error);
        }
    };

    return (
        <div className="container">
            {totalResults > 0 && (
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
            )}
        </div>
    );
}

export default News;
