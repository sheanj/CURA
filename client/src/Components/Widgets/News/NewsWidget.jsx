import React, { Component } from "react";
import ArticleComponent from "./ArticleComponent/ArticleComponent";
import "./NewsWidget.css";
import { getArticles } from "./NewsWidget.js";

export default class NewsWidget extends Component {
  state = {
    articles: "",
  };
  async componentDidMount() {
    let topNews = await getArticles();
    this.setState({
      articles: topNews,
    });
  }
    render() {
      const {handleSubmit} = this.props
    const { articles } = this.state;
    return (
      <div className='news'>
        <div className='newsHeader'>
          <h3>Todays Top News From the New York Times</h3>
        </div>
        <div className='articleMap'>
          {articles &&
            articles.map((article) => (
              <ArticleComponent
                url={article.url}
                title={article.title}
                    image={article.multimedia}
                    description={article.description}
                    handleSubmit={handleSubmit}
              />
            ))}
        </div>
      </div>
    );
  }
}
