import { ArticleListEntry } from "./ArticleListEntry.jsx";
import React from "react";

export var ArticleList = (props) => {
  return (
  <div className="article-list-container">
    {props.articles.map((article, index) => 
    <ArticleListEntry 
      title={article.title}
      description={article.description}
      link={article.link}
      key={index} />
    )}
  </div>
  )
}